import 'cypress-file-upload';
import fileupload from '../pageObjectModel/fileUpload';
import url from '../../fixtures/pageUrl.json'

describe('File Uploading',()=>{
    beforeEach(()=>{
        cy.on('uncaught:exception',()=>{
            return false
        })
    })
    
   
    it('upload a file',()=>{
        // visit website
        cy.visit(url.fileUploadWebDriver)
        //get choosefilebutton and attach file only from the fixtures
        fileupload.getButtonChooseFile().attachFile('photo1.png')
        // click to upload button
        fileupload.getButtonSubmit().click()
        // validate forsuccessufully uploaded file
        cy.on('window:alert',(t)=>{
         //assertions to check text
          expect(t).to.contains('Your file has now been uploaded!');

    })
})
    // File upload practice case:2
    it.only('upload a file',()=>{
    // visit website
    cy.visit(url.fileUploadAutoPract)
    //get choosefilebutton and attach file only from the fixtures
    fileupload.getButtonChooseFileAutoPract().attachFile('photo1.png')
    // click to upload button
    fileupload.getButtonUploadAutoPract().click()
    // validate forsuccessufully uploaded file
    
})
})

