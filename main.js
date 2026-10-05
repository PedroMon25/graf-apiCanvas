function draw() {

    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {

        const ctx = canvas.getContext("2d");

        // Primer triángulo: relleno
        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.lineTo(25, 125);
        ctx.lineTo(125, 125);
        ctx.fill();

        // Segundo triángulo: contorno
        ctx.beginPath();
        ctx.moveTo(200, 25);
        ctx.lineTo(150, 125);
        ctx.lineTo(250, 125);
        ctx.closePath();
        ctx.stroke();
    }
}