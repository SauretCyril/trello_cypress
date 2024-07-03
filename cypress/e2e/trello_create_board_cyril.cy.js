describe("template spec", () => {
  before(() => {
    cy.fixture("users.json").as("user");
  });

  beforeEach(() => {
    cy.visit("https://trello.com/home");
  });

  it("login dudu", () => {
    cy.get("@user").then((user) => {
      cy.get("[data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']").click();
      cy.login(user.email, user.password).wait(4000);
    });
  });
});

//cy.get('[data-testid="create-board-tile"] > .board-tile')
