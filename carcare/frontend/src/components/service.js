import React, { useState, useEffect } from 'react';
import axios from 'axios';

const servicePrices = {
    oil_change: 799.00,
    tire_rotation: 1499.00,
    brake_inspection: 1999.00,
    engine_repair: 4999.00,
    car_wash: 499.00,
};

const CarServiceForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        car_brand: '',
        car_model: '',
        service_name: '',
        service_price: '',
    });
    const [carBrands, setCarBrands] = useState([]);
    const [carModels, setCarModels] = useState([]);
    const [message, setMessage] = useState(''); 

   
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/brands/');
                setCarBrands(response.data);
            } catch (error) {
                console.error('Error fetching car brands:', error);
            }
        };
        fetchBrands();
    }, []);

    
    const handleBrandChange = async (e) => {
        const brandId = e.target.value;
        setFormData({ ...formData, car_brand: brandId, car_model: '' });

        if (brandId) {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/models/${brandId}/`);
                setCarModels(response.data);
            } catch (error) {
                console.error('Error fetching car models:', error);
            }
        } else {
            setCarModels([]);
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'service_name') {
            const price = servicePrices[value] || '';
            setFormData({ ...formData, service_name: value, service_price: price });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();

      
        const userData = localStorage.getItem("user");
        if (!userData) {
            alert("Please log in first");
            return; 
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/requests/', formData);
            console.log('Request submitted:', response.data);
            setMessage('Service request submitted successfully!'); 
        } catch (error) {
            console.error('There was an error submitting the request:', error);
            setMessage('Failed to submit service request.'); 
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-900 text-white mt-40 mb-10" id='booking'>
            <h2 className="text-2xl font-semibold text-center mb-4">Car Service Request</h2>
            {message && <p className="text-center text-green-500">{message}</p>} {/* Display message */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-gray-800 text-white"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-gray-800 text-white"
                />
                <input
                    type="text"
                    name="phone_number"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-gray-800 text-white"
                />
                <select
                    name="car_brand"
                    onChange={handleBrandChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-gray-800 text-white"
                >
                    <option value="">Select Car Brand</option>
                    {carBrands.map((brand) => (
                        <option key={brand.id} value={brand.id}>{brand.name}</option>
                    ))}
                </select>
                <select
                    name="car_model"
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-gray-800 text-white"
                >
                    <option value="">Select Car Model</option>
                    {carModels.map((model) => (
                        <option key={model.id} value={model.id}>{model.name}</option>
                    ))}
                </select>
                <select
                    name="service_name"
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-gray-800 text-white"
                >
                    <option value="">Select Service</option>
                    <option value="oil_change">Oil Change</option>
                    <option value="tire_rotation">Tire Rotation</option>
                    <option value="brake_inspection">Brake Inspection</option>
                    <option value="engine_repair">Engine Repair</option>
                    <option value="car_wash">Car Wash</option>
                </select>
                <input
                    type="number"
                    name="service_price"
                    placeholder="Service Price"
                    value={formData.service_price}
                    readOnly
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-800 text-gray-400"
                />
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CarServiceForm;
