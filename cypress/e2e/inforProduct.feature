Feature: Check all element at the Information Product screen
  I want to check about the UI, function and data display at the Information Product screen.

Background: General Steps
    Given Navigate to the Home Page screen
    
    Scenario Outline: Verify that the elements display correctly at Information Product when user select a product
        When Select a "<productname>"
        Then The Information Product screen is opened
            And The image of "<productname>" displays correctly
            And The title of "<productname>" displays correctly
            And The price of "<productname>" displays accurately
            And The description of "<productname>" displays correctly
            And The Add to cart button is visible and displayed correctly
    Examples:
        |productname|
        |Samsung galaxy s6|
        |Nexus 6|

    Scenario Outline: Verify that the user can add a product to a cart successfully
        When Select a "<productname>"
        Then The Information Product screen is opened
            And All information product "<productname>" display correctly
        When Click Add to cart button
        Then Verify the success messsage displays correctly "Product added"
        When Navigate to the Cart screen
        Then Verify the table displays only a selected product "<productname>" correctly
            And Verify the total price is displayed accurately
    Examples:
        |productname|
        |Sony xperia z5|
        |HTC One M9|

    Scenario Outline: Verify the the user can add product to a many times successfully
        When Select a "<productname>"
        Then The Information Product screen is opened
            And All information product "<productname>" display correctly
        When Click Add to cart button
        Then Verify the success messsage displays correctly "Product added"
        When Click Add to cart button
        Then Verify the success messsage displays correctly "Product added"
        When Navigate to the Cart screen
        Then Verify the table displays the selected product "<productname>" with 2 row correctly
            And Verify the total price is displayed accurately
    Examples:
        |productname|
        |Iphone 6 32gb|
        |Nokia lumia 1520|