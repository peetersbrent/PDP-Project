
    var mei = document.querySelector('#read-more-btn1')
    var juni = document.querySelector('#read-more-btn2')
    var juli = document.querySelector('#read-more-btn3')
    var aug = document.querySelector('#read-more-btn4')
    var sep = document.querySelector('#read-more-btn5')
    var okt = document.querySelector('#read-more-btn6')
    var nov = document.querySelector('#read-more-btn7')
    var dec = document.querySelector('#read-more-btn8')
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    let counter6 = 0;
    let counter7 = 0;
    let counter8 = 0;

    mei.onclick = function() {
    document.body.classList.toggle("active1")
    counter1++;
    if (counter1 % 2) {
    mei.innerHTML = "Read less"
} else {
    mei.innerHTML = "Read more"
}

}
    juni.onclick = function() {
    document.body.classList.toggle("active2")
    counter2++;
    if (counter2 % 2) {
    juni.innerHTML = "Read less"
} else {
    juni.innerHTML = "Read more"
}
}
    juli.onclick = function() {
    document.body.classList.toggle("active3")
    counter3++;
    if (counter3 % 2) {
    juli.innerHTML = "Read less"
} else {
    juli.innerHTML = "Read more"
}
}
    aug.onclick = function() {
    document.body.classList.toggle("active4")
    counter4++;
    if (counter4 % 2) {
    aug.innerHTML = "Read less"
} else {
    aug.innerHTML = "Read more"
}
}
    sep.onclick = function() {
    document.body.classList.toggle("active5")
    counter5++;
    if (counter5 % 2) {
    sep.innerHTML = "Read less"
} else {
    sep.innerHTML = "Read more"
}
}
    okt.onclick = function() {
    document.body.classList.toggle("active6")
    counter6++;
    if (counter6 % 2) {
    okt.innerHTML = "Read less"
} else {
    okt.innerHTML = "Read more"
}
}
    nov.onclick = function() {
    document.body.classList.toggle("active7")
    counter7++;
    if (counter7 % 2) {
    nov.innerHTML = "Read less"
} else {
    nov.innerHTML = "Read more"
}
}
    dec.onclick = function() {
    document.body.classList.toggle("active8")
    counter8++;
    if (counter8 % 2) {
    dec.innerHTML = "Read less"
} else {
    dec.innerHTML = "Read more"
}
}

    const up_arrow = document.querySelector('.up_arrow');

    window.addEventListener('scroll', () => {
    if(window.pageYOffset > 150) {
    up_arrow.classList.add("active");
} else {
    up_arrow.classList.remove("active");
}
})

    up_arrow.addEventListener("click", function () {
    window.scrollTo(0, 0);
})

    const readmore = document.querySelector('.read-more-btn');

    window.addEventListener('click', () => {
    readmore.querySelector('.card-readmore').classList.toggle("active");
});


        var clip1 = document.getElementById("clip1");
        var clip2 = document.getElementById("clip2");
        var clip3 = document.getElementById("clip3");
        var img1 = document.getElementById("img1");
        var img2 = document.getElementById("img2");
        var img3= document.getElementById("img3");
        var btn1 = document.getElementById("back1");
        var btn2 = document.getElementById("back2");
        var btn3 = document.getElementById("back3");

        clip1.onclick = function() {
        document.body.classList.add("crosskart")
    }

        clip2.onclick = function() {
        document.body.classList.add("ford")
    }

        clip3.onclick = function() {
        document.body.classList.add("audi")
    }
        img1.onclick = function() {
        document.body.classList.add("crosskart")
    }

        img2.onclick = function() {
        document.body.classList.add("ford")
    }

        img3.onclick = function() {
        document.body.classList.add("audi")
    }

        btn1.onclick = function() {
        document.body.classList.remove("crosskart")
    }

        btn2.onclick = function() {
        document.body.classList.remove("ford")
    }

        btn3.onclick = function() {
        document.body.classList.remove("audi")
    }


        var image1 = document.getElementsByClassName('parallaximg1');
        new simpleParallax(image1, {
        orientation: 'right'
    });

        var image2 = document.getElementsByClassName('parallaximg2');
        new simpleParallax(image2, {
        orientation: 'left'
    });

        var image3 = document.getElementsByClassName('parallaximg3');
        new simpleParallax(image3, {
        orientation: 'left'
    });


        var windowWidth = window.innerWidth;

        var horLength = document.querySelector(".element-wrapper").scrollWidth;

        var distFromTop = document.querySelector(".horizontal-section").offsetTop;

        var scrollDistance = distFromTop + horLength - windowWidth;

        document.querySelector(".horizontal-section").style.height = horLength + "px";

        window.onscroll = function () {
        var scrollTop = window.pageYOffset;

        if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
        document.querySelector(".element-wrapper").style.transform = "translateX(-" + (scrollTop - distFromTop) + "px)";
    }
    }

        const loader = document.querySelector('.car-loader')

        document.addEventListener('DOMContentLoaded', (e)=> {
        setTimeout(()=> {
            loader.classList.add('display-none');
        }, 2000);
    })
