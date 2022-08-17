let digitalEl = document.querySelector('.digital');
let secondEl = document.querySelector('.p_s')
let minuteEl = document.querySelector('.p_m')
let hourEl = document.querySelector('.p_h')


function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();


    digitalEl.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    let seDeg = ((360 / 60 ) * second -90);
    let mDeg = ((360 / 60 ) * minute -90);
    let hDeg = ((360 / 12 ) * hour -90);

    secondEl.style.transform = `rotate(${seDeg}deg)`;
    minuteEl.style.transform = `rotate(${mDeg}deg)`;
    hourEl.style.transform = `rotate(${hDeg}deg)`;

}


let fixZero = time => time < 10 ? '0' + time : time;


setInterval(updateClock, 1000);
updateClock();