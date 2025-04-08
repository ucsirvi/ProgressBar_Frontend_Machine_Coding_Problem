import { useEffect, useState } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [animateprogress, setAnimateProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimateProgress(progress);
    }, 100);
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${animateprogress}%`,
          transform: `translateX(${animateprogress - 100}%)`,
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Progress Bar</h1>

      <ProgressBar progress={50} />
      <ProgressBar progress={80} />
    </div>
  );
}
