import Banner from "../components/home/Banner";
import Portfolio from "../components/home/Portfolio";
import GoblinIllustrator from "../components/home/GoblinIllustrator";

export default function About() {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Welkom bij Inner Goblin, waar we de wereld van de goblins tot leven
        brengen! Ons verhaal begint met een diepe fascinatie voor de
        verbeeldingskracht en de magische wezens die daaruit voortkomen. Bij
        Inner Goblin geloven we dat er overal goblins verscholen zitten,
        wachtend om ontdekt en gevierd te worden. Met onze artistieke talenten
        en onbegrensde creativiteit nemen we je mee op een avontuurlijke reis
        door de wereld van deze ondeugende wezens.
      </p>
      <Banner />
      <h2>Onze Missie</h2>
      <p>
        Onze missie bij Inner Goblin is om de alledaagse momenten om te toveren
        tot magische ervaringen. We geloven dat het koesteren van je innerlijke
        goblin een bron van vreugde en inspiratie kan zijn. Onze getalenteerde
        kunstenaars werken nauw samen om levendige en boeiende illustraties te
        creëren die goblins in de meest verrassende en betoverende situaties
        tonen. We streven ernaar om je te laten glimlachen, je verbeelding te
        stimuleren en een vleugje verwondering in je leven te brengen.
      </p>
      <h2>Onze kunstenaars</h2>
      <p>
        Bij Inner Goblin is ons team van kunstenaars de drijvende kracht achter
        onze creatieve visie. Elke kunstenaar brengt unieke vaardigheden en
        perspectieven naar de tafel, wat resulteert in een rijke diversiteit aan
        goblin-avonturen. Onze toegewijde kunstenaars laten hun verbeelding de
        vrije loop en creëren betoverende werelden waar goblins spelen, lachen
        en avonturen beleven.
      </p>
      <h2>Ontdek Inner Goblin</h2>
      <p>
        We nodigen je uit om de wereld van Inner Goblin te ontdekken en te
        omarmen. Blader door onze galerij van betoverende illustraties, laat je
        inspireren en koester je innerlijke goblin. Of je nu op zoek bent naar
        kunst om je huis te verfraaien, unieke geschenken wilt vinden of gewoon
        wat magie aan je dag wilt toevoegen, Inner Goblin heeft iets voor jou.
        We hopen dat je evenveel plezier beleeft aan het verkennen van onze
        wereld als wij hebben gehad bij het creëren ervan. Dus, sluit je aan bij
        Inner Goblin en laat je verwonderen door de verborgen magie van de
        alledaagse wereld!
      </p>
      <h2>My latest Artwork:</h2>
      <GoblinIllustrator />
      <h2>My favourite Artwork:</h2>
      <Portfolio />
    </div>
  );
}
