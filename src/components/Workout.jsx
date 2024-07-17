import Exercise from "./Exercise";
import SectionWrapper from "./SectionWrapper";

function Workout(props) {
  const { workout } = props;
  return (
    <SectionWrapper
      id={"workout"}
      header={"Welcome to"}
      title={["The", "Danger", "zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <Exercise exercise={exercise} i={i} key={i}></Exercise>;
        })}
      </div>
    </SectionWrapper>
  );
}

export default Workout;
