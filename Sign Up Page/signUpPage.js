const scriptURL = 'https://script.google.com/macros/s/AKfycbwxjbJRT-oDHDwBDfj_SUsAjXcJLXucwibHMm_1mhxFNRfvjglG/exec'
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
            //This is where you write your code
            const email = document.getElementById('email')
            email.value = ""
            const firstName = document.getElementById('firstName')
            firstName.value = ""
            const lastName = document.getElementById('lastName')
            lastName.value = ""
            window.location.href ="../Confirmation/index.html"

            //Do not alter below this line
        })
        .catch(error => console.error('Error!', error.message))
}); 

const mentorCheck = document.querySelector('#mentor'); 
let mentorFields = document.querySelector('.mentorFields'); 
let menteeFields = document.querySelector('.menteeFields'); 

mentorCheck.addEventListener('click', ()=>{
    console.log('inside if mentor clicked'); 
    mentorFields.setAttribute('style', 'display: block'); 
    menteeFields.setAttribute('style', 'display: none'); 

})
const menteeCheck = document.querySelector('#mentee'); 
menteeCheck.addEventListener('click', ()=>{
    console.log('inside if mentor clicked'); 
    mentorFields.setAttribute('style', 'display: none'); 
    menteeFields.setAttribute('style', 'display: block'); 


})

// mentorCheck.addEventListener('click', () => {
//     console.log('hello '); 
//     let mentorFields = document.querySelector('.mentorFields'); 
//     mentorFields.style.display = "block";  

// })
