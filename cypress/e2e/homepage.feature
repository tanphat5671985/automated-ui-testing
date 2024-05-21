Feature: Check all element at home page screen
  I want to check all element displays correctly.

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
    
