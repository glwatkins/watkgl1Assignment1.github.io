const sibmitBtn = document.getElementById('sibmit-btn')
const firstName = document.getElementById('first-name').value 
const showMessage = () => {
    
    console.log(firstName)
    
    if (document.getElementById('first-name').value == "" || document.getElementById('last-name').value == "" || document.getElementById('contact-email').value == ""){
        alert('Please enter ALL details')
    }
    else{
    //grabbing the value from the text area whitch has an id of comment-id
    const firstName = document.getElementById('first-name').value
        alert(`Thank you for your message ${firstName}`)
        document.getElementById('first-name').value = ""
        document.getElementById('last-name').value = "" 
        document.getElementById('contact-email').value = ""
    }
}

//binding the data to an event handler
document.getElementById('sibmit-btn').addEventListener('click', showMessage)