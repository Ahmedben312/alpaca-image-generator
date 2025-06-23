import { FaRandom, FaDownload } from "react-icons/fa";

interface AlpacaPreviewProps {
  currentSelectinos: {
    ears: number;
    eyes: number;
    mouth: number;
    nose: number;
    hair: number;
    accessories: number;
    neck: number;
    background: number;
    leg: number;
  };
  partOptions: {
    [key: string]: {
      [key: number]: string;
    };
  };
  onRandomize: () => void;
  onDownload: () => void;
}

const AlpacaPreview = ({
  currentSelections,
  partOptions,
  onRandomize,
  onDownload,
}: AlpacaPreviewProps) => {
  return <div className="lg:w-0.5"></div>;
};
