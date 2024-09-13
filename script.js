const colorPadding = document.getElementById('base');
const spacing = document.getElementById('spacing');
const _blur = document.getElementById('blur');
const image = document.getElementById('img');

colorPadding.addEventListener('input', () => {
    image.style.backgroundColor = colorPadding.value;
})

spacing.addEventListener('input', () => {
    image.style.padding = `${spacing.value}px`;
})

_blur.addEventListener('input', () => {
    const val = _blur.value;
    image.style.filter = `blur(${val}px)`;
})