Feature: Check all element at the cart screen
  I want to check about the UI, function and data display at the Cart screen

###TEST CASE FOR HEADER
    Scenario: Verify that the header displays correctly
        Given Navigate to the Cart screen
        Then The title of the page displayed with the logo and brand in the tab browser
            And The logo and the brand on the header displays on the left of the page correctly
            And The 6 items on the navbar displayed sequentially and contain hyperlink

    Scenario: Verify that the user can redirect to Home Page by clicking the logo/brand at the header
        Given Navigate to the Cart screen
        When Click on Logo and Brand on the header
        Then The screen is re-directed to Home Page

    Scenario: Verify that the item in the navbar is highlighted when the user hover
        Given Navigate to the Cart screen
        When Hover a item on the navbar
        Then The item being hovered is highlighted

###TEST CASE FOR FOOTER
    Scenario: Verify that the footer displays correctly at the bottom
        Given Navigate to the Cart screen
        Then The 3 columns display sequentially information
            And The Brand Licensing displays with 'Copyright © Product Store 2017'

    Scenario: Verify that the information on the 3 columns footer displayed accurately
        Given Navigate to the Cart screen
        Then The 3 columns display sequentially information
            And The About us is displayed with: 'We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.'
            And The Get In Touch is displayed
        |data|
        |Address: 2390 El Camino Real|
        |Phone: +440 123456|
        |Email: demo@blazemeter.com|
            And The Logo and the Brand is displayed correctly

    Scenario: Verify user can NOT click any item on the footer   
        Given Navigate to the Cart screen
        When Click on any the field on the footer
        Then NO any action about redirect or reload

###TEST CASE TABLE 
    Scenario Outline: Verify that the UI elements display correctly when switch to Cart screen and the cart has a product
        Given The cart has a product as "<productname>"
            And Navigate to the Cart screen
        Then The title 'Products' display above the table and on the left the page
            And The table display the row "<productname>" and the column display correctly
            And The title 'Total' display above the Place Order button
            And The Place Order button displays and enable with green color
    Examples:
        |productname|
        |Sony xperia z5|

    Scenario Outline: Verify that the UI elements display correctly when switch to Cart screen and the cart has multiple products
        Given The cart has multiple products as "<productname1>" and "<productname2>"
            And Navigate to the Cart screen
        Then The title 'Products' display above the table and on the left the page
            And The table display the row "<productname1>", "<productname2>" and the column display correctly
            And The title 'Total' display above the Place Order button
            And The Place Order button displays and enable with green color
    Examples:
        |productname1|productname2|
        |Sony xperia z5|Iphone 6 32gb|

    Scenario: Verify that the UI elements display correctly when switch to Cart screen and the cart has NOT any product
        Given Navigate to the Cart screen
        Then The title 'Products' display above the table and on the left the page
            And The table display the row and the column display correctly with empty product
            And The title 'Total' display above the Place Order button and value is blanked
            And The Place Order button displays and enable with green color
###TEST CASE PURCHASE BUTTON
    Scenario Outline: Verify that the user purchase a product in the cart
        Given The cart has a product as "<productname>"
            And Navigate to the Cart screen
        Then The table display the row "<productname>" and the column display correctly
            And The total price is displayed accurately
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>" and "<Creditcard>"
            And Click on Purchase button
        Then The success message displays correctly <Name> and <Creditcard>
        When Click on OK button
        Then The message disappears and then the system redirects to home page screen
    
    Examples:
        |productname| Name | Creditcard |
        |Nokia lumia 1520| Tester | 110 |
        |Samsung galaxy s6| ng4+_-+ | eg1+ |

    Scenario Outline: Verify that the user purchase a product with input full information
        Given The cart has a product as "<productname>"
            And Navigate to the Cart screen
        Then The table display the row "<productname>" and the column display correctly
            And The total price is displayed accurately
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>", "<Country>", "<City>", "<Creditcard>", "<Month>" and "<Year>"
            And Click on Purchase button
        Then The success message displays correctly <Name> and <Creditcard>
        When Click on OK button
        Then The message disappears and then the system redirects to home page screen
    
    Examples:
        |productname| Name | Country | City | Creditcard | Month | Year |
        |Nokia lumia 1520| Tester | Vietnam | Ho Chi Minh City | 0254| 09 | 2024 |
        |Samsung galaxy s6| Tester123 | Viet nam | Ho Chi Minh City | 21hgfd| 09 | 2024 |
        
    Scenario Outline: Verify that the user purchase multiple product in the cart
        Given The cart has multiple products as "<productname1>" and "<productname2>"
            And Navigate to the Cart screen
        Then The table has 2 rows as 2 products
            And The total price is displayed accurately
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>" and "<Creditcard>"
            And Click on Purchase button
        Then The success message displays correctly <Name> and <Creditcard>
        When Click on OK button
        Then The message disappears and then the system redirects to home page screen
    
    Examples:
        |productname1|productname2| Name | Creditcard |
        |Nokia lumia 1520|Nokia lumia 1520| Tester | 110 |
        |Nexus 6|Nokia lumia 1520| eng124+_-+ | e+_-+ |
    
    Scenario Outline: Verify that the user purchase without any product in the cart
        Given Navigate to the Cart screen
        Then The table display the row and the column display correctly with empty product
        When Click on Place Order button
            And Input mandatory fields "<Name>" and "<Creditcard>"
            And Click on Purchase button
        Then Verify the error message displays with 'There are NOT any products in the cart!'
    Examples:
        |productname1|productname2| Name | Creditcard |
        |Nokia lumia 1520|Nokia lumia 1520| Tester | 110 |

    Scenario Outline: Verify that the user purchase a product in the cart but NOT fill out mandatory fields
        Given The cart has a product as "<productname>"
            And Navigate to the Cart screen
        Then The table display the row "<productname>" and the column display correctly
            And The total price is displayed accurately
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>" and "<Creditcard>"
            And Click on Purchase button
        Then The error message is displayed 'Please fill out Name and Creditcard.'
    Examples:
        |productname|Name|Creditcard|
        |HTC One M9|test||
        |Sony vaio i5||test|
        |Sony vaio i5|||

    Scenario Outline: Verify that the user order a product in the cart but NO click purchase
        Given The cart has a product as "<productname>"
            And Navigate to the Cart screen
        Then The table display the row "<productname>" and the column display correctly
            And The total price is displayed accurately
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Click Close button
        Then The popup is disappeared and keep product at Cart screen
    Examples:
        |productname|
        |Sony xperia z5|
###TEST CASE DELETE A PRODUCT
    Scenario Outline: Verify that the user can delete a product in the cart
        Given The cart has multiple products as "<productname1>" and "<productname2>"
            And Navigate to the Cart screen
        Then The table has 2 rows as 2 products
            And The total price is displayed accurately
        When Click on Delete
        Then The table display correctly after deleting
            And The total price is displayed accurately
    Examples:
        |productname1|productname2|
        |Sony xperia z5|Iphone 6 32gb|

    Scenario Outline: Verify that the user can delete a product to blank/empty cart
        Given The cart has a product as "<productname>"
            And Navigate to the Cart screen
        Then The table display the row "<productname>" and the column display correctly
            And The total price is displayed accurately
        When Click on Delete
        Then The table has NOT any row
            And The total price is blanked
    Examples:
        |productname|
        |Sony xperia z5|

    ###TEST CASE FOR VALIDATION ON PLACE ORDER POPUP
    Scenario Outline: Validation max-length of Name field must NOT 30 characters
        Given The cart has a product as "<productname>"
            And Navigate to the Cart screen
        Then The table display the row "<productname>" and the column display correctly
            And The total price is displayed accurately
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>", "<Country>", "<City>", "<Creditcard>", "<Month>" and "<Year>"
            And Click on Purchase button
        Then Verify max-length of "<Name>" field & An error message related to max-length Name display "The maximum length of Name is 30 characters!!"
    Examples:
        |productname| Name | Country | City | Creditcard | Month | Year |
        |Nokia lumia 1520| Tester 1256 barement abca Poker Num | Vietnam | Ho Chi Minh City | 0254| 09 | 2024 |

    Scenario Outline: Validation max-length of Name field must NOT 30 characters
        Given The cart has a product as "<productname>"
            And Navigate to the Cart screen
        Then The table display the row "<productname>" and the column display correctly
            And The total price is displayed accurately
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>", "<Country>", "<City>", "<Creditcard>", "<Month>" and "<Year>"
            And Click on Purchase button
        Then Verify max-length of "<Name>" field & An error message related to max-length Name display "The maximum length of Name is 30 characters!!"
    Examples:
        |productname| Name | Country | City | Creditcard | Month | Year |
        |Nokia lumia 1520| Tester 1256 barement abca Poker Num | Vietnam | Ho Chi Minh City | 0254| 09 | 2024 |

    Scenario Outline: Validation max-length of Country field must NOT 30 characters
        Given The cart has a product as "<productname>"
            And Navigate to the Cart screen
        Then The table display the row "<productname>" and the column display correctly
            And The total price is displayed accurately
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>", "<Country>", "<City>", "<Creditcard>", "<Month>" and "<Year>"
            And Click on Purchase button
        Then Verify max-length of "<Country>" field & An error message related to max-length Country display "The maximum length of Country is 30 characters!!"
    Examples:
        |productname| Name | Country | City | Creditcard | Month | Year |
        |Nokia lumia 1520| Tester | Vietnam 1256 barement abca Poker Number 156a | Ho Chi Minh City | 0254| 09 | 2024 |

    Scenario Outline: Validation max-length of City field must NOT 30 characters
        Given The cart has a product as "<productname>"
            And Navigate to the Cart screen
        Then The table display the row "<productname>" and the column display correctly
            And The total price is displayed accurately
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>", "<Country>", "<City>", "<Creditcard>", "<Month>" and "<Year>"
            And Click on Purchase button
        Then Verify max-length of "<City>" field & An error message related to max-length City display "The maximum length of City is 30 characters!!"
    Examples:
        |productname| Name | Country | City | Creditcard | Month | Year |
        |Nokia lumia 1520| Tester | Vietnam 1256 | Ho Chi Minh City barement abca Poker Number 156a | 0254| 09 | 2024 |

    Scenario Outline: Validation max-length of Creditcard field must NOT 19 characters
        Given The cart has a product as "<productname>"
            And Navigate to the Cart screen
        Then The table display the row "<productname>" and the column display correctly
            And The total price is displayed accurately
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>", "<Country>", "<City>", "<Creditcard>", "<Month>" and "<Year>"
            And Click on Purchase button
        Then Verify max-length of "<Creditcard>" field & An error message related to max-length Creditcard display "The maximum length of Creditcard is 19 characters!!"
    Examples:
        |productname| Name | Country | City | Creditcard | Month | Year |
        |Nokia lumia 1520| Tester | Vietnam 1256 | Ho Chi Minh City| 5261 4122 3000 9094 123 | 09 | 2024 |

    Scenario Outline: Validation max-length of Month field must NOT 2 characters and only allow number
        Given The cart has a product as "<productname>"
            And Navigate to the Cart screen
        Then The table display the row "<productname>" and the column display correctly
            And The total price is displayed accurately
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>", "<Country>", "<City>", "<Creditcard>", "<Month>" and "<Year>"
            And Click on Purchase button
        Then Verify "<Month>" field & An error message Month display "The maximum length of Month is 2 characters and only allow number!!"
    Examples:
        |productname| Name | Country | City | Creditcard | Month | Year |
        |Nokia lumia 1520| Tester | Vietnam 1256 | Ho Chi Minh City| 5261 4122 3000 9094 | 091 | 2024 |
        |Nokia lumia 1520| Tester | Vietnam 1256 | Ho Chi Minh City| 5261 4122 3000 9094 | bc | 2024 |

    Scenario Outline: Validation max-length of Year field must NOT 4 characters only allow number
        Given The cart has a product as "<productname>"
            And Navigate to the Cart screen
        Then The table display the row "<productname>" and the column display correctly
            And The total price is displayed accurately
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>", "<Country>", "<City>", "<Creditcard>", "<Month>" and "<Year>"
            And Click on Purchase button
        Then Verify "<Year>" field & An error message Year display "The maximum length of Month is 4 characters and only allow number!!"
    Examples:
        |productname| Name | Country | City | Creditcard | Month | Year |
        |Nokia lumia 1520| Tester | Vietnam 1256 | Ho Chi Minh City| 5261 4122 3000 9094 | 09 | 20245 |
        |Nokia lumia 1520| Tester | Vietnam 1256 | Ho Chi Minh City| 5261 4122 3000 9094 | 09 | 202@ |