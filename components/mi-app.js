import { LitElement, html, css } from 'lit';

export class MiApp extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    `;
    static get properties() {
        return {
            nombre: { type: String }
        };
    }

    constructor() {
        super();
        this.nombre = 'Ramon'


    }

    render() {
        return html`hi ${this.nombre}`;
    }
}
customElements.define('mi-app', MiApp);