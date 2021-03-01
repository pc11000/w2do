customElements.define('tnx-input',
    class extends HTMLElement {
      constructor() {
        super();

        this.state = {title:"test"};


        const shadowRoot = this.attachShadow({mode: 'open'});
        const input = document.createElement('span');
        this.input = input;
        input.contentEditable = "true";
        input.setAttribute("role","textbox");
        input.className = "input";
        input.innerText = " ";
        input.setAttribute("data-bind","title");
        input.setAttribute("id","customInput");
        const style = document.createElement('style');
        style.textContent = `
        .input{
            display:inline-block;
            border: 1px solid #ccc;
            font-family: inherit;
            font-size: inherit;
            padding: 1px 6px;
            min-width: 100px;
        }        
       
                
      `;

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(input);

        this.addEventListener('click', () => {

        });


        input.addEventListener('blur', updateDisplay);

        function updateDisplay() {

        }
      }

      connectedCallback() {

        if (!this.hasAttribute('value')) {
          this.setAttribute('value', 1);
        }
      }

/*      static get observedAttributes() {
        return ['value'];
      }

      attributeChangedCallback(name, oldValue, newValue) {
        this.input.value = this.value;
      }*/

      setValue(val){
        this.input.innerText = val;
      }
    }
);