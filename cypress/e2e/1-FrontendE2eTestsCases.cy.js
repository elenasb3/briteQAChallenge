import homePage from "../pageObjects/homePage";
import actorDetailsPage from "../pageObjects/actorDetailsPage";
import topBoxOfficePage from "../pageObjects/topBoxOfficePage";
import titleDetailsPage from "../pageObjects/titleDetailsPage";
import titleRatingPage from "../pageObjects/titleRatingPage";
import titlePhotosPage from "../pageObjects/titlePhotosPage";
import advancedNameSearchPage from "../pageObjects/advancedNameSearchPage";

// #1
describe("Nicolas Cage - Upcoming ", () => {
  it("Search for Nicolas Cage and access to his profile", () => {
    homePage.searchFor("Nicolas Cage");
    actorDetailsPage.unfoldUpcomingTab();
    actorDetailsPage.clickOnFirstUpcomingMovieWithTag("In production"); //there is no movie with this tag, can be changed to "In Production" or "Post Production"
  });
});

// #2
describe("Top Box Office - Rating", () => {
  it("Rate the second movie from Top Box Office with 5 stars", () => {
    homePage.openMenu();
    homePage.clickMenuItem("Top Box Office");
    topBoxOfficePage.clickOnAMovieByIndex(2);
    titleDetailsPage.clickOnIMDBRatingButton();
    titleRatingPage.clickOnRateButton();
    titleRatingPage.giveStars(5);
  });
});

// #3
describe("Top 250 TV shows - Photos", () => {
  it("Filter by Danny Trejo´s photos from Top 250 TV Shows", () => {
    homePage.openMenu();
    homePage.clickMenuItem("Top 250 TV Shows");
    cy.findByText(/Breaking Bad/i).click();
    titleDetailsPage.goToPhotosSection();
    titlePhotosPage.filterPhotosByActor("Danny Trejo");
    titlePhotosPage.clickOnPhotoByIndex(2);
  });
});

// #4
describe("Born today - Born yesterday", () => {
  it("Go to Born today section and take a screenshot of the second actor who born yeterday", () => {
    homePage.openMenu();
    homePage.clickMenuItem("Born Today");
    advancedNameSearchPage.removeCurrentBirthdayFilter();
    advancedNameSearchPage.unfoldBirthdayTab();
    advancedNameSearchPage.filterByBornYesterday();
    advancedNameSearchPage.clickOnActorByIndex(3);
    cy.screenshot("actor-screenshot", {
      capture: "viewport",
    });
  });
});

// #5
describe("Born today - Born 40 years ago", () => {
  it("Go to Born today section and take a screenshot of the first actor link who born 40 years ago", () => {
    homePage.openMenu();
    homePage.clickMenuItem("Born Today");
    advancedNameSearchPage.removeCurrentBirthdayFilter();
    advancedNameSearchPage.unfoldBirthDateTab();
    advancedNameSearchPage.filerBorn40YearsAgo();
    advancedNameSearchPage.clickOnFirstActorBioLinkByActorIndex(1);
    cy.screenshot("actor-link-screenshot", {
      capture: "viewport",
    });
  });
});
