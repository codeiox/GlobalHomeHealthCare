import ResourcesContent, {
  NavBar,
  Header,
  Footer,
  BreadcrumbNav,
  VidoeContent,
} from "./components/Components.tsx";

export function Resource() {
  return (
    <>
      <Header />
      <NavBar />
      <BreadcrumbNav current={"Resource"} />
      <ResourcesContent />
      <div style={{ marginBottom: "5rem" }} />
      <VidoeContent />
      <div style={{ marginBottom: "10rem" }} />
      {/* Adding space at the end  */}
      <Footer />
    </>
  );
}
