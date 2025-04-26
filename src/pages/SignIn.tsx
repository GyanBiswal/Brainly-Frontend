import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Input from '../components/Input'; // Import Input component

const Signin = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null); // To display errors
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Success message after sign in
  const navigate = useNavigate(); // Initialize the navigate hook

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get form values from refs
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    try {
      // Send data to backend using fetch for signin
      const response = await fetch('http://localhost:3000/api/v1/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful signin
        setSuccessMessage('Sign in successful! Redirecting...');
        setError(null); // Clear any existing error messages
        
        // Save the token in localStorage or state, and redirect to dashboard
        localStorage.setItem('token', data.token); // Assuming you're storing the token
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to dashboard after success
        }, 2000); // Delay to show success message for a short time before redirecting
      } else {
        // Handle error from backend (e.g., invalid credentials)
        setError(data.message || 'Invalid credentials');
        setSuccessMessage(null); // Clear success message on error
      }
    } catch (err) {
      console.error('Error occurred:', err);
      setError('An error occurred. Please try again.');
      setSuccessMessage(null); // Clear success message on error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#202123]">
      <div className="bg-slate-500 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">Sign In</h2>

        {/* Display error or success messages */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            ref={usernameRef}
            placeholder="Username"
            type="text"
          />
          <Input
            ref={passwordRef}
            placeholder="Password"
            type="password"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
