document.addEventListener('DOMContentLoaded', function () {
  cookieconsent.run({
    notice_banner_type: "simple",
    banner_position: "bottom",
    consent_type: "express",
    palette: "dark",
    language: "es",
    page_load_consent_levels: ["strictly-necessary"],
    notice_banner_reject_button_hide: false,
    preferences_center_close_button_hide: false,
    page_refresh_confirmation_buttons: false,
    website_name: "www.verolima.com",
    website_privacy_policy_url: "https://www.verolima.com/politica_cookies",
    texts: {
      banner: {
        title: "Gestionamos tu privacidad con el mismo cuidado que tu imagen.",
        description: "Utilizamos cookies para mejorar tu experiencia de navegación, ofrecerte contenidos personalizados y analizar el tráfico. Puedes aceptarlas o configurar tus preferencias cuando lo desees.",
        accept_button_text: "Aceptar todas",
        reject_button_text: "Solo esenciales",
        customize_button_text: "Preferencias"
      }
    },
    callbacks: {
      onConsentGiven: function (consent) {
        if (consent.tracking) {
          gtag('consent', 'update', { analytics_storage: 'granted' });
          dataLayer.push({ event: 'consent_accepted_tracking' });
        }
      },
      onConsentRejected: function () {
        gtag('consent', 'update', { analytics_storage: 'denied' });
      }
    }
  });
});
