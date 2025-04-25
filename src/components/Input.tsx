interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
  }
  
  export default function Input({ onChange, placeholder }: InputProps) {
    return (
      <div>
        <input
          type="text"
          placeholder={placeholder}
          className="px-4 py-2 border rounded m-2"
          onChange={onChange}
        />
      </div>
    );
  }
  