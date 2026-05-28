import type { Metadata } from "next";
import { LegalLayout } from "@/components/landing/LegalLayout";

export const metadata: Metadata = {
  title: "Support · EqualHome",
  description: "Besoin d'aide ? Contactez l'équipe EqualHome ou consultez nos ressources.",
};

function SupportCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      padding: "24px 28px",
      borderRadius: 16,
      border: "1px solid var(--eh-line)",
      background: "var(--eh-surface)",
      marginBottom: 16,
    }}>
      <h3 style={{
        fontFamily: "var(--font-fraunces), Georgia, serif",
        fontWeight: 400,
        fontSize: 20,
        letterSpacing: "-0.015em",
        margin: "0 0 12px",
        color: "var(--eh-ink)",
      }}>
        {title}
      </h3>
      <div style={{ fontSize: 15, lineHeight: 1.65, color: "var(--eh-ink-2)" }}>
        {children}
      </div>
    </div>
  );
}

export default function SupportPage() {
  return (
    <LegalLayout title="Support" updated="28 mai 2026">

      <p>
        L&apos;équipe EqualHome est là pour vous aider. Trouvez ci-dessous les réponses
        aux questions fréquentes ou contactez-nous directement.
      </p>

      <hr className="legal-divider" />

      <h2>Nous contacter</h2>

      <SupportCard title="✉ E-mail">
        <p style={{ margin: "0 0 8px" }}>
          <a href="mailto:bonjour@equalhome.app" style={{ color: "var(--eh-primary)", fontWeight: 600, textDecoration: "none" }}>
            bonjour@equalhome.app
          </a>
        </p>
        <p style={{ margin: 0, fontSize: 14 }}>
          Délai de réponse : <strong>48 h ouvrées</strong> (lun.–ven., hors jours fériés).
        </p>
      </SupportCard>

      <SupportCard title="🐛 Signaler un bug">
        <p style={{ margin: 0 }}>
          Décrivez le problème rencontré en précisant votre appareil (modèle, OS, version
          de l&apos;app) et les étapes pour le reproduire. Envoyez le tout à{" "}
          <a href="mailto:bugs@equalhome.app">bugs@equalhome.app</a>.
        </p>
      </SupportCard>

      <SupportCard title="📰 Presse &amp; partenariats">
        <p style={{ margin: 0 }}>
          Pour toute demande presse ou commerciale :{" "}
          <a href="mailto:presse@equalhome.app">presse@equalhome.app</a>
        </p>
      </SupportCard>

      <hr className="legal-divider" />

      <h2>Questions fréquentes</h2>

      <h3>Supprimer mon compte</h3>
      <p>
        Depuis l&apos;application : <strong>Réglages → Foyer → Supprimer le foyer</strong>.
        Toutes vos données seront effacées dans les 30 jours. Cette action est irréversible.
      </p>

      <h3>Gérer mon abonnement Premium</h3>
      <ul>
        <li>
          <strong>iOS</strong> : Réglages iPhone → [votre nom] → Abonnements → EqualHome.
        </li>
        <li>
          <strong>Android</strong> : Google Play → photo de profil → Abonnements → EqualHome.
        </li>
      </ul>
      <p>
        L&apos;abonnement se renouvelle automatiquement. Pour l&apos;annuler, faites-le au
        moins <strong>24 h avant</strong> la date de renouvellement.
      </p>

      <h3>Mon partenaire n&apos;a pas reçu l&apos;invitation</h3>
      <p>
        Vérifiez que l&apos;adresse e-mail saisie est correcte. Si le message n&apos;apparaît
        pas dans la boîte de réception, invitez votre partenaire à consulter ses spams.
        Vous pouvez renvoyer une invitation depuis <strong>Réglages → Foyer → Inviter</strong>.
      </p>

      <h3>Exporter mes données</h3>
      <p>
        Vous pouvez demander une exportation de vos données en écrivant à{" "}
        <a href="mailto:bonjour@equalhome.app">bonjour@equalhome.app</a>.
        Nous vous répondrons dans un délai de 30 jours (droit RGPD).
      </p>

      <h3>L&apos;application ne se charge pas</h3>
      <ul>
        <li>Vérifiez votre connexion internet.</li>
        <li>Fermez et relancez l&apos;application.</li>
        <li>Vérifiez qu&apos;une mise à jour est disponible sur l&apos;App Store ou Google Play.</li>
        <li>Si le problème persiste, contactez-nous avec votre appareil et version d&apos;OS.</li>
      </ul>

      <hr className="legal-divider" />

      <h2>Ressources</h2>
      <ul>
        <li><a href="/#faq">FAQ complète</a></li>
        <li><a href="/privacy">Politique de confidentialité</a></li>
        <li><a href="/terms">Conditions d&apos;utilisation</a></li>
        <li><a href="/cookies">Politique cookies</a></li>
      </ul>

    </LegalLayout>
  );
}
