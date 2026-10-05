function draw() {

    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {

        const ctx = canvas.getContext("2d");

        // Cara
        ctx.beginPath();
        ctx.arc(150, 100, 80, 0, Math.PI * 2, true);

        // Boca
        ctx.moveTo(205, 100);
        ctx.arc(150, 100, 55, 0, Math.PI, false);

        // Ojo izquierdo
        ctx.moveTo(125, 75);
        ctx.arc(115, 75, 10, 0, Math.PI * 2, true);

        // Ojo derecho
        ctx.moveTo(195, 75);
        ctx.arc(185, 75, 10, 0, Math.PI * 2, true);

        // Dibujar
        ctx.stroke();
    }
}