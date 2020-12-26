import { LitElement, html } from 'lit-element';
import './simplegreeting';

class MainApp extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <simple-greeting name="John Doe"></simple-greeting>
            <simple-greeting name="Jane Doe"></simple-greeting>
            <simple-greeting></simple-greeting>
        `;
    }
}

customElements.define('main-app', MainApp);
