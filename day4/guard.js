export default class Guard {
  constructor({ id }) {
    this.minutesAsleep = 0;
    this.id = id;

    // 0 in array means awake
    // >= 1 means guard has slept n times that minute
    this.sleepHistory = [];
    
    // initialize array with zeros
    for (let i = 0; i < 60; i++) {
      this.sleepHistory[i] = 0;
    }
  }

  addMinutesAsleep(min) {
    this.minutesAsleep += min;
  }
}
