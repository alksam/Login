import { BASE_URL_DEV } from './globalVariables.js';




// Fetch All Cars
async function fetchCars() {
    try {
        console.log('Fetching all cars...');
        const response = await fetch(`${BASE_URL_DEV}/cars/`);
        const data = await response.json();
        console.log('Fetched cars:', data);
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Fetch Car by ID
async function fetchCarById(carId) {
    try {
        console.log(`Fetching car with ID: ${carId}...`);
        const response = await fetch(`${BASE_URL_DEV}/cars/by/${carId}`);
        const data = await response.json();
        console.log(`Fetched car by ID ${carId}:`, data);
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Create Car
async function createCar(car) {
    try {
        console.log('Creating car...', car);
        const response = await fetch(`${BASE_URL_DEV}/cars/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car),
        });
        const data = await response.json();
        console.log('Created car:', data);
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Update Car
async function updateCar(carId, updatedCar) {
    try {
        console.log(`Updating car with ID: ${carId}...`, updatedCar);
        const response = await fetch(`${BASE_URL_DEV}/cars/update/${carId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCar),
        });
        const data = await response.json();
        console.log(`Updated car with ID ${carId}:`, data);
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Delete Car
async function deleteCar(carId) {
    try {
        console.log(`Deleting car with ID: ${carId}...`);
        const response = await fetch(`${BASE_URL_DEV}/cars/delete/${carId}`, {
            method: 'DELETE'
        });
        if (response.status === 204) {
            console.log('Car deleted successfully');
        } else {
            
          await response.json();
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Eksempelbil til oprettelse
const newCar = {
    brand: 'Toyota',
    model: 'Corolla',
    make: 'Japan',
    year: 2020,
    firstRegistrationDate: 230,
    price: 20000
};

// Fetch alle biler
fetchCars().then(data => console.log(data));

// Fetch bil efter ID (eksempel med id 3)
fetchCarById(3).then(data => console.log(data));

// Opret en ny bil
createCar(newCar).then(() => fetchCars().then(data => console.log(data)));

// Opdater en bil (eksempel med id 6)
const updatedCar = {
    id: 6,
    brand: 'Toyota',
    model: 'Corolla',
    make: 'Japan',
    year: 2018,
    firstRegistrationDate: 2010,
    price: 18000
};

updateCar(6, updatedCar).then(() => fetchCars().then(data => console.log(data)));

// Slet en bil (eksempel med id 1)
//deleteCar(1).then(() => fetchCars().then(data => console.log(data)));

export { fetchCars, fetchCarById, createCar, updateCar, deleteCar };