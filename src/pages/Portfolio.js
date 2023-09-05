import Portfolio from "../components/home/Portfolio";
import IntroText from "../components/home/IntroText";

export default function PortfolioPage() {
  return (
    <div>
      <Portfolio />
      <h2>Nieuwe categorie:</h2>
      <Portfolio />
      <hr />
      <IntroText />
    </div>
  );
}
