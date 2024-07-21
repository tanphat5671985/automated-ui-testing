import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import aboutusPage from '../../pages/aboutusPage';

When('Click About us item on navbar', () => {
    aboutusPage.clickAboutus();
});

Then('The About us popup is opened', () => {
    aboutusPage.verifyPopupShow();
});
Then('The title display at about us popup correctly', ()=>{
    aboutusPage.verifyTitle();
});
Then('Video display at about us popup success', ()=>{
    aboutusPage.verifyExistVideo();
});
Then('The Close button at about us popup is visible', ()=>{
    aboutusPage.verifyCloseBtn();
});
Then('The x icon at about us popup is visible', ()=>{
    aboutusPage.verifyxIcon();
});
When('Click Close button at about us popup',()=>{
    aboutusPage.clickCloseBtn();
});
When('Click x icon at about us popup',()=>{
    aboutusPage.clickXIcon();
})

Then('The About us popup is closed',()=>{
    aboutusPage.verifyPopupCloses();
});