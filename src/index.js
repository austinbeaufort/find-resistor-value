"use strict";
exports.__esModule = true;
var domIds_1 = require("./domIds");
var main = function () {
    domIds_1.form.addEventListener('submit', processForm);
};
var processForm = function (e) {
    e.preventDefault();
    var colors = getFormColors(e), resistorMessage = getMessageToAppend(colors);
    domIds_1.message.innerHTML = resistorMessage;
};
var getMessageToAppend = function (colors) {
    var _a = calculateResistorValues(colors), resistorValue = _a[0], lowValue = _a[1], highValue = _a[2], resistorMessage = "<h3>Resistor Value: " + resistorValue + "\u03A9.</h3><h3>Low Tolerance: " + lowValue.toFixed(2) + "\u03A9.</h3><h3>High Tolerance: " + highValue.toFixed(2) + "\u03A9.</h3>";
    return resistorMessage;
};
var calculateResistorValues = function (colors) {
    var tolerance = getTolerance(colors), multiplier = getMultiplier(colors), bandValue = getBandValue(colors), resistorValue = bandValue * multiplier, lowValue = resistorValue - (resistorValue * tolerance), highValue = resistorValue + (resistorValue * tolerance);
    return [resistorValue, lowValue, highValue];
};
var getBandValue = function (colors) {
    var bandColors = colors.length === 5 ? colors.slice(0, 4) : colors.slice(0, 3), bandString = bandColors.map(function (color) { return colorToBandValue(color); }).join(''), bandValue = parseInt(bandString);
    return bandValue;
};
var colorToBandValue = function (color) {
    var bandValue = color === 'black' ? '0' :
        color === 'brown' ? '1' :
            color === 'red' ? '2' :
                color === 'orange' ? '3' :
                    color === 'yellow' ? '4' :
                        color === 'green' ? '5' :
                            color === 'blue' ? '6' :
                                color === 'violet' ? '7' :
                                    color === 'grey' ? '8' : '9';
    return bandValue;
};
var getMultiplier = function (colors) {
    var multiplier = colors.length === 5 ? colorToMultiplier(colors[3]) : colorToMultiplier(colors[2]);
    return multiplier;
};
var colorToMultiplier = function (color) {
    var multiplier = color === 'black' ? Math.pow(10, 0) :
        color === 'brown' ? Math.pow(10, 1) :
            color === 'red' ? Math.pow(10, 2) :
                color === 'orange' ? Math.pow(10, 3) :
                    color === 'yellow' ? Math.pow(10, 4) :
                        color === 'green' ? Math.pow(10, 5) :
                            color === 'blue' ? Math.pow(10, 6) :
                                color === 'violet' ? Math.pow(10, 7) :
                                    color === 'grey' ? Math.pow(10, 8) :
                                        color === 'white' ? Math.pow(10, 9) :
                                            color === 'gold' ? .1 : .01;
    return multiplier;
};
var getTolerance = function (colors) {
    var tolerance = colors.length === 4 ? colorToTolerance(colors[3]) :
        colors.length === 5 ? colorToTolerance(colors[4]) : .2;
    return tolerance;
};
var colorToTolerance = function (color) {
    var tolerance = color === 'brown' ? .01 :
        color === 'red' ? .02 :
            color === 'green' ? .005 :
                color === 'blue' ? .0025 :
                    color === 'violet' ? .001 :
                        color === 'grey' ? .0005 :
                            color === 'gold' ? .05 : .1;
    return tolerance;
};
var getFormColors = function (e) {
    var formColors = [e.target[0], e.target[1], e.target[2], e.target[3], e.target[4]], colors = formColors.map(function (formColor) { return formColor.value; }), colors2 = colors.filter(function (color) { return color !== 'empty'; });
    return colors2;
};
exports["default"] = main;
