import IntroCarousel from "../components/home/IntroCarousel";
import IntroText from "../components/home/IntroText";
import Product from "../components/home/Product";
import Portfolio from "../components/home/Portfolio";
import Banner from "../components/home/Banner";
import Banner2 from "../components/home/Banner2";
import Clients from "../components/home/Clients";
import ClientReviews from "../components/home/ClientReviews";
import GoblinIllustrator from "../components/home/GoblinIllustrator";
import Shop from "./Shop";
import ParallaxComponent from "../components/home/parallax";
import SecondBanner from "../components/home/SecondBanner";
import ThirdBanner from "../components/home/ThirdBanner";
import CardCarousel from "../components/home/CardCarousel";

export default function Home() {
  return (
    <div className="home">
      <IntroCarousel />
      <Banner />
      <GoblinIllustrator />
      <IntroText />
      <ParallaxComponent />
      <Product />
      <SecondBanner />
      <Portfolio />
      <Banner2 />
      <Clients />
      <ClientReviews />
      <ThirdBanner />
      <Shop />
      <IntroText />
    </div>
  );
}
