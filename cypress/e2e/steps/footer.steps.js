import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

before(()=>{
    cy.log('test footer');
});

Given('Navigate to the Home Page screen', ()=>{
    cy.visit('/');
    cy.wait(1000);

});
Then('The 3 columns display sequentially information', ()=>{
    cy.get('#fotcont').within(()=>{
        cy.get('.caption').eq(0).should('contain.text','About Us')
        cy.get('.caption').eq(1).should('contain.text','Get in Touch')
        cy.get('.caption').eq(2).should('contain.text','PRODUCT STORE')
    })
});

Then('The Brand Licensing displays with {string}', (data)=>{
    cy.get('.py-5.bg-inverse').should('contain.text',data)
});

Then('The About us is displayed with: {string}',(data)=>{
    //cy.get('.caption').eq(0).find('p').replace(/\s+/g, ' ').trim().should('contain.text',data)
    const normalizeWhitespace = (text) => text.replace(/\s+/g, ' ').trim();
    const normalizedExpectedData = normalizeWhitespace(data);

    cy.get('.caption').eq(0).find('p').invoke('text').then((actualText) => {
        // Normalize whitespace in the actual text
        const normalizedActualText = normalizeWhitespace(actualText);
        // Assert that the normalized actual text contains the normalized expected data
        expect(normalizedActualText).to.contain(normalizedExpectedData);
    });
});

Then('The Get In Touch is displayed',(datatable)=>{
    datatable.hashes().forEach(element => {
        cy.get('.caption').eq(1).find('p').should('contain.text',element.data)
    });
});

Then('The Logo and the Brand is displayed correctly',()=>{
    cy.get('.caption').eq(2).should('contain.text','PRODUCT STORE')
    cy.get('.caption').eq(2).within(()=>{cy.get('img').should('exist')})
});

When('Click on any the field on the footer',()=>{
    cy.get('.caption').eq(2).click()
});
Then('NO any action about redirect or reload',()=>{
    cy.url().then((url) => {
        const currentUrl = url;
        cy.location().should((location) => {
            expect(location.href).to.eq(currentUrl);
        });
    });
})