import React, { useState } from "react";
import axios from "axios";
import {
  Plus,
  Minus,
  Save,
  X,
  ClipboardList,
  Building,
  Info,
  FileText,
  CheckCircle,
  Phone,
  FolderOpen,
  PlusCircle,
} from "lucide-react";

interface SchemeFormData {
  departmentId: string;
  id: string;
  name: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  benefits: {
    en: string[];
    hi: string[];
  };
  eligibility: {
    en: string[];
    hi: string[];
  };
  contact: {
    phone: string;
    email: string;
    office: {
      en: string;
      hi: string;
    };
  };
  documents: {
    en: string[];
    hi: string[];
  };
  guidelines: {
    en: string[];
    hi: string[];
  };
  website: string;
  status: string;
  lastUpdated: string;
  notices: {
    en: string[];
    hi: string[];
  };
}

const SchemeForm: React.FC = () => {
  const [formData, setFormData] = useState<SchemeFormData>({
    departmentId: "health",
    id: "",
    name: { en: "", hi: "" },
    description: { en: "", hi: "" },
    benefits: { en: [""], hi: [""] },
    eligibility: { en: [""], hi: [""] },
    contact: {
      phone: "",
      email: "",
      office: { en: "", hi: "" },
    },
    documents: { en: [""], hi: [""] },
    guidelines: { en: [""], hi: [""] },
    website: "",
    status: "active",
    lastUpdated: new Date().toISOString().split("T")[0],
    notices: { en: [""], hi: [""] },
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNestedFieldChange = (
    field: string,
    lang: string,
    value: string
  ) => {
    const fieldParts = field.split(".");

    if (fieldParts.length === 1) {
      // Simple nested field like 'name' or 'description'
      setFormData((prev) => ({
        ...prev,
        [field]: { ...prev[field as keyof SchemeFormData], [lang]: value },
      }));
    } else if (fieldParts.length === 2) {
      // Deeply nested field like 'contact.office'
      const [parentField, childField] = fieldParts;
      setFormData((prev) => ({
        ...prev,
        [parentField]: {
          ...prev[parentField as keyof SchemeFormData],
          [childField]: {
            ...(prev[parentField as keyof SchemeFormData] as any)[childField],
            [lang]: value,
          },
        },
      }));
    }
  };

  const handleArrayInputChange = (
    field: string,
    lang: string,
    index: number,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field as keyof SchemeFormData],
        [lang]: (prev[field as keyof SchemeFormData] as any)[lang].map(
          (item: string, i: number) => (i === index ? value : item)
        ),
      },
    }));
  };

  const addArrayItem = (field: string, lang: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field as keyof SchemeFormData],
        [lang]: [...(prev[field as keyof SchemeFormData] as any)[lang], ""],
      },
    }));
  };

  const removeArrayItem = (field: string, lang: string, index: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field as keyof SchemeFormData],
        [lang]: (prev[field as keyof SchemeFormData] as any)[lang].filter(
          (_: string, i: number) => i !== index
        ),
      },
    }));
  };

  const handleSimpleNestedChange = (
    field: string,
    subField: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: { ...prev[field as keyof SchemeFormData], [subField]: value },
    }));
  };

  // const handleSubmit = () => {
  //   console.log("Form submitted:", formData);
  //   // Handle form submission here
  // };

  // 2
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const departmentId = formData.departmentId || "health"; // or pass dynamically
  //     const BASE_URL = import.meta.env.VITE_BASE_URL;

  //     const response = await fetch(
  //       `BASE_URL/api/schemes/create-scheme/${departmentId}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     const data = await response.json();
  //     console.log("data", data);

  //     if (response.ok) {
  //       alert("Scheme created successfully!");
  //       console.log(data);
  //       // Optional: Reset form
  //     } else {
  //       console.error("Error creating scheme:", data.message);
  //       alert("Failed to create scheme");
  //     }
  //   } catch (error) {
  //     console.error("Network error:", error);
  //     alert("Something went wrong");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const departmentId = formData.departmentId || "health"; // Or pass dynamically
      const BASE_URL = import.meta.env.VITE_BASE_URL;

      const response = await axios.post(
        `${BASE_URL}/api/schemes/create-scheme/${departmentId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("data", response.data);

      alert("Scheme created successfully!");
      // Optionally reset form
      // setFormData(initialState);
    } catch (error) {
      console.error(
        "Error creating scheme:",
        error.response?.data || error.message
      );
      alert("Failed to create scheme");
    }
  };

  const getNestedValue = (obj: any, path: string) => {
    return path.split(".").reduce((current, key) => current?.[key], obj);
  };

  const renderBilingualInput = (
    field: string,
    label: string,
    type: string = "text",
    required: boolean = false
  ) => {
    const fieldValue = getNestedValue(formData, field);

    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">English</label>
            {type === "textarea" ? (
              <textarea
                value={fieldValue?.en || ""}
                onChange={(e) =>
                  handleNestedFieldChange(field, "en", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                required={required}
              />
            ) : (
              <input
                type={type}
                value={fieldValue?.en || ""}
                onChange={(e) =>
                  handleNestedFieldChange(field, "en", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required={required}
              />
            )}
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Hindi</label>
            {type === "textarea" ? (
              <textarea
                value={fieldValue?.hi || ""}
                onChange={(e) =>
                  handleNestedFieldChange(field, "hi", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                required={required}
              />
            ) : (
              <input
                type={type}
                value={fieldValue?.hi || ""}
                onChange={(e) =>
                  handleNestedFieldChange(field, "hi", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required={required}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderArrayInput = (field: string, label: string) => (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs text-gray-500 mb-2">English</label>
          {(formData[field as keyof SchemeFormData] as any).en.map(
            (item: string, index: number) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) =>
                    handleArrayInputChange(field, "en", index, e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`${label} item ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(field, "en", index)}
                  className="px-2 py-2 text-red-600 hover:bg-red-50 rounded-md"
                  disabled={
                    (formData[field as keyof SchemeFormData] as any).en
                      .length === 1
                  }
                >
                  <Minus size={16} />
                </button>
              </div>
            )
          )}
          <button
            type="button"
            onClick={() => addArrayItem(field, "en")}
            className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md"
          >
            <Plus size={16} />
            Add English Item
          </button>
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-2">Hindi</label>
          {(formData[field as keyof SchemeFormData] as any).hi.map(
            (item: string, index: number) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) =>
                    handleArrayInputChange(field, "hi", index, e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`${label} item ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(field, "hi", index)}
                  className="px-2 py-2 text-red-600 hover:bg-red-50 rounded-md"
                  disabled={
                    (formData[field as keyof SchemeFormData] as any).hi
                      .length === 1
                  }
                >
                  <Minus size={16} />
                </button>
              </div>
            )
          )}
          <button
            type="button"
            onClick={() => addArrayItem(field, "hi")}
            className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md"
          >
            <Plus size={16} />
            Add Hindi Item
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <ClipboardList className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Department Scheme Form
            </h1>
          </div>

          <div onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5" />
                Basic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department ID
                  </label>
                  <input
                    type="text"
                    value={formData.departmentId}
                    onChange={(e) =>
                      handleInputChange("departmentId", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Scheme ID
                  </label>
                  <input
                    type="text"
                    value={formData.id}
                    onChange={(e) => handleInputChange("id", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Name and Description */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Name & Description
              </h2>
              <div className="space-y-6">
                {renderBilingualInput("name", "Scheme Name", "text", true)}
                {renderBilingualInput(
                  "description",
                  "Description",
                  "textarea",
                  true
                )}
              </div>
            </div>

            {/* Benefits and Eligibility */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Benefits & Eligibility
              </h2>
              <div className="space-y-6">
                {renderArrayInput("benefits", "Benefits")}
                {renderArrayInput("eligibility", "Eligibility Criteria")}
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.contact.phone}
                      onChange={(e) =>
                        handleSimpleNestedChange(
                          "contact",
                          "phone",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.contact.email}
                      onChange={(e) =>
                        handleSimpleNestedChange(
                          "contact",
                          "email",
                          e.target.value
                        )
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                {renderBilingualInput("contact.office", "Office Address")}
              </div>
            </div>

            {/* Documents and Guidelines */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <FolderOpen className="w-5 h-5" />
                Documents & Guidelines
              </h2>
              <div className="space-y-6">
                {renderArrayInput("documents", "Required Documents")}
                {renderArrayInput("guidelines", "Guidelines")}
              </div>
            </div>

            {/* Additional Information */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <PlusCircle className="w-5 h-5" />
                Additional Information
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) =>
                        handleInputChange("website", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) =>
                        handleInputChange("status", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="pending">Pending</option>
                      <option value="suspended">Suspended</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Updated
                  </label>
                  <input
                    type="date"
                    value={formData.lastUpdated}
                    onChange={(e) =>
                      handleInputChange("lastUpdated", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {renderArrayInput("notices", "Notices")}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center gap-2 px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Save size={16} />
                Save Scheme
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeForm;
