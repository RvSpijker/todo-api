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
   await fetch("http://localhost/todo-api/api?id=1")
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

      const card = document.createElement("div");
      card.className = "card";
      card.setAttribute("id", "card" + i);

      const element = document.getElementById("cardgrid");
      const child = document.getElementById("addcard");
      element.insertBefore(card,child);

      const flex = document.createElement("div");
      flex.className = "flex";
      flex.setAttribute("id", "flex" + i);
      const element2 = document.getElementById("card" + i);
      element2.appendChild(flex);

      const dot = document.createElement("span");
      dot.className = "dot";
      const element3 = document.getElementById("flex" + i);
      element3.appendChild(dot);

      const h1 = document.createElement("h1");
      const node = document.createTextNode(todos['task']);
      h1.appendChild(node);
      const element4 = document.getElementById("flex" + i);
      element4.appendChild(h1);

      if(todos['done']) {
         const done = document.createElement("img");
         done.className = "done";
         done.src = "img/done.png";
         element3.appendChild(done);
      }

      const date = document.createElement("p");
      date.className = "date";

      if (todos['enddate']) {
         const node2 = document.createTextNode(todos['startdate'] + " - " + todos['enddate']);
         date.appendChild(node2);
      } else {
         const node2 = document.createTextNode(todos['startdate']);
         date.appendChild(node2);
      }

      const element5 = document.getElementById("card" + i);
      element5.appendChild(date);
   });
}

