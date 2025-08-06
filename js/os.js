/**
 * 显示命令模态窗口
 * @param {string} cmd - 要显示的命令
 */
function showCommandModal(cmd) {
    if (document.getElementById('command-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'command-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.5)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '9999';
    
    const box = document.createElement('div');
    box.style.background = '#fff';
    box.style.padding = '2em';
    box.style.borderRadius = '8px';
    box.style.boxShadow = '0 2px 16px rgba(0,0,0,0.2)';
    box.style.maxWidth = '90vw';
    box.style.wordBreak = 'break-all';
    
    // 创建标题元素
    const title = document.createElement('div');
    title.style.marginBottom = '1em';
    title.style.fontWeight = 'bold';
    title.textContent = '命令:';
    box.appendChild(title);
    
    // 创建代码显示元素
    const code = document.createElement('code');
    code.style.background = '#f5f5f5';
    code.style.padding = '0.5em 1em';
    code.style.display = 'block';
    code.textContent = cmd || '未提供命令';
    box.appendChild(code);
    
    // 创建关闭按钮
    const button = document.createElement('button');
    button.style.marginTop = '1em';
    button.style.padding = '0.5em 1.5em';
    button.textContent = '关闭';
    button.onclick = function() {
        document.body.removeChild(document.getElementById('command-modal'));
    };
    box.appendChild(button);
    
    modal.appendChild(box);
    document.body.appendChild(modal);
}

/**
 * 复制代码块内容
 * @param {HTMLElement} button - 复制按钮元素
 */
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const codeContent = codeBlock.querySelector('.code-content pre');
    
    // 提取纯文本内容
    const lines = codeContent.querySelectorAll('.line-content');
    let text = '';
    lines.forEach(line => {
        text += line.textContent + '\n';
    });
    
    // 复制到剪贴板
    navigator.clipboard.writeText(text.trim()).then(() => {
        const originalText = button.textContent;
        button.textContent = '已复制!';
        button.style.background = '#38a169';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#5ba3f5';
        }, 2000);
    });
}