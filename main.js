setInterval(() => {
  const formatNumber = (num) => {
    return num.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };
  const currentTime = new Date().getTime();
  const first_of_march = new Date("1 March 2025").getTime();
  const distance = first_of_march - currentTime;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysEl = document.querySelector(".days");
  const hoursEl = document.querySelector(".hours");
  const minutesEl = document.querySelector(".minutes");
  const secondsEl = document.querySelector(".seconds");

  daysEl.textContent = formatNumber(days);
  hoursEl.textContent = formatNumber(hours);
  minutesEl.textContent = formatNumber(minutes);
  secondsEl.textContent = formatNumber(seconds);
}, 1000);
