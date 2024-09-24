export class heart {
    constructor(bodyElement) {
        this.body = bodyElement;
        this.content = [
            "❤且喜且乐，且以永日。❤",
            "❤一朝风有一朝月,三更雨伴三更梦❤",
            "❤春水初生，春林初盛。❤",
            "❤星河滚烫，你是人间理想。❤",
            "❤面向注解面向卿,终究无相思再无你.❤",
            "❤一朝风月❤",
            "❤一朝风月❤",
            "❤一朝风月❤",
            "❤一朝风月❤",
        ];
        this.textElements = [];
        this.isAnimating = false;
        this.clickTimeout = null; // 用于控制点击间隔
        this.init();
    }

    init() {
        this.body.addEventListener('click', (e) => {
            if (this.isAnimating) return; // 防止同时多个动画

            // 设置点击间隔为500ms
            clearTimeout(this.clickTimeout); // 清除之前的延时
            this.isAnimating = true;
            this.clickTimeout = setTimeout(() => {
                this.isAnimating = false; // 500ms后允许再次点击
            }, 500);

            const x = e.pageX;
            const y = e.pageY;
            const randContent = Math.floor(Math.random() * this.content.length);
            const textSpan = document.createElement('span');
            const color = this.getRandomColor();
            textSpan.textContent = this.content[randContent];
            textSpan.style.position = 'absolute';
            textSpan.style.color = color;
            textSpan.style.top = `${y - 20 + (Math.random() * 20 - 10)}px`;
            textSpan.style.left = `${x - 50 + (Math.random() * 20 - 10)}px`;
            textSpan.style.whiteSpace = 'nowrap';
            textSpan.style.animation = 'fade-out 2s forwards';

            this.body.appendChild(textSpan);
            this.textElements.push(textSpan);

            // 控制最多显示5个
            if (this.textElements.length > 2) {
                const oldestText = this.textElements.shift();
                this.body.removeChild(oldestText);
            }

            setTimeout(() => {
                this.body.removeChild(textSpan);
            }, 1900);
        });
    }

    getRandomColor() {
        const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        return `#${red}${green}${blue}`;
    }
}
