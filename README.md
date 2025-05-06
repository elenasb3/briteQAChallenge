# Brite QA Engineer Challenge

This repository contains the solutions for the QA Brite Challenge. Please see the location for each exercise bellow:

- ✅ Frontend E2E tests       - cypress\e2e\1-FrontendE2eTestsCases.cy.js
- ✅ API E2E tests            - cypress\e2e\2-ApiE2eTestsCases.cy.js
- ✅ Manual test scenarios    - cypress\e2e\3-ManualTests.feature
- ✅ Bug report               - cypress\e2e\4-BugReport.md

---

## 📦 Tech Stack

- [Cypress](https://www.cypress.io/)
- [@testing-library/cypress](https://testing-library.com/docs/cypress-testing-library/intro)
- JavaScript

---

## 📁 Folder Structure

```
/brite-qa-assignment
│
├── cypress/
│   └── e2e/                  # This folder contains all solutions for the different exercises
│
├── pageObjects/              # Page Objects created for the Frontend E2E tests
│   
│── support/  
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🚀 How to Run

1. Install dependencies

   ```bash
   npm install
   ```

   ```bash
   npm install cypress @testing-library/cypress
   ```

2. Open Cypress

   ```bash
   npx cypress open
   ```

3. Run tests in headless mode
   ```bash
   npx cypress run
   ```


