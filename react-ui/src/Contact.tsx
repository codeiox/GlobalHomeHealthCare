import {
  NavBar,
  Header,
  Footer,
  BreadcrumbNav,
  ContactPageLayout,
  SendButton,
  SendMessageForm,
} from "./components/Components";
import "./css/Contact.css";

export function Contact() {
  return (
    <>
      <Header /> {/* Header component */}
      <NavBar /> {/* Navigation bar */}
      <BreadcrumbNav current="Contact" />{" "}
      {/* Current Page Indicator (e.g., Home > Contact) */}
      <ContactPageLayout />{" "}
      {/* Side Image and Info Layout (description, hours, social links) */}
      <div className="sendMessageButton">
        <h3 className={"sendMessage"}>Send us message!</h3>
        <SendMessageForm /> {/* Contact Form Inputs (Name, Email, Message) */}
        <div className={"sendButton"}>
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
