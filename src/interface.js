$(document).ready(function () {
  var thermostat = new Thermostat();

  $("#temperature").text(thermostat.temperature);

  $("#usage").text(thermostat.usageText);

  $("body").css("background", "lightgreen");

  $("#temp-up").click(function () {
    thermostat.up();
    $("#usage").text(thermostat.usageText);
    $("#temperature").text(thermostat.temperature);
    colours();
  });
  $("#temp-down").click(function () {
    thermostat.down();
    $("#usage").text(thermostat.usageText);
    $("#temperature").text(thermostat.temperature);
    colours();
  });
  $("#reset").click(function () {
    thermostat.reset();
    $("#usage").text(thermostat.usageText);
    $("#temperature").text(thermostat.temperature);
    colours();
  });
  $("#power-saving").click(function () {
    thermostat.reset();
    $("#usage").text(thermostat.usageText);
    $("#temperature").text(thermostat.temperature);
    thermostat.powerSaving();
    colours();
  });

  function colours() {
    if (thermostat.usageText == "low-usage") {
      $("body").css("background", "lightblue");
    } else if (thermostat.usageText == "medium-usage") {
      $("body").css("background", "lightgreen");
    } else {
      $("body").css("background", "orange");
    }
  }
});
