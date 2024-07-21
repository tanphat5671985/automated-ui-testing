import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../pages/homePage';
import inforProductPage from '../../pages/inforProductPage';
import cartPage from '../../pages/cartPage';

Given('The cart has a product as {string}', (productname)=>{
    cy.visit('/');
    homePage.clickAPhotoCard(productname);
    inforProductPage.clickAddProductAgain();
});

Given('The cart has multiple products as {string} and {string}', (productname1, productname2) => {
    cy.visit('/');
    homePage.clickAPhotoCard(productname1);
    inforProductPage.clickAddProductAgain();

    cy.visit('https://demoblaze.com/index.html');
    homePage.clickAPhotoCard(productname2);
    inforProductPage.clickAddProductAgain();
})

Given('Navigate to the Cart screen', ()=>{
    cy.visit('/');
    cartPage.navToCartUI();
});

Then('The title {string} display above the table and on the left the page',(data)=>{
    cartPage.verifyTitleTable(data);
});

Then('The table display the row {string} and the column display correctly',(productname)=>{
    cartPage.verifyHeaderTable();
    cartPage.verifyDataTableWithARowData(productname);
});

Then('The table display the row {string}, {string} and the column display correctly', (productname1,productname2)=>{
    cartPage.verifyHeaderTable();
    cartPage.verifyTablehas2Products();
    //cartPage.verifyDataTableWithMultiRow(productname1,productname2);
})

Then('The title {string} display above the Place Order button',(data)=>{
    cartPage.verifyTotalfield(data);
    cartPage.verifyTotalPriceValue();
});
Then('The title {string} display above the Place Order button and value is blanked',(data)=>{
    cartPage.verifyTotalfield(data);
    //cartPage.verifyTotalPriceValueIsBlanked();
    cartPage.verifyTotalBlank();
})
Then('The Place Order button displays and enable with green color',()=>{
    cartPage.verifyPlaceOrderBtn();
});

// Given('The cart has NOT any product',()=>{
//     cy.visit('/');
//     cartPage.verifyEmptyTable();
// });

Then('The table display the row and the column display correctly with empty product',()=>{
    cartPage.verifyHeaderTable();
    cartPage.verifyEmptyTable();
})

Then('The table has 1 row as a product',()=>{
    cartPage.verifyTablehas1Product();
})

When('Click on Place Order button',()=>{
    cartPage.clickPlaceOrderBtn();
})

Then('The Place order pop-up is opened',()=>{
    cartPage.verifyPlaceOrderExist();
})
Then('The pop-up displays include infor correctly',()=>{
    //check title pop-up
    cartPage.verifyTitlePopup();
    //check total price
    cartPage.verifyTotalOnPopup();
    //check input fields
    cartPage.verifyInputField();
    //check Close btn
    cartPage.verifyCloseBtn();
    //check Purchase btn
    cartPage.verifyPurchaseBtn();
})
When('Input mandatory fields {string} and {string}',(Name, Creditcard)=>{
    cartPage.inputMandatoryFields(Name,Creditcard);
})

When('Input mandatory fields {string}, {string}, {string}, {string}, {string} and {string}',(Name, Country, City, Creditcard, Month, Year)=>{
    cartPage.inputFullInfor(Name, Country, City, Creditcard, Month, Year);
})

When('Click on Purchase button',()=>{
    cartPage.clickPurchaseBtn();
})

Then('The success message displays correctly {} and {}',(Name, Creditcard)=>{
    cartPage.verifySucessMsg(Name, Creditcard)
})
When('Click on OK button',()=>{
    cartPage.clickOKonSucessMsg();
})
Then('The message disappears and then the system redirects to home page screen',()=>{
    cartPage.verifyRedictingToHomePage();
})

Given('The cart has multiple products', ()=>{
    //select a first product
    cy.visit('/');
    homePage.clickAnyPhotoCard();
    inforProductPage.clickAddProductAgain();
    //select a second product
    cy.visit('https://demoblaze.com/index.html');
    homePage.clickAnyPhotoCard();
    inforProductPage.clickAddProductAgain();

});

Then('The table has 2 rows as 2 products',()=>{
    cartPage.verifyTablehas2Products();
})

Then('The error message is displayed {string}',(data)=>{
    cartPage.verifyErrorMissingMandatoryInput(data);
})

When('Click Close button',()=>{
    cartPage.clickCloseBtn();
})

Then('The popup is disappeared and keep product at Cart screen',()=>{
    cartPage.verifyPlaceOrderPopupClose();
    cartPage.verifyTablehas1Product();
})

Then('The total price is displayed accurately',()=>{
    cartPage.verifyTotalPriceValue();
})

When('Click on Delete',()=>{
    cartPage.clickDeleteBtn();
})

Then('The table display correctly after deleting',()=>{
    cartPage.verifyTableAfterDeleting();
})

Then('The table has NOT any row',()=>{
    cartPage.verifyEmptyTable();
})

Then('The total price is blanked',()=>{
    cartPage.verifyTotalBlank();
})

Then('Verify the error message displays with {string}',(data) => {
    cartPage.verifyErrorMsgShow(data);
})