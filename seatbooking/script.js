document.addEventListener("DOMContentLoaded", () => {
  const seatingArea = document.querySelector(".seatingArea");

  // Number of rows and seats per row
  const numRows = 10;
  const seatsPerRow = 18;

  const movies = [
    { id: 1, name: "Oppenheimer", price: 20 },
    { id: 2, name: "Spider Man: Across the Spider-Verse", price: 35 },
    { id: 3, name: "Mission Impossible - Dead Reckoning Part One", price: 30 },
    { id: 4, name: "John Wick Chapter 4", price: 35 },
  ];

  let seats; // Declare variables to hold dynamically generated elements
  let totalSelectedSeat = 0;
  let price = 0;
  let totalBill = 0;
  const perPrice = document.querySelector(".amount");
  const seatSelected = document.querySelector(".seatSelected");
  const totalPrice = document.querySelector(".total"); 

  // Function to generate seats
  function generateSeats() {
    seatingArea.innerHTML = ""; // Clear previous seating layout
    for (let row = 0; row < numRows; row++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");

      for (let seat = 0; seat < seatsPerRow; seat++) {
        const seatDiv = document.createElement("div");
        seatDiv.classList.add("seat");
        seatDiv.id = String.fromCharCode(65 + row) + (seat + 1);

        rowDiv.appendChild(seatDiv);
      }
      seatingArea.appendChild(rowDiv);
    }

    seats = document.querySelectorAll(".seat"); // Reassign seats after generating them
    selectSeat(); // Reinitialize event listeners for seat selection
  }

  // Call the function to generate the seats
  generateSeats();

  // Function to render movies in the dropdown
  function renderMovieList() {
    const select = document.getElementById("movieList");
    movies.forEach((movie) => {
      const option = document.createElement("option");
      option.value = movie.price;
      option.textContent = `${movie.name} | Price: ${movie.price}$`;
      select.appendChild(option);
    });
  }

  renderMovieList();

  // Function to handle seat selection
  function selectSeat() {
    seats.forEach((seat) => {
      seat.addEventListener("click", () => {
        if (!seat.classList.contains("booked")) {
          seat.classList.toggle("selected"); // Toggle seat selection
          updateBill(); // Update the bill after seat selection
        }
      });
    });
  }
  // Function to calculate and display the bill
  function updateBill() {
    const selectedSeats = document.querySelectorAll(".seat.selected");
    totalSelectedSeat = selectedSeats.length;
    totalBill = price * totalSelectedSeat;
  
    // If there are selected seats and a valid price
    if (totalSelectedSeat && price) {
      perPrice.textContent = price; // Update price per seat
      seatSelected.textContent = totalSelectedSeat; // Update total number of seats
      totalPrice.textContent = totalBill; // Update total price
    } else {
      perPrice.textContent = "0"; // Clear price per seat if no movie is selected
      seatSelected.textContent = "0"; // Clear seat count if no seats selected
      totalPrice.textContent = "0"; // Clear total price if no selection
    }
  }

  // Function to mark unavailable seats
  function generateAvailableSeat() {
    seats.forEach(() => {
      const notAvailableIndex = getNotAvailableSeatIndex();
      if (!seats[notAvailableIndex].classList.contains("booked")) {
        seats[notAvailableIndex].classList.add("booked");
      }
    });
  }

  // Randomly generate a seat index to mark as unavailable
  function getNotAvailableSeatIndex() {
    const totalSeats = seats.length;
    return Math.floor(Math.random() * totalSeats);
  }

  // Function to handle movie selection
  function getSelectedMoviePrice() {
    const selectElement = document.getElementById("movieList");
  
    selectElement.addEventListener("change", () => {
      reset(); // Reset previous selections
      generateAvailableSeat(); // Mark random seats as unavailable
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      price = Number(selectedOption.value); // Update price based on selected movie
      updateBill(); // Recalculate the bill after movie selection
    });
  }

  getSelectedMoviePrice();

  // Function to reset everything
  function reset() {
    price = 0;
    totalBill = 0;
    totalSelectedSeat = 0;
    seats.forEach((seat) => {
      seat.classList.remove("booked", "selected");
    });
    perPrice.textContent = ""; // Clear price
    seatSelected.textContent = ""; // Clear seat count
    totalPrice.textContent = ""; // Clear total price
  }
});
