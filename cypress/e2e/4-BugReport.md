# Title: IMDb Rating - Unable to rate a movie with 10 stars from the movie rating page

# Summary
When attempting to rate a movie with 10 stars from the "Top Box Office" section, the "Rate" button keeps disabled, so the user can not submit his rating.

# Steps to Reproduce
1. Go to IMDb Home page - https://www.imdb.com
2. Open the menu and click on the **Top Box Office** section
3. Click on the second movie from the list
4. Click on the **IMDb Rating** button from the movie details page
5. Click on the **Rate** button from the movie ratings page
7. Select **10 stars** on the **Rate this** modal

# Expected Result
The "Rate" button should be enabled
# Current Result
The "Rate" button is disabled

## Environment
- Reproducible on Test environment only
- Browser: Chrome and Safari
- OS: macOS and Windows

## Notes
- The Rate button works as expected for 1–9 star selections
- This is not reproducible when user directly click on **Rate** button from the movie details page
