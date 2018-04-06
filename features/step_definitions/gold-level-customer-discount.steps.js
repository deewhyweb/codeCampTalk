'use strict';
var Customer = require('../../lib/customer');
var assert = require('assert');
var defineSupportCode = require('cucumber').defineSupportCode;
defineSupportCode(function(context) {
  var Given = context.Given;
  var When = context.When;
  var Then = context.Then;
  var Before = context.Before;
  var registerHandler = context.registerHandler;
  var customer;
  Given('I have a gold level customer', function () {
    customer = new Customer(true);
  });
 When('their shopping cart totals ${int} or more', function(int) {
   customer.addToCart({name: "widget", price: int});
 });
 Then('they should receive a {int}% discount off the total price', function(discount) {
  return 'pending';
 });
 Then('they should not receive a {int}% discount off the total price', function(discount) {
  return 'pending';
 });
});