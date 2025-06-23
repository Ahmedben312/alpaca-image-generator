import { useState } from "react";
import "./index.css";
import Header from "../header";
type PartType =
  | "ears"
  | "eyes"
  | "mouth"
  | "nose"
  | "hair"
  | "accessories"
  | "neck"
  | "background"
  | "leg";

interface AlpacaParts {
  ears: PartOptions;
  eyes: PartOptions;
  mouth: PartOptions;
  nose: PartOptions;
  hair: PartOptions;
  accessories: PartOptions;
  neck: PartOptions;
  background: PartOptions;
  leg: PartOptions;
}

interface CurrentSelections {
  ears: number;
  eyes: number;
  mouth: number;
  nose: number;
  hair: number;
  accessories: number;
  neck: number;
  background: number;
  leg: number;
}

const AlpacaGenerator = () => {
  const path = "../../assets/alpaca-images/alpaca/";
  const partOptions: AlpacaParts = {
    ears: {
      1: path + "ears/default.png",
      2: path + "ears/tilt-backward.png",
      3: path + "ears/tilt-forward.png",
    },
    eyes: {
      1: path + "eyes/default.png",
      2: path + "eyes/angry.png",
      3: path + "eyes/naughty.png",
      4: path + "eyes/panda.png",
      5: path + "eyes/smart.png",
      6: path + "eyes/star.png",
    },
    mouth: {
      1: path + "mouth/default.png",
      2: path + "mouth/astonished.png",
      3: path + "mouth/eating.png",
      4: path + "mouth/laugh.png",
      5: path + "mouth/tongue.png",
    },
    nose: {
      1: path + "nose/default.png",
    },
    hair: {
      1: path + "hair/default.png",
      2: path + "hair/bang.png",
      3: path + "hair/curls.png",
      4: path + "hair/elegant.png",
      5: path + "hair/fancy.png",
      6: path + "hair/quiff.png",
      7: path + "hair/short.png",
    },
    accessories: {
      1: path + "accessories/default.png",
      2: path + "accessories/flower.png",
      3: path + "accessories/glasses.png",
      4: path + "accessories/headphones.png",
    },
    neck: {
      1: path + "neck/default.png",
      2: path + "neck/bend-backward.png",
      3: path + "neck/bend-forward.png",
      4: path + "neck/thick.png",
    },
    background: {
      1: path + "background/blue50.png",
      2: path + "background/blue60.png",
      3: path + "background/blue70.png",
      4: path + "background/darkblue30.png",
      5: path + "background/darkblue50.png",
      6: path + "background/darkblue70.png",
      7: path + "background/green50.png",
      8: path + "background/green60.png",
      9: path + "background/green70.png",
      10: path + "background/grey40.png",
      11: path + "background/grey70.png",
      12: path + "background/grey80.png",
      13: path + "background/red50.png",
      14: path + "background/red60.png",
      15: path + "background/red70.png",
      16: path + "background/yellow50.png",
      17: path + "background/yellow60.png",
      18: path + "background/yellow70.png",
    },
    leg: {
      1: path + "leg/default.png",
      2: path + "leg/bubble-tea.png",
      3: path + "leg/cookie.png",
      4: path + "leg/game-console.png",
      5: path + "leg/tilt-backward.png",
      6: path + "leg/tilt-forward.png",
    },
  };
  const [currentSelections, setCurrentSelections] = useState<CurrentSelections>(
    {
      ears: 1,
      eyes: 1,
      mouth: 1,
      nose: 1,
      hair: 1,
      accessories: 1,
      neck: 1,
      background: 1,
      leg: 1,
    }
  );
  const [selectedPart, setSelectedPart] = useState<PartType>("ears");
  const handlePartSelection = (part: PartType, value: number) => {
    setCurrentSelections({
      ...currentSelections,
      [part]: value,
    });
  };

  const randomizeAlpaca = () => {
    const newSelections: CurrentSelections = { ...currentSelections };
    (Object.keys(partOptions) as PartType[]).forEach((part) => {
      const options = Object.keys(partOptions[part]);
      const randomIndex = Math.floor(Math.random() * options.length);
      newSelections[part] = parseInt(options[randomIndex]);
    });
    setCurrentSelections(newSelections);
  };
  const downloadAlpaca = () => {
    alert("In complet implementaion, this can be downloaded");
  };
  return (
    <div className="bg-gradient-to-tr from-purple-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <div className="flex flex-col lg:flex-row gap-0">
          <AlpacaPreview
            currentSelections={currentSelections}
            partOptions={partOptions}
            onRandomize={randomizeAlpaca}
            onDownload={downloadAlpaca}
          />

          <PartsSelector
            partOptions={partOptions}
            currentSelections={currentSelections}
            selectedPart={selectedPart}
            onSelectPart={setSelectedPart}
            onSelectOption={handlePartSelection}
          />
        </div>
      </div>
    </div>
  );
};

export default AlpacaGenerator;
