// Globale variabelen
// let valuta_from_select = null;


/**
 * In de onderstaande variabele slaan we alle valuta gegevens op
 * die we binnen krijgen via een API call.
 */
let todos = []; 

/**
 * Een functie die wordt opgestart door de browser
 * nadat de browser klaar is met het verwerken van alle
 * HTML en CSS
 */
// window.onload = function () {
//    // In deze functie worden alle todos gegevens opgevraagd
//    // via een API call
   
// };

/**
 * getCurrencies
 * -------------
 * Deze functie wordt asynchroon uitgevoerd door de aanduiding async
 * voorafgaand aan het function keyword
 * Dit is nodig omdat API calls op de achtergrond moeten worden uitgevoerd.
 */
async function getTodos()
{
   // Door await i.c.m. async wordt de call naar de API hieronder
   // asynchroon op de achtergrond uitgevoerd
   var name = localStorage.name;
   await fetch("http://localhost/todo-api/api?name=" + name)
   .then(response => response.json())
   .then(data => {
      todos = data;
      fillSelect();
   })
   .catch(error => console.log('error', error));
}


function fillSelect()
{
   var i = 0;
   todos.forEach(todos => {
      i++;
      
      if(todos['done'] == 1) {
      var htmlCode = `
         <div class="card">
            <div class="flex">
               <button id="${todos['id']}" onclick="taskDone(this.id)" class="dotbtn"><span class="dot2"></span></button>
               <h1 class="task">${todos['task']}</h1>
               <img class="done" src="img/done.png" alt="done">
            </div>
            <div class="datecontainer">
               <p class="date">${todos['startdate']} - ${todos['enddate']}</p>
               <button id="${todos['id']}" onclick="taskDelete(this.id)" class="trashbtn"><i class="fa-solid fa-trash trash"></i></button>
            </div>
         </div>
         `;
      } else {
      var htmlCode = `
         <div class="card">
            <div class="flex">
               <button id="${todos['id']}" onclick="taskDone(this.id)" class="dotbtn"><span class="dot"></span></button>
               <h1 class="task">${todos['task']}</h1>
            </div>
            <div class="datecontainer">
               <p class="date">${todos['startdate']}</p>
               <button id="${todos['id']}" onclick="taskDelete(this.id)" class="trashbtn"><i class="fa-solid fa-trash trash"></i></button>
            </div>
         </div>
         `;
      }

   // code voor addcard inserten
   document.getElementById("addcard").insertAdjacentHTML('beforebegin', htmlCode);
   });
}

