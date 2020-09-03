"use strict;";

describe("Thermostat", function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function () {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("increases in temperature with up()", function () {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
  it("decreases in temperature with up()", function () {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("Has default min temperature of 10 degrees", function () {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }

    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it("Has maximum temperature of 25 in power saving mode", function () {
    for (var i = 0; i < 8; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it("Has maximum temperature of 32 in normal saving mode", function () {
    thermostat.powerSaving();
    for (var i = 0; i < 25; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });
});
