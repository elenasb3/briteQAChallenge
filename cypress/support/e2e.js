import "./commands";

beforeEach(() => {
  cy.visit("/");
});

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Request aborted')) {
    return false;
  }
  return true;
});

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('NetworkError when attempting to fetch resource')) {
    return false;
  }
  return true;
});