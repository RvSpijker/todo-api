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
window.onload = function () {
   // In deze functie worden alle todos gegevens opgevraagd
   // via een API call
   getTodos();
};

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
   await fetch('http://localhost/todowo/api?cmd=all')
      .then(response => response.json())
      .then(data => {
         todos = data;    // De ontvangen data opslaan in de lokale variabele
         fillSelect();     // Helper function om de select elementen te vullen
                           // met de valuta
      })
      .catch(error => console.error('API ERROR: ' + error));
}

function fillSelect()
{
   todos.forEach(currency => {

   });
}