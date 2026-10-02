/* ========================================
   JUDE PORTFOLIO
   script.js
======================================== */


/* ========================================
   MOBILE NAVIGATION
======================================== */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");
const navigationLinks = document.querySelectorAll(".nav a");


if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation"
        : "Open navigation"
    );

  });

}


/* ========================================
   CLOSE MOBILE MENU AFTER CLICK
======================================== */

navigationLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navigation.classList.remove("open");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    menuButton.setAttribute(
      "aria-label",
      "Open navigation"
    );

  });

});


/* ========================================
   ACTIVE NAVIGATION LINK
======================================== */

const sections = document.querySelectorAll(
  "main section[id]"
);


function updateActiveNavigation() {

  const scrollPosition =
    window.scrollY + 160;

  let currentSection = "home";


  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop;

    if (scrollPosition >= sectionTop) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navigationLinks.forEach((link) => {

    const linkTarget =
      link.getAttribute("href");

    link.classList.toggle(
      "active",
      linkTarget === `#${currentSection}`
    );

  });

}


window.addEventListener(
  "scroll",
  updateActiveNavigation,
  {
    passive: true
  }
);


/* ========================================
   SCROLL REVEAL ANIMATION
======================================== */

const revealElements =
  document.querySelectorAll(".reveal");


/*
   IntersectionObserver watches elements
   and reveals them when they enter
   the browser window.
*/

const revealObserver =
  new IntersectionObserver(

    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target
            .classList
            .add("visible");

          /*
             Stop watching after
             animation has happened.
          */

          observer.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* ========================================
   BACK TO TOP BUTTON
======================================== */

const backToTopButton =
  document.querySelector(".back-to-top");


window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 600) {

      backToTopButton
        .classList
        .add("show");

    } else {

      backToTopButton
        .classList
        .remove("show");

    }

  },

  {
    passive: true
  }
);


backToTopButton.addEventListener(
  "click",
  () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  }
);


/* ========================================
   PROJECT LINKS
======================================== */

/*
   Right now the project URLs in index.html
   are placeholders.

   This prevents "#" links from jumping
   to the top of the page.

   Later, when we add your actual GitHub
   and live-project URLs, we can remove
   the "project-placeholder-link" class.
*/

const placeholderProjectLinks =
  document.querySelectorAll(
    ".project-placeholder-link"
  );


placeholderProjectLinks.forEach((link) => {

  link.addEventListener(
    "click",
    (event) => {

      event.preventDefault();

      alert(
        "Project link coming soon. Add your GitHub or live project URL here."
      );

    }
  );

});


/* ========================================
   CLOSE MOBILE MENU WHEN CLICKING
   OUTSIDE THE NAVIGATION
======================================== */

document.addEventListener(
  "click",
  (event) => {

    const clickedInsideNavigation =
      navigation.contains(event.target);

    const clickedMenuButton =
      menuButton.contains(event.target);


    if (
      !clickedInsideNavigation &&
      !clickedMenuButton
    ) {

      navigation.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }
);


/* ========================================
   ESCAPE KEY CLOSES MOBILE MENU
======================================== */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      navigation.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.focus();

    }

  }
);


/* ========================================
   INITIALIZE PAGE
======================================== */

updateActiveNavigation();