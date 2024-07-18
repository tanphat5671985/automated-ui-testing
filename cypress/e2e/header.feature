Feature: Check header element
  I want to check all element in the header displays correctly.

Background: General Steps
  Given Navigate to the Home Page screen

    Scenario: Verify that the header displays correctly
        Then The title of the page displayed with the logo and brand in the tab browser
        And The logo and the brand on the header displays on the left of the page correctly
        And The 6 items on the navbar displayed sequentially and contain hyperlink

    Scenario: Verify that the user can redirect to Home Page by clicking the logo/brand at the header
        When Click on Logo and Brand on the header
        Then The screen is re-directed to Home Page

    Scenario: Verify that the item in the navbar is highlighted when the user hover
        When Hover a item on the navbar
        Then The item being hovered is highlighted