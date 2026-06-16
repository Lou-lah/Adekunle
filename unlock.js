// Unlock schedule

const unlockTimes = {
    reveal: new Date("2026-06-18T13:00:00"),
};

// Check if page is unlocked
function isUnlocked(page) {
  return new Date() >= unlockTimes[page];
}

// Create locked screen
function showLockedScreen(pageName) {

  const unlockTime = unlockTimes[pageName];

  document.body.innerHTML = `
  
    <div class="h-screen bg-purple-900 text-white flex flex-col justify-center items-center text-center px-6">

      <h1 class="text-4xl font-bold mb-4">
        🔒 This surprise is locked
      </h1>

      <p class="text-purple-400 mb-4">
        Unlocks on:
      </p>

      <p class="text-xl">
        ${unlockTime.toLocaleString()}
      </p>

      <div id="countdown" class="mt-8 text-2xl text-white"></div>

    </div>
  `;

  startCountdown(unlockTime);
}

// Countdown timer
function startCountdown(targetDate) {

  const countdown = document.getElementById("countdown");

  const timer = setInterval(() => {

    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      clearInterval(timer);
      location.reload();
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
      (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
      (difference / 1000) % 60
    );

    countdown.innerHTML = `
      ${days}d ${hours}h ${minutes}m ${seconds}s
    `;

  }, 1000);
}