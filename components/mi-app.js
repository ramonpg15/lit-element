import { LitElement, html ,css} from 'lit';

export class MiApp extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    `;

    render() {
        return html`hi`;
    }
}
customElements.define('mi-app', MiApp);