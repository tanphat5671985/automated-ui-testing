const CONTACT_ITEM='#navbarExample > ul > li:nth-child(2) > a';
const NEWMSG_POPUP = '#exampleModal';
const TITLE = '#exampleModalLabel';
const EMAIL_LABEL = '#exampleModal > div > div > div.modal-body > form > div:nth-child(1) > label';
const EMAIL_INPUT = '#recipient-email';
const NAME_LABEL = '#exampleModal > div > div > div.modal-body > form > div:nth-child(2) > label';
const NAME_INPUT = '#recipient-name';
const MSG_LABEL = '#exampleModal > div > div > div.modal-body > form > div:nth-child(3) > label';
const MSG_INPUT = '#message-text';

const SENDMESSAGE_BTN = '#exampleModal > div > div > div.modal-footer > button.btn.btn-primary';
const CLOSE_BTN = '#exampleModal > div > div > div.modal-footer > button.btn.btn-secondary';
const XICON_CLOSE = '#exampleModal > div > div > div.modal-header > button > span';

let alertStub;
class contactPage {
    
    static clickContact = () =>{
        cy.get(CONTACT_ITEM).click();
        cy.wait(1000);
    }
    static verifyNewMessagePopupOpens = () =>{
        cy.get(NEWMSG_POPUP).should('have.css', 'display', 'block');
    }

    static verifyTitleDisplayOnNewMsgPopup = () =>{
        cy.get(TITLE).should('contain.text','New message');
    }
    static verifyInputFieldsVisibleOnNewMsgPopup = () =>{
        cy.get(EMAIL_LABEL).should('contain.text','Contact Email:');
        cy.get(EMAIL_INPUT).should('be.visible');
        cy.get(NAME_LABEL).should('contain.text','Contact Name:');
        cy.get(NAME_INPUT).should('be.visible');
        cy.get(MSG_LABEL).should('contain.text','Message:');
        cy.get(MSG_INPUT).should('be.visible');
    }
    static verifySendMsgBtnOnNewMsgPopupVisible = () => {
        cy.get(SENDMESSAGE_BTN).should('be.visible');
    }
    static verifyCloseBtnOnNewMsgPopupVisible = () => {
        cy.get(CLOSE_BTN).should('be.visible');
    }
    static veifyXIconOnNewMsgPopupVisible = () => {
        cy.get(XICON_CLOSE).should('be.visible');
    }
    static inputMandatoryFieldsOnNewMsgPopup = (contactEmail, message) => {
        if (contactEmail !=='') {
            cy.get(EMAIL_INPUT).type(contactEmail, {force: true, waitForAnimations: true});
        }
        if (message !=='') {
            cy.get(MSG_INPUT).type(message, {force: true, waitForAnimations: true});
        }
        cy.wait(1000);
    }

    static clickSendMsgBtn = () => {
        cy.window().then((win) => {
            alertStub = cy.stub(win, 'alert').as('alertStub');
        });
    
        cy.get(SENDMESSAGE_BTN).click({force: true});
        cy.wait(1000);
    }
    static verifySucessMsgOnNewMsgPopup = (msg) => {
        cy.get('@alertStub').should('have.been.calledOnce').then((stub) => {
            const alertMsg = stub.getCall(0).args[0];
    
            // So sánh nội dung của cảnh báo với msg
            expect(alertMsg).to.equal(msg);
        })
    }
    static inputFullFiedsOnNewMsgPopup = (contactEmail, contactName, message) => {
        if (contactEmail !=='') {
            cy.get(EMAIL_INPUT).type(contactEmail, {force: true, waitForAnimations: true});
        }
        if (contactName !=='') {
            cy.get(NAME_INPUT).type(contactName, {force: true, waitForAnimations: true});
        }
        if (message !=='') {
            cy.get(MSG_INPUT).type(message, {force: true, waitForAnimations: true});
        }
        cy.wait(1000);
    }
    static verifyErrMsgMissingFields = (msg) => {
        cy.get('@alertStub').should('have.been.calledOnce').then((stub) => {
            const alertMsg = stub.getCall(0).args[0];
    
            // So sánh nội dung của cảnh báo với msg
            expect(alertMsg).to.equal(msg);
        })
    }
    static clickCloseBtnOnNewMsgPopup = () => {
        cy.get(CLOSE_BTN).click({force: true});
        cy.wait(1000);
    }
    static verifyNewMsgPopupCloses = () => {
        cy.get(NEWMSG_POPUP).should('have.css', 'display', 'none');
    }
    static clickXIconOnNewMsgPopup = () => {
        cy.get(XICON_CLOSE).click({force: true});
        cy.wait(1000);
    }
    static verifyFormatEmail = (contactEmail, msg) => {
        const emailFormat = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailFormat.test(contactEmail)) {
            cy.get('@alertStub').should('have.been.calledOnce').then((stub) => {
                const alertMsg = stub.getCall(0).args[0];
        
                // So sánh nội dung của cảnh báo với msg
                expect(alertMsg).to.equal(msg);
            })
        }
        else {
            return;
        }
    }
    static verifyMaxlengthEmailField = (contactEmail, msg) => {
        const lengthOfEmail = contactEmail.length;
        if (lengthOfEmail > 30) {
            cy.get('@alertStub').should('have.been.calledOnce').then((stub) => {
                const alertMsg = stub.getCall(0).args[0];
        
                // So sánh nội dung của cảnh báo với msg
                expect(alertMsg).to.equal(msg);
            })
        }
        else {
            return;
        }
    }
    static verifyMaxlengthNameField = (contactName, msg) => {
        const lengthOfName = contactName.length;
        if (lengthOfName > 25) {
            cy.get('@alertStub').should('have.been.calledOnce').then((stub) => {
                const alertMsg = stub.getCall(0).args[0];
        
                // So sánh nội dung của cảnh báo với msg
                expect(alertMsg).to.equal(msg);
            })
        }
        else {
            return;
        }
    }
    static verifyMaxlengthMessageField = (message, msg) => {
        const lengthOfMessage = message.length;
        if (lengthOfMessage > 100) {
            cy.get('@alertStub').should('have.been.calledOnce').then((stub) => {
                const alertMsg = stub.getCall(0).args[0];
        
                // So sánh nội dung của cảnh báo với msg
                expect(alertMsg).to.equal(msg);
            })
        }
        else {
            return;
        }
    }



}

export default contactPage;