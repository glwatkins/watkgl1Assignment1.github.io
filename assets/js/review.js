const ajaxJsonBtn = document.getElementById('ajax-json-btn')

////////////////////////////////////////////////
//This is the js to apllow for posting a comment

const showComment = () => {
    
    //grabbing the value from the text area whitch has an id of comment-id
  const commentVal = document.getElementById('comment-input').value = "" //adding the ="" clears the post box after it has been posted
  //var lm = new Date(document.lastModified);
  let p = document.createElement('p')
  const commentSection = document.getElementById("commentSection")
  const txtOutput = `Comment: ${commentVal}  Date Modifyed: ${document.lastModified}`
  p.appendChild(document.createTextNode(txtOutput)) // put the following txtOutput val in here commentVal
  commentSection.append(p)  
}
//binding the data to an event handler
document.getElementById('comment-data').addEventListener('click', showComment)

///////////////////////////////////////////
//This is the js to allow for loading json

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

//attaching to the button
ajaxJsonBtn.addEventListener('click', loadJson)

//finction to be able create a div from any amont/name of keys
const createoutPutDiv = (p) =>{
  //creating an element div called parent 
  const parent = document.createElement("div")
  parent.style.paddingBottom = "2vw" // just a bit of pading at the bottom of each entry
  parent.style.textIndent = "3vw"
  const keys =  Object.keys(p) // taking each object in p and assigning it to keys -- this is what allows us not to specify the definitive values(ie ID) there for make the json file scalible
  
  //for each is a function so you need to writ like tis to itterate through the keys(each id/name)
  //items is just each id or firstName
  keys.forEach(item => {
    const val = p[item]
    const div = document.createElement("div")
    //appaend the name of the item as well as the value in keys
    div.innerHTML = `${item}: ${val}`
    parent.append(div)
  })
  
  return parent
}
