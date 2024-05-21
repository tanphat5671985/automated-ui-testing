import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

before(()=>{
    cy.log('test');
})

Given('Navigate to the Home Page screen', ()=>{
    cy.visit('/');
    cy.wait(1000);

});
Then('The title of the page displayed with the logo and brand in the tab browser', ()=>{
    cy.title().should('eq','STORE')
});
Then('The logo and the brand on the header displays on the left of the page and is the same as Figma', ()=>{
    cy.get('#nava').should('contain.text','PRODUCT STORE')
    cy.get('#nava').within(()=>{cy.get('img').should('exist')})
});
Then('The 6 items on the navbar displayed sequentially and contain hyperlink', ()=>{
    const expectedItems = ['Home', 'Contact', 'About us', 'Cart', 'Log in','Log out','', 'Sign up'];
    cy.get('.navbar-nav.ml-auto').within(() => {
        cy.get('a').should('have.length', expectedItems.length);
        cy.get('a').each(($link, index) => {
            cy.wrap($link).should('contain.text', expectedItems[index]);
        });
    });
    cy.get('.navbar-nav.ml-auto').within(() => {
        cy.get('[style="display:none"]').should('have.length', 2);
    })
});

When('Click on Logo and Brand on the header',()=>{
    cy.get('#nava').find('img').click();
});

Then('The screen is re-directed to Home Page',()=>{
    cy.url().then((url) => {
        const HomePageUrl = url;
        cy.location().should((location) => {
            expect(location.href).to.eq(HomePageUrl);
        });
    });
    //cy.url().should('eq','https://demoblaze.com/index.html');
});

When('Hover a item on the navbar',()=>{
    const hoverElement = cy.get('.navbar-nav.ml-auto').find('.nav-item').eq(2)
    let initialColor;
    hoverElement.then($el => {
    initialColor = $el.css('color');
    });
    hoverElement.invoke('trigger', 'mouseover');
})

Then('The item being hovered is highlighted',()=>{
    const hoverElement = cy.get('.navbar-nav.ml-auto').find('.nav-item').eq(2)
    hoverElement.should($el => {
        const hoverColor = $el.css('color');
        expect(hoverColor).not.to.eq('white');
    });
})
