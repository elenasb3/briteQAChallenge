Feature: Number of tentacles input validation

# Happy path

  Scenario: Values 10-100 should be accepted
    Given User is on Tentacles home page
    When User enters "50" in the tentacles field
    And User clicks on the Send button
    Then "Success" message should be displayed

  Scenario: Minimum valid value should be accepted
    Given User is on Tentacles home page
    When User enters "10" in the tentacles field
    And User clicks on the Send button
    Then "Success" message should be displayed

  Scenario: Maximum valid value should be accepted
    Given User is on Tentacles home page
    When User enters "100" in the tentacles field
    And User clicks on the Send button
    Then "Success" message should be displayed

# Negative cases
  Scenario: Negative values should not be accepted
    Given User is on Tentacles home page
    When User enters "-10" in the tentacles field
    And User clicks on the Send button
    Then "Error" message should be displayed

  Scenario: Values below minimum should not be accepted
    Given User is on Tentacles home page
    When User enters "3" in the tentacles field
    And User clicks on the Send button
    Then "Error" message should be displayed

  Scenario: Values above maximum should not be accepted
    Given User is on Tentacles home page
    When User enters "120" in the tentacles field
    And User clicks on the Send button
    Then "Error" message should be displayed

# Input type validation
  
  Scenario: Input field should not be empty
    Given User is on Tentacles home page
    When User leaves the tentacles field empty
    And User clicks on the Send button
    Then Nothing should happen

  Scenario: Non-numeric values should not be allowed
    Given User is on Tentacles home page
    When User tries to enter "test" in the tentacles field
    Then Input field should keep empty
    And User clicks on the Send button
    Then Nothing should happen
 