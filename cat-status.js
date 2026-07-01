// cat-status.js — a cute cat that sits by the News title and shows a vague, time-of-day "vibe".
// Click the cat to re-roll the vibe. Purely decorative; no concrete activity is exposed.
(function catStatus() {
  // 线条小狗 — minimalist line-art puppy with a little tuft (呆毛)
  const CAT_SVG =
    '<svg class="cat-svg" viewBox="0 0 64 64" role="img" aria-label="a little dog">' +
    '<path class="cat-tail" d="M43,42 q9,-1 8,-9" fill="none" stroke="#4a4640" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<g class="cat-body" fill="none" stroke="#4a4640" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M31,11 q1.5,-5 4,-2 q1.5,2 -1,3.5"/>' +               // tuft
    '<path d="M22,17 q-8,1 -7,11 q0.6,5 5.5,4.5"/>' +               // ear L
    '<path d="M42,17 q8,1 7,11 q-0.6,5 -5.5,4.5"/>' +               // ear R
    '<path d="M21,24 q0,-12 11,-12 q11,0 11,12 q0,8 -11,8 q-11,0 -11,-8 Z"/>' + // head
    '<circle cx="27.5" cy="23" r="1.6" fill="#4a4640" stroke="none"/>' +
    '<circle cx="36.5" cy="23" r="1.6" fill="#4a4640" stroke="none"/>' +
    '<ellipse cx="32" cy="27.5" rx="1.9" ry="1.4" fill="#4a4640" stroke="none"/>' +
    '<path d="M32,29 q-2.5,3 -4.5,0.8"/>' +                          // mouth L
    '<path d="M32,29 q2.5,3 4.5,0.8"/>' +                            // mouth R
    '<path d="M24,32 q-4,8 -3,17 q0.7,4 11,4 q10.3,0 11,-4 q1,-9 -3,-17"/>' + // body
    '<path d="M28,52.5 l0,3.5"/><path d="M36,52.5 l0,3.5"/>' +       // paws
    '</g></svg>';

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
