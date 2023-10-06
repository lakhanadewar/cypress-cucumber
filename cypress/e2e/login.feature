@login @regression
Feature: validate the login

    Scenario Outline: validate logins with different credentials
        Given I visit to webdriveruniversity homepage
        And I click on login button
        And I type a '<username>' and '<password>' on login screen
        And I click Login button
        Then I should presented with alert '<messsage>'

        Examples:
            | username  | password     | messsage             |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | passw@rd     | validation failed    |