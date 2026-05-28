import type { Metadata } from "next";
import { LegalLayout } from "@/components/landing/LegalLayout";

export const metadata: Metadata = {
  title: "Conditions d'utilisation · EqualHome",
  description: "Conditions générales d'utilisation de l'application EqualHome.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Conditions d'utilisation" updated="28 mai 2026">

      <p>
        Les présentes Conditions Générales d&apos;Utilisation (« CGU ») définissent les règles
        d&apos;accès et d&apos;utilisation de l&apos;application EqualHome et du site
        equalhome.app, édités par <strong>DIGITALL ELEVATE</strong> (ci-après « EqualHome »,
        « nous »).
      </p>
      <p>
        En créant un compte ou en utilisant l&apos;application, vous acceptez pleinement
        et sans réserve les présentes CGU. Si vous n&apos;acceptez pas ces conditions,
        vous devez cesser toute utilisation.
      </p>

      <hr className="legal-divider" />

      <h2>1. Description du service</h2>
      <p>
        EqualHome est une application mobile permettant aux couples et foyers de visualiser,
        quantifier et rééquilibrer la charge mentale et les tâches domestiques. L&apos;application
        est disponible sur iOS et Android. Un accès via navigateur web peut être proposé
        ultérieurement.
      </p>

      <h2>2. Création de compte</h2>
      <ul>
        <li>Vous devez être âgé d&apos;au moins <strong>16 ans</strong> pour utiliser EqualHome.</li>
        <li>Vous vous engagez à fournir des informations exactes et à les maintenir à jour.</li>
        <li>Vous êtes responsable de la confidentialité de vos identifiants de connexion.</li>
        <li>
          Tout accès non autorisé à votre compte doit être signalé immédiatement à{" "}
          <a href="mailto:bonjour@equalhome.app">bonjour@equalhome.app</a>.
        </li>
      </ul>

      <h2>3. Offres et tarifs</h2>
      <p>EqualHome est proposé en deux formules :</p>

      <table className="legal-table">
        <thead>
          <tr>
            <th>Formule</th>
            <th>Prix</th>
            <th>Contenu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Gratuit</strong></td>
            <td>0 €</td>
            <td>Jusqu&apos;à 10 tâches, Balance Score basique, invitation partenaire</td>
          </tr>
          <tr>
            <td><strong>Premium</strong></td>
            <td>49,99 € / an</td>
            <td>Tâches illimitées, insights hebdomadaires, historique illimité, rapports partageables</td>
          </tr>
        </tbody>
      </table>

      <p>
        Un <strong>essai gratuit de 7 jours</strong> est disponible pour Premium, sans engagement.
        L&apos;abonnement se renouvelle automatiquement sauf résiliation au moins 24 h avant la
        fin de la période en cours, via l&apos;App Store (iOS) ou Google Play (Android).
      </p>
      <p>
        Conformément aux règles des plateformes, le remboursement d&apos;un abonnement en cours
        est soumis aux politiques d&apos;Apple et de Google.
      </p>

      <h2>4. Utilisation acceptable</h2>
      <p>Vous vous engagez à ne pas :</p>
      <ul>
        <li>Utiliser l&apos;application à des fins illégales, frauduleuses ou contraires à l&apos;ordre public.</li>
        <li>Tenter d&apos;accéder aux comptes, données ou infrastructures d&apos;autres utilisateurs.</li>
        <li>Effectuer du reverse engineering, décompiler ou désassembler l&apos;application.</li>
        <li>Automatiser l&apos;accès au service sans autorisation écrite d&apos;EqualHome.</li>
        <li>Diffuser des contenus offensants, discriminatoires, illégaux ou portant atteinte aux droits de tiers.</li>
      </ul>

      <h2>5. Propriété intellectuelle</h2>
      <p>
        L&apos;application EqualHome, son code source, son design, ses visuels, ses marques et
        l&apos;ensemble du contenu sont la propriété exclusive de DIGITALL ELEVATE et sont
        protégés par le droit français et international de la propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, modification, distribution ou exploitation non autorisée est
        strictement interdite.
      </p>

      <h2>6. Disponibilité du service</h2>
      <p>
        Nous nous efforçons d&apos;assurer une disponibilité maximale. Des opérations de
        maintenance peuvent être réalisées, si possible avec préavis. Nous ne pouvons garantir
        un accès ininterrompu et déclinons toute responsabilité pour les interruptions
        indépendantes de notre volonté.
      </p>

      <h2>7. Limitation de responsabilité</h2>
      <div className="legal-note">
        EqualHome est un outil de visualisation et de dialogue. Il ne constitue pas une
        solution thérapeutique, médicale ou juridique. Les décisions prises par les utilisateurs
        sur la base des données de l&apos;application relèvent de leur seule responsabilité.
      </div>
      <p>
        Dans les limites permises par la loi applicable, notre responsabilité totale envers vous
        ne saurait excéder le montant payé pour le service au cours des <strong>12 derniers mois</strong>.
      </p>

      <h2>8. Résiliation</h2>
      <p>
        Vous pouvez supprimer votre compte à tout moment depuis{" "}
        <strong>Réglages → Foyer → Supprimer le foyer</strong>. Toutes vos données seront
        effacées dans les 30 jours suivant la suppression.
      </p>
      <p>
        EqualHome se réserve le droit de suspendre ou supprimer un compte en cas de violation
        des présentes CGU, sans préjudice de tout recours légal.
      </p>

      <h2>9. Modifications des CGU</h2>
      <p>
        Nous pouvons modifier ces CGU à tout moment. Vous serez informé par e-mail ou
        notification in-app pour tout changement substantiel. La poursuite de l&apos;utilisation
        après notification vaut acceptation des nouvelles conditions.
      </p>

      <h2>10. Droit applicable et juridiction</h2>
      <p>
        Les présentes CGU sont soumises au <strong>droit français</strong>. Tout litige relatif
        à leur interprétation ou exécution sera porté devant les tribunaux compétents de Paris,
        sauf disposition légale contraire applicable aux consommateurs (notamment l&apos;art.
        L. 141-5 du Code de la consommation pour les litiges de consommation).
      </p>

      <h2>11. Contact</h2>
      <p>
        DIGITALL ELEVATE — <a href="mailto:bonjour@equalhome.app">bonjour@equalhome.app</a>
      </p>
      <p>
        Pour toute réclamation ou litige non résolu, vous pouvez recourir gratuitement à un
        médiateur de la consommation conformément aux articles L. 611-1 et suivants du Code
        de la consommation.
      </p>

    </LegalLayout>
  );
}
