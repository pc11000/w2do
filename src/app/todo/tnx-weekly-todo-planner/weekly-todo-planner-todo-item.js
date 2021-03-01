customElements.define('tnx-todo-item',
    class extends HTMLElement {
      constructor() {
        super();

        this.value = {};

        const shadowRoot = this.attachShadow({mode: 'open'});
        const container = document.createElement('div');
        const input = document.createElement('tnx-input');
        const cbx = document.createElement('tnx-checkbox');


        const style = document.createElement('style');
        style.textContent = `
        :host{display:block}
        div{
         display:flex;
        }
        tnx-input{
         margin-right:5px;
         flex-grow:1;
        }         
      `;

        input.setAttribute("data-bind","title");

        container.appendChild(input);
        container.appendChild(cbx);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(container);

        this.addEventListener('click', () => {

        });


        input.addEventListener('blur', updateDisplay);

        function updateDisplay() {

        }


      }

      setState(newState) {
        Object.entries(newState)
            .forEach(([key, value]) => {
              this.state[key] = this.isObject(this.state[key]) &&
              this.isObject(value) ? {...this.state[key], ...value} : value;
            });
      }

    }
);