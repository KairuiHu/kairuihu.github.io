// neko-pace.js — a silver-tabby pixel cat that paces back and forth beside the News title.
// Walks a short stretch, pauses (sits), turns around, walks back. Not cursor-following.
(function nekoPace() {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const curScript = document.currentScript;
  const sprite = (curScript && curScript.dataset.cat) || "/images/oneko-silver.png";
  const TILE = 32;

  // sprite-sheet frame coords (col, row), same sheet as oneko
  const frames = {
    idle: [[-3, -3]],
    E: [[-3, 0], [-3, -1]],   // walking right
    W: [[-4, -2], [-4, -3]],  // walking left
  };

  function start() {
    // find the "News" section heading
    let title = null;
    document.querySelectorAll(".page__content h1").forEach((h) => {
      if (h.textContent.trim().toLowerCase() === "news") title = h;
    });
    if (!title) return;
    title.style.position = "relative";

    const cat = document.createElement("div");
    cat.id = "neko-pace";
    cat.setAttribute("aria-hidden", "true");
    Object.assign(cat.style, {
      width: TILE + "px",
      height: TILE + "px",
      position: "absolute",
      bottom: "-3px",
      left: "0px",
      backgroundImage: "url(" + sprite + ")",
      imageRendering: "pixelated",
      pointerEvents: "none",
      zIndex: "5",
    });
    title.appendChild(cat);

    const START = 92;        // px from the title's left edge (just after the word "News")
    const RANGE = 150;       // how far it paces to the right
    const SPEED = 34;        // px per second
    const STEP_MS = 170;     // walk-frame swap interval

    let x = 0, dir = 1, state = "walk";
    let animFrame = 0, frameAcc = 0, pauseUntil = 0;
    let last = performance.now();

    function setSprite(set, f) {
      const s = frames[set];
      const c = s[f % s.length];
      cat.style.backgroundPosition = c[0] * TILE + "px " + c[1] * TILE + "px";
    }

    function tick(now) {
      const dt = (now - last) / 1000;
      last = now;

      if (state === "walk") {
        x += dir * SPEED * dt;
        if (x >= RANGE) { x = RANGE; state = "pause"; pauseUntil = now + 800 + Math.random() * 2000; }
        else if (x <= 0) { x = 0; state = "pause"; pauseUntil = now + 800 + Math.random() * 2000; }
        cat.style.left = (START + x) + "px";
        frameAcc += dt * 1000;
        if (frameAcc >= STEP_MS) { frameAcc = 0; animFrame++; }
        setSprite(dir > 0 ? "E" : "W", animFrame);
      } else {
        setSprite("idle", 0);
        if (now >= pauseUntil) { state = "walk"; dir *= -1; }
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
