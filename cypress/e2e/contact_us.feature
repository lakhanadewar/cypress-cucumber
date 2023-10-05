Feature: Validate contact us page of webdriveruniversity

    Background: pre-conditions
        Given I visit to webdriveruniversity homepage
        When I click on contact us button


    Scenario: Validate a success submission of contact us form
        And I type First name
        And I type Last name
        And I type Email address
        And I type a comment message
        And I click on Submit button
        Then I should presented by a successfull submission of contact us message

    Scenario: Invalid submission of contact us form
        And I type First name
        And I type Last name
        And I type a comment message
        And I click on Submit button
        Then I should presented by a unsuccessfull submission of contact us message

    Scenario: Validate a success submission of contact us form - using regular expression
        And I type specific First name "John"
        And I type specific Last name "Wick"
        And I type specific Email address "john.wick@example.com"
        And I type specific comment message "Hi This is john wick." and number 77878
        And I click on Submit button
        Then I should presented by a successfull submission of contact us message

    Scenario Outline: Validate Contact us submission
        And I type first name <firstName> and last name '<lastName>'
        And I type '<emailAddress>' and '<comment>'
        And I click on Submit button
        Then I should presented with '<message>'

        Examples:
            | firstName | lastName | emailAddress            | comment                            | message                      |
            | John      | Walter   | john.walter@ezample.com | Hello how are you?                 | Thank You for your Message!  |
            | Ethan     | Hunt     | ethan.hunt              | Hello have you worked on cucumber? | Error: Invalid email address |