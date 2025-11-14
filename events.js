const evenements = [
  // {
  //   id: 1,
  //   titre: "Participation à la Welttisch de Zürich",
  //   date: "30/08/2025",
  //   image: "./assets/Yennayer1.jpg",
  //   alt: "Welttisch",
  //   texte:
  //     " Venez célébrer avec nous le plat emblématique récemment inscrit au patrimoine mondial de l'UNESCO ! Le Couscous Day est bien plus qu'un simple moment gourmand : c'est une véritable fête des sens, un hommage à nos traditions familiales et à notre héritage culinaire. Dans une ambiance chaleureuse et conviviale, nous vous invitons à partager ce symbole de générosité et de vivre-ensemble à travers des dégustations, des animations et des ateliers pour petits et grands.",
  // },
  {
    id: 2,
    titre: "Présentation officielle de l'association",
    date: "21/09/2025",
    image: "./assets/conference-3248255_640.jpg",
    alt: "association tahalp",
    texte: "Ce dimanche, nous aurons le plaisir de vous présenter officiellement l'association Tahalp. Un moment de partage et de convivialité pour découvrir notre vision, nos projets et les actions que nous souhaitons mener ensemble. Rejoignez-nous pour célébrer cette étape importante et faire partie de cette nouvelle aventure collective !",
  },
  {
    id: 3,
    titre: "Information sur le système scolaire Suisse",
    date: "25/10/2025",
    image: "./assets/reunion_information.jpg",
    alt: "réunion information",
    texte: "ÜBERGANGSPHASE ZWISCHEN DER SEKUNDARSTUFE UND DER BERUFSAUSBILDUNG Infoveranstaltung organisiert vom Verein Tahalp. Auf Deutsch &amp; Arabisch. Réunion d&#39;information organisée par l&#39;association Tahalp en allemand et en arabe. PHASE DE TRANSITION ENTRE LE SECONDAIRE ET LA FORMATION PROFESSIONNELLE",
  },
  {
    id: 4,
    titre: "Diffusion du film La Bataille d&#39;Alger",
    date: "01/11/2025",
    image: "./assets/sceance_cinema.jpg",
    alt: "salle de cinéma",
    texte: "À l'occasion de notre événement, nous vous invitons à (re)découvrir le film La Bataille d'Alger, œuvre incontournable retraçant avec force et réalisme un moment marquant de l’Histoire. Cet instant culturel sera suivi d'une interprétation théâtrale par les enfants, qui mettront en scène des épisodes de la guerre d'Algérie à travers leur regard et leur énergie. Un moment fort, à la fois mémoire, transmission et partage, pour petits et grands.",
  },
  {
    id: 5,
    titre: "Couscou Day",
    date: "07/12/2025",
    image: "./assets/couscous.webp",
    alt: "couscous",
    texte:
      " Venez célébrer avec nous le plat emblématique récemment inscrit au patrimoine mondial de l'UNESCO ! Le Couscous Day est bien plus qu'un simple moment gourmand : c'est une véritable fête des sens, un hommage à nos traditions familiales et à notre héritage culinaire. Dans une ambiance chaleureuse et conviviale, nous vous invitons à partager ce symbole de générosité et de vivre-ensemble à travers des dégustations, des animations et des ateliers pour petits et grands.",
  },
 // {
 //  id: 6,
 //  titre: "Yennayer - Nouvel An Amazigh",
 //   date: "11/01/2026",
 //   image: "./assets/Yennayer1.jpg",
 //   alt: "Yennayer",
 //  texte:
 //     "Plongez dans l'univers fascinant du Nouvel An berbère, une fête ancestrale célébrée depuis des siècles à travers le monde amazigh. Yennayer marque non seulement le début d'une nouvelle année, mais aussi la fin des labours et le cœur de la saison humide. C'est un moment de rassemblement, de transmission et de spiritualité, où se mêlent repas traditionnels, jeux populaires, rites symboliques et récits anciens. Une occasion unique de découvrir la richesse de cette culture et de ses liens profonds avec la nature et l'invisible.",
 // },
  // {
  //   id: 7,
  //   titre: "Journée mondiale contre le racisme",
  //   date: "03/2026",
  //   image: "./assets/couscous.webp",
  //   alt: "Journée mondiale contre le racisme",
  //   texte: "allez",
  // },
  // {
  //   id: 8,
  //   titre: "Sechseläuten",
  //   date: "04/2026",
  //   image: "./assets/couscous.webp",
  //   alt: "Sechseläuten",
  //   texte: "allez",
  // },
  // {
  //   id: 9,
  //   titre: 'Fête "Mosaïque" à Zürich',
  //   date: "Printemp 2026",
  //   image: "./assets/couscous.webp",
  //   alt: 'Fête "Mosaïque" à Zürich',
  //   texte: "allez",
  // },
  // {
  //   id: 10,
  //   titre: "Soirée andalouse &amp; exposition artistique",
  //   date: "Automne 2026",
  //   image: "./assets/couscous.webp",
  //   alt: "andalousie",
  //   texte: "allez",
  // },
];

function toggleParagraphVisibility(id) {
  const element = document.getElementById(id);
  element.classList.toggle("paragraph-hidden");
}
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("evenements-global-container");

  evenements.forEach((event) => {
    const html = `
      <div class="evenement-container">
        <div class="image-evenement" data-paragraph-id="evenement-paragraph${event.id}">          <h3>${event.titre}</h3>
          <picture>
            <source media="(min-width: 320px)" srcset="${event.image}" />
            <img src="${event.image}" alt="${event.alt}" width="320" height="auto" />
          </picture>
        </div>
        <div class="text-evenement-container">
          <div class="paragraph-hidden" id="evenement-paragraph${event.id}">
            <div class="event-title">
              <span>${event.date}</span>
              <h3>${event.titre}</h3>
            </div>
            <p>${event.texte}</p>
          </div>
          <picture>
            <source media="(min-width: 745px)" srcset="${event.image}" />
            <img src="${event.image}" alt="${event.alt}" width="800" height="auto" />
          </picture>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  });
    container.querySelectorAll(".image-evenement").forEach((element) => {
    element.addEventListener("click", () => {
      const paragraphId = element.dataset.paragraphId;
      toggleParagraphVisibility(paragraphId);
    });
  });
});
