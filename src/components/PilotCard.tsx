import { useEffect, useState } from "react";
import Card from "./Card";

interface PilotProps {
  apiUrl: string;
}

const Pilot = ({ apiUrl }: PilotProps) => {
  const [pilot, setPilot] = useState<any>();

  useEffect(() => {
    if (!apiUrl) return;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPilot(data);
      });
  }, [apiUrl]);

  const match = pilot?.url.match(/\d+/g);
  const id = match ? Number(match[0]) : null;

  return pilot ? (
    <Card title={pilot.name} image={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
  ) : null;
};

export default Pilot;
