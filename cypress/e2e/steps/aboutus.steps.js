import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import aboutusPage from '../../pages/aboutusPage';

When('Click About us item on navbar', () => {
    aboutusPage.clickAboutus();
});

Then('The About us popup is opened', () => {
    aboutusPage.verifyPopupShow();
});
Then('The title display correctly', ()=>{
    aboutusPage.verifyTitle();
});
Then('Video display success', ()=>{
    aboutusPage.verifyExistVideo();
});
Then('The Close button is visible', ()=>{
    aboutusPage.verifyCloseBtn();
});
Then('The x icon is visible', ()=>{
    aboutusPage.verifyxIcon();
});
When('Click Close button',()=>{
    aboutusPage.clickCloseBtn();
});
When('Click x icon',()=>{
    aboutusPage.clickXIcon();
})

Then('The About us popup is closed',()=>{
    aboutusPage.verifyPopupCloses();
});