import { checkUrl } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'


import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


console.log(process.env.API_BASE)





window.addEventListener('DOMContentLoaded',()=>{

    const submit = document.getElementById('submission');
    submit.addEventListener('click',handleSubmit);
    


})





alert("I EXIST")
console.log("CHANGE!!");
