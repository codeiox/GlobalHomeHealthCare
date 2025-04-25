import {
  NavBar,
  Header,
  Footer,
  BreadcrumbNav,
  TopServiceComp,
  MiddleServiceComp,
} from "./components/Components";
import "./css/Service.css";

export function Service() {
  return (
    <>
      <Header />
      <NavBar />

      <BreadcrumbNav current={"Service"} />
      <TopServiceComp />
      <hr />
      <div>
        <div>
          <MiddleServiceComp />
        </div>
        <div>
          <MiddleServiceComp />
        </div>
        <div>
          <MiddleServiceComp />
        </div>
      </div>

      <Footer />
    </>
  );
}
