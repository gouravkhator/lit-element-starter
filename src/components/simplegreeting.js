import { LitElement, html } from 'lit-element';

class SimpleGreeting extends LitElement {
    static get properties() {
        return {
            name: { type: String }
        };
    }
    constructor() {
        super();
        this.name = "World";
    }

    render() {
        return html`
            <div>
                <p>Hello ${this.name}</p>
            </div>
        `;
    }

}

customElements.define('simple-greeting', SimpleGreeting);
