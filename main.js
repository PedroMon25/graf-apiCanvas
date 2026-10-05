function draw() {

    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {

        const ctx = canvas.getContext("2d");

        // -------------------------
        // CURVA CUADRÁTICA
        // -------------------------
        ctx.beginPath();
        ctx.moveTo(20, 80);

        // Punto de control: (80, 10)
        // Punto final: (140, 80)
        ctx.quadraticCurveTo(80, 10, 140, 80);

        ctx.lineWidth = 4;
        ctx.stroke();


        // -------------------------
        // CURVA BÉZIER
        // -------------------------
        ctx.beginPath();
        ctx.moveTo(160, 80);

        // Primer punto de control: (180, 10)
        // Segundo punto de control: (260, 150)
        // Punto final: (280, 80)
        ctx.bezierCurveTo(
            180, 10,
            260, 150,
            280, 80
        );

        ctx.stroke();


        // -------------------------
        // SEGUNDA CURVA CUADRÁTICA
        // -------------------------
        ctx.beginPath();
        ctx.moveTo(30, 160);
        ctx.quadraticCurveTo(150, 90, 270, 160);
        ctx.stroke();
    }
}