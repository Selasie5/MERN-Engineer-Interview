import React, { useState, useEffect } from "react";
import { Bird } from "../types/BirdTypes";
import { UpdateBirds } from "../services/birdService";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  bird: Bird | null; // Single bird or null
  onUpdate: (updatedBird: Bird) => void;
}

const BirdUpdateModal: React.FC<Props> = ({ isOpen, onClose, bird, onUpdate }) => {
  const [formData, setFormData] = useState<Bird | null>(null);

  useEffect(() => {
    if (isOpen && bird) {
      setFormData(bird);
    }
  }, [isOpen, bird]);

  if (!isOpen || !formData) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => prev && { ...prev, [name]: value });
  };

  const handleNestedInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) =>
      prev
        ? {
            ...prev,
            appearance: { ...prev.appearance, [name]: value },
          }
        : null
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData || !bird) return; // Ensure `_id` is present

    try {
      const updatedBird = await UpdateBirds(formData._id, formData);
      onUpdate(updatedBird);
      onClose();
    } catch (error) {
      console.error("Error updating bird:", error);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>
          Common Name:
          <input
            type="text"
            name="commonName"
            value={formData.commonName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Scientific Name:
          <input
            type="text"
            name="scientificName"
            value={formData.scientificName}
            onChange={handleInputChange}
          />
        </label>
        {/* Example for nested field */}
        <label>
          Appearance Color:
          <input
            type="text"
            name="color"
            value={formData.appearance?.color || ""}
            onChange={handleNestedInputChange}
          />
        </label>
        <button type="submit">Update</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default BirdUpdateModal;
