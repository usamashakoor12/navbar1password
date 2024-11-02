import React, { useState } from 'react';

const Vault = () => {
  const [vaults, setVaults] = useState(['Vault 1', 'Vault 2', 'Vault 3']); 

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Vault List</h2>
      <ul>
        {vaults.map((vault, index) => (
          <li
            key={index}
            className="py-2 border-b border-gray-300"
          >
            {vault}
          </li>
        ))}
      </ul>
      <button
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={() => alert('Navigate to create vault functionality')}
      >
        Create Vault
      </button>
    </div>
  );
};

export default Vault;
