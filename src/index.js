// Brief

// Start Here
// Welcome and Introduction
// Display a welcoming message for the user.
alert(
  "Welcome to the Music Festival Concert Slot Reservation! Get ready to choose your favorite music genre."
);

// Prompt the user to enter their name.
const namePerson = prompt("What's your name? ");

console.log(namePerson);

// Display a greeting message with the user's name.

alert(`Hello, ${namePerson}! Let's get started.`);

// Music Genre Selection
// Ask the user to choose a music genre.
const musicGenre = parseInt(
  prompt(
    `Please select your favourite music genre:
1 - Rock
2 - Pop
3 - Electronic
Please write the correponding number`,
    "1"
  )
);
let musicGenreSelection = "";
// Initialize a variable to store the selected genre.
// Determine the selected genre based on the user's choice.
if (musicGenre === 1) {
  musicGenreSelection = "Rock";
} else if (musicGenre === 2) {
  musicGenreSelection = "Pop";
} else if (musicGenre === 3) {
  musicGenreSelection = "Electronic";
} else {
  alert("You chose an invalid number, please enter a number between 1 and 3");
  exit(1);
}

console.log("music genre", musicGenreSelection);

// Display the chosen genre.
alert(`You've chosen ${musicGenreSelection}!`);

// Concert Slot Reservation
// Ask the user to select a concert slot based on the chosen genre.
let concertSlot = "";
let artistsNames = [];
// Determine the available concert slots and corresponding artist names.
switch (musicGenreSelection) {
  case "Rock":
    concertSlot = parseInt(
      prompt(
        `Select a slot for the Rock concert:
    1 - The Strokes
    2 - Blink 182
    3 - Pearl Jam
    Please enter a number`,
        "1"
      )
    );
    artistsNames = ["The Strokes", "Blink 182", "Pearl Jam"];
    break;
  case "Pop":
    concertSlot = parseInt(
      prompt(
        `Select a slot for the pop concert:
      1 - Rihanna
      2 - Beyonce
      3 - Ariana Grande
      Please enter a number`,
        "1"
      )
    );
    artistsNames = ["Rihanna", "Beyonce", "Ariana Grande"];
    break;
  case "Electronic":
    concertSlot = parseInt(
      prompt(
        `Select a slot for the electronic concert:
        1 - Tame Impala
        2 - Björk
        3 - Daft Punk 
        Please enter a number`,
        "1"
      )
    );
    artistsNames = ["Tame Impala", "Björk", "Daft Punk"];
    break;

  default:
    alert(`Invalid choice, please select a number.`);
    exit(1);
}
let selectedTime;
switch (concertSlot) {
  case 1:
    selectedTime = "17:00";

    break;
  case 2:
    selectedTime = "20:00";
    break;
  case 3:
    selectedTime = "22:00";
    break;
  default:
    alert(`Please enter a valid number`);
    exit(1);
}

// bonus
// Determine the selected time slot based on the user's concert slot choice.
if (selectedTime === "17:00") {
  alert(
    `Great choice! You've reserved a spot to see ${artistsNames[0]} at ${selectedTime} for the ${musicGenreSelection} concert!`
  );
} else if (selectedTime === "20:00") {
  alert(
    `Great choice! You've reserved a spot to see ${artistsNames[1]} at ${selectedTime} for the ${musicGenreSelection} concert!`
  );
} else if (selectedTime === "22:00") {
  alert(
    `Great choice! You've reserved a spot to see ${artistsNames[2]} at ${selectedTime} for the ${musicGenreSelection} concert!`
  );
} else {
  alert(`Please select a number.Invalid choice.`);
  exit(1);
}

// Display a message confirming the user's reservation based on the selected artist, time slot, and genre.
