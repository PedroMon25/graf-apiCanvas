function draw() {

    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {

        const ctx = canvas.getContext("2d");

        // Primer grupo de líneas
        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.lineTo(100, 100);
        ctx.lineTo(180, 20);
        ctx.stroke();

        // Segundo grupo de líneas
        ctx.beginPath();
        ctx.moveTo(20, 150);
        ctx.lineTo(80, 100);
        ctx.lineTo(140, 150);
        ctx.lineTo(200, 100);
        ctx.lineTo(260, 150);
        ctx.stroke();

        // Línea horizontal más gruesa
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(30, 180);
        ctx.lineTo(270, 180);
        ctx.stroke();
    }
}