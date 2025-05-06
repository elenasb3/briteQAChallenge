class advancedNameSearchPage {
  getSelectedBirthdayFilterChip = () =>
    cy.get('[data-testid^="selected-input-chip-list-birthday-"]');
  getBirthdayTab = () => cy.findByTestId("accordion-item-birthdayAccordion");
  getBirthdayInput = () => cy.findByTestId("birthday-input-test-id");
  getSeeResultsButton = () => cy.findByRole("button", { name: "See results" });
  getActorsNameList = () => cy.findAllByTestId("nlib-title");
  getBirthDateTab = () => cy.findByTestId("accordion-item-birthDateAccordion");
  getBirthDateStartInput = () => cy.findByTestId("birthDate-start");
  getBirthDateEndInput = () => cy.findByTestId("birthDate-end");
  getActorsBioList = () => cy.findAllByTestId("dli-bio");

  //-------------------------------------------------------------------

  removeCurrentBirthdayFilter() {
    this.getSelectedBirthdayFilterChip().click().should("not.exist");
  }

  unfoldBirthdayTab() {
    this.getBirthdayTab().click().should("have.attr", "aria-expanded", "true");
  }

  filterByBornYesterday() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const yesterday = `${month}-${day}`;

    this.getBirthdayInput()
      .type(yesterday)
      .should("have.value", yesterday)
      .type("{enter}");

    this.getSeeResultsButton().click();
  }

  clickOnActorByIndex(index) {
    this.getActorsNameList()
      .find("a")
      .eq(index - 1)
      .click({ force: true });
  }

  unfoldBirthDateTab() {
    this.getBirthDateTab().click().should("have.attr", "aria-expanded", "true");
  }

  filerBorn40YearsAgo() {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear() - 40;
    const requiredDate = `${year}-${month}-${day}`;

    this.getBirthDateStartInput()
      .type(requiredDate, { force: true })
      .should("have.value", requiredDate);

    this.getBirthDateEndInput()
      .type(requiredDate, { force: true })
      .should("have.value", requiredDate);

    this.getSeeResultsButton().click();
  }

  clickOnFirstActorBioLinkByActorIndex(index) {
    this.getActorsBioList()
      .eq(index - 1)
      .find("a")
      .eq(0)
      .click();
  }
}

export default new advancedNameSearchPage();
