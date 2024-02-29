const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveaway = document.querySelector('.shifted-text');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();

const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];

const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

const futureTime = futureDate.getTime();

function getCountdownTimer() {
    const today = new Date().getTime();
    const currentTime = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = currentTime / oneDay;
    days = Math.floor(days);

    let hours = Math.floor((currentTime % oneDay) / oneHour);

    let minutes = Math.floor((currentTime % oneHour) / oneMinute);

    let seconds = Math.floor((currentTime % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if (currentTime < 0) {
        clearInterval(countdown);
        const expiredMessage = document.querySelector('.expired-message');
        deadline.innerHTML = `<h4 class="expired expired-message">Sorry, this giveaway has expired! <br/> Please check back soon.</h4>`;

        expiredMessage.style.color = 'red';
        expiredMessage.style.fontWeight = 'bold';
        expiredMessage.textContent = expiredMessage.textContent.toUpperCase();
    }
}

let countdown = setInterval(getCountdownTimer, 1000);
getCountdownTimer();