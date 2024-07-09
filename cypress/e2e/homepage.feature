Feature: Check all element at home page screen
  I want to check about the UI, function and data display at the Home Page screen

Background: General Steps
  Given Navigate to the Home Page screen

###TEST CASE SLIDESHOW
    Scenario: Verify that the slideshow displays correctly
        Then The slideshow display in the center of the page

    Scenario: Verify that the slideshow displays the 3 products sequentially automatically
        Then Slideshow displays a product for 3 seconds and switch to next product

    Scenario: Verify that the user can view the next product at slideshow by clicking a next icon
        When Click on a next icon next to slideshow
        Then A next product is displayed accurately

    Scenario: Verify that the user can view the previous product at slideshow by clicking a previous icon
        When Click on a previous icon next to slideshow
        Then A previous product is displayed accurately

    Scenario: Verify that the user can view the product at slideshow by clicking a carousel
        When Click on a carousel icon below slideshow
        Then A selected product is displayed accurately
###TEST CASE CATEGORY
    Scenario: Verify that categories menu displays correctly on the left page
        Then The CATEGORIES menu display the left of the page
        And The list of group product is displayed accurately

    Scenario: Verify that the user can view the specific list of products by clicking a Group Product in a Categories menu
        Then The CATEGORIES menu display the left of the page
        When Click on a Group Product on Categories menu
        Then The product list is changed according to the selected product group

    Scenario: Verify that the user can view the whole list of products by clicking Category menu
        Then The CATEGORIES menu display the left of the page
        When Click on a Group Product on Categories menu
        Then The product list is changed according to the selected product group
        When Click on CATEGORIES menu field
        Then The list of product displays correctly with all products
###TEST CASE PRODUCT CARD
    Scenario: Verify that the list of product card display correctly
        Then The list of product displays correctly with all products
    
    Scenario: Verify that the information of the product card is display correctly
        Then The card display information correctly

    Scenario: Verify that the title of the product card is underlined when the user hover
        Then The list of product displays correctly with all products
        When Hover any title of product card
        Then The title card is underlined

    Scenario: Verify that the user can redirect to an Information product screen when clicking a photo of the product 
        When Click on a Group Product on Categories menu
        Then The product list is changed according to the selected product group
        When Click on any photo of product card
        Then Redirect to an Information Product screen

    Scenario: Verify that the user can redirect to an Information product screen when clicking a title of the product 
        When Click on a Group Product on Categories menu
        Then The product list is changed according to the selected product group
        When Click on any title of product card
        Then Redirect to an Information Product screen
###TEST CASE PAGINATION
    Scenario: Verify the user can view next or previous page with whole products by cliking Next/Previous button 
        Then The list of product displays correctly with all products
        And The 2 buttons of pagination displays on the right and below list of cards
        When Click on Next button
        Then The next page displays with remaining product cards
        When Click on Previous button
        Then The previous page displays the list of first product cards
    