// Sample car data
const cars = [
  {name: "Toyota Camry", price: 35, img: "images/Toyota Camry.jpg"},
  {name: "Ford Escape", price: 40, img: "images/Ford Escape.jpg"},
  {name: "Chevy Malibu", price: 38, img: "images/Chevy Malibu.jpg"},
  {name: "Honda Civic", price: 33, img: "images/Honda Civic.jpg"},
];

// Populate featured cars
const carList = document.getElementById("car-list");
cars.forEach(car => {
  const card = document.createElement("div");
  card.classList.add("car-card");
  card.innerHTML = `
    <img src="${car.img}" alt="${car.name}">
    <div class="info">
      <h3>${car.name}</h3>
      <p>From $${car.price}/day</p>
      <button onclick="alert('Booked: ${car.name}')">Book Now</button>
    </div>`;
  carList.appendChild(card);
});

// Handle search form
document.getElementById("search-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const loc = document.getElementById("location").value;
  const start = document.getElementById("start-date").value;
  const end = document.getElementById("end-date").value;
  if (loc && start && end) {
    alert(`Searching cars at ${loc} from ${start} to ${end}`);
  }
});