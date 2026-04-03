import LoginPage from "../pages/LoginPage";

describe('Nurture Me Login Functionality Test',function(){

    const loginPage = new LoginPage();

         beforeEach(() => {
             cy.visit('/login')
         });


    it('NM_LOGIN_001 Validate the login error message with the blank fields.', () => {

       loginPage.clickLogin()
       loginPage.validateLoginWithEmptyFields()
    })
    it('NM_LOGIN_003 Login with an unregistered email and correct password', () => {

        cy.fixture('users').then((usersData)=>{
            cy.login(usersData.invalidUser.username,usersData.invalidUser.password)
        })
       loginPage.validateErrorMsgForInvalidFields()
    })
    it('NM_LOGIN_004 Log in with a registered email and correct password',function()
    {
        cy.fixture('users').then((usersData)=>{
            cy.login(usersData.validUser.username,usersData.validUser.password)
        })
        loginPage.validateDashBoardPage()
    })
    it('NM_LOGIN_006 Validate the functionality of the eye button.',function()
    {
        cy.fixture('users').then((usersData)=>{
            loginPage.EnterPassword(usersData.validUser.password)
        })
        
        loginPage.validateEyeButtonFunctionality()
    })  
    it('NM_LOGIN_007 Verify the functionality of the Forgot Password link', () => {

        //loginPage.verifyForgotLink()
        
    })
    it('NM_LOGIN_010 Verify the functionality of the Register for free link', () => {

        loginPage.validateRegisterForFree()
        
    })
    it('NM_LOGIN_011 Verify the functionality of the Privacy Policy link', () => {

        loginPage.validatePrivacyPolicyLink()
        
    })
    it('NM_LOGIN_012 Verify the functionality of the Terms and Conditions link', () => {

        loginPage.validateTermsAndConditionsLink()
        
    })
});