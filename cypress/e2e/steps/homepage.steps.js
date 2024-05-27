import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../pages/homePage';

before(()=>{
    cy.log('test home page');
})

Given('Navigate to the Home Page screen', ()=>{
    cy.visit('/');
    cy.wait(1000);

});

Then('The slideshow display in the center of the page', ()=>{
    homePage.verifySlideshowdisplay();
});

Then('Slideshow displays a product for 3 seconds and switch to next product',()=>{
    homePage.verifySlideAutoSwitch();
});

When('Click on a next icon next to slideshow',()=>{
    homePage.clickNextSlide();
})

Then('A next product is displayed accurately',()=>{
    homePage.verifyNextSlideShow();
})

When('Click on a previous icon next to slideshow',()=>{
    homePage.clickPrevSlide();
})

Then('A previous product is displayed accurately',()=>{
    homePage.verifyPrevSlideShow();
})

When('Click on a carousel icon below slideshow',()=>{
    homePage.clickSpecSlide();
})

Then('A selected product is displayed accurately',()=>{
    homePage.verifySpecSlideShow();
})

Then('The CATEGORIES menu display the left of the page', ()=>{
    homePage.verifyCategoryShow();
})

Then('The list of group product is displayed accurately',()=>{
    homePage.verifyGroupProduct();
})


When('Click on a Group Product on Categories menu',()=>{
    homePage.clickAGrProduct();
})
Then('The product list is changed according to the selected product group',()=>{
    homePage.verifySelectGrProduct();
})

When('Click on CATEGORIES menu field',()=>{
    homePage.clickWholeCate();
})
Then('The list of product displays correctly with all products',()=>{
    homePage.verifyProductShow();
})

//PRODUCT CARD
Then('The card display information correctly',()=>{
    homePage.verifyCardShow();
})

When('Hover any title of product card',()=>{
    homePage.hoverAnyTitleCard();
})

Then('The title card is underlined',()=>{
    homePage.verifyHoveredTitleCard();
})

When('Click on any photo of product card',()=>{
    homePage.clickAnyPhotoCard();
})
Then('Redirect to an Information Product screen',()=>{
    homePage.verifyAInfoFirstProduct();

})
When('Click on any title of product card',()=>{
    homePage.clickAnyTitleCard();
})

Then('The 2 buttons of pagination displays on the right and below list of cards',()=>{
    homePage.verifyPaginationIcon();
})

When('Click on Next button',()=>{
    homePage.clickNextPage();
})
Then('The next page displays with remaining product cards',()=>{
    homePage.verifyNextPage();
})

When('Click on Previous button',()=>{
    homePage.clickPrevPage();
})
Then('The previous page displays the list of first product cards',()=>{
    homePage.verifyFirstPage();
})