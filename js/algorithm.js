document.addEventListener("DOMContentLoaded", function () {
    // 算法目录数据结构 - 根据已有的Markdown内容生成
    const algorithmData = [
        {
            title: "基础算法",
            subsections: [
                { title: "快速排序", difficulties: [1, 0, 0, 0, 0] }, // [🌕, 🌖, 🌗, 🌘, 🌚]
                { title: "归并排序", difficulties: [1, 0, 1, 0, 0] },
                { title: "二分", difficulties: [0, 1, 0, 0, 0] },
                { title: "高精度", difficulties: [4, 0, 0, 0, 0] },
                { title: "前缀和和差分", difficulties: [0, 3, 0, 0, 0] },
                { title: "双指针算法", difficulties: [0, 3, 0, 0, 0] },
                { title: "位运算", difficulties: [1, 0, 0, 0, 0] },
                { title: "离散化", difficulties: [0, 0, 1, 0, 0] },
                { title: "区间合并", difficulties: [0, 1, 0, 0, 0] }
            ]
        },
        {
            title: "数据结构",
            subsections: [
                { title: "栈", difficulties: [1, 0, 1, 0, 0] },
                { title: "队列", difficulties: [1, 0, 0, 0, 0] },
                { title: "单调栈", difficulties: [0, 1, 0, 0, 0] },
                { title: "单调队列", difficulties: [0, 1, 0, 0, 0] },
                { title: "Trie", difficulties: [0, 1, 1, 0, 0] },
                { title: "并查集", difficulties: [0, 2, 0, 1, 0] },
                { title: "哈希表", difficulties: [1, 0, 1, 0, 0] },
                { title: "树状数组", difficulties: [0, 0, 3, 1, 0] }
            ]
        },
        {
            title: "搜索与图论",
            subsections: [
                { title: "DFS", difficulties: [0, 6, 0, 0, 0] },
                { title: "BFS", difficulties: [0, 4, 1, 0, 0] },
                { title: "树和图的遍历", difficulties: [0, 3, 0, 1, 0] },
                { title: "拓扑排序", difficulties: [0, 1, 0, 0, 0] },
                { title: "最短路径", difficulties: [0, 2, 0, 0, 0] },
                { title: "最小生成树", difficulties: [0, 1, 0, 0, 0] }
            ]
        },
        {
            title: "数学知识",
            subsections: [
                { title: "质数", difficulties: [1, 1, 0, 0, 0] },
                { title: "约数", difficulties: [0, 3, 0, 0, 0] },
                { title: "欧拉函数", difficulties: [0, 1, 0, 0, 0] },
                { title: "快速幂", difficulties: [0, 1, 0, 0, 0] },
                { title: "扩展欧几里得算法", difficulties: [0, 2, 0, 0, 0] },
                { title: "组合数", difficulties: [0, 1, 0, 0, 0] },
                { title: "博弈论", difficulties: [0, 2, 0, 0, 0] }
            ]
        },
        {
            title: "动态规划",
            subsections: [
                { title: "线性DP", difficulties: [0, 8, 5, 0, 0] },
                { title: "状态压缩 DP", difficulties: [0, 0, 1, 0, 0] },
                { title: "区间 DP", difficulties: [0, 1, 1, 0, 0] },
                { title: "树形 DP", difficulties: [0, 0, 1, 0, 0] },
                { title: "记忆化搜索", difficulties: [0, 0, 1, 0, 0] }
            ]
        },
        {
            title: "贪心",
            subsections: [
                { title: "惊人的注意力", difficulties: [0, 1, 0, 0, 0] },
                { title: "Huffman树", difficulties: [0, 1, 0, 0, 0] },
                { title: "不等式问题", difficulties: [1, 1, 0, 0, 0] },
                { title: "推公式", difficulties: [0, 1, 0, 0, 0] }
            ]
        },
        {
            title: "模拟",
            subsections: [
                { title: "小模拟", difficulties: [5, 0, 0, 0, 0] },
                { title: "中模拟", difficulties: [0, 0, 1, 0, 0] },
                { title: "大模拟", difficulties: [0, 0, 0, 0, 0] },
            ]
        },
        {
            title: "计算几何",
            subsections: [
                { title: "二维计算几何基础", difficulties: [0, 0, 0, 0, 0] },
                { title: "三维计算几何基础", difficulties: [0, 0, 0, 0, 0] },
            ]
        }
    ];

    // 难度图标
    const difficultyIcons = ['🌕', '🌖', '🌗', '🌘', '🌚'];
    const difficultyClasses = ['diff-5', 'diff-4', 'diff-3', 'diff-2', 'diff-1'];

    // 生成目录HTML
    const catalogElement = document.getElementById('algorithm-catalog');

    algorithmData.forEach(section => {
        const sectionElement = document.createElement('div');
        sectionElement.className = 'section collapsed';

        // 计算该分类下所有题目总数
        let totalProblems = 0;
        section.subsections.forEach(subsection => {
            totalProblems += subsection.difficulties.reduce((a, b) => a + b, 0);
        });

        // 创建区块标题
        const titleElement = document.createElement('div');
        titleElement.className = 'section-title';
        titleElement.innerHTML = `
            <span>${section.title}</span>
            <span><small>共${totalProblems}题</small> <span class="section-toggle">▼</span></span>
        `;

        // 创建区块内容容器
        const contentElement = document.createElement('div');
        contentElement.className = 'section-content';

        // 添加子区块
        section.subsections.forEach(subsection => {
            const subsectionElement = document.createElement('div');
            subsectionElement.className = 'subsection';

            // 计算每个难度的数量
            const difficultyStats = subsection.difficulties.map((count, index) => {
                // if (count === 0) return '';
                return `<span class="difficulty-stat"><span class="difficulty-icon ${difficultyClasses[index]}">${difficultyIcons[index]}</span>${count}</span>`;
            }).filter(stat => stat !== '').join(' ');

            // 创建子区块标题
            subsectionElement.innerHTML = `
                <div class="subsection-title">
                    <a href="#${encodeURIComponent(subsection.title)}">${subsection.title}</a>
                    <span class="difficulty-stats">${difficultyStats}</span>
                </div>
            `;

            contentElement.appendChild(subsectionElement);
        });

        // 组合区块
        sectionElement.appendChild(titleElement);
        sectionElement.appendChild(contentElement);
        catalogElement.appendChild(sectionElement);

        // 添加点击事件，用于折叠/展开
        titleElement.addEventListener('click', function () {
            sectionElement.classList.toggle('collapsed');
        });
    });
});