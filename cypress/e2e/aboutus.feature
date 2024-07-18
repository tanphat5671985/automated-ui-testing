Feature: Check About us pop-up
  I want to check all element correctly.

Background: General Steps
  Given Navigate to the Home Page screen

    Scenario: Verify that the elements display sucess when user open About us Popup
        When Click About us item on navbar
        Then The About us popup is opened
            And The title display correctly
            And Video display success
            And The Close button is visible
            And The x icon is visible
    
    Scenario: Verify that the user can close pop-up by click Close button
        When Click About us item on navbar
        Then The About us popup is opened
        When Click Close button
        Then The About us popup is closed
    Scenario: Verify that the user can close pop-up by click x icon
        When Click About us item on navbar
        Then The About us popup is opened
        When Click x icon
        Then The About us popup is closed