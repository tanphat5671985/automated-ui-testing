//get all element from Cart page
const NAVTOCARTUI = '#cartur';
const TITLE_TABLE = '.col-lg-8';
const PRODUCT_TABLE = '.table-responsive';
const TOTAL_FIELD = '.col-lg-1';
const PLACEORDER_BTN = '.btn.btn-success';
const DATA_TABLE = '#tbodyid';
const PLACEORDER_POPUP = '#orderModal > div > div';
const DELETE_BTN = '#tbodyid > tr:nth-child(1) > td:nth-child(4) > a';
//PLACE ORDER POPUP
const POPUP_TITLE = '#orderModalLabel';
const POPUP_TOTAL = '#totalm';
const POPUP_INPUT_FIELDS_VALUE = [
    { label: 'Name:', nthChild: 2 },
    { label: 'Country:', nthChild: 3 },
    { label: 'City:', nthChild: 4 },
    { label: 'Credit card:', nthChild: 5 },
    { label: 'Month:', nthChild: 6 },
    { label: 'Year:', nthChild: 7 }];
const POPUP_CLOSE_BTN = '#orderModal > div > div > div.modal-footer > button.btn.btn-secondary';
const POPUP_PURCHASE_BTN = '#orderModal > div > div > div.modal-footer > button.btn.btn-primary';

const NAME_INPUT = '#orderModal > div > div > div.modal-body > form > div:nth-child(2)';
const COUNTRY_INPUT = '#orderModal > div > div > div.modal-body > form > div:nth-child(3)';
const CITY_INPUT = '#orderModal > div > div > div.modal-body > form > div:nth-child(4)';
const CREDITCARD_INPUT = '#orderModal > div > div > div.modal-body > form > div:nth-child(5)';
const MONTH_INPUT = '#orderModal > div > div > div.modal-body > form > div:nth-child(6)';
const YEAR_INPUT = '#orderModal > div > div > div.modal-body > form > div:nth-child(7)';
//Sucess Message
const SUCCESS_MSG = 'div.sweet-alert.showSweetAlert.visible';
const SUCCESS_MSG_OK_BTN = '.confirm.btn.btn-lg.btn-primary';
//TABLE
const ROW_DATA = '';

//common variable
let homepageUrl = 'https://demoblaze.com/index.html';
let numOfRows = 0;
let baseAPI = 'https://api.demoblaze.com/entries';
let totalPrice = 0;
let alertStub;
class cartPage{
    //al func steps, verify
    static navToCartUI = () =>{
        cy.get(NAVTOCARTUI).click();
        cy.wait(1000);
    }
    static verifyTitleTable = (data) => {
        cy.get(TITLE_TABLE).should('contain.text',data);
    }
    static verifyHeaderTable = ()=>{
        cy.get(PRODUCT_TABLE).within(()=>{
            cy.get('th').eq(0).should('contain', 'Pic');
            cy.get('th').eq(1).should('contain', 'Title');
            cy.get('th').eq(2).should('contain', 'Price');
            cy.get('th').eq(3).should('contain', 'x');
        });
    }
    static verifyDataTableWithARowData =(productname)=>{
        //verify data in the table
        cy.request('GET', baseAPI).then((response) => {
            const items = response.body.Items;
            const product = items.find(item => item.title === productname);
            //find title & compare <> API
            cy.log(product.title)
            cy.get('#tbodyid > tr > td:nth-child(2)').should('have.text',productname)
            //find img & compare <> API
            cy.wait(2000)
            cy.get('#tbodyid > tr > td:nth-child(1)').find('img').should('have.attr', 'src', product.img);
            //find price & compare <> API
            cy.get('#tbodyid > tr > td:nth-child(3)').invoke('text').then((text) => {
                const uiPrice = parseFloat(text.replace('$', '').split(' ')[0].trim());
                expect(uiPrice).to.eq(product.price);
            });
            //find delete btn
            cy.get(DELETE_BTN).should('be.visible');

            
        });
    }

    static verifyDataTableWithMultiRow =(productname1,productname2)=>{
        //verify data in the table
        cy.request('GET', baseAPI).then((response) => {
            const items = response.body.Items;
            const product1 = items.find(item => item.title === productname1);
            //find title & compare <> API
            cy.log(product1.title)
            cy.get('#tbodyid > tr:nth-child(1) > td:nth-child(2)').should('have.text', productname1)
            //find img & compare <> API
            cy.get('#tbodyid > tr:nth-child(1) > td:nth-child(1)').find('img').should('have.attr', 'src', product1.img);
            //find price & compare <> API
            cy.get('#tbodyid > tr:nth-child(1) > td:nth-child(3)').invoke('text').then((text) => {
                const uiPrice = parseFloat(text.replace('$', '').split(' ')[0].trim());
                expect(uiPrice).to.eq(product1.price);
            });
            
            const product2 = items.find(item => item.title === productname2);
            //find title & compare <> API
            cy.log(product2.title)
            cy.get('#tbodyid > tr:nth-child(2) > td:nth-child(2)').should('have.text', productname2)
            //find img & compare <> API
            cy.get('#tbodyid > tr:nth-child(2) > td:nth-child(1)').find('img').should('have.attr', 'src', product2.img);
            //find price & compare <> API
            cy.get('#tbodyid > tr:nth-child(2) > td:nth-child(3)').invoke('text').then((text) => {
                const uiPrice = parseFloat(text.replace('$', '').split(' ')[0].trim());
                expect(uiPrice).to.eq(product2.price);
            });
        });
    }

    static verifyTotalfield = (data)=>{
        cy.get(TOTAL_FIELD).should('contain.text',data);
        
    }

    static verifyPlaceOrderBtn = ()=>{
        cy.get(PLACEORDER_BTN).should('contain.text','Place Order');
        cy.get(PLACEORDER_BTN).should('have.css', 'background-color', 'rgb(92, 184, 92)');
    }
    static verifyEmptyTable = ()=>{
        cy.get(DATA_TABLE).within(() => {
            cy.get('td').should('not.exist');
        })
    }

    static verifyTablehas1Product = ()=>{
        cy.get('#tbodyid').within(() => {
            cy.get('tr').should('have.length', 1);
        })
    }
    static verifyTablehas2Products = ()=>{
        cy.get('#tbodyid').within(() => {
            cy.get('tr').should('have.length', 2);
        })
    }
    static clickPlaceOrderBtn = ()=>{
        cy.get(PLACEORDER_BTN).click();
    }
    static verifyPlaceOrderExist = () =>{
        cy.get(PLACEORDER_POPUP).should('exist');
    }
    static verifyTitlePopup = ()=>{
        cy.get(POPUP_TITLE).should('contain.text','Place order');
    }
    
    static verifyInputField = ()=>{
        POPUP_INPUT_FIELDS_VALUE.forEach(field =>{
            cy.get(`#orderModal > div > div > div.modal-body > form > div:nth-child(${field.nthChild})`).within(()=>{
                cy.get('label').should('contain.text', field.label);
                cy.get('input').should('exist');
            })
        }) 
    }
    static verifyCloseBtn = () => {
        cy.get(POPUP_CLOSE_BTN)
            .should('contain.text','Close')
            .and('have.css', 'background-color', 'rgb(255, 255, 255)');
    }
    static verifyPurchaseBtn = () => {
        cy.get(POPUP_PURCHASE_BTN)
            .should('contain.text','Purchase')
            .and('have.css', 'background-color', 'rgb(2, 117, 216)');
    }
    static inputMandatoryFields = (Name, Creditcard) => {
        if (Name !=='') {
            cy.get(NAME_INPUT).find('input').type(Name, {force: true, waitForAnimations: true});
        }
        if (Creditcard !== '') {
            cy.get(CREDITCARD_INPUT).find('input').type(Creditcard, {force: true, waitForAnimations: true});
        }
    }
    static inputFullInfor = (Name, Country, City, Creditcard, Month, Year)=>{
        if (Name !=='') {
            cy.get(NAME_INPUT).find('input').type(Name, {force: true, waitForAnimations: true});
        }
        if (Country !=='') {
            cy.get(COUNTRY_INPUT).find('input').type(Country, {force: true, waitForAnimations: true});
        }
        if (City !=='') {
            cy.get(CITY_INPUT).find('input').type(City, {force: true, waitForAnimations: true});
        }
        if (Creditcard !=='') {
            cy.get(CREDITCARD_INPUT).find('input').type(Creditcard, {force: true, waitForAnimations: true});
        }
        if (Month !=='') {
            cy.get(MONTH_INPUT).find('input').type(Month, {force: true, waitForAnimations: true});
        }
        if (Year !=='') {
            cy.get(YEAR_INPUT).find('input').type(Year, {force: true, waitForAnimations: true});
        }
        cy.wait(1000);
    }

    
    static clickPurchaseBtn = () =>{
        cy.window().then((win) => {
            alertStub = cy.stub(win, 'alert').as('alertStub');
        });
        cy.get(POPUP_PURCHASE_BTN).click({force: true});
    }
    static verifySucessMsg = (Name, Creditcard) =>{
        const today = new Date();
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-GB', options); // dd/mm/yyyy

        cy.get(SUCCESS_MSG).within(()=>{
            cy.get('h2').should('contain.text','Thank you for your purchase!');
            cy.get('p')
                .should('contain.text','Id:')
                // .and('contain.text','Amount: ')
                // .and('contain.text','Card Number: ')
                // .and('contain.text','Date: ')
                // .and('contain.text','Name: ')
                .and('contain.text', `Amount: ${totalPrice}`)
                .and('contain.text',`Card Number: ${Creditcard}`)
                .and('contain.text',`Name: ${Name}`)
                .and('contain.text',`Date: ${formattedDate}`); //get currrent date => FAILED
                
        })
    }
    static clickOKonSucessMsg = () =>{
        cy.get(SUCCESS_MSG_OK_BTN).click();
        cy.wait(2000);
    }
    static verifyRedictingToHomePage = () => {
        cy.url().then(() => {
            cy.location().should((location) => {
                expect(location.href).to.eq(homepageUrl);
            });
        });
    }
    static verifyErrorMissingMandatoryInput = (data) => {
        // cy.on('window:alert', (str) => {
        //     expect(str).to.equal(data);
        // });
        cy.get('@alertStub').should('have.been.calledOnce').then((stub) => {
            const alertMsg = stub.getCall(0).args[0];
    
            // So sánh nội dung của cảnh báo với msg
            expect(alertMsg).to.equal(data);
        })
    }
    static clickCloseBtn = () => {
        cy.wait(1000);
        cy.get(POPUP_CLOSE_BTN).click({force: true});
        cy.wait(2000);
    }
    static verifyPlaceOrderPopupClose = () => {
        cy.get('#orderModal').should('have.css', 'display', 'none');
    }
    
    static verifyTotalPriceValue = () => {
        //get total price from table
        let sumOfPrices = 0;

        //lấy số lg row
        cy.get('#tbodyid > tr').its('length').then(length => {
            numOfRows = length;
            //Nếu không có hàng nào, giữ nguyên gtri sumOfPrices là 0
            if (numOfRows === 0) {
                return;
            }
            //duyệt qua từng row và lấy td thứ 3 của mỗi row để tính total price
            for (let i = 1; i <= numOfRows; i++) {
                cy.get(`#tbodyid > tr:nth-child(${i}) > td:nth-child(3)`).then($cell => {
                    const price = parseFloat($cell.text());
                    sumOfPrices += price;
                });
            }
        }).then(() => {
            //check
            cy.log('Total price from table:', sumOfPrices);
            //Compare total từ UI <> Total từ table
            //let totalPrice;
            //verify with total at table
            cy.get('#totalp').then($el => {
                totalPrice =parseFloat($el.text());
                cy.log('Total from UI: ',totalPrice);
                expect(totalPrice).to.equal(sumOfPrices);
            });
        });
    }
    static clickDeleteBtn = () => {
        //click delete a first row
        cy.get(DELETE_BTN).click({force: true});
        cy.wait(2000);
    }
    static verifyTableAfterDeleting = () => {
        cy.get('#tbodyid > tr').its('length').then(length => {
            expect(length).to.equal(numOfRows-1);
        });
    }
    static verifyTotalBlank = () => {
        let totalPrice;
        cy.get('#totalp').then($el => {
            totalPrice =$el.text();
            cy.log('Total from UI must be empty/blank: ',totalPrice);
            expect(totalPrice).to.equal('')
        })
    }
    static verifyTotalOnPopup = () =>{
        cy.get(POPUP_TOTAL).should('contain.text',`Total: ${totalPrice}`)
    }
    static verifyErrorMsgShow = (data) => {
        // cy.on('window:alert', (alertText) => {
        //     expect(alertText).to.equal(data);
        // });
        // cy.get('@alertStub').should('have.been.calledOnce').then((stub) => {
        //     const alertMsg = stub.getCall(0).args[0];
    
        //     // So sánh nội dung của cảnh báo với msg
        //     expect(alertMsg).to.equal(data);
        // })
        cy.get(SUCCESS_MSG).within(()=>{
            cy.get('h2').should('contain.text', data);  
        })
    }
}

export default cartPage;