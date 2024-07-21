import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import signupPage from '../../pages/signupPage';

When('Click Signup item on navbar', () => {
    signupPage.clickSignupOnNav();
});
Then('The Signup popup is opened', () => {
    signupPage.verifySignupPopupOpens();
});
Then('The title Signup displays correctly', () => {
    signupPage.verifyTitleDisplayOnSignupPopup();
});
Then('The input fields at Signup popup is visible', () => {
    signupPage.verifyInputFieldsVisibleOnSignupPopup();
});
Then('The Sign up button at Signup popup is visible', () => {
    signupPage.verifySignupBtnOnSignupPopupVisible();
});
Then('The Close button at Signup popup is visible', () => {
    signupPage.verifyCloseBtnOnSignupPopupVisible();
});
Then('The x icon at Signup popup is visible', () => {
    signupPage.veifyXIconOnSignupPopupVisible();
});

When('Input {string} and {string} fields on Signup popup', (username, password) => {
    signupPage.inputAccount(username, password);
});
When('Click Signup button on Signup popup', () => {
    signupPage.clickSignupBtn();
});
Then('A success message displays {string}', (msg) => {
    signupPage.verifySucessMsg(msg);
});
Then('An error message displays {string}', (msg) => {
    signupPage.verifyErrorMsg(msg);
});
Then('Verify max-length of {string} field & An error message related to max-length username display {string}',(username, msg)=> {
    signupPage.verifyMaxlengthUsername(username, msg);
});
Then('Verify max-length of {string} field & An error message related to max-length password display {string}',(password, msg)=> {
    signupPage.verifyMaxlengthPassword(password, msg);
});
When('Click Close button on Signup popup', ()=> {
    signupPage.clickCloseBtn();
});
When('Click x icon on Signup popup',()=>{
    signupPage.clickXIcon();
});
Then('The Signup popup is closed successfully',()=>{
    signupPage.verifySignupPopupCloses();
})