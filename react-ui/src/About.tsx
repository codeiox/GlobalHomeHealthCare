import {
  NavBar,
  Header,
  Footer,
  BreadcrumbNav,
  InsuranceList,
  ContactSideImageSection,
  SocialLinks,
} from "./components/Components.tsx";
import "./css/About.css";

// import AboutImg from "/assets/about_page_img/about.png";

export function About() {
  return (
    <>
      <Header />
      <NavBar />
      {/*<ContactImg1 image={AboutImg} />*/}
      <BreadcrumbNav current={"About"} />
      <h4 className={"aboutSubtitle"}>
        Combining experience and professionalism in providing care.
      </h4>
      <div style={{ paddingLeft: "4%", paddingRight: "7%" }}>
        {" "}
        {/*Adds padding to whole body of page*/}
        <div className="container-fluid my-5">
          <div className="row justify-content-center gx-5">
            <div className="col-12 col-xl-10">
              <div className="row gx-5 align-items-start">
                {/* Left Side: Image */}
                <div className="col-lg-6 ps-4 ps-md-5 ps-lg-5">
                  <ContactSideImageSection />
                </div>

                {/* Right Side: All Text + Insurance + Socials */}
                <div className="col-lg-6" style={{ paddingTop: "1rem" }}>
                  {/* About Paragraph */}
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <hr />

                  {/* Mission */}
                  <h3>Our Mission</h3>
                  <hr />
                  <h5 className="mb-4">
                    We aim to provide client-centered healthcare services with
                    excellence in quality. Our goal is to promote and protect
                    the health of each of our clients.
                  </h5>

                  {/* Physicians */}
                  <h3>How We Assist Our Physicians</h3>
                  <p>
                    <strong>Global Home Health Care LLC</strong> serves as an
                    extension of your practice...
                  </p>
                  <hr />
                  <h3>Insurance we accept</h3>
                  {/* Insurance + Social Links */}
                  <InsuranceList />
                  <hr />
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
