/**
 * Created by Денис on 26.08.2019.
 */

let showModal = document.querySelector('.showModal-btn');
let hideModal = document.querySelector('.hideModal-btn');

// console.log(modal);

function showWindow() {
    let modalWindow = document.querySelector('.modal');
    modalWindow.style.display = 'block';
}

function hideWindow() {
    let modalWindow = document.querySelector('.modal');
    modalWindow.style.display = 'none';
}
showModal.onclick = showWindow;
hideModal.onclick = hideWindow;



