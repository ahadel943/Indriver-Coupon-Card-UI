let copyBtn = document.querySelector('.copy-btn');
let cpnCode = document.querySelector('.cpn-code');

copyBtn.addEventListener('click', (e) => {
    navigator.clipboard.writeText(cpnCode.textContent);
    copyBtn.textContent = 'Copied';
    setTimeout(() => {
        copyBtn.textContent = 'Copy Code';
    }, 3000)
})