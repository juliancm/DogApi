function constDropdown() {

  let dropdownString ="";

  dropdownString += `
    <form>
      <fieldset>
        <label for="dogs">How many dogs?</label>
          <select id="dogs" name="dogs">
  `

  for (let i=1;i<3;i++) {
    dropdownString += `<option value="${i}">${i}</option>`
  };

  dropdownString += `<option value="3" selected>3</option>`

  for (let i=4;i<51;i++) {
    dropdownString += `<option value="${i}">${i}</option>`
  };

  dropdownString += `
          </select>
        <button type="submit" class="submitAnswer"> Submit</button>
      </fieldset>
    </form>
  `

  $('.consolePostMultiRand').html(dropdownString);
}



function submitConsolePostMultiRandClick () {

    $('.submitAnswer').on('click', function(event) {
        event.preventDefault();

        if ($('#dogs option:selected').val() === '45') {

/* Strict equality: 45 the string is not the 45 integer*/

            alert('butt');

        } else {
            alert('yay');
        }
    });
}

constDropdown();
submitConsolePostMultiRandClick ();

/*function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.chickentest').append(
    `<img src="${responseJson.message[1]}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getMoreDogImage();
  });
}
/*currently testing with default of 3 add selection input*/
/*function dogNumber () {
  return 3;
}

function createMultipleEndpoint () {
  return `'https://dog.ceo/api/breeds/image/random/${dogNumber()}'`;
}

function getMoreDogImage () {
  /*take the user input and create a new endpoint url*/
/*  fetch(createMultipleEndpoint())
  .then(response => response.json())
  .then(responseJson => displayResults(reponseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
}); */

/* input from jquery for a specific input
name attribute $('input[name=optionChoice]:checked').val() */


/*      <fieldset>
        <label for="dogs">How many dogs?</label>
        <select id="dogs">
          <option value="1">1</option>
      </fieldset>
*/

/*https://dog.ceo/api/breeds/image/random/3*/

/* to create drop down menu use js to iterate each line element*/


/*display by breed https://dog.ceo/api/breed/hound/images*/
