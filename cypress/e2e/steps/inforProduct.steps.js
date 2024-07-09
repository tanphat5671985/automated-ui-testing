import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import inforProductPage from '../../pages/inforProductPage';
import homePage from '../../pages/homePage';
import cartPage from '../../pages/cartPage';

before(()=>{
    cy.log('testing Information Product screen');
});

Given('Navigate to the Home Page screen', () => {
    cy.visit('/');
});

When('Select a {string}', (productname) => {
    homePage.selectAProduct(productname);
});

Then('The Information Product screen is opened', () => {
    cy.url().should('match', /https:\/\/demoblaze\.com\/prod\.html\?idp_=\d+/);
});

Then('The image of {string} displays correctly', (productname) => {
    inforProductPage.verifyImgProduct(productname);
});

Then('The title of {string} displays correctly', (productname) => {
    inforProductPage.verifyTitleProduct(productname);
});

Then('The price of {string} displays accurately', (productname) => {
    inforProductPage.verifyPriceProduct(productname);
});

Then('The description of {string} displays correctly', (productname) => {
    inforProductPage.verifyDescProduct(productname);
});

Then('The Add to cart button is visible and displayed correctly', () => {
    inforProductPage.verifyAddBtnVisible();
});

Then('All information product {string} display correctly', (productname) => {
    //verify again all information by using all func above
    inforProductPage.verifyImgProduct(productname);
    inforProductPage.verifyTitleProduct(productname);
    inforProductPage.verifyPriceProduct(productname);
    inforProductPage.verifyDescProduct(productname);
})

When('Click Add to cart button', () => {
    inforProductPage.clickAddProduct();
})

Then('Verify the success messsage displays correctly {string}', (msg) => {
    inforProductPage.verifySuccessMsg(msg);
})

When('Navigate to the Cart screen', () => {
    cartPage.navToCartUI();
})

Then('Verify the table displays only a selected product {string} correctly', (productname) => {
    cartPage.verifyTablehas1Product();
    //verify the name product on table must be match with input productname
    //cy.get('#tbodyid > tr:nth-child(1) > td:nth-child(2)').should('have.text', productname);
    inforProductPage.verifyNameProductIsMatchedAtCart(productname);

})

Then('Verify the table displays the selected product {string} with 2 row correctly', (productname) => {
    cartPage.verifyTablehas2Products();
    //verify the name product on table must be match with input productname
    inforProductPage.verifyNameProductIsMatchedAtCart(productname);
})

Then('Verify the total price is displayed accurately', () => {
    cartPage.verifyTotalPriceValue();
})