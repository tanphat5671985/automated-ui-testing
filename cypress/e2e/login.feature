Feature: Check Log in popup
  I want to check all element correctly.

Background: General Steps
  Given Navigate to the Home Page screen

    ##TEST CASE FOR UI ELEMENTS
    Scenario: Verify that the elements display sucess when user open Login Popup
      When Click Login item on navbar
      Then The Login popup is opened
        And The title Login displays correctly
        And The input fields at Login popup is visible
        And The Log in button at login popup is visible
        And The Close button at login popup is visible
        And The x icon at login popup is visible

    ##TEST CASE FOR FUNC LOGIN phattest123
    Scenario Outline: Verify that the user can login successfully with valid username and password
        When Click Login item on navbar
            And Input valid "<username>" and "<password>" fields on Login popup
            And Click Login button on Login popup
        Then System direct to Homepage with "<username>" infor show on header
    Examples:
        | username | password |
        | phattest123  | phattest123  |
        | luan#htl$ | 123x#$ |

    Scenario Outline: Verify that the user can NOT login with username is NOT existed
        When Click Login item on navbar
            And Input invalid "<username>" and "<password>" fields on Login popup
            And Click Login button on Login popup
        Then An error message related to NOT existing user displays "User does not exist."
    Examples:
        | username | password |
        | phattest789  | tester  |

    Scenario Outline: Verify that the user can NOT login with password is invalid
        When Click Login item on navbar
            And Input valid "<username>" and invalid "<password>" fields on Login popup
            And Click Login button on Login popup
        Then An error message related to invalid password displays "Wrong password."
    Examples:
        | username | password |
        | phattest123  | tester  |

    Scenario Outline: Verify that the user can NOT login with empty/blank username or password
        When Click Login item on navbar
            And Input "<username>" and "<password>" fields on Login popup
            And Click Login button on Login popup
        Then An error message related to empty field displays "Please fill out Username and Password."
    Examples:
        | username | password |
        | phattest123  |  |
        |  | phattest123 |
        |  |  |
    

    ##TEST CASE FOR CLOSE POPUP
    Scenario Outline: Verify that the user can close Login Popup by clicking Close button
        When Click Login item on navbar
            And Input "<username>" and "<password>" fields on Login popup
            And Click Close button on Login popup
        Then The Login popup is closed successfully

    Scenario Outline: Verify that the user can close Login Popup by clicking x icon
        When Click Login item on navbar
            And Input "<username>" and "<password>" fields on Login popup
            And Click X icon on Login popup
        Then The Login popup is closed successfully

    ##TEST CASE FOR LOGOUT FUNCTION
    Scenario Outline: Verify that the user can login successfully with valid username and password
        When Click Login item on navbar
            And Input valid "<username>" and "<password>" fields on Login popup
            And Click Login button on Login popup
            And Click Logout button on Homepage
        Then System direct to Homepage with header display Login and Signup items
    Examples:
        | username | password |
        | phattest123  | phattest123  |
