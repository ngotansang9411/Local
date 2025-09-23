// Chuyển tab
function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.style.display = 'none');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).style.display = 'block';
    event.target.classList.add('active');
}

// Lấy thông tin thiết bị (demo, không có API hệ thống)
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("deviceName").innerText = navigator.userAgent;
    document.getElementById("ramInfo").innerText = `${Math.round(navigator.deviceMemory || 4)} GB`;
    document.getElementById("romInfo").innerText = "Không xác định (chỉ lấy được qua native)";
});

// Chức năng giả lập logic
function optimizeDevice() {
    document.getElementById("statusMessage").innerText = "✅ Đã tối ưu RAM, dọn file rác, giảm rung!";
}

function adjustFPS() {
    document.getElementById("statusMessage").innerText = "✅ FPS được thiết lập tối đa!";
}

function adjustSensitivity() {
    document.getElementById("statusMessage").innerText = "✅ Độ nhạy đã được cấu hình!";
}

function toggleShizuku() {
    document.getElementById("statusMessage").innerText = "🔒 Vui lòng cấp quyền Shizuku nếu muốn root.";
}

function copyFacebook() {
    const fbLink = "https://facebook.com/yourprofile";
    navigator.clipboard.writeText(fbLink)
        .then(() => alert("👍 Đã sao chép Facebook vào clipboard"))
        .catch(() => alert("❌ Không thể sao chép!"));
}
