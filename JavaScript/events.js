function setImage() {
	let filename = document.getElementById("image-file");
	//let reader = new FileReader();
	//reader.onload = function (e)
	//{
	//	document.getElementById("image").src = e.target.result;
	//}
	//reader.readAsDataURL(filename.files[0]);

	let file = filename.files[0];
	//document.getElementById("debug").innerHTML = filename.files[0].name;
	document.getElementById("debug").innerHTML = URL.createObjectURL(file);
	document.getElementById("image").src = URL.createObjectURL(file);
}
function setBackgroundColor() {
	document.body.style.backgroundColor = document.getElementById("background-color").value;
}
function setForegroundColor(e) {
	document.body.style.color = e.target.value;
}
function setColor(e) {
	console.log(e.target);

	document.body.style[e.target.id === 'background-color' ? 'background-color' : 'color'] = e.target.value;

	//(e.target.id === "background-color" ? document.body.style.backgroundColor : document.body.style.color);
	//if (e.target.id === "background-color") {
	//	document.body.style.backgroundColor = e.target.value;
	//}
	//else {
	//	document.body.style.color = e.target.value;
	//}
}
document, addEventListener("mousemove", trackMouse);
function trackMouse(e) {
	document.getElementById("mouse-coords").innerHTML = `Mouse: X = ${e.clientX}, Y = ${e.clientY}`;
}
document.getElementById("switch-background").addEventListener("click", switchBackground);
function switchBackground(e) {
	console.log(e.target.id);
	console.log(e.target.src);
	//e.target.src = (e.target.src.includes('moon.png') ? 'sun.png' : 'moon.png');
	document.body.className = document.body.className === 'dark' ? 'light' : 'dark';
}

function setTransitionDuration(e) {
	const duration = e.target.value;
	document.getElementById("duration-display").textContent = duration;
	document.body.style.transitionDuration = duration + 's';
}

/* Инициализация при загрузке страницы*/
const slider = document.getElementById('transition-duration');
if (slider) setTransitionDuration({ target: slider });

////////////////////////////////////////////////////////
function addLeadingZero(number) {
	return number < 10 ? `0${number}` : `${number}`;
}

tick_timer();
function tick_timer() {
	let time = new Date();
	document.getElementById("full-time").innerHTML = time.toString();

	document.getElementById("hours").innerHTML = addLeadingZero(time.getHours());
	document.getElementById("minutes").innerHTML = addLeadingZero(time.getMinutes());
	document.getElementById("seconds").innerHTML = addLeadingZero(time.getSeconds());
													
	document.getElementById("years").innerHTML = addLeadingZero(time.getFullYear());
	document.getElementById("months").innerHTML = addLeadingZero(time.getMonth() +1);
	document.getElementById("days").innerHTML = addLeadingZero(time.getDay());

	document.getElementById("day-of-week").innerHTML = time.toLocaleDateString("ru", {weekday: 'long'});

	document.getElementById("current-date").style.visibility = document.getElementById("show-date").checked ? "visible" : "hidden";
	document.getElementById("day-of-week").style.visibility = document.getElementById("show-weekday").checked ? "visible" : "hidden";

	setTimeout(tick_timer, 100);
}
document.getElementById("btn-start").addEventListener("click", startCountdownTimer);
function startCountdownTimer() {
	let targetDateControl = document.getElementById("target-date");
	let targetTimeControl = document.getElementById("target-time");
	let btnStart = document.getElementById("btn-start");
	if (btnStart.value === "Start") {
		btnStart.value = "Stop";
		targetDateControl.disabled = targetTimeControl.disabled = true;
		tickCountdown();
	}
	else {
		btnStart.value = "Start";
		targetDateControl.disabled = targetTimeControl.disabled = false;
		//clearTimeout(tickCountdown);
	}
}
function tickCountdown() {
	if (document.getElementById("btn-start").value === "Start") return;
	let now = new Date();

	let targetDate = document.getElementById("target-date").valueAsDate;
	let targetTime = document.getElementById("target-time").valueAsDate;

	//Âûðàâíèâàåì ÷àñîâîé ïîÿñ:
	targetDate.setHours(targetDate.getHours() + targetDate.getTimezoneOffset() / 60);
	targetTime.setHours(targetTime.getHours() + targetTime.getTimezoneOffset() / 60);

	//Ñèíõðîíèçèðóåì öåëåâûóþ äàòó è âðåìÿ:
	targetTime.setFullYear(targetDate.getFullYear());
	targetTime.setMonth(targetDate.getMonth());
	targetTime.setDate(targetDate.getDate());

	let timestamp = targetTime - now;
	let duration = Math.trunc(timestamp / 1000);	//Truncation

	document.getElementById("target-date-value").innerHTML = targetDate;
	document.getElementById("target-time-value").innerHTML = targetTime;
	document.getElementById("timezone").innerHTML = targetTime.getTimezoneOffset();
	document.getElementById("duration").innerHTML = duration;
	document.getElementById("timestamp").innerHTML = timestamp;

	const SECONDS_PER_MINUTE = 60;
	const SECONDS_PER_HOUR = 3600;
	const SECONDS_PER_DAY = 86400;

	let time_of_day = duration % SECONDS_PER_DAY;

	document.getElementById("hours-unit").innerHTML = Math.trunc(time_of_day / SECONDS_PER_HOUR);
	time_of_day = time_of_day % SECONDS_PER_HOUR;
	document.getElementById("minutes-unit").innerHTML = Math.trunc(time_of_day / SECONDS_PER_MINUTE);
	document.getElementById("seconds-unit").innerHTML = time_of_day % SECONDS_PER_MINUTE;

	setTimeout(tickCountdown, 100);
}
document.getElementById("btn-start").addEventListener("click", startCountdownTimer);
function startCountdownTimer() {
	let targetDateControl = document.getElementById("target-date");
	let targetTimeControl = document.getElementById("target-time");
	let btnStart = document.getElementById("btn-start");
	if (btnStart.value === "Start") {
		btnStart.value = "Stop";
		targetDateControl.disabled = targetTimeControl.disabled = true;
		tickCountdown();
	}
	else {
		btnStart.value = "Start";
		targetDateControl.disabled = targetTimeControl.disabled = false;
		//clearTimeout(tickCountdown);
	}
}
function tickCountdown() {
	if (document.getElementById("btn-start").value === "Start") return;
	let now = new Date();

	let targetDate = document.getElementById("target-date").valueAsDate;
	let targetTime = document.getElementById("target-time").valueAsDate;

	//Âûðàâíèâàåì ÷àñîâîé ïîÿñ:
	targetDate.setHours(targetDate.getHours() + targetDate.getTimezoneOffset() / 60);
	targetTime.setHours(targetTime.getHours() + targetTime.getTimezoneOffset() / 60);

	//Ñèíõðîíèçèðóåì öåëåâûóþ äàòó è âðåìÿ:
	targetTime.setFullYear(targetDate.getFullYear());
	targetTime.setMonth(targetDate.getMonth());
	targetTime.setDate(targetDate.getDate());

	let timestamp = targetTime - now;
	let duration = Math.trunc(timestamp / 1000);	//Truncation

	document.getElementById("target-date-value").innerHTML = targetDate;
	document.getElementById("target-time-value").innerHTML = targetTime;
	document.getElementById("timezone").innerHTML = targetTime.getTimezoneOffset();
	document.getElementById("duration").innerHTML = duration;
	document.getElementById("timestamp").innerHTML = timestamp;

	const SECONDS_PER_MINUTE = 60;
	const SECONDS_PER_HOUR = 3600;
	const SECONDS_PER_DAY = 86400;

	let time_of_day = duration % SECONDS_PER_DAY;

	document.getElementById("hours-unit").innerHTML = Math.trunc(time_of_day / SECONDS_PER_HOUR);
	time_of_day = time_of_day % SECONDS_PER_HOUR;
	document.getElementById("minutes-unit").innerHTML = Math.trunc(time_of_day / SECONDS_PER_MINUTE);
	document.getElementById("seconds-unit").innerHTML = time_of_day % SECONDS_PER_MINUTE;

	setTimeout(tickCountdown, 100);
}