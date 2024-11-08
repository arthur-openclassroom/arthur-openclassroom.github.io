import React from 'react';

const Contact = () => {
    return (
        <section className="py-48 text-center">
            <h2 className="text-3xl">Contactez-moi</h2>
            <span className="mt-4 flex justify-center gap-1">Vous pouvez me trouver sur <a href="https://www.linkedin.com/in/arthur-lambotte/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex gap-1"><img className='w-6 h-6 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png" />LinkedIn</a>.</span>
        </section>
    );
};

export default Contact;
