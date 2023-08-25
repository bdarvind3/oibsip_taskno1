const elements = document.querySelectorAll('.header-bottom', '.feature-image');
const options = {
    root: null,
    threshold: .4,
    rootMargin: '0px'
};

const callbacks = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
    observer.observe(element);
});
