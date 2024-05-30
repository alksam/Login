import React, { useState, useEffect } from 'react';
import { fetchCars, fetchCarById, createCar, updateCar, deleteCar } from '../services/Crud.js';
import ProductManagerStyles from '../styles/ProductManagerStyles.js';


const CarManager = () => {
    const [cars, setCars] = useState([]);
    const [newCar, setNewCar] = useState({
        brand: '',
        model: '',
        make: '',
        year: '',
        firstRegistrationDate: '',
        price: ''
    });
    const [editingCar, setEditingCar] = useState(null);

    useEffect(() => {
        const getCars = async () => {
            try {
                const data = await fetchCars();
                setCars(data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        getCars();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCar(prevCar => ({
            ...prevCar,
            [name]: value
        }));
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditingCar(prevCar => ({
            ...prevCar,
            [name]: value
        }));
    };

    const handleCreate = async () => {
        try {
            if (newCar.brand && newCar.model && newCar.make && newCar.year && newCar.firstRegistrationDate && newCar.price) {
                await createCar(newCar);
                const data = await fetchCars();
                setCars(data);
                setNewCar({
                    brand: '',
                    model: '',
                    make: '',
                    year: '',
                    firstRegistrationDate: '',
                    price: ''
                });
            } else {
                alert("Please fill out all fields");
            }
        } catch (error) {
            console.error('Error creating car:', error);
        }
    };

    const handleEdit = (car) => {
        setEditingCar(car);
    };

    const handleUpdate = async () => {
        try {
            if (editingCar.brand && editingCar.model && editingCar.make && editingCar.year && editingCar.firstRegistrationDate && editingCar.price) {
                await updateCar(editingCar.id, editingCar);
                const data = await fetchCars();
                setCars(data);
                setEditingCar(null);
            } else {
                alert("Please fill out all fields");
            }
        } catch (error) {
            console.error('Error updating car:', error);
        }
    };

    const handleDelete = async (carId) => {
        try {
            await deleteCar(carId);
            const data = await fetchCars();
            setCars(data);
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    };

    return (
        <div className="productManager">
            <ProductManagerStyles />
            <h1>Car Manager</h1>
            <div className="createCarBox">
                <h2>Create Car</h2>
                <input name="brand" placeholder="Brand" value={newCar.brand} onChange={handleChange} />
                <input name="model" placeholder="Model" value={newCar.model} onChange={handleChange} />
                <input name="make" placeholder="Make" value={newCar.make} onChange={handleChange} />
                <input name="year" placeholder="Year" value={newCar.year} onChange={handleChange} />
                <input name="firstRegistrationDate" placeholder="First Registration Date" value={newCar.firstRegistrationDate} onChange={handleChange} />
                <input name="price" placeholder="Price" value={newCar.price} onChange={handleChange} />
                <button onClick={handleCreate}>Create Car</button>
            </div>
            <div className="carList">
                <h2>Cars</h2>
                <ul>
                    {cars.map((car) => (
                        <li key={car.id} className="productBox">
                            <div>
                                <h3>{car.brand} {car.model}</h3>
                                <p>Make: {car.make}</p>
                                <p>Year: {car.year}</p>
                                <p>First Registration Date: {car.firstRegistrationDate}</p>
                                <p>Price: {car.price}</p>
                                <div className="editDeleteButtons">
                                    <button onClick={() => handleEdit(car)}>Edit</button>
                                    <button onClick={() => handleDelete(car.id)}>Delete</button>
                                </div>
                            </div>
                            {editingCar && editingCar.id === car.id && (
                                <div className="editCarBox">
                                    <h2>Edit Car</h2>
                                    <input name="brand" placeholder="Brand" value={editingCar.brand} onChange={handleEditChange} />
                                    <input name="model" placeholder="Model" value={editingCar.model} onChange={handleEditChange} />
                                    <input name="make" placeholder="Make" value={editingCar.make} onChange={handleEditChange} />
                                    <input name="year" placeholder="Year" value={editingCar.year} onChange={handleEditChange} />
                                    <input name="firstRegistrationDate" placeholder="First Registration Date" value={editingCar.firstRegistrationDate} onChange={handleEditChange} />
                                    <input name="price" placeholder="Price" value={editingCar.price} onChange={handleEditChange} />
                                    <button onClick={handleUpdate}>Update Car</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CarManager;