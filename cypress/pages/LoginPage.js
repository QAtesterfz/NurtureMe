class LoginPage{

        login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
    validateDashBoardPage()
    {
        cy.wait(2000)
        cy.go('back');
        cy.wait(2000)
        cy.reload()
        cy.url().should('include', 'user/dashboard')
    }
    clickLogin()
    {
        cy.get('form > .btn').click()
    }
    validateLoginWithEmptyFields()
    {
        //email field validation
        cy.get(':nth-child(3) > .invalid-feedback > strong').should('be.visible').should('contain.text','The email field is required.')

        //password field validation
        cy.get(':nth-child(5) > .invalid-feedback > strong').should('be.visible').should('contain.text','The password field is required.')

    }
    validateErrorMsgForInvalidFields()
    {
         cy.get(':nth-child(3) > .invalid-feedback > strong').should('be.visible').should('contain.text','These credentials do not match our records.')
    }
    verifyForgotLink()
    {
        cy.get('.col-8 > a').should('be.visible').click()
        cy.wait(10000)
        //cy.get('b').should('be.visible').should('contain.text','Forget Password?')
        cy.url().should('include','/forgot-password')
    }
    EnterPassword(password)
    {
        cy.get('#password').type(password)
    }
    validateEyeButtonFunctionality()
    {
        cy.get('#password').should('have.attr', 'type', 'password')
        cy.get('#show-password-toggle').click()
        cy.get('#password').should('have.attr', 'type', 'text') 
    }
    validateRegisterForFree()
    {
        cy.get('[href="https://staging-login.nurtureme.ai/viewScreen"]').should('be.visible').click()
        cy.url().should('include','/viewScreen')
    }
    validatePrivacyPolicyLink()
    {
        cy.get('[href="https://staging-login.nurtureme.ai/privacy-policy"]').should('be.visible').click()
        cy.url().should('include','/privacy-policy')
    }
    validateTermsAndConditionsLink()
    {
        cy.get('[href="https://staging-login.nurtureme.ai/terms-conditions"]').should('be.visible').click()
        cy.url().should('include','/terms-conditions')
    }

}
export default LoginPage;