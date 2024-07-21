const LOGIN_NAV = '#login2';
const LOGIN_POPUP = '#logInModal';
const TITLE = '#logInModalLabel';
const USERNAME_LABEL = '#logInModal > div > div > div.modal-body > form > div:nth-child(1) > label';
const USERNAME_INPUT = '#loginusername';
const PASSWORD_LABEL = '#logInModal > div > div > div.modal-body > form > div:nth-child(2) > label';
const PASSWORD_INPUT = '#loginpassword';

const LOGIN_BTN = '#logInModal > div > div > div.modal-footer > button.btn.btn-primary';
const CLOSE_BTN= '#logInModal > div > div > div.modal-footer > button.btn.btn-secondary';
const XICON_CLOSE = '#logInModal > div > div > div.modal-header > button > span';
const LOGOUT_BTN = '#logout2';
const SIGNUP_NAV = '#signin2';
let alertStub;

class loginPage {
    static clickLoginOnNav = () => {
        cy.get(LOGIN_NAV).click();
        cy.wait(1000);
    }
    static verifyLoginPopupOpens = () => {
        cy.get(LOGIN_POPUP).should('have.css', 'display', 'block');
    }
    static verifyTitleDisplayOnLoginPopup = () => {
        cy.get(TITLE).should('contain.text','Log in');
    }
    static verifyInputFieldsVisibleOnLoginPopup = () => {
        cy.get(USERNAME_LABEL).should('contain.text','Username:');
        cy.get(USERNAME_INPUT).should('be.visible');
        cy.get(PASSWORD_LABEL).should('contain.text','Password:');
        cy.get(PASSWORD_INPUT).should('be.visible');
    }
    static verifyLoginBtnOnLoginPopupVisible = () => {
        cy.get(LOGIN_BTN).should('be.visible');
    }
    static verifyCloseBtnOnLoginPopupVisible = () => {
        cy.get(CLOSE_BTN).should('be.visible');
    }
    static veifyXIconOnLoginPopupVisible = () => {
        cy.get(XICON_CLOSE).should('be.visible');
    }
    static inputAccount = (username, password) => {
        if (username !=='') {
            cy.get(USERNAME_INPUT).type(username, {force: true, waitForAnimations: true});
        }
        if (password !=='') {
            cy.get(PASSWORD_INPUT).type(password, {force: true, waitForAnimations: true});
        }
        cy.wait(1000);
    }
    static clickLoginBtn = () => {
        cy.window().then((win) => {
            alertStub = cy.stub(win, 'alert').as('alertStub');
        });
    
        cy.get(LOGIN_BTN).click({force: true});
        cy.wait(1000);
    }
    static verifyLoginSucess = (username) => {
        cy.get('#nameofuser').should('contain.text', `Welcome ${username}`);
    }
    static errorMsgShow = (msg) => {
        cy.get('@alertStub').should('have.been.calledOnce').then((stub) => {
            const alertMsg = stub.getCall(0).args[0];
            expect(alertMsg).to.equal(msg);
        })
    }
    
    static clickCloseBtn = () => {
        cy.get(CLOSE_BTN).click({force: true});
        cy.wait(1000);
    }
    static verifyLoginPopupCloses = () => {
        cy.get(LOGIN_POPUP).should('have.css', 'display', 'none');
    }
    static clickXIcon = () => {
        cy.get(XICON_CLOSE).click({force: true});
        cy.wait(1000);
    }
    static clickLogoutBtn = () => {
        cy.get(LOGOUT_BTN).click({force: true});
        cy.wait(1000);
    }
    static verifyLogoutSuccess = () => {
        cy.get(LOGIN_NAV).should('have.css', 'display', 'block');
        cy.get(SIGNUP_NAV).should('have.css', 'display', 'block');
    }

}

export default loginPage;