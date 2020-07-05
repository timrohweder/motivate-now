if (!document.querySelector("#motivationalOverlay")) {
  var div = document.createElement("div");
  div.setAttribute("id", "motivationalOverlay");
  var body = document.body;
  div.innerHTML = `
  <p style="font-size: 40px; color: #fff;">“If there is no wind, row.”</p>
  `;

  div.style.background = "#000";
  div.style.position = "absolute";
  div.style.left = "0px";
  div.style.top = document.documentElement.scrollTop.toString() + "px";
  div.style.width = "100vw";
  div.style.maxWidth = "100%";
  div.style.height = "100vh";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.style.zIndex = "2147483644";
  div.style.opacity = "0";
  div.style.transition = "all .5s ease-in-out";

  function setDivTop() {
    div.style.top = document.documentElement.scrollTop.toString() + "px";
  }

  function closeDiv() {
    div.style.opacity = "0";
    document.exitFullscreen();
    window.setTimeout(function () {
      div.remove();
    }, 500);

    window.removeEventListener("scroll", setDivTop);
    window.removeEventListener("keypress", closeDiv);
  }

  div.addEventListener("click", closeDiv);
  window.addEventListener("scroll", setDivTop);
  window.addEventListener("keypress", closeDiv);

  body.append(div);
  window.setTimeout(function () {
    div.style.opacity = "1";
    document.body.requestFullscreen();
  }, 500);
}
