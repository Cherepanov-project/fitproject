import { VideoDiv } from "./styledExercises";

const Exercises = () => {
  return (
    <VideoDiv>
      <iframe
        width="900"
        height="500"
        src={`https://www.youtube.com/embed/vO0ItS53Jno`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </VideoDiv>
  );
};

export default Exercises;
