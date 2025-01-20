const currentTime = new Date().getTime();
const first_of_march = new Date("1 March 2025").getTime();
const distance = first_of_march - currentTime;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

console.log({ days, hours, minutes, minutes, seconds });
