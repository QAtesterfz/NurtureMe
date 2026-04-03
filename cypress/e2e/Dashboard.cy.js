import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";

describe('Nurture Me Dashboard Functionality Test',function(){

 const loginPage = new LoginPage();
 const dashboardPage=new DashboardPage();

         beforeEach(() => {
             cy.visit('/login')
         });

    it('NM_DASHBOARD_001 Create New Campaign',function()
    {
        cy.fixture('users').then((usersData)=>{
            cy.login(usersData.validUser.username,usersData.validUser.password)
        })
        loginPage.validateDashBoardPage()
         cy.fixture('campaignData').then((campaign)=>{
              dashboardPage.CreateNewCampaign(campaign.campaignData.Title,campaign.campaignData.Description)
        })
      
    })

})