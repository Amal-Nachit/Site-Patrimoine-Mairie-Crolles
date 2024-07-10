import { ReactNode } from "react";

export interface ActualiteProps {
    id : string;
  titre: string;
  contenu: string;
  image: string;
  date: string;
}

export type AutresImagesProps = {
  id: string;
  image_name: string;
};

export type AutresLiensProps = {
  id: string;
lienUrl: string;
texteLien: string;
};
export type SingleActualiteProps = {
  texte_lien: ReactNode;
  lien_url: string | undefined;
  lienUrl: string;
  texteLien: string;
  image_name: string | undefined;
  id: string;
  titre: string;
  contenu: string;
  image: string;
  date: string;

  autresImages: {
    map(arg0: (autresImages: any) => any): import("react").ReactNode;
    id: string;
    imageName: string;
  };
  autresLiens: {
    map(arg0: (autresImages: { nom: any }) => any): import("react").ReactNode;
    id: string;
    lienUrl: string; 
    texteLien: string;
  };
};
