// メニューの開閉管理
function initMenu() {
    const menuButton = document.getElementById('menuButton');
    const menuModal = document.getElementById('menuModal');
    const menuClose = document.getElementById('menuClose');

    if (!menuButton || !menuModal || !menuClose) return;

    // メニューを開く
    menuButton.addEventListener('click', () => {
        menuModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // スクロール防止
    });

    // メニューを閉じる
    menuClose.addEventListener('click', closeMenu);

    // モーダル背景クリックで閉じる
    menuModal.addEventListener('click', (e) => {
        if (e.target === menuModal) {
            closeMenu();
        }
    });

    // ESCキーで閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuModal.classList.contains('active')) {
            closeMenu();
        }
    });

    function closeMenu() {
        menuModal.classList.remove('active');
        document.body.style.overflow = ''; // スクロール復元
    }
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', initMenu);