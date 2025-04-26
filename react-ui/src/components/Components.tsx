import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel"; // Import Carousel component from react-bootstrap
import "../index.css"; // Import global styles
const logo = import.meta.env.BASE_URL + "assets/logo/logo_wht_bg.png"; // Import the logo image
import "../ServicesSection.css"; // Import ServicesSection styles
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "../css/Service.css";

// Header component for the top section of the page
export function Header() {
  return (
    <>
      <Navbar bg="white" data-bs-theme="white" className="custom-navbar">
        <Container>
          <div className="row w-100">
            {/* Left Section: Logo and company name */}
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
              <img
                src={logo}
                alt="Global Home Health Care Logo"
                className="img-fluid"
                style={{ height: "50px", marginRight: "10px" }}
              />
              <h2
                className="text-center text-md-start"
                style={{ color: "black", margin: 0, fontSize: "1.5rem" }}
              >
                Global Home Health Care, LLC
              </h2>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

// NavBar component for navigation links
export function NavBar() {
  return (
    <>
      <Navbar
        bg="dark"
        expand="md"
        data-bs-theme="dark"
        className="custom-navbar"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
          {/* Toggle button for mobile view */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto custom-nav">
              {/* Navigation links */}
              <Nav.Link as={Link} to="/" className="custom-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="custom-link">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/service" className="custom-link">
                Service
              </Nav.Link>
              <Nav.Link as={Link} to="/employment" className="custom-link">
                Employment
              </Nav.Link>
              <Nav.Link as={Link} to="/resource" className="custom-link">
                Resources
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="custom-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

// Carousel_Comp component for the image carousel

// TODO: Carousel needs work to make it more responsive across all device.
export function Carousel_Comp() {
  return (
    <Carousel interval={3000}>
      {" "}
      {/* Automatically move every 3 seconds */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={import.meta.env.BASE_URL + "assets/carousel/healthcare2.png"} // Ensure this path is correct
          alt="First slide"
          style={{ height: "590px", objectFit: "cover" }} // Adjust height and fit
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={import.meta.env.BASE_URL + "assets/carousel/healthcare1.png"} // Replace with the actual path to your image
          alt="Second slide"
          style={{ height: "590px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={import.meta.env.BASE_URL + "assets/carousel/healthcare2.png"} // Replace with the actual path to your image
          alt="Third slide"
          style={{ height: "590px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// InfoBox Component: Feature highlights and quick links
export function InfoBox() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        {/* Appointment Box */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div
            className="p-4 text-white rounded info-card"
            style={{ background: "#006d77" }}
          >
            <h4>Set an Appointment</h4>
            <p>What can we help you with? Meet with us today!</p>
            <a href="/form" className="text-white fw-bold">
              - CLICK HERE -
            </a>
          </div>
        </div>

        {/* Service Areas Box */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div
            className="p-4 text-white rounded info-card"
            style={{ background: "#007f5f" }}
          >
            <h4>Service Areas</h4>
            <p>Know the areas where we provide our services.</p>
            <a href="#" className="text-white fw-bold">
              - CLICK HERE -
            </a>
          </div>
        </div>

        {/* Doctor's Referral Box */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div
            className="p-4 text-white rounded info-card"
            style={{ background: "#264653" }}
          >
            <h4>Doctor's Referral</h4>
            <p>Fill out our doctors' referral form here!</p>
            <a href="#" className="text-white fw-bold">
              - CLICK HERE -
            </a>
          </div>
        </div>

        {/* Caregivers Box */}
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div
            className="p-4 text-white rounded info-card"
            style={{ background: "#2a9d8f" }}
          >
            <h4>Our Caregivers</h4>
            <p>Meet our passionate and dedicated caregivers!</p>
            <a href="#" className="text-white fw-bold">
              - CLICK HERE -
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          .info-card {
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
          }

          .info-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
}

// Body Content Section
export function BodyContent() {
  return (
    <div
      className="welcome-section d-flex align-items-center justify-content-center py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={import.meta.env.BASE_URL + "assets/home/sideimg1.png"}
              alt="Healthcare Support"
              className="img-fluid"
              style={{ borderRadius: "10px" }}
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6">
            <h5 className="text-muted">Welcome to</h5>
            <h2 style={{ fontWeight: "bold", color: "#a60000" }}>
              Global Home Health Care
            </h2>
            <h3 style={{ fontWeight: 500 }}>Healthcare Partners LLC</h3>
            <h5 className="mt-3 text-dark">
              Home Health Care in Columbus, Ohio
            </h5>
            <p className="text-muted mt-3">
              At <strong>Global Home Healthcare</strong> LLC, our goal is to
              improve the quality of life of each individual under our care. We
              provide holistic health care services to help them overcome the
              challenges of an injury, health condition, or aging. Our
              professionals are skilled enough and are dedicated to delivering
              the proper care that our clients deserve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// More body content

import {
  FaUserNurse,
  FaRunning,
  FaHandsHelping,
  FaComments,
  FaHome,
  FaEllipsisH,
} from "react-icons/fa";

export function ServicesSection() {
  const services = [
    {
      icon: <FaUserNurse size={40} style={{ opacity: 0.5 }} />,
      title: "Skilled Nursing",
      description: "We have licensed and registered nurses who can help you!",
    },
    {
      icon: <FaRunning size={40} style={{ opacity: 0.5 }} />,
      title: "Physical Therapy",
      description:
        "We aim to improve your mobility with the help of our treatment services.",
    },
    {
      icon: <FaHandsHelping size={40} style={{ opacity: 0.5 }} />,
      title: "Occupational Therapy",
      description: "Helping you cope up with your condition.",
    },
    {
      icon: <FaComments size={40} style={{ opacity: 0.5 }} />,
      title: "Speech Therapy",
      description:
        "We have certified speech-language pathologists that are always ready to help.",
    },
    {
      icon: <FaHome size={40} style={{ opacity: 0.5 }} />,
      title: "Home Health Aide",
      description: "We provide you with the assistance that you need at home.",
    },
    {
      icon: <FaEllipsisH size={40} style={{ opacity: 0.5 }} />,
      title: "View More Services",
      description:
        "We have a variety of home health care services for you to choose from.",
    },
  ];

  return (
    <div
      className="services-section py-5"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div className="container text-center">
        <h2>
          We Offer{" "}
          <span style={{ color: "#a60000", fontWeight: "bold" }}>
            Home Health Care
          </span>{" "}
          Services
        </h2>
        <div className="row mt-5">
          {services.map((service, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div
                className="p-4 bg-white h-100 shadow-sm rounded service-box"
                style={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
              >
                <div className="mb-3">{service.icon}</div>
                <h5 style={{ color: "#a60000", fontWeight: "bold" }}>
                  {service.title}
                </h5>
                <p className="mt-2 text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .service-box:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </div>
  );
}

// Footer Component: Displays a table of information and links
export function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      {" "}
      {/* Changed to bg-dark to match Navbar */}
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Global Home Health Care, LLC is dedicated to providing quality
              care and support to our clients.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to={"/"} className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"/service"} className="text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="text-white">
                  Contact
                </Link>
              </li>

              {/* Add more links */}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <table className="table table-borderless custom-table">
              {" "}
              {/* Added custom-table class */}
              <tbody>
                <tr>
                  <td>Phone:</td>
                  <td>(123) 456-7890</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>info@globalhomehealth.com</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>123 Main St, Dallas, TX 75001</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>
            &copy; {new Date().getFullYear()} Global Home Health Care, LLC. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

//***************************************************************************************************************************** */

// Contact Top image component
type Props = {
  image: string;
};

export function ContactImg1({ image }: Props) {
  return (
    <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
      {/* Section: Page Header */}
      {/* Usage: Contact page banner and title */}
      <div
        className="text-center border-bottom pb-2 mb-4"
        style={{ backgroundColor: "#0047ab" }}
      >
        <img
          src={image}
          className="img-fluid"
          width="100%"
          height="80"
          alt="Contact Us"
        />

        <p
          className="h5 mt-2 mb-0"
          style={{ paddingTop: "10px", color: "white" }}
        >
          Compassionate Caring in Columbus, Ohio
        </p>
        <br />
      </div>
    </div>
  );
}

// Current page indicator component. eg.. ( Home > About )
type BreadcrumbNavProps = {
  current: string; // The current page name to display in the breadcrumb
};

// Breadcrumb navigation component
// Usage: Displays "Home > [Current Page]"
export function BreadcrumbNav({ current }: BreadcrumbNavProps) {
  return (
    <div
      className={"breadcrumb-tab"}
      style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
    >
      <p>
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <b className={"breadcrumb-tab1"}>Home &nbsp;</b>
        </Link>
        <span>&gt;</span> <b className={"breadcrumb-tab2"}>{current}</b>
        <hr />
      </p>
    </div>
  );
}

// Contact side Image component
export function ContactSideImageSection() {
  return (
    <>
      <img
        src={import.meta.env.BASE_URL + "assets/about_page_img/sideimg.png"}
        className="img-fluid rounded"
        style={{
          width: "100%",
          maxHeight: "630px",
          objectFit: "cover",
          borderRight: "40px solid lightcoral",
          borderBottom: "40px solid lightcoral",
          marginLeft: "-30px",
        }}
        alt="Elder Care"
      />
    </>
  );
}

// Description: Displays the main company description
export function ContactInfoSection() {
  return (
    <div className="col-md-12">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          className="text-muted"
          style={{ fontSize: "16px", lineHeight: "1.7" }}
        >
          <strong>
            At Global Home Health Care, we bring together a compassionate team
            and years of hands-on experience to ensure the highest level of
            care. Whether you're looking for in-home assistance, elder care, or
            companionship, our professionals are committed to your well-being.
            We believe care is not just a service — it’s a relationship built on
            trust, respect, and consistency.
          </strong>
        </p>

        <div>
          <h4 className="mb-3">
            <b>Operating Hours</b>
          </h4>
          <table style={{ fontFamily: "Arial, sans-serif", fontSize: "15px" }}>
            <tbody>
              <tr>
                <td style={{ width: "50px" }}>Mon</td>
                <td>9:00 am – 5:00 pm</td>
              </tr>
              <tr>
                <td>Tue</td>
                <td>9:00 am – 5:00 pm</td>
              </tr>
              <tr>
                <td>Wed</td>
                <td>9:00 am – 5:00 pm</td>
              </tr>
              <tr>
                <td>Thu</td>
                <td>9:00 am – 5:00 pm</td>
              </tr>
              <tr>
                <td>Fri</td>
                <td>9:00 am – 5:00 pm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: "30px" }}>
          <h4 className="mb-3">
            <b>Contact Information</b>
          </h4>
          <p>
            <strong>Email:</strong> info@Fake.com
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Address:</strong> 123 Care Street, Columbus, OH 43004
          </p>
        </div>
      </div>
    </div>
  );
}

// Description: Renders social media icons and links using Bootstrap Icon
import "bootstrap-icons/font/bootstrap-icons.css";

export function SocialLinks() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h5 className="mb-3">Follow Us</h5>
      <p
        style={{
          fontSize: "18px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#0047ab",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <i className="bi bi-facebook"></i> Facebook
        </a>
        <span>|</span>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#0047ab",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <i className="bi bi-twitter-x"></i> Twitter
        </a>
        <span>|</span>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#0047ab",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <i className="bi bi-instagram"></i> Instagram
        </a>
      </p>
    </div>
  );
}

// Description: Main layout for the contact page, assembling the side image, info section, and social links
export function ContactPageLayout() {
  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        color: "white",
        padding: "1rem",
        borderRadius: "4rem 4rem 4rem 4rem",
        borderStyle: "outset",
        borderWidth: "1px",
        display: "inline-block",
        overflow: "hidden",
      }}
    >
      <h4 className={"contactSubtitle"}>
        Combining experience and professionalism in providing care.
      </h4>

      <div className="container-fluid my-5">
        <div className="row justify-content-center gx-5">
          <div className="col-12 col-xl-10">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 ps-4 ps-md-5 ps-lg-5">
                <ContactSideImageSection />
              </div>
              <div className="col-lg-6" style={{ color: "black" }}>
                <ContactInfoSection />
              </div>
              <div style={{ color: "black" }}>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact form fields using Material UI

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function SendMessageForm() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
        maxWidth: 600,
        mx: "auto",
      }}
      noValidate
      autoComplete="on"
    >
      <div>
        <TextField
          required
          id="full-name"
          label="Full Name"
          variant="outlined"
        />
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          variant="outlined"
        />
        <TextField
          required
          id="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
        />
      </div>
    </Box>
  );
}

// Submit button using Material UI
import MuiButton from "@mui/material/Button";

export function SubmitButton() {
  return (
    <MuiButton variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
      Submit
    </MuiButton>
  );
}

// Send button using Material UI
export function SendButton() {
  return (
    <MuiButton variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
      Send
    </MuiButton>
  );
}

//***************************************************************************************************************************** */
// // About us content component
import {
  BsShieldCheck,
  BsHeartPulse,
  BsPeople,
  BsPlusSquare,
  BsHospital,
  BsBriefcase,
} from "react-icons/bs";

export function InsuranceList() {
  const left = [
    { icon: <BsShieldCheck />, label: "Medicare" },
    { icon: <BsHeartPulse />, label: "Medicare HMO" },
    { icon: <BsPeople />, label: "Medicaid" },
    { icon: <BsPlusSquare />, label: "Medicaid HMO" },
    { icon: <BsHospital />, label: "Buckeye Health Plan" },
    { icon: <BsBriefcase />, label: "Aetna Better Health" },
  ];

  const right = [
    { icon: <BsBriefcase />, label: "Paramount Advantage" },
    { icon: <BsShieldCheck />, label: "Humana" },
    { icon: <BsHeartPulse />, label: "Anthem" },
    { icon: <BsPeople />, label: "United Healthcare" },
    { icon: <BsHospital />, label: "Commercial/Private Plans" },
  ];

  return (
    <div className="row">
      {[left, right].map((list, idx) => (
        <div className="col-6" key={idx}>
          <ul className="list-unstyled">
            {list.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    fontSize: "1.4rem",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {item.icon}
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

//***************************************************************************************************************************** */
// Resources content component
export default function ResourcesContent() {
  return (
    <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
      <h4 className="mt-4">Recommended Links</h4>
      <p>Explore reputable websites for healthcare and caregiving guidance:</p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Medicare:</strong>{" "}
          <a href="https://www.medicare.gov" target="_blank">
            www.medicare.gov
          </a>
        </li>
        <li className="list-group-item">
          <strong>Medicaid:</strong>{" "}
          <a href="https://www.medicaid.gov" target="_blank">
            www.medicaid.gov
          </a>
        </li>
        <li className="list-group-item">
          <strong>Caregiver Support:</strong>{" "}
          <a href="https://www.caregiver.org/" target="_blank">
            www.caregiver.org
          </a>
        </li>
        <li className="list-group-item">
          <strong>CDC – Health Topics:</strong>{" "}
          <a href="https://www.cdc.gov" target="_blank">
            www.cdc.gov
          </a>
        </li>
        <li className="list-group-item">
          <strong>Aging in Place:</strong>{" "}
          <a href="https://aginginplace.org" target="_blank">
            www.aginginplace.org
          </a>
        </li>
      </ul>

      {/*Downloadable Materials here*/}
      <h4 className="mt-5">Downloadable Materials</h4>
      <p>Download and print helpful guides for your home care journey:</p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <i className="fa fa-file-pdf"></i>{" "}
          <a href="assets/resources/patient_rights.pdf" target="_blank">
            Patient Rights & Responsibilities
          </a>
        </li>
        <li className="list-group-item">
          <i className="fa fa-file-pdf"></i>{" "}
          <a href="assets/resources/home_safety_checklist.pdf" target="_blank">
            Home Safety Checklist
          </a>
        </li>
        <li className="list-group-item">
          <i className="fa fa-file-pdf"></i>{" "}
          <a href="assets/resources/caregiver_stress_tips.pdf" target="_blank">
            Caregiver Stress Management Tips
          </a>
        </li>
      </ul>
      <hr />

      {/*FAQ Section*/}
      <h4 className="mt-5">Frequently Asked Questions</h4>
      <p>
        Answers to common questions we receive from patients and caregivers:
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>What insurance plans do you accept?</strong> – We accept
          Medicare, Medicaid, and several private plans.{" "}
          <a href="/about">See full list</a>.
        </li>
        <li className="list-group-item">
          <strong>Do you offer 24/7 care?</strong> – Yes, we provide 24-hour
          nursing and caregiver support based on patient needs.
        </li>
        <li className="list-group-item">
          <strong>Can I request a specific caregiver?</strong> – Yes, we do our
          best to match caregivers based on preferences and needs.
        </li>
        <li className="list-group-item">
          <strong>How do I get started with your services? </strong> - Simply
          contact us through our website or call our office to schedule an
          initial consultation.
        </li>
        <li className="list-group-item">
          <strong>Are your caregivers certified and trained? </strong> – Yes,
          all caregivers are thoroughly screened, certified, and receive ongoing
          training.
        </li>
        <li className="list-group-item">
          <strong>What areas do you serve?</strong> - We provide services across
          multiple counties. Please contact us for specific coverage.
        </li>
      </ul>

      <p className="mt-4" style={{ paddingLeft: "1rem" }}>
        Still have questions? <a href="/contact">Contact our team</a> or{" "}
        <a href="/form">book an appointment</a>.
      </p>
    </div>
  );
}

/* Educational video */

export function VidoeContent() {
  const toggleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    button.classList.toggle("liked");
    button.textContent = button.classList.contains("liked") ? "❤" : "♡";
  };
  return (
    <>
      {/* Educational video */}
      <h4 className="video-title mt-4" style={{ paddingLeft: "1rem" }}>
        Educational Video Resources
      </h4>
      <div
        className="row g-4"
        style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
      >
        {[1, 2, 3].map((n) => (
          <div className="col-12 col-md-6 col-lg-4" key={n}>
            <div className="card h-100">
              <video
                style={{
                  width: "100%",
                  height: "auto",
                  paddingTop: "1rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  objectFit: "cover",
                }}
                controls
              >
                <source
                  src={import.meta.env.BASE_URL + "videos/video" + n + ".mp4"}
                  type="video/mp4"
                />
              </video>
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ paddingLeft: "rem" }}
                >{`${n}: Test Video`}</h5>
                <p className="card-text" style={{ paddingLeft: "1rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                  style={{ marginLeft: "1rem" }}
                  className="btn btn-outline-danger"
                  onClick={toggleLike}
                >
                  ♡
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

//***************************************************************************************************************************** */
// Service page components

export function TopServiceComp() {
  return (
    <div className={"outer-wrapper"}>
      <div className={"text-content"}>
        <h1>We're Here to Help You Age in Your Own Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={"image-content"}>
        <img
          className={"image-src"}
          src={import.meta.env.BASE_URL + "assets/service_img/serviceimg1.png"}
          alt="Care taker women looking elderly at wheelchair" // Adjust height and fit
        />
      </div>
    </div>
  );
}

// Bootstrap cart
import Card from "react-bootstrap/Card";
import BootstrapButton from "react-bootstrap/Button";

export function MiddleServiceComp() {
  return (
    <div className={"Card-Container"}>
      <div className={"card-component"}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <BootstrapButton variant="primary">Go somewhere</BootstrapButton>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

//***************************************************************************************************************************** */

//***************************************************************************************************************************** */
