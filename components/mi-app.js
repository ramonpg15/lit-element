import { LitElement, html, css } from 'lit';

export class MiApp extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    p{
        font-size:2rem
    }
    button{
        background-color:red
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
<button @click="${this.aumentarContador}">Click me!!</button>
<p>Cantidad de clicks dados al momento: ${this.contador}</p>
        `
            ;
    }
}
customElements.define('mi-app', MiApp);