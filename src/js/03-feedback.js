// console.log(localStorage)
// const KEY_NAME ="feedback-form-state";
// localStorage.setItem(KEY_NAME, JSON.stringify({email: 1,message: 1 }))
// const savedData = localStorage.getItem(KEY_NAME);
// console.log(savedData)
// const parseData = JSON.parse(savedData);
// console.log(parseData)
import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input')
}
const KEY_NAME ="feedback-form-state";
const formData = {};
populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

// refs.form.addEventListener('input', e => {
//     formData[e.target.name] = e.target.value
//     console.log(JSON.stringify(formData));
// });

function onFormSubmit(e) {
    e.preventDefault();
    formData[e.target.name] = e.target.value;
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(KEY_NAME)
}
function onTextareaInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(KEY_NAME, JSON.stringify(formData))
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(KEY_NAME);
    const parsed = JSON.parse(savedMessage);
    if (parsed.message) {
        console.log(savedMessage);
        refs.textarea.value = parsed.message;  
    }
    if (parsed.email) {
        refs.input.value = parsed.email;
    } 
}

