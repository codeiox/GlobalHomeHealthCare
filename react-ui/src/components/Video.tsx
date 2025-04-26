import { FaRegHeart } from "react-icons/fa";
import "../css/Video.css";

export type VideoType = {
  id: string;
  title: string;
  description: string;
  url: string;
};

type VideoProps = {
  video: VideoType;
};

function Video({ video }: VideoProps) {
  return (
    <div className="video-card">
      <video className="video-thumbnail" controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-info">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
      <div className="video-like">
        <FaRegHeart size={20} />
      </div>
    </div>
  );
}

export default Video;
