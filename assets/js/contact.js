const sibmitBtn = document.getElementById('sibmit-btn')

const showMessage = () => {
    
    
    if (firstName == ''){
        alert('Please enter details')
    }
    else{
    //grabbing the value from the text area whitch has an id of comment-id
        const firstName = document.getElementById('first-name').value //= "" //adding the ="" clears the post box after it has been posted
        alert(`Thank you for your message ${firstName}`)
    }
  
//   //var lm = new Date(document.lastModified);
//   let p = document.createElement('p')
//   const commentSection = document.getElementById("commentSection")
//   const txtOutput = `Comment: ${commentVal}  Date Modifyed: ${document.lastModified}`
//   p.appendChild(document.createTextNode(txtOutput)) // put the following txtOutput val in here commentVal
//   commentSection.append(p)  

}

//binding the data to an event handler
document.getElementById('sibmit-btn').addEventListener('click', showMessage)