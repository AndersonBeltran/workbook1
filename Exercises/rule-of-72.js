"use strict";

var interestRateAsPercent = 5;
var interestRate = 5 / 100;

var yearsToDouble = 72 / interestRateAsPercent;
var amount = 0;
var principal = 50000;
var numberOfTimesCompounded = 12;
var timeInYears = yearsToDouble;



amount = principal * (1 + interestRate / numberOfTimesCompounded) ** (numberOfTimesCompounded * timeInYears);

let message =
  "At a " +
  interestRateAsPercent +
  "% interest rate, your savings account will be worth $" +
  Math.round(amount.toFixed(2)) +
  " in " +
  yearsToDouble +
  " years.";
console.log(message);