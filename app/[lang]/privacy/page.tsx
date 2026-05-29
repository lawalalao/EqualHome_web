import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import { LegalLayout } from "@/components/landing/LegalLayout";

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Privacy Policy · EqualHome" : "Politique de confidentialité · EqualHome",
    description: isEn
      ? "How EqualHome collects, uses and protects your personal data. GDPR compliant."
      : "Comment EqualHome collecte, utilise et protège vos données personnelles. Conforme au RGPD.",
  };
}

export default async function PrivacyPage({ params }: Params) {
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
      title={isEn ? "Privacy Policy" : "Politique de confidentialité"}
      updated={isEn ? "28 May 2026" : "28 mai 2026"}
    >
      {isEn ? <PrivacyEn /> : <PrivacyFr />}
    </LegalLayout>
  );
}

function PrivacyFr() {
  return (
    <>
      <p>
        EqualHome est édité par <strong>DIGITALL ELEVATE</strong>. La présente politique décrit
        comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous
        utilisez l&apos;application EqualHome ou le site equalhome.app.
      </p>
      <p>
        Contact responsable du traitement :{" "}
        <a href="mailto:lawalalaoad@gmail.com">lawalalaoad@gmail.com</a>
      </p>

      <hr className="legal-divider" />

      <h2>1. Données que nous collectons</h2>

      <h3>Données que vous nous fournissez</h3>
      <ul>
        <li><strong>Données de compte</strong> : adresse e-mail, prénom(s) des partenaires du foyer.</li>
        <li><strong>Données du foyer</strong> : tâches enregistrées, charge mentale associée, catégories, fréquences, balance score.</li>
        <li><strong>Préférences</strong> : langue, couleurs, paramètres de personnalisation.</li>
      </ul>

      <h3>Données collectées automatiquement</h3>
      <ul>
        <li>Identifiant technique de l&apos;appareil (anonymisé).</li>
        <li>Système d&apos;exploitation et version de l&apos;application.</li>
        <li>Journaux d&apos;erreur et de performance (anonymisés, sans lien avec votre identité).</li>
        <li>Données d&apos;utilisation agrégées (écrans consultés, fonctionnalités utilisées).</li>
      </ul>

      <div className="legal-note">
        Nous ne collectons pas le contenu détaillé de vos discussions, ni vos données de
        localisation. Vos données de foyer ne sont jamais utilisées pour de la publicité ciblée.
      </div>

      <h2>2. Pourquoi nous collectons ces données</h2>

      <table className="legal-table">
        <thead>
          <tr>
            <th>Finalité</th>
            <th>Base légale (RGPD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fourniture et personnalisation du service</td>
            <td>Art. 6.1.b — Exécution du contrat</td>
          </tr>
          <tr>
            <td>Amélioration du produit, correction de bugs</td>
            <td>Art. 6.1.f — Intérêt légitime</td>
          </tr>
          <tr>
            <td>Envoi de communications (si accepté)</td>
            <td>Art. 6.1.a — Consentement</td>
          </tr>
          <tr>
            <td>Conformité légale et comptable</td>
            <td>Art. 6.1.c — Obligation légale</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Conservation des données</h2>
      <ul>
        <li><strong>Données de compte et de foyer</strong> : pendant toute la durée d&apos;utilisation, puis supprimées dans les 30 jours suivant la suppression du compte.</li>
        <li><strong>Journaux techniques</strong> : 12 mois glissants.</li>
        <li><strong>Données de facturation</strong> : 10 ans (obligation légale comptable).</li>
      </ul>
      <p>
        Vous pouvez supprimer votre foyer à tout moment depuis{" "}
        <strong>Réglages → Foyer → Supprimer le foyer</strong>.
      </p>

      <h2>4. Partage des données</h2>
      <p>Nous ne vendons jamais vos données. Nous les partageons uniquement avec :</p>
      <ul>
        <li>
          <strong>Prestataires techniques</strong> (hébergement, base de données) : liés par des
          accords de traitement des données conformes au RGPD.
        </li>
        <li>
          <strong>Autorités compétentes</strong> : uniquement si la loi l&apos;exige expressément.
        </li>
      </ul>

      <h2>5. Transferts internationaux</h2>
      <p>
        Si des données sont transférées en dehors de l&apos;Espace économique européen, nous
        appliquons des garanties appropriées conformément au chapitre V du RGPD, notamment les
        clauses contractuelles types de la Commission européenne ou les décisions d&apos;adéquation.
      </p>

      <h2>6. Sécurité</h2>
      <p>
        Toutes les données sont chiffrées en transit (TLS 1.3) et au repos (AES-256).
        L&apos;accès aux données de production est limité aux membres de l&apos;équipe habilités,
        authentifié par double facteur et journalisé.
      </p>

      <h2>7. Vos droits (RGPD)</h2>
      <p>Vous disposez des droits suivants sur vos données personnelles :</p>
      <ul>
        <li><strong>Accès</strong> : obtenir une copie des données que nous détenons.</li>
        <li><strong>Rectification</strong> : corriger des données inexactes ou incomplètes.</li>
        <li><strong>Effacement</strong> : demander la suppression de vos données (« droit à l&apos;oubli »).</li>
        <li><strong>Portabilité</strong> : recevoir vos données dans un format structuré et lisible par machine.</li>
        <li><strong>Limitation</strong> : restreindre le traitement de vos données dans certains cas.</li>
        <li><strong>Opposition</strong> : vous opposer à un traitement fondé sur l&apos;intérêt légitime.</li>
        <li><strong>Retrait du consentement</strong> : sans affecter la licéité des traitements effectués avant le retrait.</li>
      </ul>

      <div className="legal-note">
        Pour exercer vos droits, écrivez à{" "}
        <a href="mailto:lawalalaoad@gmail.com">lawalalaoad@gmail.com</a>. Nous répondons
        dans un délai de <strong>30 jours</strong>. Vous pouvez également introduire une
        réclamation auprès de la{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a>{" "}
        (3, place de Fontenoy — TSA 80715 — 75334 Paris Cedex 07).
      </div>

      <h2>8. Mineurs</h2>
      <p>
        EqualHome n&apos;est pas destiné aux personnes de moins de 16 ans. Nous ne collectons
        pas sciemment de données personnelles concernant des mineurs. Si vous pensez qu&apos;un
        mineur nous a transmis des données, contactez-nous afin que nous les supprimions.
      </p>

      <h2>9. Cookies</h2>
      <p>
        Pour les informations relatives aux cookies déposés sur ce site, consultez notre{" "}
        <a href="/fr/cookies">Politique cookies</a>.
      </p>

      <h2>10. Modifications</h2>
      <p>
        Nous vous notifierons par e-mail ou notification in-app de tout changement substantiel
        à cette politique. La version en vigueur est toujours disponible sur cette page avec
        sa date de mise à jour.
      </p>
    </>
  );
}

function PrivacyEn() {
  return (
    <>
      <p>
        EqualHome is published by <strong>DIGITALL ELEVATE</strong>. This policy describes
        how we collect, use and protect your personal data when you use the EqualHome app
        or the website equalhome.app.
      </p>
      <p>
        Data controller contact:{" "}
        <a href="mailto:lawalalaoad@gmail.com">lawalalaoad@gmail.com</a>
      </p>

      <hr className="legal-divider" />

      <h2>1. Data we collect</h2>

      <h3>Data you provide to us</h3>
      <ul>
        <li><strong>Account data</strong>: email address, first name(s) of household partners.</li>
        <li><strong>Household data</strong>: logged tasks, associated mental load, categories, frequencies, balance score.</li>
        <li><strong>Preferences</strong>: language, colours, personalisation settings.</li>
      </ul>

      <h3>Automatically collected data</h3>
      <ul>
        <li>Technical device identifier (anonymised).</li>
        <li>Operating system and application version.</li>
        <li>Error and performance logs (anonymised, not linked to your identity).</li>
        <li>Aggregated usage data (screens visited, features used).</li>
      </ul>

      <div className="legal-note">
        We do not collect the detailed content of your conversations, nor your location data.
        Your household data is never used for targeted advertising.
      </div>

      <h2>2. Why we collect this data</h2>

      <table className="legal-table">
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Legal basis (GDPR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Service provision and personalisation</td>
            <td>Art. 6.1.b — Contract performance</td>
          </tr>
          <tr>
            <td>Product improvement, bug fixing</td>
            <td>Art. 6.1.f — Legitimate interest</td>
          </tr>
          <tr>
            <td>Sending communications (if accepted)</td>
            <td>Art. 6.1.a — Consent</td>
          </tr>
          <tr>
            <td>Legal and accounting compliance</td>
            <td>Art. 6.1.c — Legal obligation</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Data retention</h2>
      <ul>
        <li><strong>Account and household data</strong>: for the duration of use, then deleted within 30 days of account deletion.</li>
        <li><strong>Technical logs</strong>: rolling 12 months.</li>
        <li><strong>Billing data</strong>: 10 years (statutory accounting obligation).</li>
      </ul>
      <p>
        You can delete your household at any time from{" "}
        <strong>Settings → Household → Delete household</strong>.
      </p>

      <h2>4. Data sharing</h2>
      <p>We never sell your data. We only share it with:</p>
      <ul>
        <li>
          <strong>Technical service providers</strong> (hosting, database): bound by GDPR-compliant data processing agreements.
        </li>
        <li>
          <strong>Competent authorities</strong>: only where explicitly required by law.
        </li>
      </ul>

      <h2>5. International transfers</h2>
      <p>
        If data is transferred outside the European Economic Area, we apply appropriate safeguards
        in accordance with Chapter V of the GDPR, including standard contractual clauses issued by
        the European Commission or adequacy decisions.
      </p>

      <h2>6. Security</h2>
      <p>
        All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Access to production
        data is restricted to authorised team members, authenticated by two-factor authentication
        and logged.
      </p>

      <h2>7. Your rights (GDPR)</h2>
      <p>You have the following rights over your personal data:</p>
      <ul>
        <li><strong>Access</strong>: obtain a copy of the data we hold.</li>
        <li><strong>Rectification</strong>: correct inaccurate or incomplete data.</li>
        <li><strong>Erasure</strong>: request deletion of your data (right to be forgotten).</li>
        <li><strong>Portability</strong>: receive your data in a structured, machine-readable format.</li>
        <li><strong>Restriction</strong>: restrict processing of your data in certain cases.</li>
        <li><strong>Objection</strong>: object to processing based on legitimate interest.</li>
        <li><strong>Withdrawal of consent</strong>: without affecting the lawfulness of processing before withdrawal.</li>
      </ul>

      <div className="legal-note">
        To exercise your rights, write to{" "}
        <a href="mailto:lawalalaoad@gmail.com">lawalalaoad@gmail.com</a>. We respond within{" "}
        <strong>30 days</strong>. You may also lodge a complaint with your local data protection
        authority (e.g. the ICO in the UK, or the CNIL in France).
      </div>

      <h2>8. Minors</h2>
      <p>
        EqualHome is not intended for persons under 16 years of age. We do not knowingly collect
        personal data from minors. If you believe a minor has provided us with data, please
        contact us so we can delete it.
      </p>

      <h2>9. Cookies</h2>
      <p>
        For information about cookies placed on this site, see our{" "}
        <a href="/en/cookies">Cookie Policy</a>.
      </p>

      <h2>10. Changes</h2>
      <p>
        We will notify you by email or in-app notification of any material changes to this policy.
        The current version is always available on this page with its update date.
      </p>
    </>
  );
}
