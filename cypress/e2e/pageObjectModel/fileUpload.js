class Fileupload{
    getButtonChooseFile(){
        return cy.get('[id="myFile"]')
    }
    getButtonSubmit(){
        return cy.get('[type="submit"]')
    }
    // locators for URL:Autopract
    getButtonChooseFileAutoPract(){
        return cy.get('[type="file"]')
    }
    getButtonUploadAutoPract(){
        return cy.get('[class="btn btn-success"]')
    }
    // locators for URL:
}

const fileupload=new Fileupload()
export default fileupload