'use strict';

const HealthStatusCode = require('./health_status_code');

class HealthStatus {

  constructor() {
    this.start();
  }

  getStatus() {
    return this.currentStatus;
  }

  start() {
    this.currentStatus = HealthStatusCode.STARTING;
  }

  up() {
    this.currentStatus = HealthStatusCode.UP;
  }

  down() {
    this.currentStatus = HealthStatusCode.DOWN;
  }

  stop() {
    this.currentStatus = HealthStatusCode.STOPPING;
  }

}

module.exports = HealthStatus;
