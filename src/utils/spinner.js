"user strict";

import ora from "ora";

class Spinner {
  constructor(text) {
    // private member
    this.text = text;
  }

  start() {
    this.spinner = ora(this.text).start();
  }

  info(text) {
    this.spinner.info(text);
  }

  succeed(text) {
    this.spinner.succeed(text);
  }

  fail(text) {
    this.spinner.fail(text);
  }

  stop() {
    this.spinner.stop();
  }
}

export default Spinner;
