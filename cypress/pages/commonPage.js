//header
const NAVBRAND = '#nava';
const NAVMENU = '.navbar-nav.ml-auto';
//footer
const COLUMN_FOOTER = '.caption';
const LICENSE = '.py-5.bg-inverse';
class commonPage {
    
    static verifyNavBrand = () =>{
        cy.get(NAVBRAND).should('contain.text','PRODUCT STORE')
        cy.get(NAVBRAND).within(()=>{cy.get('img').should('exist')})
    }
    static clickBrandOnNav = () => {
        cy.get(NAVBRAND).find('img').click();
    }

    static verifyNavItemsDisplay = ()=>{
        const expectedItems = ['Home', 'Contact', 'About us', 'Cart', 'Log in','Log out','', 'Sign up'];
        cy.get(NAVMENU).within(() => {
        cy.get('a').should('have.length', expectedItems.length);
        cy.get('a').each(($link, index) => {
            cy.wrap($link).should('contain.text', expectedItems[index]);
            });
        });
        cy.get(NAVMENU).within(() => {
            cy.get('[style="display:none"]').should('have.length', 2);
        })
    }
    static verifyRedirectHomePg = ()=>{
        cy.url().then((url) => {
            const currentUrl = url;
            cy.location().should((location) => {
                expect(location.href).to.eq(currentUrl);
            });
        });
    }
    static hoverItemInNav = ()=>{
        const hoverElement = cy.get(NAVMENU).find('.nav-item').eq(2)
        let initialColor;
        hoverElement.then($el => {
        initialColor = $el.css('color');
        });
        hoverElement.invoke('trigger', 'mouseover');
    }
    static verifyHoverItemInNav = () =>{
        const hoverElement = cy.get(NAVMENU).find('.nav-item').eq(2)
        hoverElement.should($el => {
        const hoverColor = $el.css('color');
        expect(hoverColor).not.to.eq('white');
        });
    }
    static verify3columnsAtFooter = () => {
        cy.get(COLUMN_FOOTER).eq(0).should('contain.text','About Us')
        //verify not exist __
        cy.get(COLUMN_FOOTER).eq(1).should('contain.text','Get in Touch')
        //verify not exist __
        // cy.get('.caption > h4').eq(1).then($el => {
        //     const afterContent = window.getComputedStyle($el[0], '::after').getPropertyValue('content');
        //     expect(afterContent).to.eq('none');
        //     //expect(afterContent).to.eq('""'); //replace none = "" => PASSED
        // })
        cy.get(COLUMN_FOOTER).eq(2).should('contain.text','PRODUCT STORE')
    }
    static verifyLicensing = (data) => {
        cy.get(LICENSE).should('contain.text',data)
    }
    static verifyAboutUsfield = (data)=>{
        const normalizeWhitespace = (text) => text.replace(/\s+/g, ' ').trim();
        const normalizedExpectedData = normalizeWhitespace(data);
        cy.get(COLUMN_FOOTER).eq(0).find('p').invoke('text').then((actualText) => {
            const normalizedActualText = normalizeWhitespace(actualText);
         expect(normalizedActualText).to.contain(normalizedExpectedData);
        });
    }
    static verifyGetInTouchfield = (datatable)=>{
        datatable.hashes().forEach(element => {
            cy.get(COLUMN_FOOTER).eq(1).find('p').should('contain.text',element.data)
        });
    }
    static verifyBrandFooter = ()=>{
        cy.get(COLUMN_FOOTER).eq(2).should('contain.text','PRODUCT STORE')
        cy.get(COLUMN_FOOTER).eq(2).within(()=>{cy.get('img').should('exist')})
    }
    static clickAnyfieldFooter = ()=>{
        cy.get(COLUMN_FOOTER).eq(2).click()
    }
    static verifyNOredirect = () =>{
        cy.url().then((url) => {
            const currentUrl = url;
            cy.location().should((location) => {
                expect(location.href).to.eq(currentUrl);
            });
        });
    }
}
export default commonPage;