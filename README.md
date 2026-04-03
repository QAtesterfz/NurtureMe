# 🌱 NurtureMe - Cypress Automation Framework 

A scalable and maintainable end-to-end test automation framework built using **Cypress (JavaScript)**.This project follows the **Page Object Model (POM)** design pattern, integrates **Mochawesome reporting**, and is CI-ready for seamless automation execution.

---

## 🚀 Tech Stack
* **Cypress (JavaScript)** 
* **Mocha Framework** 
* **Mochawesome Reporter** 
* **Page Object Model (POM)** 
* **CI/CD Integration** (GitHub Actions - planned) 

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


---

## 🧱 Framework Design

### 🔹 Page Object Model (POM) 
* Each page is represented as a separate class under `cypress/pages/`. 
* Test logic is separated from UI locators. 
* Promotes **reusability**, **readability**, and **maintainability**. 

### 📊 Reporting - Mochawesome 
* Generates clean, interactive HTML reports. 
* Includes test results, screenshots, and logs. 
* **Report Output Location:** `mochawesome-report/` 

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository 
```bash
git clone https://github.com/QAtesterfz/NurtureMe
cd nurtureme
```


### 2️⃣ Install Dependencies 
```bash
npm install
```

### 3️⃣ Install Cypress (if not already) 
```bash
npx cypress install
```


---

## ▶️ Running Tests

### Open Cypress Test Runner 
```bash
npx cypress open
```


### Run Tests in Headless Mode 
```bash
npx cypress run
```


### 📈 Generate Mochawesome Report 
```bash
npx cypress run --reporter mochawesome
```

Or if configured in `cypress.config.js`, simply run: 
```bash
npm run test
```


---

## 🔄 CI/CD Integration (Planned) 
This project is designed to support CI/CD pipelines such as **GitHub Actions** (Scheduled job run). 

**Example (GitHub Actions Workflow):** 
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


---

## 🧪 Best Practices Followed
* ✔️ Clean separation using POM 
* ✔️ Reusable custom commands 
* ✔️ Centralized test data (fixtures) 
* ✔️ Scalable folder structure 
* ✔️ CI-ready setup 
* ✔️ Detailed reporting 

---

## 📌 Future Enhancements
* CI email reporting 
* Parallel test execution 
* Cross-browser execution 
* API testing integration 
* Playwright support (optional expansion) 

---

## 👨‍💻 Author
**Faz Hussain** - SQA Automation Engineer
*Expertise in Cypress, Selenium, CI/CD, API & Performance Testing* 

---

## 📄 License
This project is open-source and available under the **MIT License**. 

**✨ Happy Testing with NurtureMe!** 
