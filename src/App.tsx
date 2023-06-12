import { useEffect, useState } from "react";
import Cev_H2 from "./assets/Cev_H2.mp3";
import Dsc_Oh from "./assets/Dsc_Oh.mp3";
import Heater1 from "./assets/Heater-1.mp3";
import Heater2 from "./assets/Heater-2.mp3";
import Heater3 from "./assets/Heater-3.mp3";
import Heater4 from "./assets/Heater-4_1.mp3";
import Heater6 from "./assets/Heater-6.mp3";
import Kick_n_Hat from "./assets/Kick_n_Hat.mp3";
import RP4_KICK_1 from "./assets/RP4_KICK_1.mp3";

import "./App.css";

export default function App() {
  const [display, setDisplay] = useState<string>("");

  const play = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const btn = e.target as HTMLButtonElement;
    const audio = btn?.children?.[0] as HTMLAudioElement;
    setDisplay(btn.id);
    audio.play();
  };

  const findAndPlay = (e: KeyboardEvent) => {
    const btn = document.getElementById(e.key.toUpperCase())?.parentElement;
    if (btn) {
      setDisplay(btn.id);
      btn.click();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", findAndPlay);
    return () => document.removeEventListener("keydown", findAndPlay);
  }, []);

  return (
    <main id="drum-machine">
      <section id="display">{display}</section>
      <button type="button" className="drum-pad" id="Cev_H2" onClick={play}>
        Q<audio className="clip" id="Q" src={Cev_H2} />
      </button>
      <button type="button" className="drum-pad" id="Dsc_Oh" onClick={play}>
        W<audio className="clip" id="W" src={Dsc_Oh} />
      </button>
      <button type="button" className="drum-pad" id="Heater1" onClick={play}>
        E<audio className="clip" id="E" src={Heater1} />
      </button>
      <button type="button" className="drum-pad" id="Heater2" onClick={play}>
        A<audio className="clip" id="A" src={Heater2} />
      </button>
      <button type="button" className="drum-pad" id="Heater3" onClick={play}>
        S<audio className="clip" id="S" src={Heater3} />
      </button>
      <button type="button" className="drum-pad" id="Heater4" onClick={play}>
        D<audio className="clip" id="D" src={Heater4} />
      </button>
      <button type="button" className="drum-pad" id="Heater6" onClick={play}>
        Z<audio className="clip" id="Z" src={Heater6} />
      </button>
      <button type="button" className="drum-pad" id="Kick_n_Hat" onClick={play}>
        X<audio className="clip" id="X" src={Kick_n_Hat} />
      </button>
      <button type="button" className="drum-pad" id="RP4_KICK_1" onClick={play}>
        C<audio className="clip" id="C" src={RP4_KICK_1} />
      </button>
    </main>
  );
}
