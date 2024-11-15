import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateVault from "./CreateVault";
import { Plus } from 'lucide-react';
import NewItem from "./NewItem";
import api from '../provider/AuthProvider';

const VaultPage = () => {
  const [vaults, setVaults] = useState([]);
  const [openModal, setOpenModal] = useState(null); 

  useEffect(() => {
    api
    .get("/api/vaults/")
    .then((response) => {
      console.log(response)
      setVaults(response.data);
  })
      .catch((error) => {
        console.error("Error fetching vault data:", error);
      });
  }, []);

  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-200 p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Vaults</h2>

        {/* List of vaults */}
        <ul className="flex-1 space-y-2">
          {vaults.length > 0 ? (
            vaults.map((vault, index) => (
              <li
                key={vault.id || index}
                className="p-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
              >
                {vault.name}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500 text-center md:text-left">No vaults available</li>
          )}
        </ul>

        {/* Button to create a new vault */}
        <button
          onClick={() => setOpenModal("createVault")}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Create Vault
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 bg-white">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <h1 className="text-2xl md:text-3xl font-semibold">Welcome to Your Vault</h1>
          <button
            onClick={() => setOpenModal("newItem")}
            className="flex gap-2 items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            <Plus size={20} />
            New Item
          </button>
        </div>
        {/* Display vault details or other main content here */}
      </main>

      {openModal === "createVault" && <CreateVault onClose={() => setOpenModal(null)} />}
      {openModal === "newItem" && <NewItem onClose={() => setOpenModal(null)} />}
    </div>
  );
};

export default VaultPage;
