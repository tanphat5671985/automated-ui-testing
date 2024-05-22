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
    cy.wait(5500)
    cy.get('.carousel-item').eq(1).should('have.class', 'active');
    // Chờ cho slide thứ 3 xuất hiện
    cy.wait(5500)
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
let randomIndex;
When('Click on a carousel icon below slideshow',()=>{
    //cy.get('.carousel-indicators').find('li').eq(2).click()
    //random
    randomIndex = Math.floor(Math.random() * 3);
    cy.log(randomIndex)
    cy.get('.carousel-indicators').find('li').eq(randomIndex).then($slide => {
        cy.wrap($slide).click();
        cy.log(randomIndex)
    });
})

Then('A selected product is displayed accurately',()=>{
    cy.get('.carousel-item').eq(randomIndex).should('have.class', 'active');
})

Then('The CATEGORIES menu display the left of the page', ()=>{
    cy.get('#cat').should('exist')
    cy.get('#cat').should('contain.text','CATEGORIES')
})

Then('The list of group product is displayed accurately',()=>{
    cy.get('.list-group-item').should('have.length', 4)
    
    cy.get('.list-group-item').eq(1).should('contain.text','Phones')
    cy.get('.list-group-item').eq(2).should('contain.text','Laptops')
    cy.get('.list-group-item').eq(3).should('contain.text','Monitors')
})

let selectedGroupProduct;
When('Click on a Group Product on Categories menu',()=>{
    //cy.get('#itemc').eq(0).click()
    const randomIndex = Math.floor(Math.random() * 3)+1;
    cy.log(randomIndex)
    cy.get('.list-group-item').eq(randomIndex).then($product => {
        selectedGroupProduct = $product.text(); // Lưu tên hoặc thông tin của nhóm sản phẩm
        cy.wrap($product).click();
        cy.log(selectedGroupProduct)
    });
})
Then('The product list is changed according to the selected product group',()=>{
    //check after random click
    if (selectedGroupProduct == 'Phones') cy.get('#tbodyid').find('.card-block').should('have.length', 7);
    if (selectedGroupProduct == 'Laptops') cy.get('#tbodyid').find('.card-block').should('have.length', 6);
    if (selectedGroupProduct == 'Monitors') cy.get('#tbodyid').find('.card-block').should('have.length', 2);
})

When('Click on CATEGORIES menu field',()=>{
    cy.get('#cat').click()
})
Then('The list of product displays correctly with all products',()=>{
    cy.get('#tbodyid').find('.card-block').should('have.length', 9)
})

//PRODUCT CARD
Then('The card display information correctly',()=>{
    cy.get('.card.h-100').eq(0).within(()=>{
        cy.get('img').should('be.visible')
        cy.get('.card-title').find('a').should('contain.text','Samsung galaxy s6')
        cy.get('h5').should('contain.text','$360')
        cy.get('#article').should('contain.text','The Samsung Galaxy S6 is powered by 1.5GHz')
    })
})

When('Hover any title of product card',()=>{
    cy.get('.card.h-100').eq(0).find('.card-title').find('a')
    .trigger('mouseover');
})

Then('The title card is underlined',()=>{
    cy.get('.card.h-100').eq(0).find('.card-title').find('a')
    .should('have.css', 'text-decoration','none solid rgb(2, 117, 216)'); //chưa làm khúc check này
})

When('Click on any photo of product card',()=>{
    cy.get('.card.h-100').eq(0).within(()=>{
        cy.get('img').click()
        cy.wait(2000)
    })
})
Then('Redirect to an Information Product screen',()=>{
    if (selectedGroupProduct == 'Phones') cy.url().should('include','https://demoblaze.com/prod.html?idp_=1');
    if (selectedGroupProduct == 'Laptops') cy.url().should('include','https://demoblaze.com/prod.html?idp_=8');
    if (selectedGroupProduct == 'Monitors') cy.url().should('include','https://demoblaze.com/prod.html?idp_=10');

})
When('Click on any title of product card',()=>{
    cy.get('.card.h-100').eq(0).within(()=>{
        cy.get('.card-title').find('a').click()
        cy.wait(2000)
    })
})

Then('The 2 buttons of pagination displays on the right and below list of cards',()=>{
    cy.get('#frm').should('have.css', 'float', 'right');
    cy.get('#next2').should('contain.text','Next')
    cy.get('#prev2').should('contain.text','Previous')
})

When('Click on Next button',()=>{
    cy.get('#next2').click()
})
Then('The next page displays with remaining product cards',()=>{
    cy.get('#tbodyid').find('.card-block').should('have.length', 6);
})

When('Click on Previous button',()=>{
    cy.get('#prev2').click()
})
Then('The previous page displays the list of first product cards',()=>{
    cy.get('#tbodyid').find('.card-block').should('have.length', 9);
})