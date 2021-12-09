mui.init();
var offCanvasWrapper = mui('#offCanvasWrapper');
document.getElementById('offCanvasShow').addEventListener('tap', function() {
    offCanvasWrapper.offCanvas('show');
  });
//主界面和侧滑菜单界面均支持区域滚动；
  mui('#offCanvasSideScroll').scroll();
  mui('#offCanvasContentScroll').scroll();
  // 关闭侧边栏滑动
  var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
offCanvasInner.addEventListener('drag', function(event) {
    event.stopPropagation();
});