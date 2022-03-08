describe("Visitor can view a collection of cars ", () => {
  
  before(() => {
    cy.intercept("GET", "**/api/cars", {
      fixture: "cars_index_response.json",
    }).as("CarIndex");

    cy.visit("/");
  });

  // it("is expected to make a GET request to cars endpoint", () => {
  //   cy.wait("@CarIndex").its("request.method").should("eq", "GET");
  // });

  it("is expected to make a network call with a status 200", () => {
    cy.wait("@CarIndex").its("response.statusCode").should("eq", 200);
  });

  it("is expected to display a list of cars", () => {
    cy.get("[data-cy=cars-list]").children().should("have.length", 3);
  });

  it("is expected to see cars with a brand ", () => {
    cy.get("[data-cy=cars-list]").first().should("contain", "Lancia");
  });

  it("is expected to see cars with a price ", () => {
    cy.get("[data-cy=cars-list]").first().should("contain", "0.000");
  });

});
