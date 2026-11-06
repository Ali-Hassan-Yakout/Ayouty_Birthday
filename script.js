// PERSONALIZE THIS DATE before publishing. Format: YYYY-MM-DD
// Example: "2027-11-06". The countdown targets the next occurrence of that month/day.
const BIRTHDAY_DATE = "2026-11-07";

const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const openSurprise = document.getElementById("openSurprise");
const revealLetter = document.getElementById("revealLetter");
const hiddenLetter = document.getElementById("hiddenLetter");

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.setAttribute("aria-pressed", "true");
      musicLabel.textContent = "Pause our song";
    } catch {
      musicLabel.textContent = "Add our-song.mp3 first";
    }
  } else {
    music.pause();
    musicToggle.setAttribute("aria-pressed", "false");
    musicLabel.textContent = "Play our song";
  }
});

openSurprise.addEventListener("click", () => {
  document.getElementById("message").scrollIntoView({ behavior: "smooth" });
  burstHearts(18);
});

revealLetter.addEventListener("click", () => {
  hiddenLetter.hidden = !hiddenLetter.hidden;
  revealLetter.innerHTML = hiddenLetter.hidden
    ? 'A letter just for you <span>♥</span>'
    : 'Close your letter <span>♡</span>';
  if (!hiddenLetter.hidden) {
    hiddenLetter.scrollIntoView({ behavior: "smooth", block: "center" });
    burstHearts(28);
  }
});

function nextBirthdayDate() {
  const [year, month, day] = BIRTHDAY_DATE.split("-").map(Number);
  const now = new Date();
  let target = new Date(now.getFullYear(), month - 1, day, 0, 0, 0);
  if (target <= now) target = new Date(now.getFullYear() + 1, month - 1, day, 0, 0, 0);
  return target;
}

function updateCountdown() {
  const target = nextBirthdayDate();
  const diff = Math.max(0, target.getTime() - Date.now());
  const values = {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
  Object.entries(values).forEach(([id, value]) => {
    document.getElementById(id).textContent = String(value).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

function makeHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > .5 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${10 + Math.random() * 18}px`;
  heart.style.animationDuration = `${6 + Math.random() * 6}s`;
  document.getElementById("heart-field").appendChild(heart);
  setTimeout(() => heart.remove(), 12500);
}
function burstHearts(amount = 12) {
  for (let i = 0; i < amount; i++) setTimeout(makeHeart, i * 75);
}
setInterval(() => { if (Math.random() > .35) makeHeart(); }, 900);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
