import React, { useState } from "react";
import axios from "axios";
import { SakshamFormData } from "../types/saksham.types";

const initialLangFieldArray = { en: [""], hi: [""] };

const SakshamForm: React.FC = () => {
  const [formData, setFormData] = useState<SakshamFormData>({
    id: "",
    name: { en: "", hi: "" },
    description: { en: "", hi: "" },
    benefits: initialLangFieldArray,
    eligibility: initialLangFieldArray,
    contact: {
      phone: [""],
      email: "",
      office: { en: "", hi: "" },
    },
    documents: initialLangFieldArray,
    website: "",
    status: "",
    lastUpdated: "",
    notices: initialLangFieldArray,
  });

  const handleInputChange = (
    field: keyof SakshamFormData,
    lang: keyof LangField,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: { ...prev[field], [lang]: value },
    }));
  };

  const handleArrayChange = (
    field: keyof SakshamFormData,
    lang: keyof LangFieldArray,
    index: number,
    value: string
  ) => {
    const updatedArray = [...formData[field][lang]];
    updatedArray[index] = value;
    setFormData((prev) => ({
      ...prev,
      [field]: { ...prev[field], [lang]: updatedArray },
    }));
  };

  const handlePhoneChange = (index: number, value: string) => {
    const updated = [...formData.contact.phone];
    updated[index] = value;
    setFormData((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        phone: updated,
      },
    }));
  };

  const addField = (field: keyof SakshamFormData) => {
    setFormData((prev) => ({
      ...prev,
      [field]: {
        en: [...prev[field].en, ""],
        hi: [...prev[field].hi, ""],
      },
    }));
  };

  const removeField = (field: keyof SakshamFormData, index: number) => {
    if (index === 0) return; // prevent removing the first field
    setFormData((prev) => ({
      ...prev,
      [field]: {
        en: prev[field].en.filter((_, i) => i !== index),
        hi: prev[field].hi.filter((_, i) => i !== index),
      },
    }));
  };

  const addPhone = () => {
    setFormData((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        phone: [...prev.contact.phone, ""],
      },
    }));
  };

  const removePhone = (index: number) => {
    if (index === 0) return;
    setFormData((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        phone: prev.contact.phone.filter((_, i) => i !== index),
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("formData----", formData);
    
    try {
      const response = await axios.post("http://localhost:8000/api/saksham", formData);
      console.log("response---", response?.data);
      
      alert("Data submitted successfully");
    } catch (error) {
      console.error(error);
      alert("Error submitting data");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold">Saksham Form</h2>

      <div>
        <label>ID</label>
        <input
          className="border w-full p-2"
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
        />
      </div>

      {["name", "description"].map((field) => (
        <div key={field}>
          <label className="block font-medium capitalize">{field}</label>
          <input
            className="border w-full p-2 mb-2"
            placeholder="English"
            value={formData[field as keyof SakshamFormData].en}
            onChange={(e) =>
              handleInputChange(field as keyof SakshamFormData, "en", e.target.value)
            }
          />
          <input
            className="border w-full p-2"
            placeholder="Hindi"
            value={formData[field as keyof SakshamFormData].hi}
            onChange={(e) =>
              handleInputChange(field as keyof SakshamFormData, "hi", e.target.value)
            }
          />
        </div>
      ))}

      {["benefits", "eligibility", "documents", "notices"].map((field) => (
        <div key={field}>
          <label className="block font-medium capitalize">{field}</label>
          {formData[field as keyof SakshamFormData].en.map((_, i) => (
            <div key={i} className="flex items-center gap-2 mb-2">
              <input
                className="border p-2 w-1/2"
                placeholder="English"
                value={formData[field as keyof SakshamFormData].en[i]}
                onChange={(e) =>
                  handleArrayChange(field as keyof SakshamFormData, "en", i, e.target.value)
                }
              />
              <input
                className="border p-2 w-1/2"
                placeholder="Hindi"
                value={formData[field as keyof SakshamFormData].hi[i]}
                onChange={(e) =>
                  handleArrayChange(field as keyof SakshamFormData, "hi", i, e.target.value)
                }
              />
              {i !== 0 && (
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => removeField(field as keyof SakshamFormData, i)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField(field as keyof SakshamFormData)}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            + Add {field}
          </button>
        </div>
      ))}

      <div>
        <label className="block font-medium">Phone Numbers</label>
        {formData.contact.phone.map((num, i) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <input
              className="border p-2 w-full"
              value={num}
              onChange={(e) => handlePhoneChange(i, e.target.value)}
            />
            {i !== 0 && (
              <button
                type="button"
                className="text-red-500"
                onClick={() => removePhone(i)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addPhone}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          + Add Phone
        </button>
      </div>

      <div>
        <label>Email</label>
        <input
          className="border w-full p-2"
          value={formData.contact.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              contact: { ...formData.contact, email: e.target.value },
            })
          }
        />
      </div>

      <div>
        <label>Office Address (English)</label>
        <input
          className="border w-full p-2 mb-2"
          value={formData.contact.office.en}
          onChange={(e) =>
            setFormData({
              ...formData,
              contact: {
                ...formData.contact,
                office: { ...formData.contact.office, en: e.target.value },
              },
            })
          }
        />
        <label>Office Address (Hindi)</label>
        <input
          className="border w-full p-2"
          value={formData.contact.office.hi}
          onChange={(e) =>
            setFormData({
              ...formData,
              contact: {
                ...formData.contact,
                office: { ...formData.contact.office, hi: e.target.value },
              },
            })
          }
        />
      </div>

      <div>
        <label>Website</label>
        <input
          className="border w-full p-2"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </div>

      <div>
        <label>Status</label>
        <input
          className="border w-full p-2"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        />
      </div>

      <div>
        <label>Last Updated</label>
        <input
          className="border w-full p-2"
          type="date"
          value={formData.lastUpdated}
          onChange={(e) => setFormData({ ...formData, lastUpdated: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Submit
      </button>
    </form>
  );
};

export default SakshamForm;
