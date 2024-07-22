//youtube iframe API
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//onYoutubeIframeAPIReady 함수 이름은,
//youtube Iframe Player API 에서 사용하는 이름이기 때문에
//다른 이름을 작성하면 안된다.
//그리고 함수는 저역으로 사용하면 안된다.

function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8', //최초로 재생할 영상 아이디
        playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'An6LvWQuj_8' //반복 재생할 영상 아이디
        },
        events: {
            'onReady': function(e){
                e.target.mute() //음소거
            }
        }
    });
}