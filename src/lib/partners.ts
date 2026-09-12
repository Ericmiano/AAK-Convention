import assaAbloyLogo from "@/assets/partner logos/ASSA-ABLOY-logo.png";
import alumilLogo from "@/assets/partner logos/Alumil-LOGO.png";
import hermosaLogo from "@/assets/partner logos/Hermosa-logo.webp";
import plasconLogo from "@/assets/partner logos/Plascon-logo.jpg";
import saintGobainLogo from "@/assets/partner logos/Saint-Gobain-logo.png";
import sikaLogo from "@/assets/partner logos/Sika-logo.png";
import tcLogo from "@/assets/partner logos/TC-logo.png";
import unicolourLogo from "@/assets/partner logos/Unicolor-logo.png";

export type Partner = {
  name: string;
  url: string;
  logo: string;
  /** Some logos are dark-on-transparent or light-on-transparent; force a light card so both read cleanly. */
  onLight?: boolean;
  /** Yellow/red palettes collapse to near-identical grays under grayscale() — skip the desaturated resting state. */
  keepColor?: boolean;
};

export const PARTNERS: Partner[] = [
  { name: "ASSA ABLOY", url: "https://www.assaabloy.com/ke/en", logo: assaAbloyLogo },
  { name: "Alumil", url: "https://www.alumil.com/kenya", logo: alumilLogo, onLight: true },
  { name: "Hermosa Paints", url: "https://hermosapaints.com/", logo: hermosaLogo },
  { name: "Plascon", url: "https://plascon.africa/", logo: plasconLogo },
  {
    name: "Saint-Gobain",
    url: "https://www.saint-gobain-africa.com/en/east-africa",
    logo: saintGobainLogo,
  },
  { name: "Sika", url: "https://ken.sika.com/", logo: sikaLogo, keepColor: true },
  { name: "T&C", url: "https://tacc.co.ke/", logo: tcLogo },
  { name: "Unicolour", url: "https://unitedpaints.co.ke/", logo: unicolourLogo },
];
