const ajaxJsonBtn = document.getElementById('ajax-json-btn')

////////////////////////////////////////////////
//This is the js to apllow for posting a comment

const showComment = () => {
    
    //grabbing the value from the text area whitch has an id of comment-id
  const commentVal = document.getElementById('comment-input').value //= "" //adding the ="" clears the post box after it has been posted
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
      const contain = document.createElement('div')
      contain.className = 'containStar'
      const estar1 = document.createElement('i') // makes a element called trash and is an icon 'i'
      estar1.className = 'far fa-star'
      const estar2 = document.createElement('i') // makes a element called trash and is an icon 'i'
      estar2.className = 'far fa-star'
      const estar3 = document.createElement('i') // makes a element called trash and is an icon 'i'
      estar3.className = 'far fa-star'
      contain.append(estar1, estar2, estar3)
      parent.append(contain) 
      
      })
  })
}

document.addEventListener("click", (event) => {
  if(event.target.matches(".fa-star")){

  let begin = event.target.closest('.containStar')
  //querry sellect fas fa-stars in containStar
  let allstar = begin.querySelectorAll('.fa-star')
  console.log(allstar)
  let idx = 0;
  //and full them up to that point
  //have a bool up here that == false
  let full = false
  
  allstar.forEach((s,i) => {

    if (s=== event.target)
      {
        idx = i;
        full = true
        const star = document.createElement('i') // makes a element called trash and is an icon 'i'
        star.className = 'fas fa-star'
        // event.target.append(star)
        s.replaceWith(star)
        //set bool to true and full in jusy this star, wile bool is still false full in the stars
      }

    if (full === false)
      {
        const star = document.createElement('i') // makes a element called trash and is an icon 'i'
        star.className = 'fas fa-star'
        // event.target.append(star)
        s.replaceWith(star)
        console.log(s)
      }
      // allstar.replaceWith(star)
      
    //for loop through and 
  })

  console.log(idx)
  }
});

document.addEventListener("click", (event) => {
  if(event.target.matches(".fa-star")){
    const estar = document.createElement('i') // makes a element called trash and is an icon 'i'
    estar.className = 'far fa-star'
    event.target.closest("i").replaceWith(estar)
  }
});

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

// document.addEventListener("click", (event) => {
//   if(event.target.matches(".far fa-star")){
//     event.target.closest("p").remove()
//     // const star = document.createElement('i') // makes a element called trash and is an icon 'i'
//     // star.className = 'fas fa-star'
//     // parent.append(star)
//   }
// });


