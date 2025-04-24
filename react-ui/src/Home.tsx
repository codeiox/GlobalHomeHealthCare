import {
  NavBar,
  Header,
  Carousel_Comp,
  InfoBox,
  Footer,
  BodyContent,
  ServicesSection,
} from "./components/Components.tsx"; // Import components

export function Home() {
  return (
    <>
      <Header /> {/* Header component */}
      <NavBar /> {/* Navigation bar */}
      <Carousel_Comp /> {/* Carousel component */}
      <InfoBox /> {/* Info box: feature highlight */}
      <BodyContent /> {/* Body content */}
      <ServicesSection /> {/* Another body content */}
      <div style={{ marginBottom: "6rem" }} /> {/* Spacing before footer */}
      <Footer /> {/* Footer component */}
    </>
  );
}
