const today = new Date();
const todayDate = today.getDate(), todayMonth = today.getMonth();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let d_date = `${todayDate}`;
if (todayDate % 10 === 1) d_date += "st ";
else if (todayDate % 10 === 2) d_date += "nd ";
else if (todayDate % 10 === 3) d_date += "rd ";
else d_date += "th ";

d_date += monthNames[todayMonth];
document.getElementById("d_date").innerText = d_date;

let currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

console.log(day + "/" + month + "/" + year);
let nextday = new Date(year, month, day, 0, 0, 0);

const r_time = () =>
{
    let temp = new Date();
    let gap = nextday - temp.getTime();

    const d_s = 1000, d_m = d_s * 60, d_h = d_m * 60, d_d = d_h * 24;

    let h = document.getElementById("hours");
    let m = document.getElementById("minutes");
    let s = document.getElementById("seconds");

    let hours = Math.floor((gap % d_d) / d_h);
    let minutes = Math.floor((gap % d_h) / d_m);
    let seconds = Math.floor((gap % d_m) / d_s);

    h.innerHTML = `${hours}<span class="fw-normal">HOURS</span>`;
    m.innerHTML = `${minutes}<span class="fw-normal">MINUTES</span>`;
    s.innerHTML = `${seconds}<span class="fw-normal">SECONDS</span>`;
};

setInterval(r_time, 1000);


