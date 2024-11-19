import React, { useState, useRef } from "react";
import { X } from "lucide-react";   
import api from "../provider/AuthProvider";

function CreateVault({ onClose, onVaultCreated }) {
  const modelRef = useRef();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const closeModal = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/api/vaults/",
        {
          name,
          description,
        }
      );
      console.log("Vault created:", response.data);

      setName("");
      onVaultCreated(response.data);
      setDescription("");   
    } catch (error) {
      console.error("Error creating vault:", error);
    } finally {
      // Close the modal whether the API call succeeds or fails
      onClose();
    }
  };

  return (
    <div
      ref={modelRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5">
        <button className="place-self-end" onClick={onClose}>
          <X size={30} />
        </button>
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-extrabold">Create Vault</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                placeholder="Vault's name"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="relative flex items-center">
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                  placeholder="Enter your description here..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateVault;
