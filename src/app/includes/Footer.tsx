import React from "react";
import "tailwindcss/tailwind.css";
const Footer = () => {
  return (
    <section className="pb-3 bg-[url('/images/footer.jpg')] pt-3">

      <p className="text-base text-center font-bold text-white mb-3">
        Crédits : Photos / Textes / Conception graphique / Développement : Ville
        de Crolles / Services communication et patrimoine
      </p>
      <div className="flex items-center justify-center">
            <a href="http://www.ville-crolles.fr">
              <img
                src="/images/logo.jpg"
                alt="Logo"
                className="mr-7 lg:block"
                style={{
                  height: "4rem",
                  width: "4rem",
                  borderRadius: "5%",
                }}
              />
            </a>
      </div>
    </section>
  );
};

export default Footer;