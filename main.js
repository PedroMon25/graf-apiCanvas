function draw() {

    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {

        const ctx = canvas.getContext("2d");

        // Rectángulo azul relleno
        ctx.fillStyle = "rgb(0, 100, 255)";
        ctx.fillRect(30, 30, 120, 80);

        // Rectángulo rojo
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.fillRect(180, 30, 80, 80);

        // Rectángulo solamente con borde
        ctx.strokeStyle = "black";
        ctx.lineWidth = 4;
        ctx.strokeRect(70, 130, 150, 50);
    }
}