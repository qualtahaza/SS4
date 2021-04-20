let $template = document.createElement("template");
$template.innerHTML = `<div class="video-container-card">
<div class="video-image">
    <div class="video-type">
        HD-VietSUB
    </div>
</div>
<div class="nameVN-video">Kẻ Vô Danh</div>
<div class="nameEN-video">Nobody</div>
<div class="duration-video">190 phút</div>
</div>
`;

export default class Video extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$nameVN = this.querySelector('.nameVN-video');
        this.$nameEN = this.querySelector('.nameEN-video');
        this.$image = this.querySelector('.video-image');
        this.$duration = this.querySelector('.duration-video');
        this.$videoType = this.querySelector('.video-type');
    }
    static get observedAttributes() {
        return ["name-vn", "video-type", "duration-video", "name-en", "image"];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'name-vn') {
            this.$nameVN.innerHTML = newValue;

        } else if (attrName == "video-type") {
            this.$videoType.innerHTML = newValue

        } else if (attrName == "duration-video") {
            this.$duration.innerHTML = newValue
        } else if (attrName == "name-en") {
            this.$nameEN.innerHTML = newValue
        } else if (attrName == "image ") {
            this.$image.style.backgroundImage = `url('${newValue}')`
        }
    }
    connectedCallback() {
        console.log("lan dau tien chay");
    }
    disconnectedCallback() {
        console.log("thẻ này đã bị xóa");
    }
}
window.customElements.define("list-video", Video);