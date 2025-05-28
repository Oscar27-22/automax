const cars = [
  {
    id: 1,
    model: "Taycan",
    brand: "Porsche",
    year: 2024,
    price: 3000,
    image: "images/cars/porsche-taycan-2024.jpg",
  },
  {
    id: 2,
    model: "RS7",
    brand: "Audi",
    year: 2025,
    price: 2700,
    image: "images/cars/audi-rs7-2025.jpg",
  },
  {
    id: 3,
    model: "Urus",
    brand: "Lamborghini",
    year: 2025,
    price: 8000,
    image: "images/cars/lamborghini-urus-2025.jpg",
  },
  {
    id: 4,
    model: "Corolla",
    brand: "Toyota",
    year: 2022,
    price: 900,
    image: "/images/cars/toyota-corolla-2022.jpg",
  },
  {
    id: 5,
    model: "Civic",
    brand: "Toyota",
    year: 2020,
    price: 850,
    image: "images/cars/toyota-civic-2020.jpg",
  },
  {
    id: 6,
    model: "Mazda 3",
    brand: "Mazda",
    year: 2022,
    price: 930,
    image: "images/cars/mazda-3-2018.jpg",
  },
  {
    id: 7,
    model: "CX-5",
    brand: "Mazda",
    year: 2024,
    price: 1300,
    image: "images/cars/mazda-cx5-2024.jpg",
  },
  {
    id: 8,
    model: "CX-9",
    brand: "Mazda",
    year: 2024,
    price: 2000,
    image: "images/cars/mazda-cx9-2024.jpg",
  },
  {
    id: 9,
    model: "Suburban",
    brand: "Chevrolet",
    year: 2024,
    price: 1900,
    image: "images/cars/chevrolet-suburban-2024.jpg",
  },
  {
    id: 10,
    model: "Tahoe",
    brand: "Chevrolet",
    year: 2023,
    price: 1200,
    image: "images/cars/chevrolet-tahoe-2023.jpg",
  },
  {
    id: 11,
    model: "Volkswagen",
    brand: "Jetta",
    year: 2022,
    price: 920,
    image: "images/cars/volkswagen-jetta-2022.jpg",
  },
  {
    id: 12,
    model: "Sentra",
    brand: "Nissan",
    year: 2023,
    price: 870,
    image: "images/cars/nissan-sentra-2022.jpg",
  },
  {
    id: 13,
    model: "Elantra",
    brand: "Hyundai",
    year: 2021,
    price: 850,
    image: "images/cars/hyundai-elantra-2021.jpg",
  },
  {
    id: 14,
    model: "Forte",
    brand: "Kia",
    year: 2022,
    price: 860,
    image: "images/cars/kia-forte-2022.jpg",
  },
  {
    id: 15,
    model: "Versa",
    brand: "Nissan",
    year: 2023,
    price: 820,
    image: "images/cars/nissan-versa-2023.jpg",
  },
  {
    id: 16,
    model: "A4",
    brand: "Audi",
    year: 2024,
    price: 2600,
    image: "images/cars/audi-a4-2024.jpg",
  },
  {
    id: 17,
    model: "Serie 3",
    brand: "BMW",
    year: 2021,
    price: 1700,
    image: "images/cars/bmw-serie3-2021.jpg",
  },
  {
    id: 18,
    model: "CLA 250",
    brand: "Mercedes-Benz",
    year: 2022,
    price: 1800,
    image: "images/cars/mercedes-cla250-2022.jpg",
  },
  {
    id: 19,
    model: "Model 3",
    brand: "Tesla",
    year: 2023,
    price: 1900,
    image: "images/cars/tesla-model3-2023.jpg",
  },
  {
    id: 20,
    model: "XC40",
    brand: "Volvo",
    year: 2025,
    price: 1500,
    image: "images/cars/volvo-xc40-2025.jpg",
  },
  {
    id: 21,
    model: "Outback",
    brand: "Subaru",
    year: 2021,
    price: 1200,
    image: "images/cars/subaru-outback-2021.jpg",
  },
  {
    id: 22,
    model: "Camaro",
    brand: "chevrolet",
    year: 2021,
    price: 1600,
    image: "images/cars/chevrolet-camaro-2021.jpg",
  },
  {
    id: 23,
    model: "Charger",
    brand: "Dodge",
    year: 2022,
    price: 1400,
    image: "images/cars/dodge-charger-2022.jpg",
  },
  {
    id: 24,
    model: "Mustang",
    brand: "Ford",
    year: 2024,
    price: 1500,
    image: "images/cars/ford-mustang-2024.jpg",
  },
  {
    id: 25,
    model: "Rio",
    brand: "Kia",
    year: 2022,
    price: 780,
    image: "images/cars/kia-rio-2022.jpg",
  },
];

function renderCars() {
  const container = document.querySelector(".grid-cars");

  cars.forEach((car) => {
    const card = document.createElement("div");
    card.className = "auto-card";
    const isClickable = car.id <= 3;

    if (isClickable) {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        window.location.href = `carDetail${car.id}.html`;
      });
    }

    card.innerHTML = `<img src="${car.image}" alt="${car.brand}-${car.model}-${car.year}">
                            <div class="car-details">
                                <h3>${car.brand} ${car.model}</h3>
                                <p><strong>Año:</strong> ${car.year}</p>
                                <p><strong>Marca:</strong> ${car.brand}</p>
                                <p><strong>Precio diario:</strong> $${car.price}</p>
                            </div>
        `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderCars);
