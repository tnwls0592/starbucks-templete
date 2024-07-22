// badge scroll
const badgeEl = document.querySelector('header .badges');

//to-top
const toTopEl=document.querySelector('.to-top');

//_.throttle(함수식(){},시간)
// window.addEventListener('scroll',function(){
//     console.log(window.scrollY)
// });

window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);

    //배지의 위치가 500이상이면 보이고 이하이면 안 보이게 처리
    if(window.scrollY>500){
        //gsap libs
        //gsap.to(요소,지속시간,{옵션})
        // badgeEl.style.display='none';
        gsap.to(badgeEl,.6,{
            opacity: 0,
            display: 'none'
        });
        gsap.to(toTopEl, .7, {
            x : 0
        });
    }else{
        gsap.to(badgeEl,.6,{
            opacity: 1,
            display: 'block'
        });
        gsap.to(toTopEl, .7, {
            x : 100
        });
    };
},300));

//to-top 버튼 클릭 상단 이동
toTopEl.addEventListener('click',function(){
    gsap.to(window,.7,{
        //플러그인을 연결할 시에 사용 가능
        scrollTo:0
    });
});

//순차적으로 visual 안의 이미지를 보여줌
//이미지 부분을 fade--in으로 그룹화
const fadeEls=document.querySelectorAll('.visual .fade--in');
fadeEls.forEach(function(fadeIn,idx){
    //gsap(요소,시간,옵션);
    gsap.to(fadeIn,1,{
        //0.7, 1.4, 2.1, 2.8
        delay : (idx+1)*.7,
        opacity : 1
    });
});

//공지사한 스와이퍼 적용
const swiper=new Swiper('.notice-line .swiper',{
    direction: 'vertical',
    autoplay: true,
    loop: true
});
const swiper2=new Swiper('.promotion .swiper',{
    slidesPerView: 3, //화면에 3개의 요소를 보여준다.
    spaceBetween: 10, //슬라이드 사이에 여백
    centeredSlides: true, //1번 슬라이드를 가운데 배치
    loop: true, //무한 반복
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //클릭했을 때 넘어갈 객체
        clickable: true //클릭했을 때 넘어갈 수 있도록
    },
    navigation: {
        prevEl: '.promotion .swiper-button-prev',
        nextEl: '.promotion .swiper-button-next'
    }
});

const swiper3 = new Swiper('.awards .swiper',{
    autoplay :true,
    loop:true,
    spaceBetween:30,
    slidesPerView:5,
    navigation:{
        prevEl : '.awards .swiper-button-prev',
        nextEl : '.awards .swiper-button-next'
    }
})

//토글버튼 클릭시 promotion 닫힘 & 열림
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')

let isHidePromotion=false;
promotionToggleBtn.addEventListener('click',()=>{
    // 동적 표현
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        promotionEl.classList.add('hide')
    } else{
        promotionEl.classList.remove('hide')
    }
});

// floating 움직임을 적용
// random() 함수를 사용해서 무작위 숫자 추출
// random() -> 최대값, 최소값
function random(min,max) {
    //.toFixed를 통해 반환된 문자 데이터를
    //parseFloat를 통해 소수점을 가지는 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
};

//유투브 위 이미지, 추가 동작 적용
//gsap.to(요소, 시간, {옵션})
function floatingObgject(selector, delay, size){
    gsap.to(selector, random(1.5, 2.5),{
        // y축으로 움직이는 범위
        y: size,
        repeat: -1,
        // 무한 반복, 자바스크립트에서지원하는 동작
        yoyo: true,
        //gsap의 easesing
        ease: Power1.easeInOut,
        delat: random(0, delay)
    });
};

floatingObgject('.floating1', 1, 15);
floatingObgject('.floating2', 1, 15);
floatingObgject('.floating3', 1, 15);

//scollMagic
const spyEls=document.querySelectorAll('.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            //보여질 여부를, 감사, 요소 지정
            triggerElement: spyEl,
            //화면의 높이를 0에서 1이라 보고 .8위치에 오면 적용
            //기능이 걸려있는 부분(실행위치)
            triggerHook: .8
        })
        .setClassToggle(spyEl,'show')
        .addTo(new ScrollMagic.Controller())
});