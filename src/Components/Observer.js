import gsap from "gsap";

export default class Observer {
    constructor({ element }) {
        this.element = element;
        this.createObserver();
    }
    createObserver() {
        const options = {
            rootMargin: '0px',
            threshold: 1,
        }
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.onEnter()
                } else {
                    this.onLeave()
                }
            })
        }, options)

        this.observer.observe(this.element);
    }

    onEnter() {
    }
    onLeave() {
    }
}