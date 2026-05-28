import type { Metadata } from "next";
import { LegalLayout } from "@/components/landing/LegalLayout";

export const metadata: Metadata = {
  title: "Politique cookies · EqualHome",
  description: "Informations sur les cookies et traceurs utilisés sur equalhome.app.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Politique cookies" updated="28 mai 2026">

      <p>
        Cette page explique comment equalhome.app utilise les cookies et autres traceurs,
        conformément à la réglementation applicable (RGPD, recommandations CNIL).
      </p>

      <hr className="legal-divider" />

      <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, téléphone,
        tablette) lors de la visite d&apos;un site web. Il permet au site de mémoriser des
        informations sur votre navigation pour améliorer votre expérience.
      </p>

      <h2>2. Cookies que nous utilisons</h2>

      <h3>Cookies strictement nécessaires</h3>
      <p>
        Ces cookies sont indispensables au fonctionnement du site. Ils ne nécessitent pas
        votre consentement.
      </p>
      <table className="legal-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Finalité</th>
            <th>Durée</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>eh_cookie_consent</code></td>
            <td>Mémoriser votre choix de consentement aux cookies</td>
            <td>12 mois</td>
          </tr>
          <tr>
            <td>Cookies de session</td>
            <td>Maintenir votre session de navigation</td>
            <td>Session</td>
          </tr>
        </tbody>
      </table>

      <h3>Cookies analytiques (avec consentement)</h3>
      <p>
        Ces cookies nous aident à comprendre comment les visiteurs utilisent le site,
        afin d&apos;améliorer l&apos;expérience. Les données sont agrégées et anonymisées.
      </p>
      <table className="legal-table">
        <thead>
          <tr>
            <th>Outil</th>
            <th>Finalité</th>
            <th>Durée</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Analyse d&apos;audience (anonymisée)</td>
            <td>Pages visitées, durée de visite, source du trafic</td>
            <td>13 mois</td>
          </tr>
        </tbody>
      </table>

      <h3>Cookies marketing</h3>
      <p>
        Nous <strong>n&apos;utilisons pas de cookies publicitaires ou de ciblage</strong> sur
        ce site. Aucune donnée de navigation n&apos;est transmise à des régies publicitaires.
      </p>

      <h2>3. Gérer vos préférences</h2>
      <p>Vous pouvez modifier vos choix à tout moment via :</p>
      <ul>
        <li>
          <strong>Notre bannière de consentement</strong> : accessible en bas de page.
          Cliquer sur « Gérer » pour ajuster vos préférences.
        </li>
        <li>
          <strong>Les paramètres de votre navigateur</strong> : vous pouvez bloquer ou
          supprimer tous les cookies. Attention, certaines fonctionnalités du site peuvent
          ne plus fonctionner correctement.
        </li>
      </ul>

      <h3>Paramètres navigateur par navigateur</h3>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/fr-fr/windows/supprimer-et-gérer-les-cookies" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>4. Durée de conservation</h2>
      <p>
        Conformément aux recommandations de la CNIL, aucun cookie analytique n&apos;est
        conservé au-delà de <strong>13 mois</strong> sans renouvellement de votre consentement.
      </p>

      <h2>5. Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des
        données collectées via les cookies. Pour toute demande, contactez :{" "}
        <a href="mailto:bonjour@equalhome.app">bonjour@equalhome.app</a>
      </p>
      <p>
        Vous pouvez également déposer une réclamation auprès de la{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a>.
      </p>

      <h2>6. Modifications</h2>
      <p>
        Cette politique peut être mise à jour pour refléter les évolutions réglementaires
        ou les changements de notre utilisation des cookies. La date de mise à jour est
        indiquée en haut de cette page.
      </p>

    </LegalLayout>
  );
}
