Feature: Check Sign up popup
  I want to check all element correctly.

Background: General Steps
  Given Navigate to the Home Page screen

    ##TEST CASE FOR UI ELEMENTS
    #SU_001
    Scenario: Verify that the elements display sucess when user open Signup Popup
      When Click Signup item on navbar
      Then The Signup popup is opened
        And The title Signup displays correctly
        And The input fields at Signup popup is visible
        And The Sign up button at Signup popup is visible
        And The Close button at Signup popup is visible
        And The x icon at Signup popup is visible

    ##TEST CASE FOR FUNC Signup phattest123
    #SU_002, SU_003
    Scenario Outline: Verify that the user can Signup successfully with valid username and password
        When Click Signup item on navbar
            And Input "<username>" and "<password>" fields on Signup popup
            And Click Signup button on Signup popup
        Then A success message displays "Sign up successful."
        Examples:
        | username | password |
        | phat7867# | 123x#$ |
    #SU_004
    Scenario Outline: Verify that the user can NOT Signup with username is existed
        When Click Signup item on navbar
            And Input "<username>" and "<password>" fields on Signup popup
            And Click Signup button on Signup popup
        Then An error message displays "This user already exist."
        Examples:
        | username | password |
        | phattest123  | a  |
    #SU_005, #SU_006, #SU_007
    Scenario Outline: Verify that the user can NOT Signup with empty/blank username or password
        When Click Signup item on navbar
            And Input "<username>" and "<password>" fields on Signup popup
            And Click Signup button on Signup popup
        Then An error message displays "Please fill out Username and Password."
        Examples:
        |username|password|
        |abcode||
        ||abcode|
        |||
    
    ##TEST CASE FOR VALIDATION
    #SU_008
    Scenario Outline: Validation the Username field must NOT exceed 20 characters
        When Click Signup item on navbar
            And Input "<username>" and "<password>" fields on Signup popup
            And Click Signup button on Signup popup
        Then Verify max-length of "<username>" field & An error message related to max-length username display "Maximum length of Username is 20 characters!"
        Examples:
        |username|password|
        |truongdaihoctonducthang|123456|
    #SU_009
    Scenario Outline: Validation the password field must NOT exceed 8 characters
        When Click Signup item on navbar
            And Input "<username>" and "<password>" fields on Signup popup
            And Click Signup button on Signup popup
        Then Verify max-length of "<password>" field & An error message related to max-length password display "Maximum length of password is 8 characters!"
        Examples:
        |username|password|
        |phat2000|12345686245|
    ##TEST CASE FOR CLOSE POPUP
    #SU_010
    Scenario Outline: Verify that the user can close Signup Popup by clicking Close button
        When Click Signup item on navbar
            And Input "<username>" and "<password>" fields on Signup popup
            And Click Close button on Signup popup
        Then The Signup popup is closed successfully
        Examples:
        |username|password|
        |phat2000|12345686245|
    #SU_011
    Scenario Outline: Verify that the user can close Signup Popup by clicking x icon
        When Click Signup item on navbar
            And Input "<username>" and "<password>" fields on Signup popup
            And Click x icon on Signup popup
        Then The Signup popup is closed successfully
        Examples:
        |username|password|
        |phat2000|12345686245|
