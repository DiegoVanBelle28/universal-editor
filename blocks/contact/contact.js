export default async function decorate(block) {
    console.log('Contact block loaded');
    console.log('Block element:', block);
    const [blockWrapper] = block.children;
    console.log('Block wrapper:', blockWrapper);
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${blockWrapper.textContent.trim()}`;
    emailLink.innerText = blockWrapper.textContent.trim();
    emailLink.className = 'contact-email';
    blockWrapper.replaceChildren(emailLink);
}