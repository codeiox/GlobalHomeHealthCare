import Video from "../components/Video";

type VideoType = {
  id: string;
  title: string;
  description: string;
  url: string; // Add url
};

type VideoListProps = {
  videos: VideoType[];
  emptyHeading: string;
};

function VideoList({ videos, emptyHeading }: VideoListProps) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? "Videos" : "Video";
    heading = count + " " + noun;
  }
  return (
    <section>
      <h2>{heading}</h2>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </section>
  );
}

export default VideoList;
