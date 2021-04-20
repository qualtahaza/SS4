let $template = document.createElement("template");
$template.innerHTML = `<div class="nav-bar">
<div class="nav-bar-item">
    <a href="home.html">Home</a></div>
<div class="nav-bar-item">
    <a href="about.html">About</a></div>
<div class="nav-bar-item">
    <a href="content.html">Content</a></div>
</div>`;

export default class Navbar extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    }
}
window.customElements.define("nav-bar", Navbar);