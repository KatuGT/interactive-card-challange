# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![tablet](https://i.imgur.com/fr1C8ri.png)

### Links

- Solution URL: [mySolution](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw/hub/responsive-interactive-card-lMqLSVZlvg)
- Live Site URL: [liveSite](https://interactive-card-challange-i4czudnsm-katugt.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [SCSS](https://create-react-app.dev/docs/adding-a-sass-stylesheet/) - For styles


### What I learned

```css
.card-wrapper {
  background-image: url(../../images/bg-main-mobile.png);
  height: 64vw;
  background-repeat: no-repeat;
  background-position-y: 0vw;
  background-size: cover;
  margin-bottom: 5rem;

  img.img-tarjeta {
    width: 100%;
  }

  .card {
    position: relative;
  }

  & .back-card {
    width: 76%;
    right: -21%;
    top: 8vw;

```
Position Absolute it nos always the best way to position "floating" elements.
```js
const NormaliceNumber = (value, length) => {
  const newValue = value?.replace(/[^\dA-Z]/g, '').substr(0, length).trim().padStart(length, '0') || '';

  return newValue;
};
```
.padStart() new adition yo my knowledge

### Continued development

I need to go deep in form validations and how to control input values.

### Useful resources

- [normalizeCardNumber](https://www.youtube.com/watch?v=fTCTtCv8iN8&t=168s) - This helped me for normalizing tha card number with the pattern #### #### #### ####

## Author

- Website - [Cintia Jimena Martinez](https://chipper-cassata-6e2b7c.netlify.app/)
- Frontend Mentor - [@KatuGT](https://www.frontendmentor.io/profile/KatuGT)
- Linkedin - [Cintia Jimena Martinez](https://www.linkedin.com/in/cintiajimenamartinez/)

