document.getElementById('offCanvasShow').onclick = function(){
  $('body').addClass('g-fullscreen g-active');
  $('#aside').addClass('aside-active')
  document.getElementById('aside').style = "visibility: visible; transform: translate3d(0px, 0px, 0px);"
}
$('.canvas-backdrop').on('click',function(){
    document.getElementById('aside').style = 'visibility: visible; transform: translate3d(-300px, 0px, 0px);'
    $('body').removeClass('g-fullscreen g-active');
    setTimeout(function(){
      $('#aside').removeClass('aside-active')
      document.getElementById('aside').style = 'visibility: hidden; transform: translate3d(-300px, 0px, 0px);'
    },200)
})