function formatNumber(num) {
    return num < 10 ? "0" + num : num;
}

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const now = new Date();

    const dayOfWeek = daysOfWeek[now.getDay()];
    const hours = formatNumber(now.getHours());
    const minutes = formatNumber(now.getMinutes());
    const seconds = formatNumber(now.getSeconds());

document.getElementById("dayOfWeek").textContent = dayOfWeek;
document.getElementById("currentTime").textContent = `${hours} : ${minutes} : ${seconds}`;