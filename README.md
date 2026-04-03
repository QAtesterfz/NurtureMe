# [cite_start]🌱 NurtureMe - Cypress Automation Framework [cite: 1]

[cite_start]A scalable and maintainable end-to-end test automation framework built using **Cypress (JavaScript)**. [cite: 2] [cite_start]This project follows the **Page Object Model (POM)** design pattern, integrates **Mochawesome reporting**, and is CI-ready for seamless automation execution. [cite: 3]

---

## 🚀 Tech Stack
* [cite_start]**Cypress (JavaScript)** [cite: 5]
* [cite_start]**Mocha Framework** [cite: 6]
* [cite_start]**Mochawesome Reporter** [cite: 7]
* [cite_start]**Page Object Model (POM)** [cite: 8]
* [cite_start]**CI/CD Integration** (GitHub Actions - planned) [cite: 9]

---

## 📁 Project Structure
```text
nurtureme/
├── cypress/
│   ├── e2e/               # Test specs
│   ├── pages/             # Page Object Model classes
│   ├── fixtures/          # Test data
│   └── support/           # Custom commands & hooks
├── mochawesome-report/    # Generated reports
├── cypress.config.js      # Cypress configuration
├── package.json
└── README.md
```
[cite_start][cite: 11]

---

## 🧱 Framework Design

### [cite_start]🔹 Page Object Model (POM) [cite: 13]
* [cite_start]Each page is represented as a separate class under `cypress/pages/`. [cite: 14]
* [cite_start]Test logic is separated from UI locators. [cite: 15]
* [cite_start]Promotes **reusability**, **readability**, and **maintainability**. [cite: 16]

### [cite_start]📊 Reporting - Mochawesome [cite: 17]
* [cite_start]Generates clean, interactive HTML reports. [cite: 18]
* [cite_start]Includes test results, screenshots, and logs. [cite: 19]
* [cite_start]**Report Output Location:** `mochawesome-report/` [cite: 20, 21]

---

## ⚙️ Installation & Setup

### [cite_start]1️⃣ Clone the Repository [cite: 23]
```bash
git clone https://github.com/QAtesterfz/NurtureMe
cd nurtureme
```
[cite_start][cite: 24]

### [cite_start]2️⃣ Install Dependencies [cite: 25]
```bash
npm install
```
[cite_start][cite: 26]

### [cite_start]3️⃣ Install Cypress (if not already) [cite: 27]
```bash
npx cypress install
```
[cite_start][cite: 28]

---

## ▶️ Running Tests

### [cite_start]Open Cypress Test Runner [cite: 30]
```bash
npx cypress open
```
[cite_start][cite: 31]

### [cite_start]Run Tests in Headless Mode [cite: 32]
```bash
npx cypress run
```
[cite_start][cite: 33]

### [cite_start]📈 Generate Mochawesome Report [cite: 34]
```bash
npx cypress run --reporter mochawesome
```
[cite_start][cite: 35]
[cite_start]Or if configured in `cypress.config.js`, simply run: [cite: 36]
```bash
npm run test
```
[cite_start][cite: 37]

---

## [cite_start]🔄 CI/CD Integration (Planned) [cite: 38]
[cite_start]This project is designed to support CI/CD pipelines such as **GitHub Actions** (Scheduled job run). [cite: 39, 40]

[cite_start]**Example (GitHub Actions Workflow):** [cite: 41]
```yaml
name: Cypress Tests
on: [push]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3
      - name: Install Dependencies
        run: npm install
      - name: Run Cypress Tests
        run: npx cypress run
      - name: Generate Report
        run: npx mochawesome-merge ./mochawesome-report/*.json > output.json
```
[cite_start][cite: 42]

---

## 🧪 Best Practices Followed
* [cite_start]✔️ Clean separation using POM [cite: 44]
* [cite_start]✔️ Reusable custom commands [cite: 45]
* [cite_start]✔️ Centralized test data (fixtures) [cite: 46]
* [cite_start]✔️ Scalable folder structure [cite: 47]
* [cite_start]✔️ CI-ready setup [cite: 48]
* [cite_start]✔️ Detailed reporting [cite: 49]

---

## 📌 Future Enhancements
* [cite_start]CI email reporting [cite: 51]
* [cite_start]Parallel test execution [cite: 52]
* [cite_start]Cross-browser execution [cite: 53]
* [cite_start]API testing integration [cite: 54]
* [cite_start]Playwright support (optional expansion) [cite: 55]

---

## 👨‍💻 Author
[cite_start]**Faz Hussain** - SQA Automation Engineer [cite: 56, 57]
[cite_start]*Expertise in Cypress, Selenium, CI/CD, API & Performance Testing* [cite: 57]

---

## 📄 License
[cite_start]This project is open-source and available under the **MIT License**. [cite: 58, 59]

[cite_start]**✨ Happy Testing with NurtureMe!** [cite: 60]