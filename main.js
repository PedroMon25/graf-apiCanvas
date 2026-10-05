function draw() {

    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {

        const ctx = canvas.getContext("2d");

        // Primer arco: semicírculo superior
        ctx.beginPath();
        ctx.arc(60, 60, 40, 0, Math.PI, true);
        ctx.stroke();

        // Segundo arco: semicírculo inferior
        ctx.beginPath();
        ctx.arc(150, 60, 40, 0, Math.PI, false);
        ctx.stroke();

        // Tercer arco: círculo completo
        ctx.beginPath();
        ctx.arc(240, 60, 40, 0, Math.PI * 2);
        ctx.stroke();

        // Arco relleno
        ctx.beginPath();
        ctx.arc(100, 150, 35, 0, Math.PI * 2);
        ctx.fill();

        // Arco de 3/4 de círculo
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.arc(200, 150, 35, 0, Math.PI * 1.5);
        ctx.stroke();
    }
}