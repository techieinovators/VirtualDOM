
function tick() {
  document.getElementById("root").innerHTML =
    `<div>
      <h1>Hello!</h1>
      <h2>Time: ${new Date().toLocaleTimeString()}</h2>
    </div>`;
}

setInterval(tick, 1000);
