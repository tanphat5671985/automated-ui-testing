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
let groupProducts = ['CATEGORIES','Phones','Laptops','Monitors'];
let baseAPI = 'https://api.demoblaze.com/entries';
let baseAPIpage2 = 'https://api.demoblaze.com/pagination';
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
        cy.get(CAROUSEL).find('li').eq(randomIndex).then($slide => {
            cy.wrap($slide).click();
        });
    }
    static verifySpecSlideShow = ()=>{
        cy.get(CAROUSEL_ITEM).eq(randomIndex).should('have.class', 'active');
    }
    static verifyCategoryShow = ()=>{
        cy.get(CATEGORY).should('exist')
        cy.get(CATEGORY).should('contain.text',groupProducts[0])
        cy.get(CATEGORY).should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get(CATEGORY).should('have.css', 'font-weight', '700')
    }
    static verifyGroupProduct =()=>{
        cy.get(CATEGORY_ITEM).should('have.length', 4)
        cy.get(CATEGORY_ITEM).eq(0).should('contain.text',groupProducts[0])
        cy.get(CATEGORY_ITEM).eq(1).should('contain.text',groupProducts[1])
        cy.get(CATEGORY_ITEM).eq(2).should('contain.text',groupProducts[2])
        cy.get(CATEGORY_ITEM).eq(3).should('contain.text',groupProducts[3])
    }
    static clickAGrProduct = (groupProduct)=>{
        let textPhones;
        let textLaptops;
        let textMonitors;
        //lấy ra text của các element để compare, nếu match thì click
        cy.get(CATEGORY_ITEM).eq(1).then($el => {
            textPhones = $el.text().trim();
        });
        cy.get(CATEGORY_ITEM).eq(2).then($el => {
            textLaptops = $el.text().trim();
        });
        cy.get(CATEGORY_ITEM).eq(3).then($el => {
            textMonitors = $el.text().trim();
        });
        //compare and click
        cy.then(()=>{
            if(groupProduct === textPhones) cy.get(CATEGORY_ITEM).eq(1).click();
            if(groupProduct === textLaptops) cy.get(CATEGORY_ITEM).eq(2).click();
            if(groupProduct === textMonitors) cy.get(CATEGORY_ITEM).eq(3).click();
            cy.wait(2000);
        })
    }
    static verifySelectGrProduct =(groupProduct)=>{
        //check groupProduct thì tổng các card trên UI phải match với tổng card theo loại trên api
        let totalPhonesProduct = 0;
        let totalLaptopsProduct = 0;
        let totalMonitorsProduct = 0;
        //lấy tổng của api theo từng category
        cy.request('GET', baseAPI).then((response) => {
            const items = response.body.Items;
            totalPhonesProduct = items.filter(item => item.cat === 'phone').length;
            cy.log(totalPhonesProduct);
            totalLaptopsProduct = items.filter(item => item.cat === 'notebook').length;
            cy.log(totalLaptopsProduct);
            totalMonitorsProduct = items.filter(item => item.cat === 'monitor').length;
            cy.log(totalMonitorsProduct);
            
        });
        cy.request('POST', baseAPIpage2, {"id": "9"}).then((response) => {
            const items = response.body.Items;
            totalPhonesProduct += items.filter(item => item.cat === 'phone').length;
            cy.log(totalPhonesProduct);
            totalLaptopsProduct += items.filter(item => item.cat === 'notebook').length;
            cy.log(totalLaptopsProduct);
            totalMonitorsProduct += items.filter(item => item.cat === 'monitor').length;
            cy.log(totalMonitorsProduct);
            
        });
        //check total cards display on UI with total product on API
        if (groupProduct == groupProducts[1]) {
            cy.get(LISTCARD).its('length').then((actualLength) => {
                expect(actualLength).to.eq(totalPhonesProduct)
            });
        }
        if (groupProduct == groupProducts[2]) {
            cy.get(LISTCARD).its('length').then((actualLength) => {
                expect(actualLength).to.eq(totalLaptopsProduct)
            });
        }
        if (groupProduct == groupProducts[3]) {
            cy.get(LISTCARD).its('length').then((actualLength) => {
                expect(actualLength).to.eq(totalMonitorsProduct)
            });
        }
    }
    static clickWholeCate = ()=>{
        cy.get(CATEGORY).click()
    }
    static verifyWholeProductShow = () =>{
        cy.get(LISTCARD).should('have.length', 9);
        //verify exist 
        cy.get(CARDPRODUCT).eq(0).within(()=>{
            cy.get('img').should('be.visible')
            cy.get(CARD_TITLE).find('a').should('be.visible')
            cy.get('h5').should('be.visible')
            cy.get('#article').should('be.visible')
        })
    }
    //PRODUCT CARD
    static verifyCardShow = ()=>{
        //verify each product on UI <> product on API
        cy.request('GET', baseAPI).then((response) => {
            const items = response.body.Items;
            items.forEach((item, index)=>{
                const {title, img, price, desc } = item;
                cy.log(title);
                cy.log(img);
                cy.log(price);
                cy.log(desc);

                //compare
                cy.get(CARDPRODUCT).eq(index).within(()=>{
                    cy.get(CARD_TITLE).find('a').should('have.text', title)
                    cy.get('img').should('have.attr', 'src', img);
                    cy.get('h5').invoke('text').then((text) => {
                        const uiPrice = parseFloat(text.replace('$', '').split(' ')[0].trim());
                        expect(uiPrice).to.eq(price);
                    });
                    cy.get('#article').invoke('text').then((text) => {
                        const uiDesc = text.replace('\n', '').trim();
                        const apiDescFortmat = desc.replace('\n', '').trim();
                        expect(uiDesc).to.contain(apiDescFortmat);
                    });
                })

            })
        });
    }
    static hoverATitleCard = () =>{
        cy.get(CARDPRODUCT).eq(0).find(CARD_TITLE).find('a').trigger('mouseover');
    }
    static verifyHoveredTitleCard = ()=>{
        cy.get(CARDPRODUCT).eq(0).find(CARD_TITLE).find('a')
            .should('have.css', 'text-decoration','none solid rgb(2, 117, 216)');
    }
    static clickAPhotoCard =(productname)=>{
        cy.get(CARDPRODUCT)
            .contains(CARD_TITLE, productname)
            .parents(CARDPRODUCT)
            .find('img')
            .click();
        cy.wait(2000);
    }

    static clickATitleCard = (productname)=>{
        cy.get(CARDPRODUCT)
            .contains(CARD_TITLE, productname)
            .find('a')
            .click();
        cy.wait(2000);
    }
    static verifyPaginationIcon = ()=>{
        cy.get(PAGINATION_FRAME).should('have.css', 'float', 'right');
        cy.get(NEXTPAGE).should('contain.text','Next');
        cy.get(PREVPAGE).should('contain.text','Previous');
    }
    static clickNextPage = ()=>{
        cy.get(NEXTPAGE).click();
        cy.wait(2000);
    }
    static verifyNextPageShowCorrectly = () =>{
        cy.get('#tbodyid').find(LISTCARD).should('have.length', 6);
        cy.request('POST', baseAPIpage2, {"id": "9"}).then((response) => {
            const items = response.body.Items;
            items.forEach((item, index)=>{
                const {title, img, price, desc } = item;
                cy.log(title);
                cy.log(img);
                cy.log(price);
                cy.log(desc);

                //compare
                cy.get(CARDPRODUCT).eq(index).within(()=>{
                    cy.get(CARD_TITLE).find('a').should('have.text', title)
                    cy.get('img').should('have.attr', 'src', img);
                    cy.get('h5').invoke('text').then((text) => {
                        const uiPrice = parseFloat(text.replace('$', '').split(' ')[0].trim());
                        expect(uiPrice).to.eq(price);
                    });
                    cy.get('#article').invoke('text').then((text) => {
                        const uiDesc = text.replace('\n', '').trim();
                        const apiDescFortmat = desc.replace('\n', '').trim();
                        expect(uiDesc).to.contain(apiDescFortmat);
                    });
                })

            })
        });
    }

    static clickPrevPage = ()=>{
        cy.get(PREVPAGE).click();
        cy.wait(2000);
    }
    static checkNextBtnVisible = () => {
        cy.get(NEXTPAGE).should('be.visible');
    }
    static checkPreBtnNotBeVisible = () => {
        cy.get(PREVPAGE).should('not.be.visible');
    }
    static checkNextBtnNotBeVisible = () => {
        cy.get(NEXTPAGE).should('not.be.visible');
    }
}
export default homePage;