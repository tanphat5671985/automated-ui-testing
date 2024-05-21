import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

before(()=>{
    cy.log('test home page');
})

Given('Navigate to the Home Page screen', ()=>{
    cy.visit('/');
    cy.wait(1000);

});

Then('The slideshow display in the center of the page', ()=>{
    cy.get('.carousel-inner').within(()=>{
        cy.get('img').should('have.length', 3)
    })
    cy.get('[data-slide="next"]').should('exist')
    cy.get('[data-slide="prev"]').should('exist')

    cy.get('.carousel-indicators').within(()=>{
        cy.get('li').should('have.length', 3)
    })
});

Then('Slideshow displays a product for 3 seconds and switch to next product',()=>{
    cy.get('.carousel-item').should('have.length', 3)
    // Kiểm tra xem slide đầu tiên có class 'active' hay không
    cy.get('.carousel-item').eq(0).should('have.class', 'active');
    // Chờ cho slide thứ 2 xuất hiện
    cy.wait(6000)
    cy.get('.carousel-item').eq(1).should('have.class', 'active');
    // Chờ cho slide thứ 3 xuất hiện
    cy.wait(6000)
    cy.get('.carousel-item').eq(2).should('have.class', 'active');
    
});

When('Click on a next icon next to slideshow',()=>{
    cy.get('[data-slide="next"]').click()
})

Then('A next product is displayed accurately',()=>{
    cy.get('.carousel-item').eq(1).should('have.class', 'active');
})

When('Click on a previous icon next to slideshow',()=>{
    cy.get('[data-slide="prev"]').click()
})

Then('A previous product is displayed accurately',()=>{
    cy.get('.carousel-item').eq(2).should('have.class', 'active');
})

When('Click on a carousel icon below slideshow',()=>{
    cy.get('.carousel-indicators').find('li').eq(2).click()
})

Then('A selected product is displayed accurately',()=>{
    cy.get('.carousel-item').eq(2).should('have.class', 'active');
})