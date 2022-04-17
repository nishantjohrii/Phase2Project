$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature is used to design the Login function of the application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Login functionality with valid username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "Enter valid username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter valid password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should land on the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the SwagLab application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.launch_the_SwagLab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Login functionality with valid username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "Enter valid username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.enter_valid_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify the error message with invalid username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "Enter valid username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter invalid password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "error message appears \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secretsauce",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the SwagLab application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.launch_the_SwagLab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the error message with invalid username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "Enter valid username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.enter_valid_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter invalid password \"secretsauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_invalid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message appears \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.error_message_appears(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/product.feature");
formatter.feature({
  "name": "User is on the home page and validate the price of the products",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "User should be logged in successfully",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the swag application",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductSteps.user_has_launched_the_swag_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProductSteps.enter_the_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the price of the products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User is logged in successfully and is on products page",
  "keyword": "When "
});
formatter.match({
  "location": "ProductSteps.user_is_logged_in_successfully_and_is_on_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the product and its price",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack",
        "$29.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bike Light",
        "$9.99"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProductSteps.validate_the_product_and_its_price(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});