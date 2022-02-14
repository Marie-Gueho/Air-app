import "./style.css";
import stars from "../../assets/stars.mp4";
import countryside from "../../assets/countryside.mp3";
import forest from "../../assets/foret.mp3";
import birds from "../../assets/birds.mp4";
import waves from "../../assets/waves.mp4";
import surreal from "../../assets/surreal-forest.mp4";

function Content({ display, theme }) {
  return (
    <main className={`main ${display}`}>
      <section className="sound-container">
        {theme === "respiration" && (
          <>
            <figure>
              <figcaption>Au coeur de la forêt</figcaption>
              <audio controls src={forest}>
                <cite>La Sonothèque: https://lasonotheque.org/</cite>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
            <figure>
              <figcaption>Avec les oiseaux</figcaption>
              <audio controls src={birds}>
                <cite>Music: https://www.chosic.com/free-music/all/ </cite>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
          </>
        )}
        {theme === "relaxation" && (
          <>
            <figure>
              <figcaption>Sous les étoiles</figcaption>
              <audio controls src={stars}>
                <cite>
                  Contemplate the stars by Meydän | https://linktr.ee/meydan
                  Music promoted by https://www.chosic.com/free-music/all/
                  Creative Commons CC BY 4.0
                  https://creativecommons.org/licenses/by/4.0/
                </cite>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
            <figure>
              <figcaption>Un petit coin de campagne</figcaption>
              <audio controls src={countryside}>
                <cite>La Sonothèque: https://lasonotheque.org/</cite>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
          </>
        )}
        {theme === "revitalisation" && (
          <>
            <figure>
              <figcaption>Au bord de la mer</figcaption>
              <audio controls src={waves}>
                <cite>Music: https://www.chosic.com/free-music/all/ </cite>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
            <figure>
              <figcaption>Il était une fois dans la forêt</figcaption>
              <audio controls src={surreal}>
                <cite>
                  Surreal Forest by Meydän | https://linktr.ee/meydan Music
                  promoted by https://www.chosic.com/free-music/all/ Creative
                  Commons CC BY 4.0 https://creativecommons.org/licenses/by/4.0/
                </cite>
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
