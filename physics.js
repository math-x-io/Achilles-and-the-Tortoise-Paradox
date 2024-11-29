class Circle {
    constructor(x, y, radius, speed, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.color = color;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.originalSpeed = speed;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update(centerCircle) {
        let dx = centerCircle.x - this.x;
        let dy = centerCircle.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < centerCircle.radius) {
            let factor = distance / centerCircle.radius;
            this.vx *= factor;
            this.vy *= factor;
        } else {
            this.vx += (Math.random() * 2 - 1) * 0.01;
            this.vy += (Math.random() * 2 - 1) * 0.01;
            let speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (speed > this.originalSpeed) {
                this.vx *= this.originalSpeed / speed;
                this.vy *= this.originalSpeed / speed;
            }
        }

        this.x += this.vx * this.speed;
        this.y += this.vy * this.speed;

        if (this.x + this.radius > 800 || this.x - this.radius < 0) {
            this.vx = -this.vx;
        }
        if (this.y + this.radius > 600 || this.y - this.radius < 0) {
            this.vy = -this.vy;
        }
    }
}