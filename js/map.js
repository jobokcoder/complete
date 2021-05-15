{
    window.addEventListener('load', () => {
        const container = document.querySelector('.wrapper');

        window.addEventListener('resize', resize(), false);
        resize();
        requestAnimationFrame(animate);

        function resize(){
            const stageWidth = document.body.clientWidth;
            const stageHeight = document.body.clientHeight;

            container.width = stageWidth;
            container.height = stageHeight;
        }

        function animate(){
            requestAnimationFrame(animate);
        }
    });
}
