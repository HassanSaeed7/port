const targets = document.querySelectorAll('[data-src]');
const navItems = document.querySelectorAll('[data-nav]');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');
const icons = document.querySelector('#icons');
const sections = [icons, projects, contact];
const navSections = [home, about, projects, contact];
const scrollToTop = document.querySelector("#nav");
var elDistanceToTop = window.pageYOffset + icons.getBoundingClientRect().top


//lazy loading images
const lazyLoading = target => {
    const newObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                img.setAttribute('src', src);
                img.classList.remove('opacity-0');
                img.classList.add('opacity-100');
                observer.disconnect();
            }
        })
    })
    newObserver.observe(target);
}
targets.forEach(lazyLoading);



addEventListener('scroll', function(target) {
  console.log(window.pageYOffset)
} );

  const heroObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting || window.pageYOffset < 200) {
            scrollToTop.classList.remove('opacity-100');
            scrollToTop.classList.add('opacity-0');
            console.log(entry)
        }
    })
  })

  heroObserver.observe(home);




const navObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (window.pageYOffset == 0 && scrollToTop.classList.contains('opacity-100')) {
        scrollToTop.classList.remove("opacity-100")
        scrollToTop.classList.add("opacity-100")
        }
      if (entry.isIntersecting) {
        scrollToTop.classList.remove("opacity-0")
        scrollToTop.classList.add("opacity-100")
      } 
     
    })
  }); 

  sections.forEach(section => {
  navObserver.observe(section);
  })


  

//   else {
//     if (scrollToTop.classList.contains("opacity-0") && entry.boundingClientRect.y < 0) {
//       scrollToTop.classList.add("opacity-100")
//     } 
//   } 

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
    // })  






