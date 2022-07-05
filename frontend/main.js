const targets = document.querySelectorAll("[data-src]");
const navItems = document.querySelectorAll("[data-nav]");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const spot = document.querySelector("#spot");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const icons = document.querySelector("#icons");
const sections = [spot, icons, projects, contact];
const navSections = [home, about, projects, contact];
const scrollToTop = document.querySelector("#nav");
const logo = document.querySelector("#logo");
let lastScroll = 0;

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

//adds navbar after hero section
const navObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (
      window.scrollY < 500 &&
      scrollToTop.classList.contains("flex" && "opacity-100")
    ) {
      scrollToTop.classList.remove("flex");
      scrollToTop.classList.remove("opacity-100");
      scrollToTop.classList.add("hidden");
      scrollToTop.classList.add("opacity-0");
    }
    if (entry.isIntersecting) {
      scrollToTop.classList.remove("hidden");
      scrollToTop.classList.add("flex");
      setTimeout(function () {
        scrollToTop.classList.remove("opacity-0");
        scrollToTop.classList.add("opacity-100");
      }, 50);
    }
  });
});

sections.forEach((section) => {
  navObserver.observe(section);
});

// removes navbar when hero section is in view
// const heroObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting && window.scrollY < 100 && logo.classList.contains('w-7/12')) {

//           logo.classList.remove('w-7/12')
//           logo.classList.add('w-4/12')
//           scrollToTop.classList.add('hidden');
//           scrollToTop.classList.remove('flex');
//           scrollToTop.classList.remove('opacity-100');
//           scrollToTop.classList.add('opacity-0')
//         }
//     })
//   })

//   heroObserver.observe(home);

// addEventListener('scroll', function(target) {
//   console.log(window.pageYOffset)
// } );

//   const heroObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting || window.pageYOffset < 200) {
//             scrollToTop.classList.remove('opacity-100');
//             scrollToTop.classList.add('opacity-0');
//             console.log(entry)
//         }
//     })
//   })

//   heroObserver.observe(home);

// const navObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (window.pageYOffset == 0 && scrollToTop.classList.contains('opacity-100')) {
//         scrollToTop.classList.remove("opacity-100")
//         scrollToTop.classList.add("opacity-100")
//         }
//       if (entry.isIntersecting) {
//         scrollToTop.classList.remove("opacity-0")
//         scrollToTop.classList.add("opacity-100")
//       }

//     })
//   });

//   sections.forEach(section => {
//   navObserver.observe(section);
//   })

// const navLi = sections => {
//     const navObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {

//             const activePage = window.location.hash;

//                 if ("#" + entry.id === activePage) {
//                   entry.classList.add('bg-red-400');
//                 }

//             if (entry.isIntersecting) {

//                 const item = entry.target;
//                 item.classList.remove('bg-gray-700');
//                 item.classList.add('bg-red-400');
//                 observer.disconnect()

//             }

//         })
//     }, config)

// navSections.forEach(section => {
//     navObserver.observe(section)
// // })

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   lastScroll = currentScroll;

//   let current = "";
//   navSections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (currentScroll >= sectionTop) {
//       current = section.getAttribute("id");
//     }
//   });
//   const navLi = document.querySelectorAll("[data-nav]");

//   navLi.forEach((item) => {
//     const href = item.getAttribute("href").substring(1);
//     if (href === current) {
//       item.classList.remove("bg-gray-800");
//       item.classList.add("bg-indigo-900");
//     } else {
//           item.classList.add("bg-gray-800");

//     }
//   });
// });



const navLi = document.querySelectorAll("[data-nav]");
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
    li.classList.remove("bg-indigo-800")
    li.classList.add("bg-gray-800");
    li.classList.remove("w-full");
    li.classList.add("w-5/6");
    const href = li.getAttribute('href').substring(1);
		if (href === current) {
      li.classList.remove("bg-gray-800");
      li.classList.add("bg-indigo-800");
      li.classList.remove("w-5/6");
      li.classList.add("w-full"); 
      
		}
  });
});
