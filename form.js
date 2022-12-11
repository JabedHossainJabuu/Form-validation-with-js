const name=document.getElementById('name')
const email=document.getElementById('email')
const password=document.getElementById('password')
const dob=document.getElementById('dob')
const photo=document.getElementById('photo')
const gender=document.getElementById('gender')
const religion=document.getElementById('religion')
const department=document.getElementById('department')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let messeges =[]
    if (name.value=='' || name.value==null) {
        messeges.push('Name is required')
    }

    if(messeges.length > 0){
        e.preventDefault()
        errorElement.innerText = messeges.join(', ')
    }
})