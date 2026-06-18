=== Formistic — Smart Contact Forms for WordPress Leads ===
Contributors: wordpressistic
Tags: contact form, form builder, wordpress, submissions, inbox, ai, spam protection, webhooks, gdpr
Requires at least: 6.2
Tested up to: 6.9
Requires PHP: 7.4
Stable tag: 1.5.2
License: GPL-2.0+
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Professional submission operations for WordPress leads, with forms, inbox management, replies, analytics, automation, and AI-assisted workflows.

== Description ==

Formistic is a professional submission operations plugin for WordPress. It centralizes form capture, inbox management, replies, analytics, automation, and AI-assisted workflows in one admin experience.

Built and published by Wordpressistic Organization.

Core capabilities:

* Unified submission inbox with search, filters, status flow, detail view, and reply history.
* Capture from shortcode forms and popular form plugin integrations.
* Reply composer with templates, quote-original, CC/BCC, and signature.
* Spam stack: honeypot, rate limiting, reCAPTCHA v3, Turnstile, Akismet, and IP blocklist.
* Attachments with protected storage and authenticated download links.
* Bulk actions and export (CSV/JSON).
* Webhooks with optional HMAC signing and test dispatch.
* GDPR exporter/eraser integration and optional auto-purge retention.
* Analytics dashboard with volume, response KPIs, SLA overdue, and conversion metrics.
* AI and automation studio with trainable context (FAQ/KB/Sheets/text) and smart auto-reply rules.

Included AI features:

* AI smart reply draft generation.
* AI spam score (0-100) and smart tagging.
* Automated reply workflow with simple `keyword => template` rules.
* Free connection modes (no paid lock-in): Local Rules, Ollama, OpenRouter routes, HuggingFace endpoint, Custom endpoint.

== Installation ==

1. Upload the `formistic` folder to `/wp-content/plugins/` or upload the ZIP via **Plugins > Add New > Upload Plugin**.
2. Activate the plugin.
3. Open **Formistic** in wp-admin.
4. Configure Settings tabs:
   * General
   * Captures
   * Spam
   * Auto-Responder
   * Attachments
   * GDPR
   * Webhooks
   * Reply Templates
   * AI & Automation
5. Add forms with shortcode:
   * `[wpistic_contact_form]`
   * `[wpistic_form id="N"]`

== Frequently Asked Questions ==

= Is this plugin WP.org compatible? =
Yes. The plugin follows WordPress coding and packaging expectations, includes uninstall cleanup, sanitization, nonce/capability checks, and external service disclosures.

= Can I use AI without paid APIs? =
Yes. Use `Local Rules` mode (no external API). You can also connect to local Ollama.

= Can I train replies on my own data? =
Yes. Use the AI & Automation settings tab to add FAQ text, knowledge-base text, Google Sheets URLs, and plain text sources.

= Does it support attachments securely? =
Yes. Files are stored in protected directories and served via authenticated admin download endpoints.

= Can I export submissions? =
Yes. CSV and JSON export are available with filtered and bulk scopes.

== External services ==

This plugin can connect to third-party services when enabled by the site administrator.

= Google reCAPTCHA v3 =
* Service: Google reCAPTCHA
* Data sent: Browser/device metadata and challenge token for spam verification.
* Trigger: Form render/submit when enabled.
* Terms: https://policies.google.com/terms
* Privacy: https://policies.google.com/privacy

= Cloudflare Turnstile =
* Service: Cloudflare Turnstile
* Data sent: Browser/device metadata and verification token.
* Trigger: Form render/submit when enabled.
* Terms: https://www.cloudflare.com/website-terms/
* Privacy: https://www.cloudflare.com/privacypolicy/

= Akismet =
* Service: Akismet
* Data sent: Submission body and request metadata for anti-spam checks.
* Trigger: Submission processing when enabled.
* Terms: https://akismet.com/tos/
* Privacy: https://akismet.com/privacy/

= Webhooks (administrator-configured endpoints) =
* Service: Any endpoint URL configured by administrator.
* Data sent: Submission payload (form/sender/content/metadata/attachment count), optional HMAC signature.
* Trigger: After submission capture and replay actions.
* Terms/Privacy: Depends on destination service selected by site owner.

= AI Endpoint Connections (optional) =
* Service: Ollama/OpenRouter/HuggingFace/custom endpoint as configured.
* Data sent: Prompt context containing submission content and optional administrator-provided training text.
* Trigger: AI smart reply/tagging/spam scoring when enabled.
* Terms/Privacy: Depends on selected provider.

== Changelog ==

= 1.5.2 =
* Completed the Formistic product rebrand across plugin metadata, admin screens, documentation, translations, and release packaging.
* Reordered the admin menu so the Formistic dashboard opens on the Inbox, followed by Forms, Newsletter, Threads, Analytics, and Settings.
* Restored the Contact Form 7 capture integration so CF7 submissions are recorded in the inbox.
* Renamed the "Guns 2 Ammo theme" capture toggle to "G2A Theme".
* Preserved all existing shortcodes, stored settings, database tables, hooks, AJAX actions, and integration behavior.

= 1.0.0 =
* Initial WP.org publish build.
* Full `wpistic_cf` code signature integration for plugin internals and new AI modules.
* Unified inbox, reply, templates, forms, spam, attachments, export, GDPR, webhooks, analytics.
* AI & Automation tab with trainable context and easy auto-reply rules.

== Upgrade Notice ==

= 1.5.2 =
Formistic branding release. Existing forms, submissions, settings, and integrations remain compatible.
