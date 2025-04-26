import * as React from "react";

interface InputProps {
  placeholder?: string;
  type?: string; // Default to 'text' if not provided
  name?: string; // Optional, useful for form submissions
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = 'text', name }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          type={type}
          name={name} // So that form data is associated with the field
          placeholder={placeholder}
          className="px-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    );
  }
);

export default Input;
