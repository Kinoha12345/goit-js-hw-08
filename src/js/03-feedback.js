
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
   
    if (savedMessage) {
  
      const saveMassage = JSON.parse(savedMessage);
  
      for (const item in saveMassage) {
        if (saveMassage.hasOwnProperty(item)) {
  
          refs.form.elements[item].value = saveMassage[item];
        }
      }
    }
  }