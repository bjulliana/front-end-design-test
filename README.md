# Test Website for Front End Dev Test

> Test Website built with Vue for a Front End Developer Test

> Demo: https://bjulliana.github.io/front-end-design-test/

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Form Functionality](#form-functionality)
- [Tools](#tools-and-libraries-used)
- [Project Notes](#improvement-suggestions)


---

## Installation

### Clone

- Clone this repo using `git clone https://github.com/bjulliana/front-end-design-test.git`

### Setup

> Install packages

```
npm install
```
---

## Usage

> Compiles and hot-reloads for development

```
npm run serve
```
> Compiles and minifies for production

```
npm run build
```

> Lints and fixes files
```
npm run lint
```
---

## Form Functionality

There is no form submission implemented, all was built with Vanilla JS. To test the form validation:
1. Submit the empty form to validate the fields. To validate the email field you can provide a value that is not an email.
2. If all the fields are validated the loading message will show up.
3. After 2 seconds of loading, it will display the success message.

---

## Tools and Libraries Used
- Vue Cli
- SCSS (Custom SCSS framework used)
- Vanilla JS
- No external libraries were used for features such as Smooth Scroll, Hero Parallax and Scroll Animations.
- ChromeVox, https://achecker.ca and https://webaim.org/resources/contrastchecker/ for accessibility audit.

---

## Improvement Suggestions
- Use a static builder to deploy the website statically, improving speed and accessibility.
- Find solution for embedded assets such as Google Maps and YouTube video, in order to overcome acessibility issues.
- Add lazy load for the images.
