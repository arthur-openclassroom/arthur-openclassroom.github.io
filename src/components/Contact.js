import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/contact`, {
                name,
                email,
                message,
            });
            toast.success(response.data);
        } catch (error) {
            console.error('Erreur lors de l\'envoi du formulaire :', error);
            toast.error('Erreur lors de l\'envoi du formulaire.');
        }
    };

    return (
        <section className="py-28 text-center">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Formulaire de Contact</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="mb-6 w-full max-w-md flex flex-col items-center">
                    <label className="block text-sm font-medium text-gray-700">Nom:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-6 w-full max-w-md flex flex-col items-center">
                    <label className="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-6 w-full max-w-md flex flex-col items-center">
                    <label className="block text-sm font-medium text-gray-700">Message:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button type="submit" className="w-full max-w-md bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition duration-200">Envoyer</button>
            </form>
            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <span className="mt-4 flex justify-center gap-1">Vous pouvez me trouver sur <a href="https://www.linkedin.com/in/arthur-lambotte/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex gap-1"><img className='w-6 h-6 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png" />LinkedIn</a>.</span>
        </section>
    );
};

export default Contact;
