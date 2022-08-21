const template = document.createElement('template');
template.innerHTML = `
<style>
h3{
  background-color: black;
  color: violet;
}
h4{
  background-color: gray;
  color: rgb(88, 40, 185);
}
h5{
  background-color: whites;
  color: rgb(82, 156, 218);
}
</style>
<div class="user-info">
    Name: <h3></h3>
    Email: <h4></h4>
    Comment:<h5></h5>
    </div>
    
`;
class UserInfo extends HTMLElement {
  constructor() {
    super();
    // creates shadow root
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('h4').innerText = this.getAttribute('email');
    this.shadowRoot.querySelector('h5').innerText = this.getAttribute('comment');
  }
}

customElements.define('user-info', UserInfo); // defines custom elements
