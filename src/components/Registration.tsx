import {
  AlertTriangle,
  Building2,
  Check,
  Code,
  Copy,
  CreditCard,
  Globe,
  Hash,
  MapPin,
  Receipt,
  Users
} from "lucide-react";
import { useState } from "react";

export default function Registration() {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeTab, setActiveTab] = useState("national");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const nationalFees = [
    {
      category: "Industry & Industrial R&D",
      member: "Rs. 11,000/-",
      nonMember: "Rs. 13,000/-",
    },
    {
      category: "Academia (Faculty)",
      member: "Rs. 10,000/-",
      nonMember: "Rs. 12,000/-",
    },
    {
      category: "Academia (Student)",
      member: "Rs. 4,000/-",
      nonMember: "Rs. 5,000/-",
    },
  ];

  const internationalFees = [
    {
      category: "Oversea Delegate",
      member: "$ 400",
      nonMember: "$ 450",
    },
  ];

  const accountDetails = [
    {
      id: "accountName",
      label: "Account Name",
      value: "Director IIT BHILAI STP",
      icon: <Building2 className="w-5 h-5" />,
      copyable: true,
    },
    {
      id: "accountNumber",
      label: "Account Number",
      value: "2158000102065152",
      icon: <CreditCard className="w-5 h-5" />,
      copyable: true,
    },
    {
      id: "ifscCode",
      label: "IFSC Code",
      value: "PUNB0215800",
      icon: <Hash className="w-5 h-5" />,
      copyable: true,
    },
    {
      id: "swiftCode",
      label: "Swift Code",
      value: "PUNBINBBRPM",
      icon: <Globe className="w-5 h-5" />,
      copyable: true,
    },
    {
      id: "micrNo",
      label: "MICR Code",
      value: "490024001",
      icon: <Code className="w-5 h-5" />,
      copyable: true,
    },
    {
      id: "bank",
      label: "Bank Name",
      value: "Punjab National Bank",
      icon: <Building2 className="w-5 h-5" />,
      copyable: false,
    },
    {
      id: "branch",
      label: "Branch",
      value: "Nandini Branch Bhilai",
      icon: <MapPin className="w-5 h-5" />,
      copyable: false,
    },
  ];

  const handleCopy = async (value: string, fieldId: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(fieldId);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      <div className="text-center mb-20">
        <div className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-full mb-8">
          <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">
              Registration
            </span>
          </div>
        </div>

        <h2 className="relative text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-emerald-800 via-green-700 to-teal-700 bg-clip-text text-transparent">
          <span className="relative inline-block text-emerald-500">
            Registration Fee
            {/* Decorative lines */}
            <div className="absolute -left-16 top-1/2 w-12 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transform -translate-y-1/2 hidden md:block"></div>
            <div className="absolute -right-16 top-1/2 w-12 h-1 bg-gradient-to-l from-emerald-500 to-emerald-600 rounded-full transform -translate-y-1/2 hidden md:block"></div>
            {/* Underline effect */}
            <div className="absolute -bottom-4 left-1/2 w-24 h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 rounded-full transform -translate-x-1/2"></div>
          </span>
        </h2>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Flexible pricing for all participants
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="backdrop-blur-xl bg-white/20 p-2 rounded-2xl border border-emerald-200/30">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab("national")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === "national"
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg transform scale-105"
                    : "text-emerald-700 hover:bg-white/30"
                }`}
              >
                <Users className="w-5 h-5" />
                <span>National Delegates</span>
              </button>
              <button
                onClick={() => setActiveTab("international")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === "international"
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg transform scale-105"
                    : "text-emerald-700 hover:bg-white/30"
                }`}
              >
                <Globe className="w-5 h-5" />
                <span>International Delegates</span>
              </button>
            </div>
          </div>
        </div>

        {/* Fee Tables */}
        <div className="backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-emerald-200/30 overflow-hidden">
          {activeTab === "national" && (
            <div className="overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-700 to-teal-700 p-6">
                <h3 className="text-2xl font-bold text-white text-center flex items-center justify-center space-x-3">
                  <Users className="w-6 h-6" />
                  <span>National Delegates</span>
                </h3>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-1">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/50 backdrop-blur-sm">
                      <th className="px-8 py-6 text-left text-emerald-800 font-bold text-lg">
                        Category
                      </th>
                      <th className="px-8 py-6 text-center text-emerald-800 font-bold text-lg">
                        TSI Member
                        <br />
                        <span className="text-sm font-medium text-emerald-600">
                          (Tribology Society of India Members)
                        </span>
                      </th>
                      <th className="px-8 py-6 text-center text-emerald-800 font-bold text-lg">
                        Non Member
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {nationalFees.map((fee, index) => (
                      <tr
                        key={index}
                        className="border-t border-emerald-100/50 hover:bg-white/40 transition-all duration-300 cursor-pointer group"
                        onMouseEnter={() => setHoveredRow(`fee-${index}`)}
                        onMouseLeave={() => setHoveredRow(null)}
                      >
                        <td className="px-8 py-6 font-semibold text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">
                          {fee.category}
                        </td>
                        <td className="px-8 py-6 text-center">
                          <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold px-6 py-3 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            {fee.member}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-6 py-3 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            {fee.nonMember}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "international" && (
            <div className="overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-700 to-teal-700 p-6">
                <h3 className="text-2xl font-bold text-white text-center flex items-center justify-center space-x-3">
                  <Globe className="w-6 h-6" />
                  <span>International Delegates</span>
                </h3>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-1">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/50 backdrop-blur-sm">
                      <th className="px-8 py-6 text-left text-emerald-800 font-bold text-lg">
                        Category
                      </th>
                      <th className="px-8 py-6 text-center text-emerald-800 font-bold text-lg">
                        TSI Member
                        <br />
                        <span className="text-sm font-medium text-emerald-600">
                          (Tribology Society of India Members)
                        </span>
                      </th>
                      <th className="px-8 py-6 text-center text-emerald-800 font-bold text-lg">
                        Non Member
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {internationalFees.map((fee, index) => (
                      <tr
                        key={index}
                        className="border-t border-emerald-100/50 hover:bg-white/40 transition-all duration-300 cursor-pointer group"
                        onMouseEnter={() => setHoveredRow(`fee-${index}`)}
                        onMouseLeave={() => setHoveredRow(null)}
                      >
                        <td className="px-8 py-6 font-semibold text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">
                          {fee.category}
                        </td>
                        <td className="px-8 py-6 text-center">
                          <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold px-6 py-3 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            {fee.member}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-6 py-3 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            {fee.nonMember}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* reg fee of */}
        <div className="h-auto  flex items-center justify-center p-4">
          <div className="max-w-5xl h-auto w-full">
            {/* Single Line Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-3 transform transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="flex items-center justify-center space-x-8 md:space-x-12">
                {/* First Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    10% extra charges after 31st October
                  </h3>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-8 bg-gray-300"></div>

                {/* Second Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Receipt className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Price inclusive of GST
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* account details */}
        <div className="h-auto flex items-center justify-center p-4">
          <div className="max-w-5xl w-full">
            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-blue-200/50">
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-700/20 transform rotate-12 scale-150"></div>
                <div className="absolute inset-0 bg-emerald-500/10 transform -rotate-12 scale-150"></div>

                <div className="relative z-10">
                  <h1 className="text-2xl font-bold text-white mb-2">
                    Account Details
                  </h1>
                  <p className="text-blue-100 text-sm">
                    IIT Bhilai Banking Information
                  </p>
                  <div className="w-24 h-1 bg-blue-200 rounded-full mx-auto mt-3"></div>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {accountDetails.map((detail, index) => (
                    <div
                      key={detail.id}
                      className="group bg-gray-50 rounded-xl p-4 border border-gray-200 transition-all duration-300 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: "fadeInUp 0.6s ease forwards",
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          {/* Icon */}
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                            <div className="text-emerald-600">
                              {detail.icon}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-500 mb-1">
                              {detail.label}
                            </p>
                            <p className="text-gray-900 font-semibold break-all">
                              {detail.value}
                            </p>
                          </div>
                        </div>

                        {/* Copy Button */}
                        {detail.copyable && (
                          <button
                            onClick={() => handleCopy(detail.value, detail.id)}
                            className="ml-2 w-8 h-8 bg-emerald-100 hover:bg-emerald-200 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                            title="Copy to clipboard"
                          >
                            {copiedField === detail.id ? (
                              <Check className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Copy className="w-4 h-4 text-emerald-600" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Payment Section */}
        <div className="h-auto flex items-center justify-center p-4 mt-8">
          <div className="max-w-2xl w-full">
            {/* QR Code Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden transform transition-all duration-300 hover:scale-105">
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  SCAN & PAY
                </h2>
                <p className="text-emerald-100 text-sm">
                  Quick Payment via QR Code
                </p>
                <div className="w-24 h-1 bg-emerald-200 rounded-full mx-auto mt-3"></div>
              </div>
              
              {/* QR Code Content */}
              <div className="p-8 text-center">
                <div className="bg-white border-4 border-emerald-100 rounded-2xl p-6 inline-block">
                  <img 
                    src={`${import.meta.env.BASE_URL}qr-code-payment.png`} 
                    alt="Payment QR Code" 
                    className="w-64 h-64 mx-auto"
                  />
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    UPI ID: 9471191644m@pnb
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Scan the QR code above to make instant payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
