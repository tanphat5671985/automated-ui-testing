Feature: Check all element at home page screen
  I want to check about the UI, function and data display at the Home Page screen

Background: General Steps
  Given Navigate to the Home Page screen
###TEST CASE FOR HEADER
    #HP_001
    Scenario: Verify that the header displays correctly
        Then The title of the page displayed with the logo and brand in the tab browser
        And The logo and the brand on the header displays on the left of the page correctly
        And The 6 items on the navbar displayed sequentially and contain hyperlink
    #HP_002
    Scenario: Verify that the user can redirect to Home Page by clicking the logo/brand at the header
        When Click on Logo and Brand on the header
        Then The screen is re-directed to Home Page
    #HP_003
    Scenario: Verify that the item in the navbar is highlighted when the user hover
        When Hover a item on the navbar
        Then The item being hovered is highlighted
###TEST CASE FOR FOOTER
    #HP_004
    Scenario: Verify that the footer displays correctly at the bottom
        Then The 3 columns display sequentially information
        And The Brand Licensing displays with 'Copyright © Product Store 2017'
    #HP_005
    Scenario: Verify that the information on the 3 columns footer displayed accurately
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
        When Click on any the field on the footer
        Then NO any action about redirect or reload
###TEST CASE SLIDESHOW
    #HP_007
    Scenario: Verify that the slideshow displays correctly
        Then The slideshow component displays in the center of the page
    #HP_008
    Scenario: Verify that the slideshow displays the 3 products sequentially automatically
        Then Slideshow displays a product for 5 seconds and switch to next product
    #HP_009
    Scenario: Verify that the user can view the next product at slideshow by clicking a next icon
        When Click on a next icon next to slideshow
        Then A next product is displayed accurately
    #HP_010
    Scenario: Verify that the user can view the previous product at slideshow by clicking a previous icon
        When Click on a previous icon next to slideshow
        Then A previous product is displayed accurately
    #HP_011
    Scenario: Verify that the user can view the product at slideshow by clicking a carousel
        When Click on any carousel icon below the slideshow
        Then A selected product is displayed accurately
###TEST CASE CATEGORY
    #HP_012
    Scenario: Verify that categories menu displays correctly
        Then The CATEGORIES menu display correctly
        And The list of group product is displayed accurately
    #HP_013
    Scenario Outline: Verify that the user can view the specific list of products by clicking a Group Product in a Categories menu
        Then The CATEGORIES menu display correctly
        When Click on a '<groupProduct>' on Categories menu
        Then The product list is changed according to the selected '<groupProduct>'
    Examples:
        |groupProduct|
        |Phones|
        |Laptops|
        |Monitors|
    #HP_014
    Scenario Outline: Verify that the user can view the whole list of products by clicking Category menu
        Then The CATEGORIES menu display correctly
        When Click on a '<groupProduct>' on Categories menu
        Then The product list is changed according to the selected '<groupProduct>'
        When Click on CATEGORIES menu field
        Then The list of product displays correctly with all products
    Examples:
        |groupProduct|
        |Phones|
        |Laptops|
        |Monitors|
###TEST CASE PRODUCT CARD
    #HP_015
    Scenario: Verify that the list of product card display correctly
        Then The list of product displays correctly with all products
    #HP_016
    Scenario: Verify that the information of the product card is display correctly
        Then The card display information correctly
    #HP_017
    Scenario: Verify that the title of the product card is underlined when the user hover
        Then The list of product displays correctly with all products
        When Hover over the title of the first product card
        Then The title card is underlined
    #HP_018
    Scenario Outline: Verify that the user can redirect to an Information product screen when clicking a photo of the product 
        When Click on a '<groupProduct>' on Categories menu
        Then The product list is changed according to the selected '<groupProduct>'
        When Click on a photo of '<productname>' card
        Then The Information Product screen is opened
            And The title of "<productname>" displays correctly
    Examples:
        |groupProduct|productname|
        |Phones|Nexus 6|
        |Laptops|Sony vaio i5|
    #HP_019
    Scenario Outline: Verify that the user can redirect to an Information product screen when clicking a title of the product 
        When Click on a '<groupProduct>' on Categories menu
        Then The product list is changed according to the selected '<groupProduct>'
        When Click on a title of '<productname>' card
        Then The Information Product screen is opened
            And The title of "<productname>" displays correctly
    Examples:
        |groupProduct|productname|
        |Phones|Nexus 6|
        |Laptops|Sony vaio i5|

###TEST CASE PAGINATION
    #HP_020
    Scenario: Verify the elements of pagination display success
        Then The 2 buttons of pagination displays on the right and below list of cards
            And The Next button is visible
            And The Previous button is not visible
    #HP_021
    Scenario: Verify the user can view next or previous page with whole products by cliking Next/Previous button 
        Then The list of product displays correctly with all products
            And The 2 buttons of pagination displays on the right and below list of cards
        When Click on Next button
        Then The next page displays with remaining product cards
        When Click on Previous button
        Then The previous page displays the list of first product cards
    #HP_022    
    Scenario Outline: Verify the elements of pagination must be hidden when number of products on a page is less thane 10
        When Click on a '<groupProduct>' on Categories menu
        Then The product list is changed according to the selected '<groupProduct>'
            And The 2 buttons of pagination displays on the right and below list of cards
            And The Next button is not visible
            And The Previous button is not visible
    Examples:
        |groupProduct|
        |Phones|