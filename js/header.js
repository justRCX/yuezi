mui.init();
var offCanvasWrapper = mui('#offCanvasWrapper');
document.getElementById('offCanvasShow').addEventListener('tap', function() {
    offCanvasWrapper.offCanvas('show');
  });
  mui('#offCanvasSideScroll').scroll();