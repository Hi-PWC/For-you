function showImage(index) {
    // 获取当前图片
    const image = document.querySelector(`img[data-index="${index}"]`);

    // 显示图片
    image.style.display = "block";
}

// 定义图片文件夹
const folder = "image";

// 遍历文件夹
const images = fs.readdirSync(folder);

// 设置计时器
const timer = setInterval(function() {
    // 获取当前图片索引
    const index = images.length - 1;

    // 显示当前图片
    showImage(index);

    // 将当前图片索引存储到 images 数组中
    images.unshift(images.pop());
}, 1000);

// 关闭计时器
function closeTimer() {
    clearInterval(timer);
}
