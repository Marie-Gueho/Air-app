import "./style.css";
import countryside from "../../assets/countryside.mp3";
import calmRiver from "../../assets/calm-river.mp3";
import forest from "../../assets/foret.mp3";
import champ from "../../assets/perche.mp3";
import champetre from "../../assets/champetre.mp3";
import seaside from "../../assets/seaside.mp3";

function Content({ display, theme }) {
  return (
    <main className={`main ${display}`}>
      <section className="sound-container">
        {theme === "respiration" && (
          <>
            <figure>
              <figcaption>Au coeur de la forêt</figcaption>
              <audio controls src={forest}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
            <figure>
              <figcaption>Une pause dans le Perche</figcaption>
              <audio controls src={champ}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
          </>
        )}
        {theme === "relaxation" && (
          <>
            <figure>
              <figcaption>Un petit coin de campagne</figcaption>
              <audio controls src={countryside}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
            <figure>
              <figcaption>Au bord de la rivière</figcaption>
              <audio controls src={calmRiver}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
          </>
        )}
        {theme === "revitalisation" && (
          <>
            <figure>
              <figcaption>Un après-midi champêtre</figcaption>
              <audio controls src={champetre}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
            <figure>
              <figcaption>Au son des vagues</figcaption>
              <audio controls src={seaside}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
          </>
        )}
      </section>
    </main>
  );
}

export default Content;
