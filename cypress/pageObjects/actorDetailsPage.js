class ActorDetailsPage {
  getCreditsActorUpcomingTab = () =>
    cy.findByTestId("accordion-item-actor-upcoming-projects");
  getUpcomingActorMoviesList = () =>
    cy.get('[data-testid^="unrel_cred_actor_"]');

  //-------------------------------------------------------------------
  unfoldUpcomingTab() {
    this.getCreditsActorUpcomingTab()
      .click()
      .should("have.attr", "aria-expanded", "true");
  }

  clickOnFirstUpcomingMovieWithTag(tag) {
    this.getUpcomingActorMoviesList()
      .find("div > div > ul > li > a")
      .contains(tag)
      .first()
      .closest('[data-testid^="unrel_cred_actor_"]')
      .find("a.ipc-metadata-list-summary-item__t")
      .click();
  }
}

export default new ActorDetailsPage();
