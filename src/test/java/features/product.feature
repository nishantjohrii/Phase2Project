Feature: User is on the home page and validate the price of the products

  Background: User should be logged in successfully
    Given User has launched the swag application
    When Enter the username "standard_user" and password "secret_sauce"
    And Click on login button

  @Regression
  Scenario: Verify the price of the products
    When User is logged in successfully and is on products page
    Then Validate the product and its price
      | Sauce Labs Backpack   | $29.99 |
      | Sauce Labs Bike Light | $9.99  |
