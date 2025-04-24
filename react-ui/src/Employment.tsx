import {
  NavBar,
  Header,
  Footer,
  BreadcrumbNav,
} from "./components/Components.tsx";

export function Employment() {
  return (
    <>
      <Header />
      <NavBar />

      <BreadcrumbNav current={"Employment"} />

      <Footer />
    </>
  );
}
