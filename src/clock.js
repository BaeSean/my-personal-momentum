const clock = document.querySelector("#clock");
const TARGET_DATE = new Date(2022, 11, 24);

// function getClock() {
//     const nowDate = new Date();
//     const timeGap = new Date(TARGET_DATE.getTime() - nowDate.getTime());

//     clock.innerHTML = `${numberToDay(timeGap)}d ${leftover24(nowDate.getHours())}h ${leftover60(nowDate.getMinutes())}m ${leftover60(nowDate.getSeconds())}s`
// }

// function numberToDay(d) {
//     return Math.ceil(d.getTime() / (1000 * 60 * 60 * 24))
// }

// function leftover24(n) {
//     return (24-n).toString().padStart(2, "0");
// }

// function leftover60(n) {
//     return (60-n).toString().padStart(2, "0");
// }

// getClock();
// setInterval(getClock, 1000);

function handleClock() {
    const nowDate = new Date();
    const nowHour = nowDate.getHours().toString();
    const nowMinute = nowDate.getMinutes().toString();
    const nowSecond = nowDate.getSeconds().toString();

    clock.innerHTML = `${paddingPosition(nowHour)}:${paddingPosition(nowMinute)}:${paddingPosition(nowSecond)}`
}

function paddingPosition(text) {
    return text.padStart(2, "0");
}

setInterval(handleClock, 1000);
handleClock();


// setTimeout(getClock, 1000);
// getClock()
// padStart(2, "0");