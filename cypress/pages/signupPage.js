const SIGNUP_NAV = '#signin2';
const SIGNUP_POPUP = '#signInModal';
const TITLE = '#signInModalLabel';
const USERNAME_LABEL = '#signInModal > div > div > div.modal-body > form > div:nth-child(1) > label';
const USERNAME_INPUT = '#sign-username';
const PASSWORD_LABEL = '#signInModal > div > div > div.modal-body > form > div:nth-child(2) > label';
const PASSWORD_INPUT = '#sign-password';

const Signup_BTN = '#signInModal > div > div > div.modal-footer > button.btn.btn-primary';
const CLOSE_BTN = '#signInModal > div > div > div.modal-footer > button.btn.btn-secondary';
const XICON_CLOSE = '#signInModal > div > div > div.modal-header > button > span';

let alertStub;

class signupPage {
    static clickSignupOnNav = () => {
        cy.get(SIGNUP_NAV).click();
        cy.wait(1000);
    }
    static verifySignupPopupOpens = () => {
        cy.get(SIGNUP_POPUP).should('have.css', 'display', 'block');
    }
    static verifyTitleDisplayOnSignupPopup = () => {
        cy.get(TITLE).should('contain.text','Sign up');
    }
    static verifyInputFieldsVisibleOnSignupPopup = () => {
        cy.get(USERNAME_LABEL).should('contain.text','Username:');
        cy.get(USERNAME_INPUT).should('be.visible');
        cy.get(PASSWORD_LABEL).should('contain.text','Password:');
        cy.get(PASSWORD_INPUT).should('be.visible');
    }
    static verifySignupBtnOnSignupPopupVisible = () => {
        cy.get(Signup_BTN).should('be.visible');
    }
    static verifyCloseBtnOnSignupPopupVisible = () => {
        cy.get(CLOSE_BTN).should('be.visible');
    }
    static veifyXIconOnSignupPopupVisible = () => {
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
    static clickSignupBtn = () => {
        cy.window().then((win) => {
            alertStub = cy.stub(win, 'alert').as('alertStub');
        });
    
        cy.get(Signup_BTN).click({force: true});
        cy.wait(1000);
    }
    static verifySucessMsg = (msg) => {
        cy.get('@alertStub').should('have.been.calledOnce').then((stub) => {
            const alertMsg = stub.getCall(0).args[0];
            expect(alertMsg).to.equal(msg);
        });
    }
    static verifyErrorMsg = (msg) => {
        cy.get('@alertStub').should('have.been.calledOnce').then((stub) => {
            const alertMsg = stub.getCall(0).args[0];
            expect(alertMsg).to.equal(msg);
        });
    }
    static verifyMaxlengthUsername = (username, msg) => {
        const lengthOfUsername = username.length;
        if (lengthOfUsername > 20) {
            cy.get('@alertStub').should('have.been.calledOnce').then((stub) => {
                const alertMsg = stub.getCall(0).args[0];
                expect(alertMsg).to.equal(msg);
            })
        }
        else {
            return;
        }
    }
    static verifyMaxlengthPassword = (password, msg) => {
        const lengthOfPassword = password.length;
        if (lengthOfPassword > 8) {
            cy.get('@alertStub').should('have.been.calledOnce').then((stub) => {
                const alertMsg = stub.getCall(0).args[0];
                expect(alertMsg).to.equal(msg);
            })
        }
        else {
            return;
        }
    }

    static clickCloseBtn = () => {
        cy.get(CLOSE_BTN).click({force: true});
        cy.wait(1000);
    }
    static verifySignupPopupCloses = () => {
        cy.get(SIGNUP_POPUP).should('have.css', 'display', 'none');
    }
    static clickXIcon = () => {
        cy.get(XICON_CLOSE).click({force: true});
        cy.wait(1000);
    }
}

export default signupPage;