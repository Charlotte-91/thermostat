$(document).ready(function () {
  var thermostat = new Thermostat();

  $("#temperature").text(thermostat.temperature);

  $("#temp-up").click(function () {
    thermostat.up();
    $("#temperature").text(thermostat.temperature);
  });
});
