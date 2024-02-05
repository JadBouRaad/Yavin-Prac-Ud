`use strict`;

// Navbar Scroll
function userScroll() {
  const navbar = document.querySelector(`.navbar`);

  const btnUp = document.querySelector(`#to-top`);

  window.addEventListener(`scroll`, () => {
    if (window.scrollY > 50) {
      navbar.classList.add(`navbar-sticky`);
      btnUp.classList.add(`show`);
    } else {
      navbar.classList.remove(`.navbar-sticky`);
      btnUp.classList.remove(`show`);
    }
  });
}

function incrementStats() {
  const counters = document.querySelectorAll(`.counter`);

  //   Looping through the counters
  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      // Get attribute return a string and we want a number. Use function number or add +before the counter.getAtt to convert
      const target = Number(counter.getAttribute(`data-target`));
      //   c represents the inner text (HTML text)
      const c = Number(counter.innerText);
      const increment = target / 200;
      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        // 1 ms wait
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

document.addEventListener(`DOMContentLoaded`, userScroll);
document.addEventListener(`DOMContentLoaded`, incrementStats);
