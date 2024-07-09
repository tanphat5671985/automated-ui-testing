import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../pages/homePage';
import inforProductPage from '../../pages/inforProductPage';
import cartPage from '../../pages/cartPage';

beforeEach(()=>{
    cy.log('test cart page');
})

Given('The cart has 1 product', ()=>{
    cy.visit('/');
    homePage.clickAnyPhotoCard();
    // cy.get('.btn.btn-success.btn-lg').click();
    // cy.wait(2000)
    inforProductPage.clickAddProduct();
});

Given('Navigate to the Cart screen', ()=>{
    // cy.get('#cartur').click();
    // cy.wait(1000);
    cartPage.navToCartUI();
});

Then('The title {string} display above the table and on the left the page',(data)=>{
    // cy.get('.col-lg-8').should('contain.text',data)
    cartPage.verifyTitleTable(data);
});

Then('The table display the row and the column display correctly',()=>{
//     cy.get('.table-responsive').within(()=>{
//         cy.get('th').eq(0).should('contain', 'Pic')
//         cy.get('th').eq(1).should('contain', 'Title')
//         cy.get('th').eq(2).should('contain', 'Price')
//         cy.get('th').eq(3).should('contain', 'x')
//     });
//     /*
//     cy.get('#tbodyid').within(() => {
//         cy.get('td').eq(0).should('be.exist', 'img')
//         cy.get('td').eq(1).should('contain', 'Samsung galaxy s6')
//         cy.get('td').eq(2).should('contain', '360')
//         cy.get('td').eq(3).should('contain', 'Delete')
//     });
//     */
//    
    cartPage.verifyHeaderTable();
    //compara data UI <> API
    cartPage.verifyDataTable();
});

Then('The title {string} display above the Place Order button',(data)=>{
    // cy.get('.col-lg-1').should('contain.text',data)
    // cy.get('#totalp').should('exist')
    cartPage.verifyTotalfield(data);
});
Then('The Place Order button displays and enable with green color',()=>{
    // cy.get('.btn.btn-success').should('contain.text','Place Order')
    // cy.get('.btn.btn-success').should('have.css', 'background-color', 'rgb(92, 184, 92)');
    cartPage.verifyPlaceOrderBtn();
});

Given('The cart has NOT any product',()=>{
    cy.visit('/');
    // cy.get('#tbodyid').within(() => {
    //     cy.get('td').should('not.exist', 'img')
    // })
    cartPage.verifyEmptyTable();
});

Then('The table display the row and the column display correctly with empty product',()=>{
    // cy.get('.table-responsive').within(()=>{
    //     cy.get('th').eq(0).should('contain', 'Pic')
    //     cy.get('th').eq(1).should('contain', 'Title')
    //     cy.get('th').eq(2).should('contain', 'Price')
    //     cy.get('th').eq(3).should('contain', 'x')
    // });
    cartPage.verifyHeaderTable();
    // cy.get('#tbodyid').within(() => {
    //     cy.get('td').should('not.exist', 'img')
    // });
    cartPage.verifyEmptyTable();
})

Then('The table has 1 row as a product',()=>{
    //check only a row in the table
    // cy.get('#tbodyid').within(() => {
    //     cy.get('tr').should('have.length', 1);
    // })
    cartPage.verifyTablehas1Product();
})

When('Click on Place Order button',()=>{
    // cy.get('.btn.btn-success').click()
    cartPage.clickPlaceOrderBtn();
})

Then('The Place order pop-up is opened',()=>{
    // cy.get('.modal-content').should('exist')
    cartPage.verifyPlaceOrderExist();
})
Then('The pop-up displays include infor correctly',()=>{
    //check title pop-up
    // cy.get('#orderModalLabel').should('contain.text','Place order')
    cartPage.verifyTitlePopup();
    //check total price
    // cy.get('#totalm').should('contain.text','Total:')
    cartPage.verifyTotalOnPopup();
    //check input fields
    // cy.get('#orderModal > div > div > div.modal-body > form > div:nth-child(2)').within(()=>{
    //     cy.get('label').should('contain.text','Name:')
    //     cy.get('input').should('exist')
    // })
    // cy.get('#orderModal > div > div > div.modal-body > form > div:nth-child(3)').within(()=>{
    //     cy.get('label').should('contain.text','Country:')
    //     cy.get('input').should('exist')
    // })
    // cy.get('#orderModal > div > div > div.modal-body > form > div:nth-child(4)').within(()=>{
    //     cy.get('label').should('contain.text','City:')
    //     cy.get('input').should('exist')
    // })
    // cy.get('#orderModal > div > div > div.modal-body > form > div:nth-child(5)').within(()=>{
    //     cy.get('label').should('contain.text','Credit card:')
    //     cy.get('input').should('exist')
    // })
    // cy.get('#orderModal > div > div > div.modal-body > form > div:nth-child(6)').within(()=>{
    //     cy.get('label').should('contain.text','Month:')
    //     cy.get('input').should('exist')
    // })
    // cy.get('#orderModal > div > div > div.modal-body > form > div:nth-child(7)').within(()=>{
    //     cy.get('label').should('contain.text','Year:')
    //     cy.get('input').should('exist')
    // })
    cartPage.verifyInputField();
    //check Close btn
    // cy.get('#orderModal > div > div > div.modal-footer > button.btn.btn-secondary').should('contain.text','Close')
    // cy.get('#orderModal > div > div > div.modal-footer > button.btn.btn-secondary').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cartPage.verifyCloseBtn();
    //check Purchase btn
    // cy.get('#orderModal > div > div > div.modal-footer > button.btn.btn-primary').should('contain.text','Purchase')
    // cy.get('#orderModal > div > div > div.modal-footer > button.btn.btn-primary').should('have.css', 'background-color', 'rgb(2, 117, 216)');
    cartPage.verifyPurchaseBtn();
})
When('Input mandatory fields {string} and {string}',(Name, Creditcard)=>{
    // if (Name !=='') {
    //     cy.get('#orderModal > div > div > div.modal-body > form > div:nth-child(2)').find('input').type(Name, {force: true, waitForAnimations: true})
    // }
    // if (Creditcard !== '') {
    //     cy.get('#orderModal > div > div > div.modal-body > form > div:nth-child(5)').find('input').type(Creditcard, {force: true, waitForAnimations: true})
    // }
    cartPage.inputMandatoryFields(Name,Creditcard);
})

When('Input mandatory fields {string}, {string}, {string}, {string}, {string} and {string}',(Name, Country, City, Creditcard, Month, Year)=>{
    cartPage.inputFullInfor(Name, Country, City, Creditcard, Month, Year);
})

When('Click on Purchase button',()=>{
    // cy.get('#orderModal > div > div > div.modal-footer > button.btn.btn-primary').click({force: true})
    cartPage.clickPurchaseBtn();
})

Then('The success message displays correctly {} and {}',(Name, Creditcard)=>{
    // cy.get('div.sweet-alert.showSweetAlert.visible').within(()=>{
    //     cy.get('h2').should('contain.text','Thank you for your purchase!')
    //     cy.get('p').should('contain.text','Id:')
    //     cy.get('p').should('contain.text','Amount: ')
    //     cy.get('p').should('contain.text',`Card Number: ${Creditcard}`)
    //     cy.get('p').should('contain.text',`Name: ${Name}`)
    //     cy.get('p').should('contain.text','Date:')
    // })
    cartPage.verifySucessMsg(Name, Creditcard)
})
When('Click on OK button',()=>{
    // cy.get('.confirm.btn.btn-lg.btn-primary').click()
    // cy.wait(2000)
    cartPage.clickOKonSucessMsg();
})
Then('The message disappears and then the system redirects to home page screen',()=>{
    // const homepageUrl = 'https://demoblaze.com/index.html'
    // cy.url().then((url) => {
    //     cy.location().should((location) => {
    //         expect(location.href).to.eq(homepageUrl);
    //     });
    // });
    cartPage.verifyRedictingToHomePage();
})

Given('The cart has multiple products', ()=>{
    //select a first product
    cy.visit('/');
    homePage.clickAnyPhotoCard();
    // cy.get('.btn.btn-success.btn-lg').click();
    // cy.wait(2000)
    inforProductPage.clickAddProduct();
    //select a second product
    cy.visit('https://demoblaze.com/index.html');
    homePage.clickAnyPhotoCard();
    // cy.get('.btn.btn-success.btn-lg').click();
    // cy.wait(2000)
    inforProductPage.clickAddProduct();

});

Then('The table has 2 rows as 2 products',()=>{
    //check only a row in the table
    // cy.get('#tbodyid').within(() => {
    //     cy.get('tr').should('have.length', 2);
    // })
    cartPage.verifyTablehas2Products();
})

Then('The error message is displayed {string}',(data)=>{
    // cy.on('window:alert', (str) => {
    //     expect(str).to.equal(data);
    // });
    cartPage.verifyErrorMissingMandatoryInput(data);
})

When('Click Close button',()=>{
    // cy.wait(1000)
    // cy.get('#orderModal > div > div > div.modal-footer > button.btn.btn-secondary').click()
    // cy.wait(1000)
    cartPage.clickCloseBtn();
})

Then('The popup is disappeared and keep product at Cart screen',()=>{
    // cy.get('#orderModal').should('have.css', 'display', 'none');
    cartPage.verifyPlaceOrderPopupClose();

    // cy.get('#tbodyid').within(() => {
    //     cy.get('tr').should('have.length', 1);
    // })
    cartPage.verifyTablehas1Product();
})

//let numOfRows = 0;
Then('The total price is displayed accurately',()=>{
    // //get total price from table
    // let sumOfPrices = 0;

    // //lấy số lg row
    // cy.get('#tbodyid > tr').its('length').then(length => {
    // numOfRows = length;
    // //Nếu không có hàng nào, giữ nguyên gtri sumOfPrices là 0
    // if (numOfRows === 0) {
    //     return;
    //   }
    // //duyệt qua từng row và lấy td thứ 3 của mỗi row để tính total price
    // for (let i = 1; i <= numOfRows; i++) {
    //     cy.get(`#tbodyid > tr:nth-child(${i}) > td:nth-child(3)`).then($cell => {
    //     const price = parseFloat($cell.text());
    //     sumOfPrices += price;
    //     });
    // }
    // }).then(() => {
    // //check
    // cy.log('Total price from table:', sumOfPrices);
    // //Compare total từ UI <> Total từ table
    // let totalPrice;
    // //verify with total at table
    // cy.get('#totalp').then($el => {
    //     totalPrice =parseFloat($el.text());
    //     cy.log('Total from UI: ',totalPrice);
    //     expect(totalPrice).to.equal(sumOfPrices);
    //   });
    // });
    cartPage.verifyTotalPriceValue();
})

When('Click on Delete',()=>{
    // //click delete a first row
    // cy.get('#tbodyid > tr:nth-child(1) > td:nth-child(4) > a').click({force: true})
    // cy.wait(2000)
    cartPage.clickDeleteBtn();
})

Then('The table display correctly after deleting',()=>{
    cartPage.verifyTableAfterDeleting();
})

Then('The table has NOT any row',()=>{
    // cy.get('#tbodyid > tr').should('not.exist')
    cartPage.verifyEmptyTable();
})

Then('The total price is blanked',()=>{
    // let totalPrice;
    // cy.get('#totalp').then($el => {
    //     totalPrice =$el.text();
    //     cy.log('Total from UI must be empty/blank: ',totalPrice);
    //     expect(totalPrice).to.equal('')
    // })
    cartPage.verifyTotalBlank();
})