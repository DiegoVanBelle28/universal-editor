export default async function decorate(block) {
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${block.textContent.trim()}`;
    emailLink.innerText = block.textContent.trim();
    emailLink.className = 'contact-email';
    block.replaceChildren(emailLink);
}