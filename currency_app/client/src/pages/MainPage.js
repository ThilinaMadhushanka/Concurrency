import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MainPage() {
    const [date, setDate] = useState("");
    const [sourceCurrency, setSourceCurrency] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("");
    const [amountInSourceCurrency, setAmountInSourceCurrency] = useState("");
    const [amountInTargetCurrency, setAmountInTargetCurrency] = useState("");
    const [currencyNames, setCurrencyNames] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get("http://localhost:5000/convertCurrency", {
                params: {
                    date: date,
                    sourceCurrency: sourceCurrency,
                    targetCurrency: targetCurrency,
                    amountInSourceCurrency: Number(amountInSourceCurrency)
                }
            });

            console.log("API Response:", response.data); // Debugging step

            if (response.data && response.data.amountInTargetCurrency !== undefined) {
                setAmountInTargetCurrency(response.data.amountInTargetCurrency);
            } else {
                console.error("Invalid response from server:", response.data);
                setAmountInTargetCurrency("Error: Invalid conversion");
            }
        } catch (error) {
            console.error("Error fetching conversion:", error);
            setAmountInTargetCurrency("Error: Could not fetch conversion");
        }
    };

    useEffect(() => {
        const getCurrencyNames = async () => {
            try {
                const response = await axios.get("http://localhost:5000/getAllCurrencies");
                setCurrencyNames(response.data);
            } catch (error) {
                console.error("Error fetching currency names:", error);
            }
        };
        getCurrencyNames();
    }, []);

    return (
        <div>
            <h1 className="lg:mx-32 text-5xl font-bold text-green-500">Convert Your Currencies Today</h1>
            <p className="lg:mx-32 opacity-40 p-6">
                Welcome to "Convert Your Currencies Today"! This application allows you to easily convert currencies based on the latest exchange rates.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center">
                <section className="w-full lg:w-1/2">
                    <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6">
                        <div className="mb-4">
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Date</label>
                            <input 
                                onChange={(e) => setDate(e.target.value)}
                                type="date" 
                                id="date" 
                                name="date" 
                                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="sourceCurrency" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Source Currency</label>
                            <select 
                                onChange={(e) => setSourceCurrency(e.target.value)}
                                id="sourceCurrency" 
                                name="sourceCurrency"
                                value={sourceCurrency} 
                                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5"
                                required
                            >
                                <option value="">Select source currency</option>
                                {Object.keys(currencyNames).map((currency) => (
                                    <option key={currency} value={currency}>{currencyNames[currency]}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="targetCurrency" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Target Currency</label>
                            <select 
                                onChange={(e) => setTargetCurrency(e.target.value)}
                                id="targetCurrency" 
                                name="targetCurrency"
                                value={targetCurrency} 
                                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5"
                                required
                            >
                                <option value="">Select target currency</option>
                                {Object.keys(currencyNames).map((currency) => (
                                    <option key={currency} value={currency}>{currencyNames[currency]}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="amountInSourceCurrency" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Amount in Source Currency</label>
                            <input 
                                onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                                type="number" 
                                id="amountInSourceCurrency" 
                                name="amountInSourceCurrency"
                                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5"
                                placeholder="Enter amount" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <button type="submit" className="bg-green-500 hover:bg-green-800 text-white p-2.5 rounded-lg w-[30%]">
                                Convert
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            <h2 className="text-xl font-bold mt-4">Converted Amount: {amountInTargetCurrency}</h2>
            
        </div>
    );
}
