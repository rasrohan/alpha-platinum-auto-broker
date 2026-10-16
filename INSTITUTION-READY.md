# Alpha Platinum Institution-Ready Standard

This is the internal launch gate for `alphaplatinumautobroker.com`. Public website copy should stay customer-friendly; evidence and controls belong in the operating file.

## 1. Legal identity and authority

- [ ] Keep current Georgia entity registration evidence for Rowtronic LLC.
- [ ] Keep DBA/trade-name evidence for Alpha Platinum Auto Broker, if required or filed.
- [ ] Maintain EIN/W-9, business address, authorized signer, and current ownership/contact records.
- [ ] Have qualified counsel review the website Terms, Privacy Notice, service agreement, refund/cancellation language, and Georgia broker/dealer positioning before production acceptance.
- [ ] Do not make dealer-partner, inventory-ownership, financing, export, or licensure claims without documentary support.

## 2. Dealer and provider due diligence

- [ ] Keep a file for each dealer or provider: legal name, license/registration where applicable, contact, agreement or permission, insurance evidence, and review date.
- [ ] Label prospective relationships internally and do not present them publicly as partners until authorized.
- [ ] Document responsibilities for VIN verification, condition reports, title, buyer funds, taxes, shipping, export, customs, and delivery.

## 3. Buyer intake and compliance

- [ ] Use the APAB Lead ID on intake, payment, review, and handoff records.
- [ ] Record buyer consent and the policy/terms version accepted.
- [ ] Establish documented sanctions, destination-country, fraud, and identity-review escalation steps.
- [ ] Never collect card numbers, online-banking credentials, passwords, one-time codes, or government-ID images through Maria, ordinary email, or public website fields.
- [ ] Define a secure channel before requesting sensitive identity or transaction documents.

## 4. Payments and reconciliation

- [ ] Confirm Stripe business verification and statement descriptor.
- [x] Standard Concierge website amount locked at $699.
- [ ] Confirm the Stripe Premium payment link is exactly $1,499 before enabling it.
- [ ] Add a secure server-side payment confirmation or Stripe webhook that matches payment status to the APAB Lead ID.
- [ ] Write refund/cancellation and chargeback-response procedures and align them with checkout copy.
- [ ] Restrict Stripe access with individual accounts, least privilege, and multi-factor authentication.

## 5. Privacy and records

- [x] Publish a plain-language Privacy Notice.
- [x] Add required terms/privacy/contact consent to the main intake.
- [ ] Approve a retention schedule for leads, payment references, dealer packets, and identity/compliance records.
- [ ] Document access roles, deletion handling, incident response, and vendor review.
- [ ] Replace consumer email with an approved domain mailbox when ready and configure SPF, DKIM, and DMARC.

## 6. Website security and availability

- [x] Add canonical production-domain metadata, sitemap, robots file, and security contact.
- [ ] Deploy `alphaplatinumautobroker.com` and `www` with HTTPS and one preferred-domain redirect.
- [ ] Configure hosting security headers after the GoDaddy hosting product is confirmed: HSTS, CSP, `X-Content-Type-Options`, `Referrer-Policy`, and frame protection.
- [ ] Enable GoDaddy account multi-factor authentication, backups, recovery contacts, and change logging.
- [ ] Test forms, Stripe routes, Maria, audio, email, Gmail, WhatsApp, and external links after deployment.

## 7. Accessibility and customer support

- [x] Publish an accessibility statement and an assisted-support route.
- [x] Add skip navigation, keyboard-visible focus, and reduced-motion support.
- [ ] Complete keyboard-only, screen-reader, zoom, contrast, iPhone, Android, and desktop testing.
- [ ] Track accessibility complaints and remediation decisions.

## 8. Production acceptance

Production acceptance requires the owner to sign off on:

- legal review
- Stripe Premium amount and payment reconciliation
- dealer/provider evidence
- privacy and retention controls
- GoDaddy HTTPS/DNS/security configuration
- real-device testing
- backup and rollback plan

Passing the public website checks alone does not complete institution readiness.
