import { useState } from "react";

export default function SearchBar({ onBuscar }) {
  const [texto, setTexto] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setTexto(value);
    if (onBuscar) onBuscar(value); // se avisa al padre en cada cambio
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={texto}
        onChange={handleChange}
      />
      <button type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M16.65 11.35a5.3 5.3 0 11-10.6 0 5.3 5.3 0 0110.6 0z"
          />
        </svg>
      </button>
    </div>
  );
}
