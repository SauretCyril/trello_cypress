/* describe("template spec", () => {
    before(() => {
      cy.fixture("users.json").as("userData");
    });
  
    beforeEach(() => {
      cy.visit("https://trello.com/u/dudukain/boards");
    });
    //cy.wrap(cy.get("@data")).user
    it("login dudu", () => {
      cy.get("[data-testid='ui-email-signup-input']").last().type();
      cy.get('button:contains("Sign up")').last().click();
    });
  });
 */

  describe("loading and accessing fixtures", ()=>{
    beforeEach("load fixture", function () {
        cy.fixture("usersTrello.json").then((data)=>{
            this.data=data;
        })
        cy.visit("https://trello.com/u/dudukain/boards");
    })
    it("should access the data from the fixture", function (){
        cy.get(".WizniJkRlb1ciP").click();
        cy.get("email").type(this.data.email);
        //cy.get('button:contains("Sign up")').last().click();
        /*cy.get("#pass").type(this.data.password);
        cy.get("#submit").click();
        expect(this.data.email).to.be.equal("exampleemail@example.com");*/
    })
})
  