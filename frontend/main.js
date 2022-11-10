import "./src/output.css";
const targets = document.querySelectorAll("[data-src]");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const icons = document.querySelector("#icons");
const navSections = [home, about, projects, contact];
const scrollToTop = document.querySelector("#nav");
const projectList = document.querySelectorAll("[data-project]");
const navLi = document.querySelectorAll("[data-nav]");
const preloader = document.querySelector("#preloader");

//lazy loading images
const lazyLoading = (target) => {
  const newObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-src");
        img.setAttribute("src", src);
        img.classList.remove("opacity-0");
        img.classList.add("opacity-100");
        observer.disconnect();
      }
    });
  });
  newObserver.observe(target);
};
targets.forEach(lazyLoading);


const infoAnimation = (target) => {
  const newObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        projectList.forEach((project) => {
          project.classList.remove('opacity-0')
          project.classList.add('opacity-100')

        })
        
      }
    });
  });
  newObserver.observe(target);
};
projectList.forEach(infoAnimation);




// removes navbar when hero section is in view
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      scrollToTop.classList.remove("flex");
      scrollToTop.classList.remove("opacity-100");
      scrollToTop.classList.add("hidden");
      scrollToTop.classList.add("opacity-0");
    } else {
      scrollToTop.classList.remove("hidden");
      scrollToTop.classList.add("flex");
      setTimeout(function () {
        scrollToTop.classList.remove("opacity-0");
        scrollToTop.classList.add("opacity-100");
      }, 50);
    }
  });
});

heroObserver.observe(home);





window.addEventListener("scroll", () => {
  let current = "";
  navSections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 1000) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("bg-indigo-800");
    li.classList.add("bg-gray-800");
    li.classList.remove("w-full");
    li.classList.add("w-11/12");
    const href = li.getAttribute("href").substring(1);
    if (href === current) {
      li.classList.remove("bg-gray-800");
      li.classList.add("bg-indigo-800");
      li.classList.remove("w-11/12");
      li.classList.add("w-full");
    }
  });
});


//removes loading animation onload
window.addEventListener("load", () => {
  
  preloader.style.display = "none";
})


