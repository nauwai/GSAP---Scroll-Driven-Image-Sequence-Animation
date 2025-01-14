function sequence_animation() {
    const canvas = document.querySelector('#home>canvas');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
        
        assets/img/frame1.jpg
        assets/img/frame2.jpg
        assets/img/frame3.jpg
        assets/img/frame4.jpg
        assets/img/frame5.jpg
        assets/img/frame6.jpg
        assets/img/frame7.jpg
        assets/img/frame8.jpg
        assets/img/frame9.jpg
        assets/img/frame10.jpg
        assets/img/frame11.jpg
        assets/img/frame12.jpg
        assets/img/frame13.jpg
        assets/img/frame14.jpg
        assets/img/frame15.jpg
        assets/img/frame16.jpg
        assets/img/frame17.jpg
        assets/img/frame18.jpg
        assets/img/frame19.jpg
        assets/img/frame20.jpg
        assets/img/frame21.jpg
        assets/img/frame22.jpg
        assets/img/frame23.jpg
        assets/img/frame24.jpg
        assets/img/frame25.jpg
        assets/img/frame26.jpg

  `;
        return data.split('\n')[index];
    }

    const frameCount = 26;

    const images = [];
    const imageSeq = {
        frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
            scrub: 1.8,
            pin: true,
            trigger: '#home',
        },
        onUpdate: render,
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
}

sequence_animation();