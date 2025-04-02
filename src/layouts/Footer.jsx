// import React from "react";
// import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
// import "../style/Footer.css"; // Import the external CSS file

// function Footer() {
//   return (
//     <footer className="footer mt-5">
//       <div className="container">
//         <div className="row">
//           {/* Logo and About Section */}
//           <div className="col-md-4">
//             <img
//               src="/path-to-your-logo.png"
//               alt="Your Logo"
//               className="footer-logo mb-3"
//             />
//             <p>
//               Thank you for visiting my portfolio. Connect with me on social
//               media and feel free to reach out for collaborations or inquiries.
//             </p>
//           </div>
//           {/* Contact Information */}
//           <div className="col-md-4">
//             <h5>Contact Me</h5>
//             <ul className="list-unstyled">
//               <li>Email: your.email@example.com</li>
//               <li>Phone: +123 456 7890</li>
//               <li>Location: Ahmedabad, Gujarat, India</li>
//             </ul>
//           </div>
//           {/* Social Media Links */}
//           <div className="col-md-4">
//             <h5>Follow Me</h5>
//             <div className="social-icons">
//               <a
//                 href="https://www.linkedin.com/in/yourprofile/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//               >
//                 <FaLinkedin size={30} />
//               </a>
//               <a
//                 href="https://www.instagram.com/yourprofile/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//               >
//                 <FaInstagram size={30} />
//               </a>
//               <a
//                 href="https://github.com/yourprofile"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="GitHub"
//               >
//                 <FaGithub size={30} />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center mt-3">
//           <p>&copy; 2025 Jaimin Prajapati. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// import React from "react";
// import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
// import "../style/Footer.css"; // Ensure this CSS file is correctly linked

// function Footer() {
//   return (
//     <footer className="footer mt-5 py-4 bg-light">
//       <div className="container text-center">
//         <div className="row justify-content-center">
//           {/* Logo and About Section */}
//           <div className="col-md-4 mb-4">
//             <img
//               src="/path-to-your-logo.png"
//               alt="Your Logo"
//               className="footer-logo mb-3"
//               style={{ maxWidth: "150px" }}
//             />
//             <p>
//               Thank you for visiting my portfolio. Connect with me on social
//               media and feel free to reach out for collaborations or inquiries.
//             </p>
//           </div>
//           {/* Contact Information */}
//           <div className="col-md-4 mb-4">
//             <h5>Contact Me</h5>
//             <ul className="list-unstyled">
//               <li>Email: your.email@example.com</li>
//               <li>Phone: +123 456 7890</li>
//               <li>Location: Ahmedabad, Gujarat, India</li>
//             </ul>
//           </div>
//           {/* Social Media Links */}
//           <div className="col-md-4 mb-4">
//             <h5>Follow Me</h5>
//             <div className="d-flex justify-content-center gap-3">
//               <a
//                 href="https://www.linkedin.com/in/yourprofile/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="text-dark"
//               >
//                 <FaLinkedin size={30} />
//               </a>
//               <a
//                 href="https://www.instagram.com/yourprofile/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="text-dark"
//               >
//                 <FaInstagram size={30} />
//               </a>
//               <a
//                 href="https://github.com/yourprofile"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="GitHub"
//                 className="text-dark"
//               >
//                 <FaGithub size={30} />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center mt-3">
//           <p>&copy; 2025 Jaimin Prajapati. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "../style/Footer.css"; // Ensure this CSS file is correctly linked

function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container py-4">
        <div className="row text-center text-md-left">
          {/* Logo and About Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img
              src="../../public/images/jaimin_profile.jpg"
              alt="Jaimin Prajapati"
              className="footer-logo rounded-circle img-fluid mb-1"
            />
            <p>
              Thank you for visiting my portfolio. Connect with me on social
              media and feel free to reach out for collaborations or inquiries.
            </p>
          </div>
          {/* Contact Information */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Contact Me</h5>
            <ul className="list-unstyled">
              <li>Email: jigarprajapati26122003@gmail.com</li>
              <li>Phone: +91 7567600738</li>
              <li>Location: Ahmedabad, Gujarat, India</li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="col-md-4">
            <h5>Follow Me</h5>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/jaimin-prajapati-369577312/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/jaiminn26/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://github.com/jaiminp26"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <p>&copy; 2025 Jaimin Prajapati. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
