import React, { useRef, useState } from "react";
import axios from "axios"; // Import axios
import { X, Plus, KeyRound, NotebookText, CreditCard, Calendar, Inbox, FileText } from "lucide-react";
import api from "../provider/AuthProvider";


const items = [
  { id: 1, icon: <KeyRound size={20} className="text-blue-500" />, label: "Login" },
  { id: 2, icon: <NotebookText size={20} className="text-green-500" />, label: "Secure Note" },
  { id: 3, icon: <CreditCard size={20} className="text-purple-500" />, label: "Credit Card" },
  { id: 4, icon: <Calendar size={20} className="text-red-500" />, label: "Calendar" },
  { id: 5, icon: <Inbox size={20} className="text-orange-500" />, label: "Inbox" },
  { id: 6, icon: <FileText size={20} className="text-teal-500" />, label: "Documents" },
  { id: 7, icon: <KeyRound size={20} className="text-blue-500" />, label: "Records" },
  { id: 8, icon: <NotebookText size={20} className="text-green-500" />, label: "Library" }
];

function NewItem({ onClose }) {
  const modelRef = useRef();
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({ field1: "", field2: "" });

  const closeModal = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  const handleClick = (item) => {
    setSelectedItem(item); 
  };

  const handleBack = () => {
    setSelectedItem(null);  
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        '/api/secrets/', 
        formData
      );
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }finally {
        // Close the modal whether the API call succeeds or fails
        onClose();
      }
  };

  return (
    <div
      ref={modelRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6"
    >
      <div className="relative mt-10 flex flex-col w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <X size={30} />
          </button>
        </div>

        {selectedItem ? (
          <div className="mt-4">
            <button onClick={handleBack} className="text-blue-500 mb-4">
              &larr; Back to Items
            </button>
            <h2 className="text-xl font-semibold mb-4">{selectedItem.label} Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Field 1</label>
                <input
                  type="text"
                  name="field1"
                  value={formData.field1}
                  onChange={handleChange}
                  placeholder="Enter details"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Field 2</label>
                <input
                  type="text"
                  name="field2"
                  value={formData.field2}
                  onChange={handleChange}
                  placeholder="Enter more details"
                  className="w-full p-2 border rounded"
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Save
              </button>
            </form>
          </div>
        ) : (
          <div className="mt-4 overflow-y-auto max-h-[50vh]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleClick(item)}
                  className="flex items-center justify-between p-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-gray-700">{item.label}</span>
                  </div>
                  <Plus size={20} className="text-gray-500" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewItem;
