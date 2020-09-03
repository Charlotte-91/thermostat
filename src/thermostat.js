"use strict;";

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.maxTemp = 25;
    this.powerSavingMode = true;
    this.usageText = 'medium-usage'
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
    if (this.isMaximumTemp()) {
      return;
    }
    (this.temperature += 1);
    this.usage();
  }
  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    (this.temperature -= 1);
    this.usage();
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

  reset() {
    (this.temperature = 20);
    this.usage();
  }

  usage() {
    if (this.temperature < 18){
      this.usageText = 'low-usage'
    }
    else if (this.temperature > 25 ){
      this.usageText = 'high-usage'
    }
    else {
      this.usageText = 'medium-usage'
    }
  }
}
