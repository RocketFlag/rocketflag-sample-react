import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import rocketflagLogo from "/rocketflag.svg";
import "./App.css";
import { rocketflag } from "./rocketflagClient";

function App() {
  const [feature, setFeature] = useState(false);

  useEffect(() => {
    void (async () => {
      try {
        const flag = await rocketflag.getFlag("tuTA7Q4jB8roxiLzf49p");
        setFeature(flag.enabled);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://rocketflag.app" target="_blank">
          <img src={rocketflagLogo} className="logo" alt="RocketFlag logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>This is a RocketFlag React Demo with React using Vite!</p>
      <h2>
        Your feature flag is <span style={{ color: feature ? "green" : "red" }}>{feature ? "enabled" : "disabled"}</span>
      </h2>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <p>This app was built with Vite and the RocketFlag SDK with the MIT license.</p>
    </>
  );
}

export default App;
