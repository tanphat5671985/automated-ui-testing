//get elements
const ABOUTUS_ITEM = '#navbarExample > ul > li:nth-child(3) > a';
const POPUP_FRAME = '#videoModal';
const TITLE = '#videoModal > div > div';
const VIDEO = '#example-video';
const CLOSE_BTN = '#videoModal > div > div > div.modal-footer > button';
const X_ICON = '#videoModal > div > div > div.modal-header > button > span';

class aboutusPage {
    
    static clickAboutus = () => {
        cy.get(ABOUTUS_ITEM).click();
        cy.wait(1000);
    }
    
    static verifyPopupShow = () => {
        cy.get(POPUP_FRAME).should('have.css', 'display', 'block');
    }
    static verifyTitle = () => {
        cy.get(TITLE).should('contain.text','About us');
    }
    static verifyExistVideo = () => {
        cy.get(VIDEO).should('be.visible');
    }
    static verifyCloseBtn = () => {
        cy.get(CLOSE_BTN).should('be.visible');
    }
    static verifyxIcon = () => {
        cy.get(X_ICON).should('be.visible');
    }
    static clickCloseBtn = () => {
        cy.get(CLOSE_BTN).click();
        cy.wait(1000);
    }
    static clickXIcon = () => {
        cy.get(X_ICON).click();
        cy.wait(1000);
    }
    static verifyPopupCloses = () =>{
        cy.get(POPUP_FRAME).should('have.css', 'display', 'none');
    }
}

export default aboutusPage;