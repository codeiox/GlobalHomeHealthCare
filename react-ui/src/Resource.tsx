import ResourcesContent, {
  NavBar,
  Header,
  Footer,
  BreadcrumbNav,
} from "./components/Components.tsx";
import VideoList from "./components/VidoesComponent.tsx";

export function Resource() {
  return (
    <div>
      <Header />
      <NavBar />
      <BreadcrumbNav current={"Resource"} />
      <div style={{ paddingRight: "5%", paddingLeft: "5%" }}>
        <ResourcesContent />
        <div style={{ marginBottom: "5rem" }} />

        {/*  Video contents*/}
        <VideoList
          videos={[
            {
              id: "1",
              title: "Ocean Waves",
              description: "Relax with the sound of ocean waves.",
              url: "/videos/ocean.mp4",
            },
            {
              id: "2",
              title: "Mountain Hike",
              description: "Experience a mountain hike.",
              url: "/videos/mountain.mp4",
            },
            {
              id: "3",
              title: "Rainforest Ambience",
              description: "Calm rainforest sounds to help you relax.",
              url: "/videos/rainforest.mp4",
            },
            {
              id: "4",
              title: "City at Night",
              description: "Time-lapse of a bustling city at night.",
              url: "/videos/city.mp4",
            },
          ]}
          emptyHeading="No videos available."
        />

        <div style={{ marginBottom: "10rem" }} />

        {/* Adding space at the end  */}
      </div>

      <Footer />
    </div>
  );
}
