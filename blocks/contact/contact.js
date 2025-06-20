import htm from '../../node_modules/htm/dist/htm.module.js';
import { h, render } from '../../node_modules/preact/dist/preact.module.js';

const person = {
    name: '',
    email: ''
};

const html = htm.bind(h);

export default async function decorate(block) {
    person.name = block.getElementsByTagName('p')[0].textContent.trim();
    person.email = block.getElementsByTagName('p')[1].textContent.trim();
    block.innerHTML = ''; 
render(
      html`<${PersonCard} name=${person.name} email=${person.email} />`,
      block
    );}

const PersonCard = ({ name, email }) => html`
  <div class="card">
    <h2>${name}</h2>
    <p><a href="mailto:${email}">${email}</a></p>
  </div>
`;