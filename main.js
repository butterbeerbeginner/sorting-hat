const firstYears = [
  {
    id: 1,
    name: "asher potter",
    age: 11
},

{
  id: 2,
  name: "mckenna malfoy",
  age: 12
},

{
  id: 3,
  name: "graham scamander",
  age: 11
},

{
  id: 4,
  name: "amelia olivander",
  age: 11
},

{
  id: 5,
  name: "maverick thomas",
  age: 12
},

{
  id: 6,
  name: "hazel lupin",
  age: 11
}
];


const renderToDom = (divID, textToPrint) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = textToPrint;
};

// first onclick event triggering first function, making a button to another function
function btnFunction() {
  document.getElementById('SortedStudents').innerHTML = `<form>
    <div class="form-group">
      <br></br>
      <input type="text" id"inputBox"></input>
    </div>
    </form>
    <button onclick="displayName()">Sort Me!</button>
    `;
  }
  
  //display name function, making a button to an expel function
  function displayName() {
   document.getElementById("nameEntered").innerHTML =
    `<form>
    <div class="card" style="width: 18rem;">
    <img src="https://p.favim.com/orig/2018/11/10/film-lion-jk-rowling-Favim.com-6560068.gif" class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-title">Gryffindor!</h5>
     <p class="card-text">Courage! Chivalry! Determination!</p>
     <button onclick="expelThem()">Snap Their Wand and Expel Immediately!</button>
    </div>
    </div>
    </form>
    `;}
  
    // expel function
  function expelThem() {
    document.getElementById("nameEntered").innerHTML =
    `<form>
    <div class="card" style="width: 18rem;">
    <img src="https://i.pinimg.com/originals/01/2a/83/012a838f5b816ccb233eeb6c3074871d.gif" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">The Dark Side</h5>
      <p class="card-text">Death Eaters and Dark Marks! Morsmordre </p>
    </div>
   </div>
   </form>
  `;
   }




//This displays buttons on the dom
const buttons = () => {
  const domString = `
  <button type="button1" class="btn btn-primary">Welcome Sorting Button</button>
  <button type="button2" class="btn btn-secondary">House Sorting Button</button>
  <button type="button3" class="btn btn-success">Expel Sorting Button</button>
  `;

  renderToDom("#buttonContainer", domString);
};


// hufflepuff badger link: https://i.pinimg.com/originals/77/9f/df/779fdf5aba6298e4881bc3a9b9db9398.gif



// const houseSorter = houseArray[Math.floor(Math.random() * houseArray.length)];

// const houseArray = [
//   {form>
//     <div class="card" style="width: 18rem;">
//     <img src="https://p.favim.com/orig/2018/11/10/film-lion-jk-rowling-Favim.com-6560068.gif" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">Gryffindor!</h5>
//       <button onclick="expelThem()">Snap Their Wand and Expel Immediately!</button>
//     </div>
//    </div>
//    </form>},

//   {<form>
//    <div class="card" style="width: 18rem;">
//    <img src="https://media.tenor.com/images/2c8ac80467053ba2a4f9e17b1bf26dde/tenor.gif" class="card-img-top" alt="...">
//    <div class="card-body">
//      <h5 class="card-title">Ravenclaw!</h5>
//      <button onclick="expelThem()">Snap Their Wand and Expel Immediately!</button>
//    </div>
//   </div>
//   </form>
// },

//   {<form>
//     <div class="card" style="width: 18rem;">
//     <img src="https://i.pinimg.com/originals/b3/99/5e/b3995e87db7628172b62e25660b6c039.gif" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">sSlytherin!</h5>
//       <button onclick="expelThem()">Snap Their Wand and Expel Immediately!</button>
//     </div>
//    </div>
//    </form>
//   },

//   {<form>
//     <div class="card" style="width: 18rem;">
//     <img src="https://i.pinimg.com/originals/77/9f/df/779fdf5aba6298e4881bc3a9b9db9398.gif" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">Hufflepuff</h5>
//       <button onclick="expelThem()">Snap Their Wand and Expel Immediately!</button>
//     </div>
//    </div>
//    </form>
//   }
// ];
