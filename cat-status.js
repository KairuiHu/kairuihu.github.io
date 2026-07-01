// cat-status.js — a cute cat that sits by the News title and shows a vague, time-of-day "vibe".
// Click the cat to re-roll the vibe. Purely decorative; no concrete activity is exposed.
(function catStatus() {
  const CAT_SVG =
    '<svg class="cat-svg" viewBox="0 0 64 64" role="img" aria-label="a cat">' +
    '<path class="cat-tail" d="M43,55 C57,55 61,40 54,33 C51,30 47,32 48,36" fill="none" stroke="#3a3a42" stroke-width="5.5" stroke-linecap="round"/>' +
    '<g class="cat-body">' +
    '<path d="M32,60 C19,60 17,42 21,32 C23,26 41,26 43,32 C47,42 45,60 32,60 Z" fill="#3a3a42"/>' +
    '<ellipse cx="26" cy="58.5" rx="4" ry="2.6" fill="#4a4a55"/>' +
    '<ellipse cx="38" cy="58.5" rx="4" ry="2.6" fill="#4a4a55"/>' +
    '<circle cx="32" cy="25" r="13.5" fill="#3a3a42"/>' +
    '<path d="M22,16 L18.5,6 L30,13 Z" fill="#3a3a42"/>' +
    '<path d="M42,16 L45.5,6 L34,13 Z" fill="#3a3a42"/>' +
    '<path d="M23.5,13.5 L21.7,8.5 L27,12 Z" fill="#f2b8c6"/>' +
    '<path d="M40.5,13.5 L42.3,8.5 L37,12 Z" fill="#f2b8c6"/>' +
    '<ellipse cx="22.5" cy="29.5" rx="2.5" ry="1.4" fill="#f2b8c6" opacity="0.5"/>' +
    '<ellipse cx="41.5" cy="29.5" rx="2.5" ry="1.4" fill="#f2b8c6" opacity="0.5"/>' +
    '<path d="M24,25 q3,3 6,0" fill="none" stroke="#fdf6ee" stroke-width="1.8" stroke-linecap="round"/>' +
    '<path d="M34,25 q3,3 6,0" fill="none" stroke="#fdf6ee" stroke-width="1.8" stroke-linecap="round"/>' +
    '<path d="M30.5,28 L33.5,28 L32,30.3 Z" fill="#f2b8c6"/>' +
    '<g stroke="#c3beb6" stroke-width="0.9" stroke-linecap="round">' +
    '<line x1="20" y1="28" x2="10.5" y2="26.5"/><line x1="20" y1="30" x2="10.5" y2="31"/>' +
    '<line x1="44" y1="28" x2="53.5" y2="26.5"/><line x1="44" y1="30" x2="53.5" y2="31"/>' +
    '</g></g></svg>';

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
    wrap.innerHTML = '<span class="cat-bubble"></span>' + CAT_SVG;
    title.appendChild(wrap);

    const bubble = wrap.querySelector(".cat-bubble");
    const svg = wrap.querySelector(".cat-svg");
    let lastMsg = "";

    function say() {
      let msg = pick(currentList());
      for (let i = 0; i < 4 && msg === lastMsg; i++) msg = pick(currentList());
      lastMsg = msg;
      bubble.classList.remove("show");
      setTimeout(() => { bubble.textContent = msg; bubble.classList.add("show"); }, 180);
    }

    setTimeout(say, 600);
    const timer = setInterval(say, 12000);

    svg.addEventListener("click", () => {
      svg.classList.remove("bounce");
      void svg.offsetWidth; // restart animation
      svg.classList.add("bounce");
      say();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
