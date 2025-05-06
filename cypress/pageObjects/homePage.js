class HomePage {
  getSearchBarInput = () => cy.findByTestId("suggestion-search");
  getMenuButton = () => cy.findByLabelText("Open Navigation Drawer");

  //-------------------------------------------------------------------

  searchFor(text) {
    this.getSearchBarInput().type(text);
    cy.contains(text).click( { force: true });
  }

  openMenu() {
    this.getMenuButton().click();
  }

  clickMenuItem(itemText) {
    cy.findByText(itemText).click({ force: true });
  }
}

export default new HomePage();
