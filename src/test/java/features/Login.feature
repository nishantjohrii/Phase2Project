Feature: This feature is used to design the Login function of the application

  Background: Open the application
    Given Launch the SwagLab application

  @Sanity
  Scenario Outline: Verify Login functionality with valid username and password
    When Enter valid username "<UserName>"
    And Enter valid password "<Password>"
    And click on login button
    Then user should land on the home page

    Examples: 
      | UserName      | Password     |
      | standard_user | secret_sauce |

  @Sanity
  Scenario Outline: Verify the error message with invalid username and password
    When Enter valid username "<UserName>"
    And Enter invalid password "<Password>"
    And click on login button
    Then error message appears "<Error>"

    Examples: 
      | UserName      | Password    | Error                                                                     |
      | standard_user | secretsauce | Epic sadface: Username and password do not match any user in this service |
