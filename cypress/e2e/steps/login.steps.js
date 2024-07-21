import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import loginPage from '../../pages/loginPage';

When('Click Login item on navbar', () => {
    loginPage.clickLoginOnNav();
});
Then('The Login popup is opened', () => {
    loginPage.verifyLoginPopupOpens();
});
Then('The title Login displays correctly', () => {
    loginPage.verifyTitleDisplayOnLoginPopup();
});
Then('The input fields at Login popup is visible', () => {
    loginPage.verifyInputFieldsVisibleOnLoginPopup();
});
Then('The Log in button at login popup is visible', () => {
    loginPage.verifyLoginBtnOnLoginPopupVisible();
});
Then('The Close button at login popup is visible', () => {
    loginPage.verifyCloseBtnOnLoginPopupVisible();
});
Then('The x icon at login popup is visible', () => {
    loginPage.veifyXIconOnLoginPopupVisible();
});

When('Input valid {string} and {string} fields on Login popup', (username, password) => {
    loginPage.inputAccount(username, password);
});
When('Click Login button on Login popup', () => {
    loginPage.clickLoginBtn();
});
Then('System direct to Homepage with {string} infor show on header', (username) => {
    loginPage.verifyLoginSucess(username);
});
When('Input invalid {string} and {string} fields on Login popup', (username, password) => {
    loginPage.inputAccount(username, password);
});
Then('An error message related to NOT existing user displays {string}',(msg)=>{
    loginPage.errorMsgShow(msg);
});

When('Input valid {string} and invalid {string} fields on Login popup', (username, password) => {
    loginPage.inputAccount(username, password);
});
Then('An error message related to invalid password displays {string}',(msg)=>{
    loginPage.errorMsgShow(msg);
});
When('Input {string} and {string} fields on Login popup', (username, password) => {
    loginPage.inputAccount(username, password);
});
Then('An error message related to empty field displays {string}',(msg)=>{
    loginPage.errorMsgShow(msg);
});
When('Click Close button on Login popup', ()=>{
    loginPage.clickCloseBtn();
});
Then('The Login popup is closed successfully', () => {
    loginPage.verifyLoginPopupCloses();
});
When('Click X icon on Login popup', () => {
    loginPage.clickXIcon();
});
When('Click Logout button on Homepage', () => {
    loginPage.clickLogoutBtn();
});
Then('System direct to Homepage with header display Login and Signup items', () => {
    loginPage.verifyLogoutSuccess();
})