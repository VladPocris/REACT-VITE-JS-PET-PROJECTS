import { createElement } from "react";

export default function Navbar() {
    const logoTitle = createElement("span", { className: "logo-text"}, "ReactFacts")
    const image = createElement("img", { className: "logo", src: "../src/assets/react.svg", alt: "React Logo"});
    const navbar = createElement("nav", { className: "navbar" }, image, logoTitle);
    const header = createElement("header", { className: "header" }, navbar);
    return (
        header
    )
}