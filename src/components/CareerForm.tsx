import React, { useState } from "react";
import {
  User,
  GraduationCap,
  BookOpen,
  Heart,
  FileText,
  Globe,
  Users,
  ClipboardList,
  Calendar,
  Phone,
  Upload,
  Plus,
  Trash2,
  Save,
} from "lucide-react";

interface ExamStructure {
  subject: string;
  questions: number;
  marks: number;
  duration: string;
}

interface CareerFormData {
  currentStatus: string;
  currentEducation: string;
  stream: string;
  interests: string[];
  examType: {
    hi: string;
    en: string;
  };
  id: string;
  title: string;
  websiteLink: string;
  description: string;
  eligibility: string;
  applicationProcess: string;
  examPattern: string;
  examStructure: ExamStructure[];
  specialNotes: string;
  reservation: string;
  contact: string;
  uploadFile: string;
}

const CareerForm: React.FC = () => {
  const [formData, setFormData] = useState<CareerFormData>({
    currentStatus: "",
    currentEducation: "",
    stream: "not-applicable",
    interests: [],
    examType: {
      hi: "",
      en: "",
    },
    id: "",
    title: "",
    websiteLink: "",
    description: "",
    eligibility: "",
    applicationProcess: "",
    examPattern: "",
    examStructure: [],
    specialNotes: "",
    reservation: "",
    contact: "",
    uploadFile: "",
  });

  const statusOptions = ["Education", "Job", "Business"];

  const educationOptions = [
    "class-5",
    "class-6",
    "class-7",
    "class-8",
    "class-9",
    "class-10",
    "class-11",
    "class-12",
    "graduation",
    "post-graduation",
    "working",
    "phd",
    "diploma",
  ];

  const streamOptions = ["science", "commerce", "arts", "not-applicable"];

  const interestOptions = [
    "Technology",
    "Teaching",
    "Administration",
    "Defense",
    "Banking",
    "Railways",
    "Healthcare",
    "Engineering",
    "Law",
    "Agriculture",
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
    "Internship",
    "Apprenticeship",
    "Franchise",
    "Cooperative",
    "Partnership",
  ];

  const examTypeOptionsHi = [
    "भाग-1 प्रवेश एवं छात्रवृत्ति हेतु प्रवेश परीक्षा",
    "भाग-02 पात्रता परीक्षा",
    "भाग-03 छत्तीसगढ़ लोक सेवा आयोग द्वारा आयोजित परीक्षायें",
    "भाग-04 संघ लोक सेवा आयोग द्वारा आयोजित परीक्षायें",
    "भाग-05 भारतीय सैन्य बलों में भर्ती हेतु प्रतियोगी परीक्षायें",
    "भाग-06 बैंकों में अधिकारी एवं क्लर्क भर्ती की परीक्षायें",
    "भाग-07 कर्मचारी चयन आयोग द्वारा आयोजित परीक्षायें",
    "भाग-08 LIC में भर्ती परीक्षायें",
    "भाग-09 रेल्वे (RRB) भर्ती की प्रतियोगी परीक्षायें",
    "भाग-10 छ.ग. व्यापम द्वारा आयोजित भर्ती प्रतियोगी परीक्षायें",
    "भाग-11 अन्य भर्ती परीक्षायें एवं शिक्षा ऋण, दिव्यांगजनों के लिये शासन की योजनाएं तथा ऑनलाईन रोजगार पंजीयन",
  ];

  const examTypeOptionsEn = [
    "Part-1 Entrance exam for admission and scholarship",
    "Part-2 Eligibility Examinations",
    "Part-3 Examinations conducted by Chhattisgarh Public Service Commission",
    "Part-4 Examinations conducted by Union Public Service Commission",
    "Part-5 Competitive examinations for recruitment in Indian Armed Forces",
    "Part-6 Bank officer and clerk recruitment examinations",
    "Part-7 Examinations conducted by Staff Selection Commission (SSC)",
    "Part-8 LIC recruitment examinations",
    "Part-9 Railway (RRB) recruitment competitive examinations",
    "Part-10 Competitive examinations conducted by CG Vyapam",
    "Part-11 Other recruitment exams, education loans, government schemes for persons with disabilities, and online employment registration",
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleExamTypeChange = (lang: "hi" | "en", value: string) => {
    setFormData((prev) => ({
      ...prev,
      examType: {
        ...prev.examType,
        [lang]: value,
      },
    }));
  };

  const addExamStructure = () => {
    setFormData((prev) => ({
      ...prev,
      examStructure: [
        ...prev.examStructure,
        {
          subject: "",
          questions: 0,
          marks: 0,
          duration: "",
        },
      ],
    }));
  };

  const removeExamStructure = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      examStructure: prev.examStructure.filter((_, i) => i !== index),
    }));
  };

  const handleExamStructureChange = (
    index: number,
    field: keyof ExamStructure,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      examStructure: prev.examStructure.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Form submitted successfully! Check console for data.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Career Information Form
            </h1>
          </div>

          <div className="space-y-8">
            {/* Basic Information */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <User className="h-5 w-5" />
                Basic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Status *
                  </label>
                  <select
                    value={formData.currentStatus}
                    onChange={(e) =>
                      handleInputChange("currentStatus", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Status</option>
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Education *
                  </label>
                  <select
                    value={formData.currentEducation}
                    onChange={(e) =>
                      handleInputChange("currentEducation", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Education</option>
                    {educationOptions.map((edu) => (
                      <option key={edu} value={edu}>
                        {edu}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stream
                  </label>
                  <select
                    value={formData.stream}
                    onChange={(e) =>
                      handleInputChange("stream", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {streamOptions.map((stream) => (
                      <option key={stream} value={stream}>
                        {stream}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ID *
                  </label>
                  <input
                    type="text"
                    value={formData.id}
                    onChange={(e) => handleInputChange("id", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Interests
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {interestOptions.map((interest) => (
                  <label
                    key={interest}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestToggle(interest)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Exam Type */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Exam Type
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Exam Type (Hindi) *
                  </label>
                  <select
                    value={formData.examType.hi}
                    onChange={(e) => handleExamTypeChange("hi", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Exam Type</option>
                    {examTypeOptionsHi.map((exam) => (
                      <option key={exam} value={exam}>
                        {exam}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Exam Type (English) *
                  </label>
                  <select
                    value={formData.examType.en}
                    onChange={(e) => handleExamTypeChange("en", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Exam Type</option>
                    {examTypeOptionsEn.map((exam) => (
                      <option key={exam} value={exam}>
                        {exam}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Career Details */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Career Details
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Globe className="inline h-4 w-4 mr-1" />
                    Website Link
                  </label>
                  <input
                    type="url"
                    value={formData.websiteLink}
                    onChange={(e) =>
                      handleInputChange("websiteLink", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Eligibility
                    </label>
                    <textarea
                      value={formData.eligibility}
                      onChange={(e) =>
                        handleInputChange("eligibility", e.target.value)
                      }
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Application Process
                    </label>
                    <textarea
                      value={formData.applicationProcess}
                      onChange={(e) =>
                        handleInputChange("applicationProcess", e.target.value)
                      }
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Exam Pattern
                  </label>
                  <textarea
                    value={formData.examPattern}
                    onChange={(e) =>
                      handleInputChange("examPattern", e.target.value)
                    }
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Exam Structure */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
                  <ClipboardList className="h-5 w-5" />
                  Exam Structure
                </h2>
                <button
                  type="button"
                  onClick={addExamStructure}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  Add Structure
                </button>
              </div>

              <div className="space-y-4">
                {formData.examStructure.map((structure, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-700">
                        Structure {index + 1}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeExamStructure(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          value={structure.subject}
                          onChange={(e) =>
                            handleExamStructureChange(
                              index,
                              "subject",
                              e.target.value
                            )
                          }
                          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Questions
                        </label>
                        <input
                          type="number"
                          value={structure.questions}
                          onChange={(e) =>
                            handleExamStructureChange(
                              index,
                              "questions",
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Marks
                        </label>
                        <input
                          type="number"
                          value={structure.marks}
                          onChange={(e) =>
                            handleExamStructureChange(
                              index,
                              "marks",
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          <Calendar className="inline h-4 w-4 mr-1" />
                          Duration
                        </label>
                        <input
                          type="text"
                          value={structure.duration}
                          onChange={(e) =>
                            handleExamStructureChange(
                              index,
                              "duration",
                              e.target.value
                            )
                          }
                          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Additional Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Notes
                  </label>
                  <textarea
                    value={formData.specialNotes}
                    onChange={(e) =>
                      handleInputChange("specialNotes", e.target.value)
                    }
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reservation
                  </label>
                  <textarea
                    value={formData.reservation}
                    onChange={(e) =>
                      handleInputChange("reservation", e.target.value)
                    }
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    Contact
                  </label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) =>
                      handleInputChange("contact", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Upload className="inline h-4 w-4 mr-1" />
                    Upload File
                  </label>
                  <input
                    type="text"
                    value={formData.uploadFile}
                    onChange={(e) =>
                      handleInputChange("uploadFile", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="File path or URL"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center gap-2 px-8 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Save className="h-5 w-5" />
                Save Career Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
