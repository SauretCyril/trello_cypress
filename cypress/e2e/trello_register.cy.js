import { faker } from "@faker-js/faker";
describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://trello.com/home");
  });

  it("register dudu", () => {
    cy.get("[data-testid='ui-email-signup-input']")
      .last()
      .type(faker.internet.email());
    cy.get('button:contains("Sign up")').last().click();
  });
});
