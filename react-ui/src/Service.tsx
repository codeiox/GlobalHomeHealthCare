import {
  NavBar,
  Header,
  Footer,
  BreadcrumbNav,
} from "./components/Components.tsx";

export function Service() {
  return (
    <>
      <Header />
      <NavBar />

      <BreadcrumbNav current={"Service"} />
      <div className={"px-2"}>
        <h4
          style={{
            padding: "10px",
            paddingLeft: "15px",
            borderLeft: "10px groove skyblue",
            borderTop: "10px groove skyblue",
            borderBottom: "0.5px groove skyblue",
            borderRight: "1px groove skyblue",
            borderTopRightRadius: "50px",
            borderBottomLeftRadius: "50px",
            margin: 0,
            color: "black",
            marginTop: "30px",
          }}
        >
          Combining experience and professionalism in providing care.
        </h4>
      </div>
      <br />
      <div className={"px-lg-5 ps-3"}>
        <p>
          At Global Home Health Care, our range of services is designed to
          improve the quality of life for our clients while promoting
          independence and well-being. We approach each care plan with
          personalized attention and clinical excellence.
        </p>
      </div>

      <Footer />
    </>
  );
}
