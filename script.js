const widthRange = document.getElementById('width-range');
const adjustableDiv = document.querySelector('.order-summary');

widthRange.addEventListener('input', () => {
    adjustableDiv.style.gridColumnEnd = `span ${widthRange.value}`;
});
