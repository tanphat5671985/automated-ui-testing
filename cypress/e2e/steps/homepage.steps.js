import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../pages/homePage';


Given('Navigate to the Home Page screen', ()=>{
    cy.visit('/');
    cy.wait(1000);

});

Then('The slideshow component displays in the center of the page', ()=>{
    homePage.verifySlideshowdisplay();
});

Then('Slideshow displays a product for 5 seconds and switch to next product',()=>{
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

When('Click on any carousel icon below the slideshow',()=>{
    homePage.clickSpecSlide();
})

Then('A selected product is displayed accurately',()=>{
    homePage.verifySpecSlideShow();
})

Then('The CATEGORIES menu display correctly', ()=>{
    homePage.verifyCategoryShow();
})

Then('The list of group product is displayed accurately',()=>{
    homePage.verifyGroupProduct();
})


When('Click on a {string} on Categories menu',(groupProduct)=>{
    homePage.clickAGrProduct(groupProduct);
})
Then('The product list is changed according to the selected {string}',(groupProduct)=>{
    homePage.verifySelectGrProduct(groupProduct);
})

When('Click on CATEGORIES menu field',()=>{
    homePage.clickWholeCate();
})
Then('The list of product displays correctly with all products',()=>{
    homePage.verifyWholeProductShow();
})

//PRODUCT CARD
Then('The card display information correctly',()=>{
    homePage.verifyCardShow();
})

When('Hover over the title of the first product card',()=>{
    homePage.hoverATitleCard();
})

Then('The title card is underlined',()=>{
    homePage.verifyHoveredTitleCard();
})

When('Click on a photo of {string} card',(productname)=>{
    homePage.clickAPhotoCard(productname);
})

When('Click on a title of {string} card',(productname)=>{
    homePage.clickATitleCard(productname);
})

Then('The 2 buttons of pagination displays on the right and below list of cards',()=>{
    homePage.verifyPaginationIcon();
})

When('Click on Next button',()=>{
    homePage.clickNextPage();
})
Then('The next page displays with remaining product cards',()=>{
    homePage.verifyNextPageShowCorrectly();
})

When('Click on Previous button',()=>{
    homePage.clickPrevPage();
})
Then('The previous page displays the list of first product cards',()=>{
    homePage.verifyWholeProductShow();
    homePage.verifyCardShow();
})

Then('The Next button is visible',()=>{
    homePage.checkNextBtnVisible();
})
Then('The Next button is not visible',()=>{
    homePage.checkNextBtnNotBeVisible();
})

Then('The Previous button is not visible',()=>{
    homePage.checkPreBtnNotBeVisible();
})