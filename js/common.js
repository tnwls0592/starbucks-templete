const searchEl=document.querySelector('header .search');
const searchInputEl=document.querySelector('header input');

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});
//focus and blur
searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focusde');
    this.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focusde');
    this.setAttribute('placeholder','');
});

//footer year
const thisYear=document.querySelector('.this-year');
thisYear.textContent=new Date().getFullYear();

//to-top버튼을 클릭하면 문서의 상단으로 이동
//gsap에서 모든 기능들을 구현 한다면
//로딩 시간 등 무거운 사이트가 된다.
//이를 보완하기 위해서 별도 기능 즉 기능별로 구현
//gsap ScrollToPlugin cdn
//window에서 적용 -> 상단의window 이벤트로 이동 작성