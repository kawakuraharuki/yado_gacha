// クラッカー演出のライブラリ
// canvas-confettiのCDN版を使用

function showConfetti() {
    // confettiがグローバルに存在する場合のみ実行
    if (typeof confetti !== 'undefined') {
        // 左側からのクラッカー
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0.1, y: 0.6 },
            colors: ['#22D3EE', '#F43F5E', '#D4AF37', '#10B981']
        });
        
        // 右側からのクラッカー
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0.9, y: 0.6 },
            colors: ['#22D3EE', '#F43F5E', '#D4AF37', '#10B981']
        });
        
        // 中央からのクラッカー（少し遅れて）
        setTimeout(() => {
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.4 },
                colors: ['#22D3EE', '#F43F5E', '#D4AF37', '#10B981']
            });
        }, 250);
    }
}