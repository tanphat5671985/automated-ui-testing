Feature: Check Contact pop-up
  I want to check all element correctly.

Background: General Steps
  Given Navigate to the Home Page screen

    ##TEST CASE FOR UI ELEMENTS
    #CO_001
    Scenario: Verify that the elements display sucess when user open Contact Popup
      When Click Contact item on navbar
      Then The New message popup is opened
        And The title displays correctly
        And The input fields is visible
        And The Send message button at new message popup is visible
        And The Close button at new message popup is visible
        And The x icon at new message popup is visible
    ##TEST CASE FOR SENDING MESSAGE
    #CO_002
    Scenario Outline: Verify that the user can send a message successfully with input required fields
      When Click Contact item on navbar
      Then The New message popup is opened
      When Input "<contactEmail>", "<message>" fields
        And Click Send message button
      Then A success message displays "Thanks for the message!!"
    Examples:
        | contactEmail | message |
        | abc@gmail.com | Good service. |
    #CO_003
    Scenario Outline: Verify that the user can send a message successfully with input full fields
      When Click Contact item on navbar
      Then The New message popup is opened
      When Input "<contactEmail>", "<contactName>" and "<message>" fields
        And Click Send message button
      Then A success message displays "Thanks for the message!!"
    Examples:
        | contactEmail | contactName | message |
        | abc@gmail.com | Luân | Thanks! |
    #CO_004
    Scenario Outline: Verify that the user can NOT send a message with input only optional fields
      When Click Contact item on navbar
      Then The New message popup is opened
      When Input "<contactEmail>", "<contactName>" and "<message>" fields
        And Click Send message button
      Then An error message displays related to missing required fields "Request to enter Contact Email and Message!!"
    Examples:
        | contactEmail | contactName | message |
        |  | Luân | Good service. |
    #CO_005
    Scenario: Verify that the user can NOT send a message without inputting any fields
      When Click Contact item on navbar
      Then The New message popup is opened
      When Click Send message button
      Then An error message displays related to missing required fields "Request to enter Contact Email and Message!!"

    ##TEST CASE FOR CLOSE POPUP
    #CO_006
    Scenario Outline: Verify that the user can close popup by clicking Close button
      When Click Contact item on navbar
      Then The New message popup is opened
      When Input "<contactEmail>", "<contactName>" and "<message>" fields
        And Click Close button at new message popup
      Then The New message popup is closed successfully
    Examples:
        | contactEmail | contactName | message |
        | abc@gmail.com | Tester1 | Thanks! |
    #CO_007
    Scenario Outline: Verify that the user can close popup by clicking x icon
      When Click Contact item on navbar
      Then The New message popup is opened
      When Input "<contactEmail>", "<contactName>" and "<message>" fields
        And Click x icon at new message popup
      Then The New message popup is closed successfully
    Examples:
        | contactEmail | contactName | message |
        | abc@gmail.com | Tester1 | Thanks! |
    ##TEST CASE FOR VALIDATION
    #CO_009
    Scenario Outline: Validation the Contact Email field must be in the correct email format
      When Click Contact item on navbar
      Then The New message popup is opened
      When Input "<contactEmail>", "<message>" fields
        And Click Send message button
      Then Verify format email "<contactEmail>" & An error message related to the format email display "Invalid Email Contact!!"
    Examples:
        | contactEmail | message |
        | abc#gmail.com | Good service. |
        | abc#test.com | Good service. |
        | aajcmd | Good service. |
    #CO_010
    Scenario Outline: Validation the Contact Email field must NOT exceed 30 characters
      When Click Contact item on navbar
      Then The New message popup is opened
      When Input "<contactEmail>", "<message>" fields
        And Click Send message button
      Then Verify max-length of "<contactEmail>" field & An error message related to max-length email display "The maximum length of Contact Email is 30 characters!!"
    Examples:
        | contactEmail | message |
        | huynhtanluan1912200018050201vietnam@gmail.com | Good service. |
    #CO_011
    Scenario Outline: Validation the Contact Name field is free text
      When Click Contact item on navbar
      Then The New message popup is opened
      When Input "<contactEmail>", "<contactName>" and "<message>" fields
        And Click Send message button
      Then A success message displays "Thanks for the message!!"
    Examples:
        | contactEmail | contactName | message |
        | abc@gmail.com | ABODXJ | Thanks! |
        | abc@gmail.com | 126474 | Thanks! |
        | abc@gmail.com | !@#$%0.5-+/ | Thanks! |
        | abc@gmail.com | ABKJFKD2657*&^ | Thanks! |
    #CO_012
    Scenario Outline: Validation the Contact Name field must NOT exceed 25 characters
      When Click Contact item on navbar
      Then The New message popup is opened
      When Input "<contactEmail>", "<contactName>" and "<message>" fields
        And Click Send message button
      Then Verify max-length of "<contactName>" field & An error message related to max-length name display "The maximum length of Contact Name is 25 characters!!"
    Examples:
        | contactEmail | contactName | message |
        | abc@gmail.com | truongdaihoctonducthang2024 | Thanks! |
    #CO_013
    Scenario Outline: Validation the Message field is free text
      When Click Contact item on navbar
      Then The New message popup is opened
      When Input "<contactEmail>", "<contactName>" and "<message>" fields
        And Click Send message button
      Then A success message displays "Thanks for the message!!"
    Examples:
        | contactEmail | contactName | message |
        | abc@gmail.com | ABODXJ | Thanks for support !!!#$%^&*1255 |
    #CO_014
    Scenario Outline: Validation the Message field must NOT exceed 25 characters
      When Click Contact item on navbar
      Then The New message popup is opened
      When Input "<contactEmail>", "<contactName>" and "<message>" fields
        And Click Send message button
      Then Verify max-length of "<message>" field & An error message related to max-length message display "Maximum length of Message is 100 characters!!"
    Examples:
        | contactEmail | contactName | message |
        | abc@gmail.com | Tester2 | Thank you for listening to me about my personal opinion, I would like to know more information about some of your products. |
