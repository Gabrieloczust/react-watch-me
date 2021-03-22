import { useEffect, useState } from "react";
import { api } from "./services/api";
import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";
import { GenreResponseProps } from "./@types/genre";
import "./styles/global.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
      />

      <Content selectedGenreId={selectedGenreId} title={selectedGenre.title} />
    </div>
  );
}
