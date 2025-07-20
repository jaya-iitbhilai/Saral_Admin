// import { ArrowRight, Calendar, Globe, Mail, MapPin, Phone } from "lucide-react";
// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gradient-to-br from-gray-900 to-emerald-900 text-white sticky">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {/* About Column */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center mb-5">
//               <div className="w-10 h-10 mr-3 bg-white rounded-full flex items-center justify-center">
//                 {/* <img
//                   src={`${import.meta.env.BASE_URL}tsi_header_logo.png`}
//                   alt="IndiaTrib 2025 Logo"
//                   className="w-8 h-8 object-cover rounded-full"
//                 /> */}
//               </div>
//               <h3 className="text-2xl font-bold">
//                 OAOC <span className="text-emerald-400">2025</span>
//               </h3>
//             </div>
//             <p className="text-gray-300 mb-6 text-sm leading-relaxed"></p>
//             <p className="text-gray-300 text-sm mb-6">
//               14-16 December 2025
//               <br />
//               IIT Bhilai, India
//             </p>
//             <div className="flex space-x-3">
//               <a
//                 href="#"
//                 className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center hover:bg-emerald-600 transition-colors"
//                 aria-label="Twitter"
//               >
//                 <svg
//                   className="w-4 h-4 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center hover:bg-emerald-600 transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <svg
//                   className="w-4 h-4 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center hover:bg-emerald-600 transition-colors"
//                 aria-label="Instagram"
//               >
//                 <svg
//                   className="w-4 h-4 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h4 className="text-lg font-semibold text-emerald-300 mb-4">
//               Contact Information
//             </h4>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <MapPin className="h-5 w-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
//                 <span className="text-gray-300 text-sm">
//                   IndiTrib 2025 Secretariat,
//                   <br />
//                   Room No. 408, ED-2
//                   <br />
//                   Department of Mechanical Engineering
//                   <br />
//                   IIT Bhilai, Kutelabhata
//                   <br />
//                   Durg, Chhattisgarh, India
//                 </span>
//               </li>
//               <li className="flex">
//                 <Mail className="h-5 w-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
//                 <a
//                   href="mailto:sudeepranjan@iitbhilai.ac.in"
//                   className="text-gray-300 text-sm hover:text-emerald-300 transition-colors"
//                 >
//                   indiatrib2025@iitbhilai.ac.in
//                 </a>
//               </li>
//               <li className="flex">
//                 <Phone className="h-5 w-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
//                 <span className="text-gray-300 text-sm">
//                   +91 99948 3891,+91 81034 79016
//                 </span>
//               </li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold text-emerald-300 mb-4">
//               Quick Links
//             </h4>
//             <ul className="space-y-2">
//               <li>Home</li>
//               <li>Focus Areas</li>
//               <li>Speakers</li>
//               <li>Registration</li>
//               <li>Submit Paper</li>
//               <li>Sponsorship</li>
//               <li>Advisory Committee</li>
//             </ul>
//           </div>

//           {/* Important Information */}
//           <div>
//             <h4 className="text-lg font-semibold text-emerald-300 mb-4">
//               Important Information
//             </h4>
//             <div className="bg-emerald-900/50 rounded-lg p-4 border border-emerald-800">
//               <div className="flex items-start mb-3">
//                 <Calendar className="h-5 w-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
//                 <p className="text-gray-300 text-sm">
//                   Full paper submission deadline: <br />
//                   <span className="font-semibold text-white">15 July 2025</span>
//                 </p>
//               </div>
//               <div className="flex items-start">
//                 <Globe className="h-5 w-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
//                 <p className="text-gray-300 text-sm">
//                   Selected papers will be published in special issues of reputed
//                   journals
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-emerald-800/50 mt-12 pt-8 text-center">
//           <p className="text-gray-400 text-sm">
//             © {currentYear} IndiaTrib 2025. All rights reserved. | Organized by
//             IIT Bhilai
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// // // Reusable footer link component
// // const FooterLink = ({
// //   to,
// //   children,
// // }: {
// //   to: string;
// //   children: React.ReactNode;
// // }) => (
// //   <li>
// //     <Link
// //       to={to}
// //       className="text-gray-300 text-sm hover:text-emerald-300 transition-colors flex items-center group"
// //     >
// //       <ArrowRight className="h-3 w-3 mr-2 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
// //       {children}
// //     </Link>
// //   </li>
// // );

// export default Footer;

import React, { useState } from "react";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  MapPin,
  Calendar,
  Check,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white rounded-2xl shadow-lg">
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Your Company</h3>
              </div>
              <p className="text-gray-400 mb-4">
                We're dedicated to providing exceptional service and innovative
                solutions for all your business needs. Connect with us today to
                see how we can help you achieve your goals.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-gray-400">hello@company.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-blue-400 mt-1" />
                  <span className="text-gray-400">
                    123 Business St.
                    <br />
                    Suite 100
                    <br />
                    City, ST 12345
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Your Company. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
