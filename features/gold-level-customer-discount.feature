Feature: Gold level customer receives 15% discount on orders over $40
As a gold level customer
I want receive a 15% discount on orders over $40
So that I can save money

Scenario: Gold level customer with $50 in cart
Given I have a gold level customer
When their shopping cart totals $50 or more
Then they should receive a 15% discount off the total price

Scenario: Gold level customer with $200 in cart
Given I have a gold level customer
When their shopping cart totals $200 or more
Then they should receive a 15% discount off the total price

Scenario: Gold level customer with $30 in cart
Given I have a gold level customer
When their shopping cart totals $30 or more
Then they should not receive a 15% discount off the total price

Scenario: Normal level customer with $50 in cart
Given I have a normal level customer
When their shopping cart totals $50 or more
Then they should not receive a 15% discount off the total price