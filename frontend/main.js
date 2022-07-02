const targets = document.querySelectorAll('[data-src]');
const navItems = document.querySelectorAll('[data-nav]');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');
// const sections = [document.querySelector('#home'), 
// document.querySelector('#about'), 
// document.querySelector('#projects'), 
// document.querySelector('#contact')];


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







  














const navLi = (home, about, projects, contact) => {
    const navObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                const item = entry.target;
                item.classList.remove('bg-gray-700');
                item.classList.add('bg-red-400');
            } 
            if (!entry.isIntersecting) {
                item.classList.remove('bg-red-400');
                item.classList.add('bg-gray-700');
            }
            observer.disconnect()

            
        })
    })
    navObserver.observe(home);
    navObserver.observe(about);
    navObserver.observe(projects);
    navObserver.observe(contact);

}

navItems.forEach(navLi);


    