// Hàm này được inject vào trang — phải tự chứa, không tham chiếu biến ngoài.
// Triết lý: chỉ lấy text thô của từng khối bài, KHÔNG parse chi tiết ở đây
// (Facebook đổi DOM thường xuyên — phần phân tích để Claude làm).
async function extractPosts() {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  // Bung các đoạn bị rút gọn "Xem thêm" / "See more" để lấy đủ caption
  const expandButtons = [...document.querySelectorAll('div[role="button"]')].filter((b) =>
    /^(xem thêm|see more)$/i.test(b.textContent.trim())
  );
  expandButtons.slice(0, 30).forEach((b) => b.click());
  if (expandButtons.length) await sleep(800);

  const articles = [...document.querySelectorAll('div[role="article"]')];
  const posts = articles.filter((a) => {
    const label = a.getAttribute('aria-label') || '';
    if (/^(bình luận|comment|trả lời|reply)/i.test(label)) return false; // bỏ comment
    if (a.parentElement && a.parentElement.closest('div[role="article"]')) return false; // bỏ khối lồng nhau
    return true;
  });

  const texts = posts
    .map((p) => p.innerText.replace(/\n{3,}/g, '\n\n').trim())
    .filter((t) => t.length > 30);

  return {
    url: location.href,
    pageTitle: document.title,
    capturedAt: new Date().toLocaleString('vi-VN'),
    texts,
  };
}

document.getElementById('export').addEventListener('click', async () => {
  const btn = document.getElementById('export');
  const status = document.getElementById('status');
  btn.disabled = true;
  status.textContent = 'Đang trích...';

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: extractPosts,
    });

    if (!result || result.texts.length === 0) {
      status.textContent = 'Không tìm thấy bài nào.\nCuộn trang để load bài rồi thử lại.';
      btn.disabled = false;
      return;
    }

    const body = result.texts
      .map((t, i) => `=== BÀI #${i + 1} ===\n${t}`)
      .join('\n\n');
    const md = [
      `# Export bài đăng — ${result.pageTitle}`,
      `> URL: ${result.url}`,
      `> Thời điểm trích: ${result.capturedAt} | Số bài: ${result.texts.length}`,
      `> Text thô từ DOM — Claude sẽ tự tách hook/offer/tương tác bằng skill /competitor-posts`,
      '',
      body,
      '',
    ].join('\n');

    const now = new Date();
    const stamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
    const url = URL.createObjectURL(new Blob([md], { type: 'text/markdown' }));

    await chrome.downloads.download({
      url,
      filename: `fb_posts_${stamp}.md`,
      saveAs: true, // để user chọn lưu thẳng vào competitor_screenshots/
    });

    status.textContent = `✅ Đã trích ${result.texts.length} bài.\nLưu vào folder competitor_screenshots rồi chạy /competitor-posts.`;
  } catch (e) {
    status.textContent = `Lỗi: ${e.message}\nTrang này có thể không hỗ trợ (chỉ chạy trên fanpage Facebook).`;
  }
  btn.disabled = false;
});
