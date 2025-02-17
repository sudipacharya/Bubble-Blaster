var timer = 60;
var score = 0;
var hitnum = 0;
function getNewHit() {
  hitnum = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitnum;
}
function updateScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
function makeBubble() {
  var clutter = "";
  for (i = 1; i < 97; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
function runtimer() {
  var timeinterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeval").innerHTML = timer;
    } else {
      clearInterval(timeinterval);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>Game Over <br> Final Score ${score}</h1>`;
    }
  }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", function (det) {
  var clickednum = Number(det.target.textContent);
  if (clickednum === hitnum) {
    updateScore();
    makeBubble();
    getNewHit();
  }
});

getNewHit();
runtimer();
makeBubble();
