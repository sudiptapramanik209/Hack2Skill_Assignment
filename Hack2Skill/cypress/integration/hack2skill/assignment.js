/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />
describe('This Test suite collection for herokuapp', () => {
    it('To test validate if there are broken images', () => {
        //visit the website
        cy.visit('http://the-internet.herokuapp.com/broken_images');
        //located all image using css selector, and check each image naturalWidth is 0 or not if it 0, which would indicate that the image is broken.
        //If any broken images are found, the test will fail, and Cypress will display an error message.
        cy.get('img').each(($img) => {
            cy.wrap($img).then((img) => {
              const images = img[0];
              const Broken = images.naturalWidth === 0 || images.naturalHeight === 0;
              //console.log(Broken)
              expect(Broken).to.be.false;
            });
          });
        
    });
    it('To test try uploading any file', () => {
        //visit the website.
        cy.visit('http://the-internet.herokuapp.com/upload');
        //access file file path.
        const filepath = 'upload.txt'
        //located the fill upload input section and add file path.
        cy.xpath("//input[@id='file-upload']").attachFile(filepath);
        //then located submit button.
        cy.xpath("//input[@id='file-submit']").click();
        //and then check upload file right and wrong.
        cy.xpath("//div[@id='uploaded-files']").contains('upload.txt')

    });
});