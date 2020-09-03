"use strict;";

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.maxTemp = 25;
    this.powerSavingMode = true;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
    if (this.isMaximumTemp()) {
      return;
    }
    return (this.temperature += 1);
  }
  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    return (this.temperature -= 1);
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaximumTemp() {
    if (this.powerSavingMode) {
      this.maxTemp = 25;
      return this.temperature === this.maxTemp;
    }
    this.maxTemp = 32;
    return this.temperature === this.maxTemp;
  }

  powerSaving() {
    this.powerSavingMode === true
      ? (this.powerSavingMode = false)
      : (this.powerSavingMode = true);
  }
}
