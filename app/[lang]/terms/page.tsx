import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import { LegalLayout } from "@/components/landing/LegalLayout";

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Terms of Service · EqualHome" : "Conditions d'utilisation · EqualHome",
    description: isEn
      ? "Terms and conditions for using the EqualHome application."
      : "Conditions générales d'utilisation de l'application EqualHome.",
  };
}

export default async function TermsPage({ params }: Params) {
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
      title={isEn ? "Terms of Service" : "Conditions d'utilisation"}
      updated={isEn ? "28 May 2026" : "28 mai 2026"}
    >
      {isEn ? <TermsEn /> : <TermsFr />}
    </LegalLayout>
  );
}

function TermsFr() {
  return (
    <>
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
          <a href="mailto:lawalalaoad@gmail.com">lawalalaoad@gmail.com</a>.
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
        sauf disposition légale contraire applicable aux consommateurs.
      </p>

      <h2>11. Contact</h2>
      <p>
        DIGITALL ELEVATE — <a href="mailto:lawalalaoad@gmail.com">lawalalaoad@gmail.com</a>
      </p>
      <p>
        Pour toute réclamation ou litige non résolu, vous pouvez recourir gratuitement à un
        médiateur de la consommation conformément aux articles L. 611-1 et suivants du Code
        de la consommation.
      </p>
    </>
  );
}

function TermsEn() {
  return (
    <>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern access to and use of the EqualHome
        application and the website equalhome.app, published by <strong>DIGITALL ELEVATE</strong>{" "}
        (hereinafter &quot;EqualHome&quot;, &quot;we&quot;, &quot;us&quot;).
      </p>
      <p>
        By creating an account or using the application, you fully accept these Terms.
        If you do not accept these terms, you must cease all use.
      </p>

      <hr className="legal-divider" />

      <h2>1. Service description</h2>
      <p>
        EqualHome is a mobile application that allows couples and households to visualise,
        quantify and rebalance mental load and domestic tasks. The application is available on
        iOS and Android. Web browser access may be offered at a later date.
      </p>

      <h2>2. Account creation</h2>
      <ul>
        <li>You must be at least <strong>16 years old</strong> to use EqualHome.</li>
        <li>You agree to provide accurate information and keep it up to date.</li>
        <li>You are responsible for the confidentiality of your login credentials.</li>
        <li>
          Any unauthorised access to your account must be reported immediately to{" "}
          <a href="mailto:lawalalaoad@gmail.com">lawalalaoad@gmail.com</a>.
        </li>
      </ul>

      <h2>3. Plans and pricing</h2>
      <p>EqualHome is available in two plans:</p>

      <table className="legal-table">
        <thead>
          <tr>
            <th>Plan</th>
            <th>Price</th>
            <th>Includes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Free</strong></td>
            <td>€0</td>
            <td>Up to 10 tasks, basic Balance Score, partner invitation</td>
          </tr>
          <tr>
            <td><strong>Premium</strong></td>
            <td>€49.99 / year</td>
            <td>Unlimited tasks, weekly insights, unlimited history, shareable reports</td>
          </tr>
        </tbody>
      </table>

      <p>
        A <strong>free 7-day trial</strong> is available for Premium, with no commitment.
        The subscription renews automatically unless cancelled at least 24 hours before the end
        of the current period, via the App Store (iOS) or Google Play (Android).
      </p>
      <p>
        In accordance with platform rules, refunds for an active subscription are subject to
        Apple&apos;s and Google&apos;s policies.
      </p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the application for any illegal, fraudulent or unlawful purpose.</li>
        <li>Attempt to access other users&apos; accounts, data or infrastructure.</li>
        <li>Reverse-engineer, decompile or disassemble the application.</li>
        <li>Automate access to the service without written permission from EqualHome.</li>
        <li>Post content that is offensive, discriminatory, illegal or infringes third-party rights.</li>
      </ul>

      <h2>5. Intellectual property</h2>
      <p>
        The EqualHome application, its source code, design, visuals, trademarks and all content
        are the exclusive property of DIGITALL ELEVATE and are protected by French and
        international intellectual property law.
      </p>
      <p>
        Any unauthorised reproduction, modification, distribution or exploitation is strictly prohibited.
      </p>

      <h2>6. Service availability</h2>
      <p>
        We strive to ensure maximum availability. Maintenance operations may be performed, with
        notice where possible. We cannot guarantee uninterrupted access and accept no liability
        for interruptions beyond our control.
      </p>

      <h2>7. Limitation of liability</h2>
      <div className="legal-note">
        EqualHome is a visualisation and dialogue tool. It does not constitute a therapeutic,
        medical or legal solution. Decisions made by users based on the application&apos;s data
        are solely their own responsibility.
      </div>
      <p>
        To the extent permitted by applicable law, our total liability to you shall not exceed
        the amount paid for the service during the <strong>last 12 months</strong>.
      </p>

      <h2>8. Termination</h2>
      <p>
        You may delete your account at any time from{" "}
        <strong>Settings → Household → Delete household</strong>. All your data will be deleted
        within 30 days of deletion.
      </p>
      <p>
        EqualHome reserves the right to suspend or delete an account in the event of a breach
        of these Terms, without prejudice to any legal remedy.
      </p>

      <h2>9. Changes to the Terms</h2>
      <p>
        We may update these Terms at any time. You will be notified by email or in-app notification
        of any material changes. Continued use after notification constitutes acceptance of the
        new terms.
      </p>

      <h2>10. Governing law and jurisdiction</h2>
      <p>
        These Terms are governed by <strong>French law</strong>. Any dispute relating to their
        interpretation or performance shall be brought before the competent courts of Paris,
        subject to any mandatory consumer protection provisions applicable in your country of residence.
      </p>

      <h2>11. Contact</h2>
      <p>
        DIGITALL ELEVATE — <a href="mailto:lawalalaoad@gmail.com">lawalalaoad@gmail.com</a>
      </p>
      <p>
        For any unresolved complaint or dispute, you may have free recourse to a consumer
        mediator, in accordance with applicable consumer protection legislation.
      </p>
    </>
  );
}
