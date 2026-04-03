import LoginPage from "../pages/LoginPage";

describe('Nurture Me Login Functionality Test',function(){

    const loginPage = new LoginPage();

         beforeEach(() => {
             cy.visit('/login')
         });

    it('NM_LOGIN_001 Verify login with valid credentials',function()
    {
        cy.fixture('users').then((usersData)=>{
            cy.login(usersData.validUser.username,usersData.validUser.password)
        })
        loginPage.validateDashBoardPage()
    })
    it('NM_LOGIN_002 Verify login with empty username and password', () => {

       loginPage.clickLogin()
       loginPage.validateLoginWithEmptyFields()
    })
    it('NM_LOGIN_003 Verify login with invalid username and password', () => {

        cy.fixture('users').then((usersData)=>{
            cy.login(usersData.invalidUser.username,usersData.invalidUser.password)
        })
       loginPage.validateErrorMsgForInvalidFields()
    })
    it.only('NM_LOGIN_004 Verify Forgot Password link', () => {

        //loginPage.verifyForgotLink()
        
    })
});