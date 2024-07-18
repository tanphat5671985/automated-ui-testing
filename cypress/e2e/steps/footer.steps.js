import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import commonPage from '../../pages/commonPage';

Given('Navigate to the Home Page screen', ()=>{
    cy.visit('/');
    cy.wait(1000);

});
Then('The 3 columns display sequentially information', ()=>{
    commonPage.verify3columnsAtFooter();
});

Then('The Brand Licensing displays with {string}', (data)=>{
    commonPage.verifyLicensing(data);
});

Then('The About us is displayed with: {string}',(data)=>{
    commonPage.verifyAboutUsfield(data);
});

Then('The Get In Touch is displayed',(datatable)=>{
    commonPage.verifyGetInTouchfield(datatable);
});

Then('The Logo and the Brand is displayed correctly',()=>{
    commonPage.verifyBrandFooter();
});

When('Click on any the field on the footer',()=>{
    commonPage.clickAnyfieldFooter();
});
Then('NO any action about redirect or reload',()=>{
    commonPage.verifyNOredirect();
})