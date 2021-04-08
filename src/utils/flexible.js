!(function(doc, win) {
  var docEle = doc.documentElement,
    event = 'onorientationchange' in window ? 'orientationchange' : 'resize',
    fn = function() {
      var width = docEle.clientWidth
      width && (docEle.style.fontSize = width / 7.5 + 'px')
    }

  win.addEventListener(event, fn, false)
  doc.addEventListener('DOMContentLoaded', fn, false)
})(document, window)
