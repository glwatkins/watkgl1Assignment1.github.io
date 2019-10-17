////////////////////////////////////////////////
//This is the js to apllow for posting a comment

const showComment = () => {
    
    if (document.getElementById('comment-input').value == "" || document.getElementById('comment-first-name').value == ""){
        alert('Please comment and name')
    }
    else{
        const commentVal = document.getElementById('comment-input').value 
        const commentName = document.getElementById('comment-first-name').value
        let p = document.createElement('p')
        const commentSection = document.getElementById("commentSection")
        const txtOutput = `Name: ${commentName} Comment: ${commentVal}  Date Posted: ${document.lastModified}`
        p.appendChild(document.createTextNode(txtOutput)) // put the following txtOutput val in here commentVal
        commentSection.append(p) 

        document.getElementById('comment-input').value = ""
        document.getElementById('comment-first-name').value = "" 
    }  
}

//binding the data to an event handler
document.getElementById('comment-data').addEventListener('click', showComment)

///////////////////////////////////////////
//This is the js to allow for loading json
const ajaxJsonBtn = document.getElementById('ajax-json-btn')
//AJAX loading of json
const jsonOutput = document.getElementById("jsonOutput")

const loadJson = () => {
  fetch ('./assets/js/cake.json')
  .then(res => {
    return res.json();
  })
  .then(data => {
   data.forEach(p => {
      console.log(p)
      const parent = createoutPutDiv(p)  
      jsonOutput.append(parent)            
      })
  })
}

//attaching to the button to loading the json
ajaxJsonBtn.addEventListener('click', loadJson)

///////////////////////////////////////////////////
//displaying the json

//finction to be able create a div from any amont/name of keys
const createoutPutDiv = (p) =>{
  //creating an element div called parent 
  const parent = document.createElement("div")
  parent.style.paddingBottom = "2vw" 
  parent.style.textIndent = "3vw"
  const keys =  Object.keys(p) 
 
  keys.forEach(item => {
    const val = p[item]
    const div = document.createElement("div")
    //appaend the name of the item as well as the value in keys  
    div.innerHTML = `${item}: ${val}`
    parent.append(div)
  })
  
  return parent
}