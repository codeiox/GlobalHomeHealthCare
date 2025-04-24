import {
  NavBar,
  Header,
  Footer,
  BreadcrumbNav,
  ContactPageLayout,
  SendButton,
  SendMessageForm,
} from "./components/Components.tsx";
// import ContactTopImg from "/assets/contact_page/contact.png";

export function Contact() {
  return (
    <>
      <Header /> {/* Header component */}
      <NavBar /> {/* Navigation bar */}
      <BreadcrumbNav current="Contact" />{" "}
      {/* Current Page Indicator (e.g., Home > Contact) */}
      <ContactPageLayout />{" "}
      {/* Side Image and Info Layout (description, hours, social links) */}
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
        <h3 style={{ paddingLeft: "0.7rem", marginTop: "100px" }}>
          Send us message!
        </h3>
        <SendMessageForm /> {/* Contact Form Inputs (Name, Email, Message) */}
        <div style={{ paddingTop: "0.4rem", paddingLeft: "0.6rem" }}>
          <SendButton /> {/* Send Button for Form */}
        </div>
      </div>
      {/*Adding space */}
      <>
        <div style={{ height: "12rem" }} />
        {/* Adding vertical space */}
      </>
      <Footer /> {/* Footer bar */}
      {/*xxxx*/}
    </>
  );
}
