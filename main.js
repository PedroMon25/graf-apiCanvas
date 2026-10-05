function draw() {

    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {

        const ctx = canvas.getContext("2d");

        // -------------------------
        // CUERPO DE LA CASA
        // -------------------------
        ctx.fillStyle = "#F2C078";
        ctx.fillRect(70, 90, 160, 90);

        // -------------------------
        // TECHO
        // -------------------------
        ctx.beginPath();
        ctx.moveTo(50, 90);
        ctx.lineTo(150, 25);
        ctx.lineTo(250, 90);
        ctx.closePath();

        ctx.fillStyle = "#C0392B";
        ctx.fill();

        // -------------------------
        // PUERTA
        // -------------------------
        ctx.fillStyle = "#795548";
        ctx.fillRect(130, 125, 40, 55);

        // Perilla
        ctx.beginPath();
        ctx.arc(160, 153, 3, 0, Math.PI * 2);

        ctx.fillStyle = "black";
        ctx.fill();

        // -------------------------
        // VENTANA IZQUIERDA
        // -------------------------
        ctx.fillStyle = "#87CEEB";
        ctx.fillRect(85, 110, 30, 30);

        ctx.strokeStyle = "black";
        ctx.strokeRect(85, 110, 30, 30);

        // División vertical
        ctx.beginPath();
        ctx.moveTo(100, 110);
        ctx.lineTo(100, 140);

        // División horizontal
        ctx.moveTo(85, 125);
        ctx.lineTo(115, 125);

        ctx.stroke();

        // -------------------------
        // VENTANA DERECHA
        // -------------------------
        ctx.fillStyle = "#87CEEB";
        ctx.fillRect(185, 110, 30, 30);

        ctx.strokeRect(185, 110, 30, 30);

        // División vertical
        ctx.beginPath();
        ctx.moveTo(200, 110);
        ctx.lineTo(200, 140);

        // División horizontal
        ctx.moveTo(185, 125);
        ctx.lineTo(215, 125);

        ctx.stroke();

        // -------------------------
        // SOL
        // -------------------------
        ctx.beginPath();
        ctx.arc(270, 35, 20, 0, Math.PI * 2);

        ctx.fillStyle = "yellow";
        ctx.fill();
    }
}