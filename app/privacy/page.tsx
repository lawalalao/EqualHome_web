import type { Metadata } from "next";
import { LegalLayout } from "@/components/landing/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité · EqualHome",
  description: "Comment EqualHome collecte, utilise et protège vos données personnelles. Conforme au RGPD.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Politique de confidentialité" updated="28 mai 2026">

      <p>
        EqualHome est édité par <strong>DIGITALL ELEVATE</strong>. La présente politique décrit
        comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous
        utilisez l&apos;application EqualHome ou le site equalhome.app.
      </p>
      <p>
        Contact responsable du traitement :{" "}
        <a href="mailto:bonjour@equalhome.app">bonjour@equalhome.app</a>
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
        <a href="mailto:bonjour@equalhome.app">bonjour@equalhome.app</a>. Nous répondons
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
        <a href="/cookies">Politique cookies</a>.
      </p>

      <h2>10. Modifications</h2>
      <p>
        Nous vous notifierons par e-mail ou notification in-app de tout changement substantiel
        à cette politique. La version en vigueur est toujours disponible sur cette page avec
        sa date de mise à jour.
      </p>

    </LegalLayout>
  );
}
