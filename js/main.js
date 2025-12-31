(function () {
    const pEl = document.querySelector('.typing');

    const text = pEl.textContent; // "PORTFOLIO" 저장
    pEl.textContent = '';         // 화면에서 초기화
    let chars = text.split('');

    function writeTxt() {
        pEl.textContent += chars.shift();

        if (chars.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 150) + 100);
        }
    }

    writeTxt();
})();

//디자인 팝업
$('.design .itembox .item').click(function () {
    let i = $(this).index()
    $('.popup').show()
    $('.popup .item').hide()
    $('.popup .item').eq(i).show()

    $('html, body').css({
        overflow: 'hidden'
    })

    $('.popup').click(function () {
        $('.popup').hide()
        $('html, body').css({
            overflow: 'visible'
        })
    })
})

// 누른 점만 구름 모양 활성화, 그 위치로 이동
$('.dot').click(function () {
    let i = $(this).index()
    let sections = ['#sec1', '#sec2', '#sec3', '#sec4', '#sec5'];

    $('html, body').animate({
        scrollTop: $(sections[i]).offset().top
    }, 700)
})

$('.menu ul li a').click(function(e){
    e.preventDefault()
    let i = $(this).parent().index()
    let sections = ['#sec2', '#sec3', '#sec4', '#sec5'];

    $('html,body').animate({
        scrollTop: $(sections[i]).offset().top
    },700)
})

// 스크롤 해당 위치에 가면 네비게이션 보임, 스크롤 할 때마다 해당 위치에 구름 이동
$(window).scroll(function () {
    if ($(window).scrollTop() >= 520) {
        $('.teb').addClass('show')
    } else {
        $('.teb').removeClass('show')
    }

    let sections = ['#sec1', '#sec2', '#sec3', '#sec4', '#sec5'];
    let scrollTop = $(this).scrollTop()
    $('.dot').each(function (i) {
        let target = sections[i]

        if (scrollTop >= $(target).offset().top - 600) {
            $('.dot').removeClass('on')
            $(this).addClass('on')
        }
    })
})

$('.mb-btn').click(function(){
    $('.mobile-menu').toggleClass('on')
    if($('.mobile-menu').hasClass('on')){
        $('.mb-btn img').attr('src', 'img/mb-icon.jpg')
    }else{
        $('.mb-btn img').attr('src','img/icon.jpg')
    }
})

// 메뉴탭 누르면 해당 페이지로 이동, 메뉴 탭 닫힘

$('.mobile-menu ul li a').click(function(e){
    e.preventDefault()
    let i = $(this).parent().index()
    let sections = ['#sec1-1', '#sec2', '#sec3', '#sec4', '#sec5'];

    $('html,body').animate({
        scrollTop: $(sections[i]).offset().top
    },1000)

    $('.mobile-menu').removeClass('on');
    $('.mb-btn img').attr('src', 'img/icon.jpg')
})