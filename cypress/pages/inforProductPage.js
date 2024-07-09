//get all element
const ADD_BTN = '.btn.btn-success.btn-lg';
const IMG_PRODUCT = '#imgp > div > img';
const TITLE_PRODUCT = '#tbodyid > h2';
const PRICE_PRODUCT = '#tbodyid > h3';
const DESC_PRODUCT = '#more-information > p';

//common variable
let baseAPI = 'https://api.demoblaze.com/entries';
class inforProductPage{
    //al func steps, verify
    static clickAddProduct = () => {
        cy.get(ADD_BTN).click();
        cy.wait(1000);
    }

    static verifyImgProduct = (productname) => {
        //compare file .jpg on UI with API
        cy.request('GET', baseAPI).then((response) => {
            const items = response.body.Items;
            const product = items.find(item => item.title === productname);
            //find img tag have src="imgs/galaxy_s6.jpg" and compare it with api
            cy.get(IMG_PRODUCT).should('have.attr', 'src', product.img);
        });
    }

    static verifyTitleProduct = (productname) => {
        //compare title from input <> title from UI
        cy.request('GET', baseAPI).then((response) => {
            const items = response.body.Items;
            const product = items.find(item => item.title === productname);
            cy.log(product.title)
            //find title from UI and compare it with input
            cy.get(TITLE_PRODUCT).should('have.text',productname)
        });
    }

    static verifyPriceProduct = (productname) => {
        cy.request('GET', baseAPI).then((response) => {
            const items = response.body.Items;
            const product = items.find(item => item.title === productname);
            //element from UI have $360 and from api is 360.
            cy.get(PRICE_PRODUCT).invoke('text').then((text) => {
                const uiPrice = parseFloat(text.replace('$', '').split(' ')[0].trim());
                expect(uiPrice).to.eq(product.price);
            });
        });
    }

    static verifyDescProduct = (productname) => {
        cy.request('GET', baseAPI).then((response) => {
            const items = response.body.Items;
            const product = items.find(item => item.title === productname);
            //element from UI have \n and from api alse have \n at diff place.
            cy.get(DESC_PRODUCT).invoke('text').then((text) => {
                const uiDesc = text.replace('\n', '').trim();
                const apiDesc = product.desc.replace('\n', '').trim();
                expect(uiDesc).to.eq(apiDesc);
            });
        });
    }

    static verifyAddBtnVisible = () => {
        cy.get(ADD_BTN)
            .should('be.visible')
            .and('have.text', 'Add to cart')
            .and('have.attr', 'href', '#');
    }

    static verifySuccessMsg = (msg) => {
        //verify the messsage on alert with 'Product added'
        cy.on('window:alert', (msgOnAlert) => {
            expect(msgOnAlert).to.equal(msg);
        });
    }

    static verifyNameProductIsMatchedAtCart = (productname) => {
        //verify nameproduct after Add to cart must be match to table at Cart UI
        cy.get('#tbodyid > tr').each(($row) => {
            cy.wrap($row).find('td:nth-child(2)').then(($td) => {
                if ($td.text().trim() === productname) {
                    cy.log('Product found: ' + productname);
                }
            });
        }).then(($rows) => {
            // verify
            const found = $rows.toArray().some(row => {
                const text = Cypress.$(row).find('td:nth-child(2)').text().trim();
                return text === productname;
            });
            expect(found).to.be.true;
        });
    }
}

export default inforProductPage;