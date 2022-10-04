//10. Extended Clock

class Clock {
    constructor({ template }) {
      this.template = template;
    }

    render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log(output);
    }

    stop() {
      clearInterval(this.timer);
    }

    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }

console.log('\nQuestion 10:\n-----------')

class ExtendedClock extends Clock {
    constructor(options) {
      super(options);

      let precision = options.precision ? options.precision : 1000;
      //let { precision = 1000 } = options; //shorthand for the above

      this.precision = precision;
    }

    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };

  //constructor takes an object as single parameter, with properties for each individual value
  let extClock = new ExtendedClock({template: 'h:m:s', precision: 2000});
  extClock.render();
