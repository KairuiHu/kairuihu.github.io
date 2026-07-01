// cat-status.js — a cute puppy that sits by the News title with a vague, time-of-day "vibe".
// Static by default; animates only while hovered. Click to re-roll the vibe.
(function petStatus() {
  const STILL = "/images/dog_still.png"; // static first frame
  const ANIM = "/images/dog.webp";       // animated, transparent bg

  // Vague, chill vibes — deliberately non-specific (no "coding"/"papers").
  const weekend = ["fully offline", "touching grass", "in airplane mode", "recharging", "somewhere quiet"];
  function byHour(h) {
    if (h < 6)  return ["dreaming in latent space", "in low-power mode", "off in a dream", "recharging"];
    if (h < 9)  return ["slowly booting up", "easing into the day", "chasing morning light"];
    if (h < 12) return ["in flow", "quietly vibing", "somewhere in thought"];
    if (h < 14) return ["chilling", "taking it slow", "on a slow drift"];
    if (h < 18) return ["feeling the AGI", "lost in thought", "wandering a little"];
    if (h < 22) return ["winding down", "golden-hour mood", "chilling"];
    return ["stargazing", "going quiet", "almost dreaming"];
  }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function currentList() {
    const d = new Date(), day = d.getDay();
    return (day === 0 || day === 6) ? weekend : byHour(d.getHours());
  }

  function start() {
    let title = null;
    document.querySelectorAll(".page__content h1").forEach((h) => {
      if (h.textContent.trim().toLowerCase() === "news") title = h;
    });
    if (!title) return;
    title.style.position = "relative";

    const wrap = document.createElement("span");
    wrap.className = "news-cat";
    wrap.innerHTML =
      '<span class="cat-bubble"></span>' +
      '<img class="cat-svg" src="' + STILL + '" alt="a little dog" draggable="false">';
    title.appendChild(wrap);

    const bubble = wrap.querySelector(".cat-bubble");
    const pet = wrap.querySelector(".cat-svg");
    let lastMsg = "";

    // preload the animation so hover is instant
    const pre = new Image(); pre.src = ANIM;

    function say() {
      let msg = pick(currentList());
      for (let i = 0; i < 4 && msg === lastMsg; i++) msg = pick(currentList());
      lastMsg = msg;
      bubble.classList.remove("show");
      setTimeout(() => { bubble.textContent = msg; bubble.classList.add("show"); }, 180);
    }

    // animate only on hover
    pet.addEventListener("mouseenter", () => { pet.src = ANIM; });
    pet.addEventListener("mouseleave", () => { pet.src = STILL; });

    // click: bounce + new vibe
    pet.addEventListener("click", () => {
      pet.classList.remove("bounce");
      void pet.offsetWidth;
      pet.classList.add("bounce");
      say();
    });

    setTimeout(say, 600);
    setInterval(say, 12000);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
