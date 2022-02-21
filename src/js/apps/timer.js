class CountDownTiner {
  refs = {};
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.refs.days = document.querySelector(`${selector} [data-value="days"]`);
    this.refs.hours = document.querySelector(`${selector} [data-value="hours"]`);
    this.refs.mins = document.querySelector(`${selector} [data-value="mins"]`);
    this.refs.secs = document.querySelector(`${selector} [data-value="secs"]`);
    this.updateTimer();
  }
  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = String(Math.floor(ms / day)).padStart(3, 0);
    // Remaining hours
    const hours = String(Math.floor((ms % day) / hour)).padStart(2, 0);
    // Remaining minutes
    const minutes = String(Math.floor(((ms % day) % hour) / minute)).padStart(2, 0);
    // Remaining seconds
    const seconds = String(Math.floor((((ms % day) % hour) % minute) / second)).padStart(2, 0);

    return { days, hours, minutes, seconds };
  }
  updateTimer() {
    setInterval(() => {
      const currentTime = Date.now();
      const delta = this.targetDate - currentTime;
      const { days, hours, minutes, seconds } = this.convertMs(delta);
      this.refs.days.textContent = days;
      this.refs.hours.textContent = hours;
      this.refs.mins.textContent = minutes;
      this.refs.secs.textContent = seconds;
    }, 1000);
  }
}

const timer = new CountDownTiner({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});
