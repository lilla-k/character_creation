import { useState } from "react";
import './SetCharacterPage.css';

const SetCharacterPage = (props) => {
  const [gender, setGender] = useState("male");
  const [race, setRace] = useState("dwarf");


  const races = ["dwarf", "elf", "gnome"];
  const genders = [{
    gender: "male",
    src: "../../images/gender/male-symbol-png-349235.png"
  }, {
    gender: "female",
    src: "../../images/gender/female-symbol-png-395837.png"
  }
  ];

  const urls = {
    "male": {
      "dwarf": "../../images/races/pngfind.com-dwarf-male-1270878.png",
      "elf": "../../images/races/pngfind.com-elf-male-png-50002.png",
      "gnome": "../../images/races/pngfind.com-gnome-male-png-287276.png"
    },
    "female": {
      "dwarf": "../../images/races/pngfind.com-dwarf-female-png-2721286.png",
      "elf": "../../images/races/pngfind.com-elf-female-png-39417.png",
      "gnome": "../../images/races/pngfind.com-gnome-female-png-5610025.png"
    }
  }




  return (
    <div id="character-page">
      <div id="choose-type">
        <div id="character-gender">
          <div>Choose gender</div>
          <div id="genders-container">
            {genders.map(g =>
              <img
                id={g.gender}
                key={g.gender}
                src={g.src}
                alt={g.gender}
                onClick={() => setGender(g.gender)}
                className={gender === g.gender ? "choosen" : ""}
              />
            )}
          </div>
        </div>
        <div id="character-race">
          <div>Choose race</div>
          <div id="races-container">
            {races.map(r =>
              <div
                key={r}
                onClick={() => setRace(r)}
                className={race === r ? "choosen race" : "race"}
              >{r}</div>)}
          </div>

        </div>
      </div>
      <div id="character-container">
        <div id="character-name">{props.name}</div>
        <img id="character-img" alt="character" src={urls[gender][race]}/>
      </div>

    </div>
  )
}

export default SetCharacterPage;