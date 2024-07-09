Feature: Check all element at the cart screen
  I want to check about the UI, function and data display at the Cart screen

    Scenario: Verify that the elements display correctly when switch to Cart screen and the cart has a product
        Given The cart has 1 product
            And Navigate to the Cart screen
        Then The title 'Products' display above the table and on the left the page
            And  The table display the row and the column display correctly
            And The title 'Total' display above the Place Order button
            And The Place Order button displays and enable with green color

    Scenario: Verify that the elements display correctly when switch to Cart screen and the cart has NOT any product
        Given The cart has NOT any product
            And Navigate to the Cart screen
        Then The title 'Products' display above the table and on the left the page
            And  The table display the row and the column display correctly with empty product
            And The title 'Total' display above the Place Order button
            And The Place Order button displays and enable with green color
    
    Scenario Outline: Verify that the user purchase a product in the cart
        Given The cart has 1 product
            And Navigate to the Cart screen
        Then The table has 1 row as a product
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>" and "<Creditcard>"
            And Click on Purchase button
        Then The success message displays correctly <Name> and <Creditcard>
        When Click on OK button
        Then The message disappears and then the system redirects to home page screen
    
    Examples:
        | Name | Creditcard |
        | Tester | 110 |
        | !@#$% | *&^% |
        | 12554 | KJHGtrfđ |
        | ng4+_-+ | eg1+ |

    Scenario Outline: Verify that the user purchase a product with input full information
        Given The cart has 1 product
            And Navigate to the Cart screen
        Then The table has 1 row as a product
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>", "<Country>", "<City>", "<Creditcard>", "<Month>" and "<Year>"
            And Click on Purchase button
        Then The success message displays correctly <Name> and <Creditcard>
        When Click on OK button
        Then The message disappears and then the system redirects to home page screen
    
    Examples:
        | Name | Country | City | Creditcard | Month | Year |
        | Tester | Vietnam | Ho Chi Minh City | 0254| 09 | 2024 |
        | Tester123 | Viet nam | Ho Chi Minh City | 21hgfd| 09 | 2024 |
        



    Scenario Outline: Verify that the user purchase multiple product in the cart
        Given The cart has multiple products
            And Navigate to the Cart screen
        Then The table has 2 rows as 2 products
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>" and "<Creditcard>"
            And Click on Purchase button
        Then The success message displays correctly <Name> and <Creditcard>
        When Click on OK button
        Then The message disappears and then the system redirects to home page screen
    
    Examples:
        | Name | Creditcard |
        | Tester | 110 |
        | !@#$% | *&^% |
        | 12554 | KJHGtrfđ |
        | eng124+_-+ | e+_-+ |
    
    Scenario Outline: Verify that the user purchase a product in the cart but NOT fill out mandatory fields
        Given The cart has 1 product
            And Navigate to the Cart screen
        Then The table has 1 row as a product
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Input mandatory fields "<Name>" and "<Creditcard>"
            And Click on Purchase button
        Then The error message is displayed 'Please fill out Name and Creditcard.'

    Examples:
        |Name|Creditcard|
        |test||
        ||test|
        |||

    Scenario: Verify that the user order a product in the cart but NO click purchase
        Given The cart has 1 product
            And Navigate to the Cart screen
        Then The table has 1 row as a product
        When Click on Place Order button
        Then The Place order pop-up is opened
            And The pop-up displays include infor correctly
        When Click Close button
        Then The popup is disappeared and keep product at Cart screen

    @test
    Scenario: Verify that the user can delete a product in the cart
    Given The cart has multiple products
            And Navigate to the Cart screen
        Then The table has 2 rows as 2 products
            And The total price is displayed accurately
        When Click on Delete
        Then The table display correctly after deleting
            And The total price is displayed accurately

    Scenario: Verify that the user can delete a product to blank/empty cart
    Given The cart has 1 product
            And Navigate to the Cart screen
        Then The table has 1 row as a product
            And The total price is displayed accurately
        When Click on Delete
        Then The table has NOT any row
            And The total price is blanked