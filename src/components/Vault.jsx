import React, { useEffect, useState } from "react";
import CreateVault from "./CreateVault";
import { Plus, Trash2 } from 'lucide-react';
import NewItem from "./NewItem";
import api from '../provider/AuthProvider';
import { useNavigate } from "react-router-dom";

const VaultPage = () => {
  const [vaults, setVaults] = useState([]);
  const [selectedVault, setSelectedVault] = useState(null); 
  const [openModal, setOpenModal] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchVaults();
  }, []);

  const fetchVaults = () => {
    api
      .get("/api/vaults/")
      .then((response) => {
        setVaults(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vault data:", error);
      });
  };

  const addVault = (newVault) => {
    setVaults((prevVaults) => [...prevVaults, newVault]);
  };

  const deleteVault = async (vaultId) => {
    try {
      await api.delete(`/api/vaults/${vaultId}/`); 
      setVaults((prevVaults) => prevVaults.filter((vault) => vault.id !== vaultId));
    } catch (error) {
      console.error("Error deleting vault:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/signIn');
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-200 p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Vaults</h2>

        {/* List of vaults */}
        <ul className="flex-1 space-y-2">
          {vaults.length > 0 ? (
            vaults.map((vault) => (
              <li
                key={vault.id}
                className="flex items-center justify-between p-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
              >
                <span
                  className="flex-1"
                  onClick={() => setSelectedVault(vault)} // Set selected vault on click
                >
                  {vault.name}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent vault selection on delete click
                    deleteVault(vault.id);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
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
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
        >
          Logout
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

        {/* Display selected vault details or placeholder text */}
        {selectedVault ? (
          <div className="mt-6">
            <h2 className="text-xl font-bold">{selectedVault.name}</h2>
            <p className="mt-2 text-gray-700">Description: {selectedVault.description || 'No description available'}</p>
          </div>
        ) : (
          <p className="mt-6 text-gray-500">Select a vault to view details.</p>
        )}
      </main>

      {openModal === "createVault" && (
        <CreateVault onClose={() => setOpenModal(null)} onVaultCreated={addVault} />
      )}
      {openModal === "newItem" && <NewItem onClose={() => setOpenModal(null)} />}
    </div>
  );
};

export default VaultPage;
