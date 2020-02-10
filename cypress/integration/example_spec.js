import promisify from "cypress-promise";

describe("Exemple project to reproduce issue: #5 ", () => {
  it("I do simple request", async () => {
    const foo = await promisify(cy.request("https://www.google.com/"));
    cy.log("foo", foo);
  });

  it("I check some results", async () => {
    const bar = await cy.request("https://www.google.com/").promisify();
    cy.log("bar", bar);
  });
});
