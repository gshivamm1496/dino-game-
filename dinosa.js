window.onload = function () {
  const dino = document.getElementById("dino");
  const cactus = document.getElementById("cactus");
  const PointsDisplay = document.getElementById("Points");
  let Points = 0;

  function jump() {
    if (!dino.classList.contains("jump")) {
      dino.classList.add("jump");
      setTimeout(() => {
        dino.classList.remove("jump");
      }, 400);
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.code === "Space" || event.key === "ArrowUp") {
      jump();
    }
  });

  let gameInterval = setInterval(() => {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 100 && cactusLeft > 50 && dinoBottom < 50) {
      alert("💀 Game Over!\nYour Points: " + Points);
      Points = 0;
      PointsDisplay.textContent = "Points: 0";
    } else {
      Points++;
      PointsDisplay.textContent = "Points: " + Points;
    }
  }, 100);
  // dino.css
}
