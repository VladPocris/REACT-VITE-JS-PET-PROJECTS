import { createElement } from "react";

function createListContentItem(text) {
    return createElement("li", {className: "list-content-item"}, text);
} 

export default function MainContent() {
    const mainHeader = createElement("h1", {className: "main-header"}, "Fun facts about React");
    const unorderedList = createElement("ul", {className: "list-content"},
        createListContentItem("Was first released in 2013"),
        createListContentItem("Was originally created by Jordan Walke"),
        createListContentItem("Has well over 200k stars on GitHub"),
        createListContentItem("Is maintained by meta"),
        createListContentItem("Powers thousands of enterprise apps, including mobile apps")
    );
    const mainContent = createElement("main", { className: "main-content" },
        mainHeader,
        unorderedList
    );
    return (
        mainContent
    )
}