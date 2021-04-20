import Video from "./video.js";

let $template = document.createElement("template");
$template.innerHTML = `<div class="video-list">

</div>
`;
export default class VideoList extends HTMLElement {
    constructor() {
        super()
        this.appendChild($template.content.cloneNode(true))
        this.$list = this.querySelector('.video-list')
    }
    static get observedAttributes() {
        return ['video'];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'video') {
            let data = JSON.parse(newValue)
            for (let viđeoData of data) {
                let $videoContainer = new Video();
                $videoContainer.setAttribute('id', viđeoData.id)
                $videoContainer.setAttribute('name-vn', viđeoData.originalName)
                $videoContainer.setAttribute('name-en', viđeoData.name)
                $videoContainer.setAttribute('duration-video', viđeoData.duration)
                $videoContainer.setAttribute('image', viđeoData.image)
                $videoContainer.setAttribute('video-type', viđeoData.type)
                this.$list.appendChild($videoContainer)
            }
        }
    }
}
window.customElements.define('video-list', VideoList)