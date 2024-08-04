Feature: Check all element at the Information Product screen
  I want to check about the UI, function and data display at the Information Product screen.

Background: General Steps
    Given Navigate to the Home Page screen
    
###TEST CASE FOR HEADER
    #HP_001
    Scenario: Verify that the header displays correctly
        Given Navigate to the first Information Product screen
        Then The title of the page displayed with the logo and brand in the tab browser
            And The logo and the brand on the header displays on the left of the page correctly
            And The 6 items on the navbar displayed sequentially and contain hyperlink
    #HP_002
    Scenario: Verify that the user can redirect to Home Page by clicking the logo/brand at the header
        Given Navigate to the first Information Product screen
        When Click on Logo and Brand on the header
        Then The screen is re-directed to Home Page
    #HP_003
    Scenario: Verify that the item in the navbar is highlighted when the user hover
        Given Navigate to the first Information Product screen
        When Hover a item on the navbar
        Then The item being hovered is highlighted

###TEST CASE FOR FOOTER
    #HP_004
    Scenario: Verify that the footer displays correctly at the bottom
        Given Navigate to the first Information Product screen
        Then The 3 columns display sequentially information
        And The Brand Licensing displays with 'Copyright © Product Store 2017'
    #HP_005
    Scenario: Verify that the information on the 3 columns footer displayed accurately
        Given Navigate to the first Information Product screen
        Then The 3 columns display sequentially information
            And The About us is displayed with: 'We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.'
            And The Get In Touch is displayed
                |data|
                |Address: 2390 El Camino Real|
                |Phone: +440 123456|
                |Email: demo@blazemeter.com|
            And The Logo and the Brand is displayed correctly
    #HP_006
    Scenario: Verify user can NOT click any item on the footer   
        Given Navigate to the first Information Product screen
        When Click on any the field on the footer
        Then NO any action about redirect or reload

###TEST CASE FOR UI CHECK ELEMENTS DISPLAY
    #IP_001
    Scenario Outline: Verify the screen displays correctly UI without ant broken elements
        When Select a "<productname>"
        Then The Information Product screen is opened
            And The elements display successfully
    Examples:
        |productname|
        |Samsung galaxy s6|

###TEST CASE FOR INFORMATION PRODUCT UI 
    #IP_002
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
###TEST CASE FOR CART FUNCTION
    #IP_003
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
    #IP_004
    Scenario Outline: Verify the the user can add product to a many times successfully
        When Select a "<productname>"
        Then The Information Product screen is opened
            And All information product "<productname>" display correctly
        When Click Add to cart button
        When Click Add to cart button again
        When Navigate to the Cart screen
        Then Verify the table displays the selected product "<productname>" with 2 row correctly
            And Verify the total price is displayed accurately
    Examples:
        |productname|
        |Iphone 6 32gb|
        |Nokia lumia 1520|