describe("template spec", () => {
  before(() => {
    cy.fixture("users.json").as("user");
  });

  beforeEach(() => {
    cy.visit("https://trello.com/u/dudukain/boards");
  });

  //cy.wrap(cy.get("@data")).user
  it("login dudu", () => {
    cy.get("@user").then((user) => {
      cy.get("[data-testid='ui-email-signup-input']").last().type(user.email);
    });

    cy.get('button:contains("Sign up")').last().click();
  });
});
