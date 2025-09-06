// 点击问题展开/收起答案
document.addEventListener('DOMContentLoaded', function() {
    const qaItems = document.querySelectorAll('.qa-item');
    
    qaItems.forEach(item => {
        const question = item.querySelector('.question');
        
        question.addEventListener('click', function() {
            // 切换当前项的展开状态
            item.classList.toggle('active');
            
            // 可选：点击其他问题时自动收起已展开的答案（手风琴效果）
            // qaItems.forEach(otherItem => {
            //     if (otherItem !== item) {
            //         otherItem.classList.remove('active');
            //     }
            // });
        });
    });
});