window.onload = function() {
    const canvas = document.getElementById('simulationCanvas');
    const ctx = canvas.getContext('2d');
    const rangeInput = document.getElementById('rangeInput');
    const resetButton = document.getElementById('resetButton');
    const speedsDiv = document.getElementById('speeds');

    let centerCircle = new Circle(canvas.width / 2, canvas.height / 2, parseInt(rangeInput.value), 0, 'red');
    let circles = [
        new Circle(100, 100, 20, 2, 'blue'),
        new Circle(200, 200, 20, 2, 'green'),
        new Circle(300, 300, 20, 2, 'yellow')
    ];

    function resetSimulation() {
        centerCircle = new Circle(canvas.width / 2, canvas.height / 2, parseInt(rangeInput.value), 0, 'red');
        circles = [
            new Circle(100, 100, 20, 2, 'blue'),
            new Circle(200, 200, 20, 2, 'green'),
            new Circle(300, 300, 20, 2, 'yellow')
        ];
    }

    function updateSpeeds() {
        speedsDiv.innerHTML = '';
        circles.forEach((circle, index) => {
            const speed = Math.sqrt(circle.vx * circle.vx + circle.vy * circle.vy) * circle.speed;
            speedsDiv.innerHTML += `Cercle ${index + 1}: ${speed.toFixed(2)}<br>`;
        });
    }

    rangeInput.addEventListener('input', () => {
        centerCircle.radius = parseInt(rangeInput.value);
    });

    resetButton.addEventListener('click', resetSimulation);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        centerCircle.draw(ctx);
        circles.forEach(circle => {
            circle.update(centerCircle, canvas);
            circle.draw(ctx);
        });

        updateSpeeds();
        requestAnimationFrame(animate);
    }

    animate();
}