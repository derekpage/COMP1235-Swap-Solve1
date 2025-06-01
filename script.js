const subscribe = document.getElementById('subscribe');
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const cancel = document.getElementsByClassName('cancel');
const form = document.querySelector('form');
const warning = document.getElementById('warning');

subscribe.onclick = () => {
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

for (let button of cancel) {
    button.onclick = () => {
        form.style.display = 'none';
        return false;
    }
}

submit.onclick = () => {
    let email_pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (email_pattern.test(email.value)) {
        warning.style.display = 'none';
        form.style.display = 'none';
    } else {
        warning.style.display = 'block';
    }
    return false;
}
