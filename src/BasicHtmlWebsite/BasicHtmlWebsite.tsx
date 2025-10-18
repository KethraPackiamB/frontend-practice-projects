import { FooterSection } from "./Footer/FooterSection";
import { HeaderPage } from "./Header/HeaderPage";
import { SectionPage } from "./Section/SectionPage";
import { Reviews } from "./Section/Reviews";

export const BasicHtmlWebsite = () => {
  return (
    <div>
      <HeaderPage />
      <SectionPage />
      <Reviews />
      <FooterSection />
    </div>
  );
};
