import htm from 'htm';
import { h, render } from 'preact';

const person = {
    name: '',
    email: ''
};

const html = htm.bind(h);

export default async function decorate(block) {
    console.log(block);
    person.name = block.getElementsByTagName('p')[0].textContent.trim();
    person.email = block.getElementsByTagName('p')[1].textContent.trim();
    console.log(`Name: ${person.name}, Email: ${person.email}`);
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${person.email}`;
    emailLink.innerText = person.email;
    emailLink.className = 'contact-email';
    block.replaceChildren(html`<${PersonCard} name=${person.name} email=${person.email}/>`);
}

const PersonCard = ({ name, email }) => html`
  <div class="card">
    <h2>${name}</h2>
    <p><a href="mailto:${email}">${email}</a></p>
  </div>
`;