This project was bootstrapped with Create React App.

Created in order to show simple Web Component implementation

The web component can be found at `src/ProductLink.js`

The integration can be seen in `src/App.js`

The following tutorial was used in-order to facilitate the custom tag's use
https://vaadin.com/tutorials/using-web-components-in-react

### The steps

Install the polyfill:
    
    npm install --save @webcomponents/webcomponentsjs vendor-copy
    
Update `package.json` to contain the following:
    
    
    "scripts": {
           "start": "react-scripts start",
           "build": "react-scripts build",
           "test": "react-scripts test --env=jsdom",
           "eject": "react-scripts eject",
           "postinstall": "vendor-copy"
         },
         "vendorCopy": [
           {
             "from": "node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js",
             "to": "public/vendor/custom-elements-es5-adapter.js"
           },
           {
             "from": "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
             "to": "public/vendor/webcomponents-bundle.js"
           }
         ]
    
Specifically adding: 
 
    postinstall": "vendor-copy"
    
    vendorCopy: [...]
 
Add tags to `public/index.html`:

    <script src="%PUBLIC_URL%/vendor/webcomponents-bundle.js"></script>
    <script>if (!window.customElements) { document.write("<!--"); }</script>
    <script src="%PUBLIC_URL%/vendor/custom-elements-es5-adapter.js"></script>
    <!--! DO NOT REMOVE THIS COMMENT, WE NEED ITS CLOSING MARKER -->

To run demo:

    - npm i
    - npm run start
   