const SLIDESHOW_FRAME = '.carousel-inner';
const NEXTSLIDE = '[data-slide="next"]';
const PREVSLIDE = '[data-slide="prev"]';
const CAROUSEL = '.carousel-indicators';
const CAROUSEL_ITEM = '.carousel-item';
const CATEGORY = '#cat';
const CATEGORY_ITEM = '.list-group-item';
const LISTCARD = '.card-block';
const CARDPRODUCT = '.card.h-100';
const CARD_TITLE = '.card-title';
const PAGINATION_FRAME = '#frm';
const NEXTPAGE = '#next2';
const PREVPAGE = '#prev2';

let randomIndex;
let selectedGroupProduct;
class homePage {
    static verifySlideshowdisplay = () =>{
        cy.get(SLIDESHOW_FRAME).within(()=>{
            cy.get('img').should('have.length', 3)
        })
        cy.get(NEXTSLIDE).should('exist')
        cy.get(PREVSLIDE).should('exist')
    
        cy.get(CAROUSEL).within(()=>{
            cy.get('li').should('have.length', 3)
        })
    }
    static verifySlideAutoSwitch = () =>{
        cy.get(CAROUSEL_ITEM).should('have.length', 3)
        // Kiểm tra xem slide đầu tiên có class 'active' hay không
        cy.get(CAROUSEL_ITEM).eq(0).should('have.class', 'active');
        // Chờ cho slide thứ 2 xuất hiện
        cy.wait(5500)
        cy.get(CAROUSEL_ITEM).eq(1).should('have.class', 'active');
        // Chờ cho slide thứ 3 xuất hiện
        cy.wait(5500)
        cy.get(CAROUSEL_ITEM).eq(2).should('have.class', 'active');
    }
    static clickNextSlide = () =>{
        cy.get(NEXTSLIDE).click()
    }
    static clickPrevSlide = ()=>{
        cy.get(PREVSLIDE).click()
    }
    static verifyNextSlideShow = () =>{
        cy.get(CAROUSEL_ITEM).eq(1).should('have.class', 'active');
    }
    static verifyPrevSlideShow = () =>{
        cy.get(CAROUSEL_ITEM).eq(2).should('have.class', 'active');
    }
    
    static clickSpecSlide = ()=>{
        randomIndex = Math.floor(Math.random() * 3);
        cy.log(randomIndex)
        cy.get(CAROUSEL).find('li').eq(randomIndex).then($slide => {
            cy.wrap($slide).click();
            cy.log(randomIndex)
        });
    }
    static verifySpecSlideShow = ()=>{
        cy.get(CAROUSEL_ITEM).eq(randomIndex).should('have.class', 'active');
    }
    static verifyCategoryShow = ()=>{
        cy.get(CATEGORY).should('exist')
        cy.get(CATEGORY).should('contain.text','CATEGORIES')
    }
    static verifyGroupProduct =()=>{
        cy.get(CATEGORY_ITEM).should('have.length', 4)
        cy.get(CATEGORY_ITEM).eq(1).should('contain.text','Phones')
        cy.get(CATEGORY_ITEM).eq(2).should('contain.text','Laptops')
        cy.get(CATEGORY_ITEM).eq(3).should('contain.text','Monitors')
    }
    static clickAGrProduct = ()=>{
        //cy.get('#itemc').eq(0).click()
        const randomIndex = Math.floor(Math.random() * 3)+1;
        cy.log(randomIndex)
        cy.get(CATEGORY_ITEM).eq(randomIndex).then($product => {
            selectedGroupProduct = $product.text(); // Lưu tên hoặc thông tin của nhóm sản phẩm
            cy.wrap($product).click();
            cy.log(selectedGroupProduct)
        });
    }
    static verifySelectGrProduct =()=>{
        //check after random click
        if (selectedGroupProduct == 'Phones') cy.get('#tbodyid').find(LISTCARD).should('have.length', 7);
        if (selectedGroupProduct == 'Laptops') cy.get('#tbodyid').find(LISTCARD).should('have.length', 6);
        if (selectedGroupProduct == 'Monitors') cy.get('#tbodyid').find(LISTCARD).should('have.length', 2);
    }
    static clickWholeCate = ()=>{
        cy.get(CATEGORY).click()
    }
    static verifyProductShow = () =>{
        cy.get('#tbodyid').find(LISTCARD).should('have.length', 9)
    }
    //PRODUCT CARD
    static verifyCardShow = ()=>{
        cy.get(CARDPRODUCT).eq(0).within(()=>{
            cy.get('img').should('be.visible')
            cy.get(CARD_TITLE).find('a').should('contain.text','Samsung galaxy s6')
            cy.get('h5').should('contain.text','$360')
            cy.get('#article').should('contain.text','The Samsung Galaxy S6 is powered by 1.5GHz')
        })
    }
    static hoverAnyTitleCard = () =>{
        cy.get(CARDPRODUCT).eq(0).find(CARD_TITLE).find('a').trigger('mouseover');
    }
    static verifyHoveredTitleCard = ()=>{
        cy.get(CARDPRODUCT).eq(0).find(CARD_TITLE).find('a')
    .should('have.css', 'text-decoration','none solid rgb(2, 117, 216)'); //chưa làm khúc check này
    }
    static clickAnyPhotoCard =()=>{
        cy.get(CARDPRODUCT).eq(0).within(()=>{
            cy.get('img').click()
            cy.wait(2000)
        })
    }
    static verifyAInfoFirstProduct = ()=>{
        if (selectedGroupProduct == 'Phones') cy.url().should('include','https://demoblaze.com/prod.html?idp_=1');
        if (selectedGroupProduct == 'Laptops') cy.url().should('include','https://demoblaze.com/prod.html?idp_=8');
        if (selectedGroupProduct == 'Monitors') cy.url().should('include','https://demoblaze.com/prod.html?idp_=10');
    }
    static clickAnyTitleCard = ()=>{
        cy.get(CARDPRODUCT).eq(0).within(()=>{
            cy.get(CARD_TITLE).find('a').click()
            cy.wait(2000)
        })
    }
    static verifyPaginationIcon = ()=>{
        cy.get(PAGINATION_FRAME).should('have.css', 'float', 'right');
        cy.get(NEXTPAGE).should('contain.text','Next')
        cy.get(PREVPAGE).should('contain.text','Previous')
    }
    static clickNextPage = ()=>{
        cy.get(NEXTPAGE).click()
    }
    static verifyNextPage = () =>{
        cy.get('#tbodyid').find(LISTCARD).should('have.length', 6);
    }

    static clickPrevPage = ()=>{
        cy.get(PREVPAGE).click()
    }
    static verifyFirstPage = ()=>{
        cy.get('#tbodyid').find(LISTCARD).should('have.length', 9);
    }
}
export default homePage;