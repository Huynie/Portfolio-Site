const hamBurg = document.querySelector('button.hamburger');
const pgTitle = document.querySelector('li.pageTitle a');
const popup = document.createElement('div');
popup.classList = 'hamburger__popup';
const hamburgerItems = document.querySelectorAll('nav ul li');

document.body.appendChild(popup);
hamburgerItems.forEach(item => {
    const popupItems = document.createElement('a');
    popupItems.classList = 'hamburger__popup--items ' + item.className;
    popupItems.text = item.firstElementChild.innerHTML;
    popupItems.href = item.firstElementChild.href;
    popup.appendChild(popupItems);
});

document.body.addEventListener('click', e => {
    if (e.target == hamBurg) {
        popup.id = 'active';
    } else if (e.target != popup) {
        popup.removeAttribute('id');
    }
})