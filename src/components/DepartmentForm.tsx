import React, { useState } from "react";
import axios from "axios";
import {
  Plus,
  Trash2,
  Building,
  Phone,
  Mail,
  Globe,
  MapPin,
  Building2,
  Users,
  School,
  BookOpen,
  Hospital,
  Briefcase,
} from "lucide-react";

interface ContactData {
  phone: string;
  email: string;
  helpline: string;
}

interface AddressData {
  en: string;
  hi: string;
}

interface PersonData {
  name: string;
  designation: {
    en: string;
    hi: string;
  };
  phone: string;
  email: string;
}

interface DepartmentData {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  icon: string;
  description: {
    en: string;
    hi: string;
  };
  website: string;
  contact: ContactData;
  office: {
    address: AddressData;
    pincode: string;
  };
  personsOfContact: PersonData[];
}

const DepartmentForm: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [formData, setFormData] = useState<DepartmentData>({
    id: "",
    name: { en: "", hi: "" },
    icon: null,
    description: { en: "", hi: "" },
    website: "",
    contact: {
      phone: "",
      email: "",
      helpline: "",
    },
    office: {
      address: { en: "", hi: "" },
      pincode: "",
    },
    personsOfContact: [
      {
        name: "",
        designation: { en: "", hi: "" },
        phone: "",
        email: "",
      },
    ],
  });

  const handleInputChange = (path: string, value: string) => {
    setFormData((prev) => {
      const newData = { ...prev };
      const keys = path.split(".");
      let current: any = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleArrayChange = (
    index: number,
    value: string,
    arrayPath: string
  ) => {
    setFormData((prev) => {
      const newData = { ...prev };
      if (arrayPath === "website") {
        newData.website[index] = value;
      }
      return newData;
    });
  };

  const handlePersonChange = (index: number, field: string, value: string) => {
    setFormData((prev) => {
      const newData = { ...prev };
      const keys = field.split(".");
      let current: any = newData.personsOfContact[index];

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const addWebsite = () => {
    setFormData((prev) => ({
      ...prev,
      website: [...prev.website, ""],
    }));
  };

  const removeWebsite = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      website: prev.website.filter((_, i) => i !== index),
    }));
  };

  const addPerson = () => {
    setFormData((prev) => ({
      ...prev,
      personsOfContact: [
        ...prev.personsOfContact,
        {
          name: "",
          designation: { en: "", hi: "" },
          phone: "",
          email: "",
        },
      ],
    }));
  };

  const removePerson = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      personsOfContact: prev.personsOfContact.filter((_, i) => i !== index),
    }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(
  //       "http://localhost:8000/api/departments/create-department",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     if (response.ok) {
  //       const result = await response.json();
  //       alert("Department created successfully!");
  //       console.log("Response:", result);

  //       // Reset form
  //       setFormData({
  //         id: "",
  //         name: { en: "", hi: "" },
  //         icon: "",
  //         description: { en: "", hi: "" },
  //         website: [""],
  //         contact: {
  //           phone: "",
  //           email: "",
  //           helpline: "",
  //         },
  //         office: {
  //           address: { en: "", hi: "" },
  //           pincode: "",
  //         },
  //         personsOfContact: [
  //           {
  //             name: "",
  //             designation: { en: "", hi: "" },
  //             phone: "",
  //             email: "",
  //           },
  //         ],
  //       });
  //     } else {
  //       const error = await response.json();
  //       console.error("Error:", error);
  //       alert("Failed to create department.");
  //     }
  //   } catch (error) {
  //     console.error("Network error:", error);
  //     alert("Network error. Please try again later.");
  //   }
  // };

  // 2
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const formDataToSend = new FormData();

  //     // Append image (icon file)
  //     if (formData.icon) {
  //       formDataToSend.append("icon", formData.icon);
  //     } else {
  //       alert("Please upload an icon image.");
  //       return;
  //     }

  //     // Append the rest of the fields
  //     const otherData = { ...formData };
  //     delete otherData.icon; // Avoid sending file twice

  //     formDataToSend.append("id", otherData.id);
  //     formDataToSend.append("name", JSON.stringify(otherData.name));
  //     formDataToSend.append(
  //       "description",
  //       JSON.stringify(otherData.description)
  //     );
  //     formDataToSend.append("website", JSON.stringify(otherData.website));
  //     formDataToSend.append("contact", JSON.stringify(otherData.contact));
  //     formDataToSend.append("office", JSON.stringify(otherData.office));
  //     formDataToSend.append(
  //       "personsOfContact",
  //       JSON.stringify(otherData.personsOfContact)
  //     );

  //     // const response = await fetch(
  //     //   "BASE_URL/api/departments/create-department",
  //     //   {
  //     //     method: "POST",
  //     //     body: formDataToSend,
  //     //   }
  //     // );
  //     const response = await axios.post(
  //       `${BASE_URL}/api/departments/create-department`,
  //       formDataToSend,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     alert("Department created successfully!");
  //     console.log("Response:", response.data);

  //     if (response.ok) {
  //       const result = await response.json();
  //       alert("Department created successfully!");
  //       console.log("Response:", result);

  //       // Reset form
  //       setFormData({
  //         id: "",
  //         name: { en: "", hi: "" },
  //         icon: null,
  //         description: { en: "", hi: "" },
  //         website: "",
  //         contact: {
  //           phone: "",
  //           email: "",
  //           helpline: "",
  //         },
  //         office: {
  //           address: { en: "", hi: "" },
  //           pincode: "",
  //         },
  //         personsOfContact: [
  //           {
  //             name: "",
  //             designation: { en: "", hi: "" },
  //             phone: "",
  //             email: "",
  //           },
  //         ],
  //       });
  //     } else {
  //       const error = await response.json();
  //       console.error("Error:", error);
  //       alert("Failed to create department.");
  //     }
  //   } catch (error) {
  //     console.error("Network error:", error);
  //     alert("Network error. Please try again later.");
  //   }
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const formDataToSend = new FormData();
  //     console.log("icon:", formData.icon);
  //     // Append image (icon file)
  //     if (formData.icon) {
  //       formDataToSend.append("icon", formData.icon);
  //     } else {
  //       alert("Please upload an icon image.");
  //       return;
  //     }

  //     // Append the rest of the fields
  //     const otherData = { ...formData };
  //     delete otherData.icon; // Avoid sending file twice

  //     formDataToSend.append("id", otherData.id);
  //     formDataToSend.append("name", JSON.stringify(otherData.name));
  //     formDataToSend.append(
  //       "description",
  //       JSON.stringify(otherData.description)
  //     );
  //     formDataToSend.append("website", JSON.stringify(otherData.website));
  //     formDataToSend.append("contact", JSON.stringify(otherData.contact));
  //     formDataToSend.append("office", JSON.stringify(otherData.office));
  //     formDataToSend.append(
  //       "personsOfContact",
  //       JSON.stringify(otherData.personsOfContact)
  //     );

  //     const BASE_URL = import.meta.env.VITE_BASE_URL;

  //     const response = await axios.post(
  //       `${BASE_URL}/api/departments/create-department`,
  //       formDataToSend,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     alert("Department created successfully!");
  //     console.log("Response:", response.data);

  //     // Reset form
  //     setFormData({
  //       id: "",
  //       name: { en: "", hi: "" },
  //       icon: null,
  //       description: { en: "", hi: "" },
  //       website: "",
  //       contact: {
  //         phone: "",
  //         email: "",
  //         helpline: "",
  //       },
  //       office: {
  //         address: { en: "", hi: "" },
  //         pincode: "",
  //       },
  //       personsOfContact: [
  //         {
  //           name: "",
  //           designation: { en: "", hi: "" },
  //           phone: "",
  //           email: "",
  //         },
  //       ],
  //     });
  //   } catch (error: any) {
  //     console.error("Error:", error.response?.data || error.message);
  //     alert("Failed to create department.");
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      // Validate and append icon
      if (formData.icon) {
        formDataToSend.append("icon", formData.icon);
      } else {
        alert("Please upload an icon image.");
        return;
      }

      // Append primitive fields
      formDataToSend.append("id", formData.id);
      formDataToSend.append("website", formData.website || "");

      // Append object fields as JSON strings
      formDataToSend.append("name", JSON.stringify(formData.name));
      formDataToSend.append(
        "description",
        JSON.stringify(formData.description)
      );
      formDataToSend.append("contact", JSON.stringify(formData.contact));
      formDataToSend.append("office", JSON.stringify(formData.office));
      formDataToSend.append(
        "personsOfContact",
        JSON.stringify(formData.personsOfContact)
      );

      const BASE_URL = import.meta.env.VITE_BASE_URL;

      const response = await axios.post(
        `${BASE_URL}/api/departments/create-department`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Department created successfully!");
      console.log("Response:", response.data);

      // Reset form
      setFormData({
        id: "",
        name: { en: "", hi: "" },
        icon: null,
        description: { en: "", hi: "" },
        website: "",
        contact: {
          phone: "",
          email: "",
          helpline: "",
        },
        office: {
          address: { en: "", hi: "" },
          pincode: "",
        },
        personsOfContact: [
          {
            name: "",
            designation: { en: "", hi: "" },
            phone: "",
            email: "",
          },
        ],
      });
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      alert("Failed to create department.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Department Information Form
            </h1>
            {/* <p className="text-gray-600 ">
              Fill in the details for the department
            </p> */}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <Building className="w-5 h-5" />
                Basic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department ID
                  </label>
                  <input
                    type="text"
                    value={formData.id}
                    onChange={(e) => handleInputChange("id", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter department ID"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Icon
                  </label>

                  <input
                    type="file"
                    // value={formData.icon}
                    accept="image/*"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setFormData((prev) => ({ ...prev, icon: file }));
                      }
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name (English)
                  </label>
                  <input
                    type="text"
                    value={formData.name.en}
                    onChange={(e) =>
                      handleInputChange("name.en", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter department name in English"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name (Hindi)
                  </label>
                  <input
                    type="text"
                    value={formData.name.hi}
                    onChange={(e) =>
                      handleInputChange("name.hi", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter department name in Hindi"
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description (English)
                  </label>
                  <textarea
                    value={formData.description.en}
                    onChange={(e) =>
                      handleInputChange("description.en", e.target.value)
                    }
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter description in English"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description (Hindi)
                  </label>
                  <textarea
                    value={formData.description.hi}
                    onChange={(e) =>
                      handleInputChange("description.hi", e.target.value)
                    }
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter description in Hindi"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.contact.phone}
                    onChange={(e) =>
                      handleInputChange("contact.phone", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter phone number"
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
                      handleInputChange("contact.email", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Helpline
                  </label>
                  <input
                    type="tel"
                    value={formData.contact.helpline}
                    onChange={(e) =>
                      handleInputChange("contact.helpline", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter helpline number"
                  />
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Office Address
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address (English)
                  </label>
                  <textarea
                    value={formData.office.address.en}
                    onChange={(e) =>
                      handleInputChange("office.address.en", e.target.value)
                    }
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter office address in English"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address (Hindi)
                  </label>
                  <textarea
                    value={formData.office.address.hi}
                    onChange={(e) =>
                      handleInputChange("office.address.hi", e.target.value)
                    }
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter office address in Hindi"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pincode
                </label>
                <input
                  type="text"
                  value={formData.office.pincode}
                  onChange={(e) =>
                    handleInputChange("office.pincode", e.target.value)
                  }
                  className="w-full md:w-1/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter pincode"
                />
              </div>
            </div>

            {/* Websites */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Websites
              </h2>

              <div className="flex items-center gap-2 mb-3">
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter website URL"
                />
              </div>
            </div>

            {/* Persons of Contact */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Persons of Contact
              </h2>

              {formData.personsOfContact.map((person, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 mb-4 bg-white"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Contact Person {index + 1}
                    </h3>
                    {formData.personsOfContact.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePerson(index)}
                        className="p-2 text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={person.name}
                        onChange={(e) =>
                          handlePersonChange(index, "name", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter person's name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={person.phone}
                        onChange={(e) =>
                          handlePersonChange(index, "phone", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={person.email}
                        onChange={(e) =>
                          handlePersonChange(index, "email", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Designation (English)
                      </label>
                      <input
                        type="text"
                        value={person.designation.en}
                        onChange={(e) =>
                          handlePersonChange(
                            index,
                            "designation.en",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter designation in English"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Designation (Hindi)
                      </label>
                      <input
                        type="text"
                        value={person.designation.hi}
                        onChange={(e) =>
                          handlePersonChange(
                            index,
                            "designation.hi",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter designation in Hindi"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={addPerson}
                className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800"
              >
                <Plus className="w-4 h-4" />
                Add Person
              </button>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Submit Department Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DepartmentForm;
