import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import { LegalLayout } from "@/components/landing/LegalLayout";

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Cookie Policy · EqualHome" : "Politique cookies · EqualHome",
    description: isEn
      ? "Information about cookies and trackers used on equalhome.app."
      : "Informations sur les cookies et traceurs utilisés sur equalhome.app.",
  };
}

export default async function CookiesPage({ params }: Params) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const isEn = lang === "en";

  return (
    <LegalLayout
      lang={lang}
      navDict={dict.nav}
      footerDict={dict.footer}
      updatedPrefix={dict.legal.updated_prefix}
      title={isEn ? "Cookie Policy" : "Politique cookies"}
      updated={isEn ? "28 May 2026" : "28 mai 2026"}
    >
      {isEn ? <CookiesEn /> : <CookiesFr />}
    </LegalLayout>
  );
}

function CookiesFr() {
  return (
    <>
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
        <a href="mailto:lawalalaoad@gmail.com">lawalalaoad@gmail.com</a>
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
    </>
  );
}

function CookiesEn() {
  return (
    <>
      <p>
        This page explains how equalhome.app uses cookies and other trackers, in accordance
        with applicable regulations (GDPR, ICO guidelines).
      </p>

      <hr className="legal-divider" />

      <h2>1. What is a cookie?</h2>
      <p>
        A cookie is a small text file placed on your device (computer, phone, tablet) when
        you visit a website. It allows the site to remember information about your browsing
        to improve your experience.
      </p>

      <h2>2. Cookies we use</h2>

      <h3>Strictly necessary cookies</h3>
      <p>
        These cookies are essential for the site to function. They do not require your consent.
      </p>
      <table className="legal-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>eh_cookie_consent</code></td>
            <td>Remember your cookie consent choice</td>
            <td>12 months</td>
          </tr>
          <tr>
            <td>Session cookies</td>
            <td>Maintain your browsing session</td>
            <td>Session</td>
          </tr>
        </tbody>
      </table>

      <h3>Analytics cookies (with consent)</h3>
      <p>
        These cookies help us understand how visitors use the site, so we can improve the
        experience. Data is aggregated and anonymised.
      </p>
      <table className="legal-table">
        <thead>
          <tr>
            <th>Tool</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Audience analytics (anonymised)</td>
            <td>Pages visited, visit duration, traffic source</td>
            <td>13 months</td>
          </tr>
        </tbody>
      </table>

      <h3>Marketing cookies</h3>
      <p>
        We <strong>do not use advertising or targeting cookies</strong> on this site.
        No browsing data is shared with advertising networks.
      </p>

      <h2>3. Managing your preferences</h2>
      <p>You can change your choices at any time via:</p>
      <ul>
        <li>
          <strong>Our consent banner</strong>: accessible at the bottom of the page.
          Click &quot;Manage&quot; to adjust your preferences.
        </li>
        <li>
          <strong>Your browser settings</strong>: you can block or delete all cookies.
          Note that some site features may no longer work correctly.
        </li>
      </ul>

      <h3>Browser-by-browser settings</h3>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/en-gb/windows/delete-and-manage-cookies" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>4. Retention period</h2>
      <p>
        No analytics cookie is retained for more than <strong>13 months</strong> without
        renewal of your consent.
      </p>

      <h2>5. Your rights</h2>
      <p>
        You have the right to access, rectify and delete data collected via cookies.
        For any request, contact:{" "}
        <a href="mailto:lawalalaoad@gmail.com">lawalalaoad@gmail.com</a>
      </p>
      <p>
        You may also lodge a complaint with your local data protection authority
        (e.g. the ICO in the UK, or the CNIL in France).
      </p>

      <h2>6. Changes</h2>
      <p>
        This policy may be updated to reflect regulatory changes or changes to our use of
        cookies. The update date is shown at the top of this page.
      </p>
    </>
  );
}
