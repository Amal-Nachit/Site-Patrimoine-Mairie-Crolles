"use client";

import React, { useEffect, useRef, useState } from "react";
import { getActualiteById } from "@/app/Services/actualites";
import { SingleActualiteProps } from "@/app/Utils/types";
import Header from "@/app/includes/Header";
import Footer from "@/app/includes/Footer";

const Page = ({ params }: { params: { id: string } }) => {
  const [actualiteData, setActualiteData] = useState<SingleActualiteProps | null>(
    null
  );

  useEffect(() => {
    getActualiteById(params.id).then((res) => {
      setActualiteData(res);
    });
  }, [params.id]);
  console.log(actualiteData);
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />

      <main className="flex-grow bg-white">
        <div className="m-6">
          <span className="text-base text-blue-500 hover:text-blue-800 hover:underline ">
            <a href="/" className="hover:underline">
              Retour à l'accueil
            </a>
          </span>
        </div>
        {actualiteData && (
          <div className="flex flex-col-reverse md:flex-row items-start justify-center mt-12 mb-16 px-4 space-y-10 space-x-10 sm:px-6 lg:px-8 mx-28">
            {actualiteData.image && (
              <img
                src={actualiteData.image}
                alt={actualiteData.titre}
                className="flex justify-center items-center w-100 h-96 object-cover mt-5"
              />
            )}
            <div className="flex flex-col ml-4">
              <h1 className="text-4xl font-bold mb-6 text-gray-800">
                {actualiteData.titre}
              </h1>
              <div className="leading-relaxed">
                <p className="mb-4 font-semibold text-gray-600">
                  Publié le :{" "}
                  <span className="font-normal text-gray-500">
                    {new Date(actualiteData.date).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </p>
                <div
                  className="text-lg text-gray-700"
                  style={{ lineHeight: "2" }}
                  dangerouslySetInnerHTML={{
                    __html: actualiteData.contenu.replace(/\n/g, "<br />"),
                  }}
                />

                {actualiteData?.lien_url &&
                  actualiteData.texte_lien &&
                  typeof actualiteData.lien_url === "string" &&
                  actualiteData.lien_url.trim() !== "" && (
                    <div className=" ">
                      <h1 className="text-xl font-bold mb-4 text-gray-800 pt-4">
                        Liens additionnels :
                      </h1>
                      <a
                        href={actualiteData.lien_url}
                        className="text-lg text-blue-700 hover:underline hover:to-blue-800"
                        target="_blank"
                      >
                        {actualiteData.texte_lien}
                      </a>
                    </div>
                  )}
              </div>
            </div>
          </div>
        )}
        {actualiteData?.image_name && (
          <div className="flex flex-wrap justify-center gap-4 p-4">
            {actualiteData.image_name.map(
              (image_name: string | undefined, index: number) => (
                <img
                  key={index}
                  src={image_name || "default-image-url.jpg"}
                  alt={`Description de l'image ${index + 1}`}
                  className="max-w-xs rounded-lg shadow-md"
                />
              )
            )}
          </div>
        )}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Page;

