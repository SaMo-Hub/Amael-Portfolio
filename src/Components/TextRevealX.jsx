import { gsap } from "gsap";
import SplitType from "split-type";
import Observer from "./Observer";

export default class TextRevealX extends Observer {
    constructor({ element }) {
        super({ element })
        this.element = element;
        const splitted = new SplitType(this.element, { types: 'words' });
        this.sliptWords = new SplitType(splitted.words, { types: 'words' })
    }

    onEnter() {
        gsap.to(this.sliptWords.words, {
            y: '0%',
            duration: 0.7,
            stagger: 0.01,
            ease: "power3"
        })
    }


}