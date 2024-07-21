import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import contactPage from '../../pages/contactPage';

When('Click Contact item on navbar', ()=>{
    contactPage.clickContact();
});
Then('The New message popup is opened', ()=>{
    contactPage.verifyNewMessagePopupOpens();
});
Then('The title displays correctly', ()=>{
    contactPage.verifyTitleDisplayOnNewMsgPopup();
});
Then('The input fields is visible', ()=>{
    contactPage.verifyInputFieldsVisibleOnNewMsgPopup();
});
Then('The Send message button at new message popup is visible', ()=>{
    contactPage.verifySendMsgBtnOnNewMsgPopupVisible();
});
Then('The Close button at new message popup is visible', ()=>{
    contactPage.verifyCloseBtnOnNewMsgPopupVisible();
});
Then('The x icon at new message popup is visible', ()=>{
    contactPage.veifyXIconOnNewMsgPopupVisible();
});

When('Input {string}, {string} fields',(contactEmail, message)=>{
    contactPage.inputMandatoryFieldsOnNewMsgPopup(contactEmail,message);
});
//let alertStub;
When('Click Send message button',()=>{
    contactPage.clickSendMsgBtn();
});
Then('A success message displays {string}',(msg)=>{
    contactPage.verifySucessMsgOnNewMsgPopup(msg);
});
When('Input {string}, {string} and {string} fields',(contactEmail, contactName, message)=>{
    contactPage.inputFullFiedsOnNewMsgPopup(contactEmail, contactName, message);
});
Then('An error message displays related to missing required fields {string}', (msg)=>{
    contactPage.verifyErrMsgMissingFields(msg);
});
When('Click Close button at new message popup',()=>{
    contactPage.clickCloseBtnOnNewMsgPopup();
});
Then('The New message popup is closed successfully',()=>{
    contactPage.verifyNewMsgPopupCloses();
});
When('Click x icon at new message popup',()=>{
    contactPage.clickXIconOnNewMsgPopup();
});
Then('Verify format email {string} & An error message related to the format email display {string}',(contactEmail, msg) => {
    contactPage. verifyFormatEmail(contactEmail, msg);
});
Then('Verify max-length of {string} field & An error message related to max-length email display {string}',(contactEmail, msg)=>{
    contactPage.verifyMaxlengthEmailField(contactEmail, msg);
});
Then('Verify max-length of {string} field & An error message related to max-length name display {string}',(contactName, msg)=>{
    contactPage.verifyMaxlengthNameField(contactName, msg);
});
Then('Verify max-length of {string} field & An error message related to max-length message display {string}',(message, msg)=>{
    contactPage.verifyMaxlengthMessageField(message, msg);
});