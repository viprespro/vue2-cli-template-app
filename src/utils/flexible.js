(function flexible(window, document) {
  var doc = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + "px";
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    var htmlFontSize = doc.clientWidth / 7.5;
    doc.style.fontSize = htmlFontSize + "px";
  }
  setBodyFontSize();
  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", function(e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement("body");
    var ele = document.createElement("div");
    ele.style.border = ".5px solid transparent";
    fakeBody.appendChild(ele);
    doc.appendChild(fakeBody);
    if (ele.offsetHeight === 1) {
      doc.classList.add("hairlines");
    }
    doc.removeChild(fakeBody);
  }
})(window, document);
