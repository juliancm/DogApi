'use strict'

function constConsoleDropdown() {

  let dropdownString ="";

  dropdownString += `
    <form>
      <fieldset>
        <label for="consoleDogs">How many dogs?</label>
          <select id="consoleDogs" name="dogs">
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
        <button type="submit" class="postConsole">Console</button>
      </fieldset>
    </form>
  `

  $('.consolePostMultiRand').html(dropdownString);
}

function consoleMultiDogJson() {
  let selected = $('#consoleDogs option:selected').val();
  fetch(`https://dog.ceo/api/breeds/image/random/${selected}`)
    .then(response => response.json())
    .then(responseJson =>
      console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));

}

function submitConsolePostMultiRandClick () {

    $('.postConsole').on('click', function(event) {
        event.preventDefault();
        consoleMultiDogJson();
    });
}

/*fuse dom and console into single set of functions?*/

function constDomDropdown() {

  let dropdownString ="";

  dropdownString += `
    <form>
      <fieldset>
        <label for="displayDogs">How many dogs?</label>
          <select id="displayDogs" name="dogs">
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
        <button type="submit" class="displayDom">Display</button>
      </fieldset>
    </form>
    <div class='multiDogDisplayArea'></div>
  `

  $('.displayDomMultiRand').html(dropdownString);
}

function displayMultiDogJson() {
  let selected = $('#displayDogs option:selected').val();
  fetch(`https://dog.ceo/api/breeds/image/random/${selected}`)
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));

}

function displayResults(responseJson) {



let imgString = ""

for (let i=0;i<responseJson.message.length;i++) {
  imgString += `<img src="${responseJson.message[i]}" class="results-img">`
};

$('.multiDogDisplayArea').html(imgString);

}

function submitDisplayMultiRandClick () {

    $('.displayDom').on('click', function(event) {
        event.preventDefault();
        displayMultiDogJson();
    });
}

/*follows workspace for randBreed*/

function constRandByBreedInput () {

  let inputString ="";

  inputString += `
    <form>
      <fieldset>
      <label for="breedInput">Breed:</label>
        <input type="text" id="breedInput">
        <button type="submit" class="displayBreed">Display</button>
      </fieldset>
    </form>
    <div class='singleBreedDisplayArea'></div>
  `

  $('.displayDomSingleBreed').html(inputString);
}

function submitSingleBreedInputClick () {

    $('.displayBreed').on('click', function(event) {
        event.preventDefault();

        if ($('#breedInput').val() === '') {

            alert('please input a breed');

        } else {
            getSingleBreedJson();
            normalizeSingleBreedInput();
        }
    });
}

function getSingleBreedJson() {
  let selected = $('#breedInput').val().toLowerCase();
  if (selected.includes(' ')) {
    selected = normalizeSingleBreedInput();
  }
  fetch(`https://dog.ceo/api/breed/${selected}/images/random`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson =>
      displayBreedResults(responseJson))
    .catch(error => {
      $('.singleBreedDisplayArea').html(`<p>${error.message}</p>`);
    });

}

function normalizeSingleBreedInput () {
  let str = $('#breedInput').val().toLowerCase();
  let strArray = str.split(' ');
  let newStr = strArray[1]+' '+strArray[0];
  return newStr.replace(/ /g, '/');
}

function breedError (responseJson) {
  let errorString = `<p>${responseJson.message}</p>`

  $('.singleBreedDisplayArea').html(errorString);
}

function displayBreedResults(responseJson) {


let imgString = ""

imgString += `<img src="${responseJson.message}" class="results-img">`

$('.singleBreedDisplayArea').html(imgString);

}


constConsoleDropdown ();
submitConsolePostMultiRandClick ();

constDomDropdown ();
submitDisplayMultiRandClick ();

constRandByBreedInput ();
submitSingleBreedInputClick ();
