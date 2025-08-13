import React, { useState } from 'react';
import './newsletter.css';

function NewsletterSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="box">
      {submitted ? (
        <p>Thank you, {name}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
            <h3>Welcome to NewletterSignup</h3>
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default NewsletterSignup;
