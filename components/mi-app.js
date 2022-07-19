import { LitElement, html, css } from 'lit';

export class MiApp extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    `;
    static get properties() {
        return {
            nombre: { type: String },
            contador: { type: Number }
        };
    }

    constructor() {
        super();
        this.nombre = 'Ramon'
        this.contador = 0

    }
    aumentarContador() {
        this.contador++
    }

    render() {
        return html`hi ${this.nombre}
<button @click="{this.aumentarContador}">Click me!!</button>
        `
            ;
    }
}
customElements.define('mi-app', MiApp);