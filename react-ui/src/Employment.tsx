import {
  NavBar,
  Header,
  Footer,
  BreadcrumbNav,
} from "./components/Components.tsx";
import { EmploymentForm } from "./EmploymentComp.tsx";

export function Employment() {
  return (
    <>
      <Header />
      <NavBar />

      <BreadcrumbNav current={"Employment"} />
      <h3
        style={{
          paddingTop: "15px",
          textAlign: "center",
        }}
      >
        Submit Your Application
      </h3>
      <EmploymentForm />
      <div style={{ marginBottom: "50px" }}>
        <br />
      </div>

      <Footer />
    </>
  );
}
