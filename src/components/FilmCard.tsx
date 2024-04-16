import { useEffect, useState } from "react";
import Card from "./Card";

interface FilmProps {
  apiUrl: string;
}

const Film = ({ apiUrl }: FilmProps) => {
  const [film, setFilm] = useState<any>();

  useEffect(() => {
    if (!apiUrl) return;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setFilm(data);
      });
  }, [apiUrl]);

  const match = film?.url.match(/\d+/g);
  const id = match ? Number(match[0]) : null;

  return film ? (
    <Card title={film.title} image={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} />
  ) : null;
};

export default Film;
