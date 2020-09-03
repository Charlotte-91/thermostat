$(document).ready(function () {
  var thermostat = new Thermostat();

  $("#temperature").text(thermostat.temperature);

  $('#usage').text(thermostat.usageText);

  $("#temp-up").click(function () {
    thermostat.up();
    $('#usage').text(thermostat.usageText);
    $("#temperature").text(thermostat.temperature);
  });
  $("#temp-down").click(function() {
    thermostat.down();
    $('#usage').text(thermostat.usageText);
    $("#temperature").text(thermostat.temperature);
  });
  $("#reset").click(function() {
    thermostat.reset();
    $('#usage').text(thermostat.usageText);
    $("#temperature").text(thermostat.temperature);
  });
  $("#power-saving").click(function() {
    thermostat.reset();
    $('#usage').text(thermostat.usageText);
    $("#temperature").text(thermostat.temperature);
    thermostat.powerSaving();
  });
  function colours() {
    if (thermostat.usageText == 'low-usage') {
      $('body').css('background','lightblue'); }
    else if (thermostat.usageText == 'medium-usage') {
      $('body').css('background','lightgreen'); }
    else {
    $('body').css('background','red'); }
    });
});

