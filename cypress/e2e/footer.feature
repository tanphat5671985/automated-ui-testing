Feature: Check footer element
  I want to check all element in the footer displays correctly.

Background: General Steps
  Given Navigate to the Home Page screen

    Scenario: Verify that the footer displays correctly at the bottom
        Then The 3 columns display sequentially information
        And The Brand Licensing displays with 'Copyright © Product Store 2017'

    Scenario: Verify that the information on the 3 columns footer displayed accurately
        Then The 3 columns display sequentially information
        And The About us is displayed with: 'We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.'
        And The Get In Touch is displayed
        |data|
        |Address: 2390 El Camino Real|
        |Phone: +440 123456|
        |Email: demo@blazemeter.com|
        And The Logo and the Brand is displayed correctly

    Scenario: Verify user can NOT click any item on the footer   
        When Click on any the field on the footer
        Then NO any action about redirect or reload