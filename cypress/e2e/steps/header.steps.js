import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import commonPage from '../../pages/commonPage';


Given('Navigate to the Home Page screen', ()=>{
    cy.visit('/');
    cy.wait(1000);

});
Then('The title of the page displayed with the logo and brand in the tab browser', ()=>{
    cy.title().should('eq','STORE');
});
Then('The logo and the brand on the header displays on the left of the page correctly', ()=>{
    commonPage.verifyNavBrand();
});
Then('The 6 items on the navbar displayed sequentially and contain hyperlink', ()=>{
    commonPage.verifyNavItemsDisplay();
});

When('Click on Logo and Brand on the header',()=>{
    commonPage.clickBrandOnNav();
});

Then('The screen is re-directed to Home Page',()=>{
    commonPage.verifyRedirectHomePg();
});

When('Hover a item on the navbar',()=>{
    commonPage.hoverItemInNav();
})

Then('The item being hovered is highlighted',()=>{
    commonPage.verifyHoverItemInNav();
})
