# Alpha Platinum Auto Broker — To-Do

## Maria voice API

- [ ] Migrate Maria away from the legacy OpenAI audio models before **January 6, 2027**:
  - `tts-1`
  - `tts-hd`
  - `gpt-4o-mini-tts`
- [ ] Before implementation, confirm the currently recommended replacement voice model in the official OpenAI documentation.
- [ ] Update the current `gpt-4o-mini-tts` references in `assets/audio/maria-voice-manifest.json` and `Maria Voice Lane v1.md`, plus any additional model-name references introduced before launch.
- [ ] Test English and Spanish speech, voice quality, latency, mobile playback, error handling, and fallback behavior.
- [ ] Confirm that no deprecated audio model remains in the production build before launch.

Source: OpenAI deprecation notice shared by RJ on October 2, 2026.

## GoDaddy launch

Target: around **November 10, 2026**. Production domain: **alphaplatinumautobroker.com**.

- [x] Confirm the exact GoDaddy domain.
- [ ] Confirm the GoDaddy hosting product and DNS setup before changing records.
- [ ] Prepare and upload the production website build.
- [ ] Configure the root domain and `www` records, HTTPS certificate, and preferred-domain redirect.
- [ ] Verify intake forms, Standard and Premium Stripe routes, APAB Lead IDs, Maria audio, English/Spanish content, email, Gmail, and WhatsApp handoffs on the production domain.
- [ ] Test the production site on iPhone, Android, and desktop before announcing the move.
- [ ] Keep the GitHub Pages version available until the GoDaddy site passes the launch checks.

## Institution-ready launch gate

- [x] Add production-domain metadata, legal-policy pages, transaction standards, intake privacy consent, accessibility basics, sitemap, robots file, and security contact.
- [ ] Complete every required owner/vendor gate in `INSTITUTION-READY.md` before production acceptance.
- [ ] Have qualified counsel review legal and regulatory language before relying on it in production.
