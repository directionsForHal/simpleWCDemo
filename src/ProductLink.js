const disabledIcon = require("./scared.png");
const dumbBTTF2Joke = "You're like a skateboard in Back to the future 2! (...you're hovering)";
const template = document.createElement('template');

const createAnchorLinks = (imgUrls) => {
    return imgUrls.map((imgUrl, imgIndex) => {
        return (
        `<a class=img${imgIndex} href="#">
            <img src=${imgUrl}>
        </a>`
        )
    }).join("") //https://stackoverflow.com/questions/45812160/unexpected-comma-using-map/45812277
};

const imgUrls = [
    "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/e7sgnvkk7jhaktjqiij3/sb-dunk-high-pro-mens-skate-shoe-nhQXpc.jpg",
    "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/tmtlktlkknrzcmbceqsy/metcon-sport-mens-training-shoe-bqcHgn.jpg",
    "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/gr9yqxo8f2xtpoqjpktm/lebron-xvi-hot-lava-shoe-63nkPf.jpg"
];

template.innerHTML = `
    <style>
        :host {
            display: block;
            font-family: sans-serif;
            text-align: center;
            margin-top: 10%;
        }
        a {
            border: none;
            cursor: pointer;
        }
        img {
            height: 200px;
            width: 200px;
        }
        .hover-indicator{
            display:none;
        }
    </style>
    <h1>Raw Web Component</h1>
    <h1>Used Inside a React App</h1>
    <br>
    <h2>Testing Custom Web Component Product Link</h2>
    ${createAnchorLinks(imgUrls)}
    <h3 class="hover-indicator">${dumbBTTF2Joke}</h3>
`;

class ProductLink extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({'mode': 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        imgUrls.forEach((imgUrl,imgIndex) => {
            if(imgIndex === 1){
                this[`$img${imgIndex}`] = this._shadowRoot.querySelector(`.img${imgIndex}`);
            }
            this[`$img${imgIndex}`] = this._shadowRoot.querySelector(`.img${imgIndex}`);
            this[`$img${imgIndex}`].addEventListener('click', this.handleClick.bind(this));
            this[`$img${imgIndex}`].addEventListener('mouseenter', this.handleHoverEnter.bind(this));
            this[`$img${imgIndex}`].addEventListener('mouseleave', this.handleHoverLeave.bind(this));
        });
    }

    handleClick(event) {
        if(event.path[1].className.toString().includes("img1")){
            console.log("weeee");
            this._shadowRoot.querySelector(`.hover-indicator`).style.display="inherit";
            this._shadowRoot.querySelector(`.hover-indicator`).innerHTML = "Sorry, Link Disabled";
            return;
        }
        this._shadowRoot.querySelector(`.hover-indicator`).innerHTML = "Clicked off to product details...";
    }

    handleHoverEnter(event) {
        if(event.path[0].className.toString().includes("img1")){
            this._shadowRoot.querySelector(`.img1 > img`).setAttribute("src", disabledIcon);
            return;
        }
        this._shadowRoot.querySelector(`.hover-indicator`).style.display="inherit";
    }


    handleHoverLeave(event) {
        if(event.path[0].className.toString().includes("img1")){
            this._shadowRoot.querySelector(`.img1 > img`).setAttribute("src", imgUrls[1]);
            return;
        }
        this._shadowRoot.querySelector(`.hover-indicator`).style.display="none";
        this._shadowRoot.querySelector(`.hover-indicator`).innerHTML = dumbBTTF2Joke;
    }

}

window.customElements.define('product-link', ProductLink);