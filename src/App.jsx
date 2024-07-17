import { useState } from "react";
import Generator from "./components/Generator";
import Head from "./components/Head";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/function";

function App() {
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");
  const [workout, setWorkout] = useState(null);

  function updateWorkout() {
    if (muscles.length < 1) {
      alert("Select Muscle💪 Groups");
      return;
    }

    if (poison === "individual") {
      if (!(muscles.length === 3)) {
        alert("Select 'three' Muscle💪 Groups");
        return;
      }
    }

    let newWorkout = generateWorkout({ muscles, poison, goal });

    setWorkout(newWorkout);

    setTimeout(() => (window.location.href = "#workout"), 100);
  }

  return (
    <>
      <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
        <Head />
        <Generator
          poison={poison}
          setPoison={setPoison}
          muscles={muscles}
          setMuscles={setMuscles}
          goal={goal}
          setGoal={setGoal}
          updateWorkout={updateWorkout}
        />
        {workout && <Workout workout={workout} />}
      </main>
    </>
  );
}

export default App;
