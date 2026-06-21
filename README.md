# Alpha Platinum Auto Broker Site

Static MVP for Rowtronic LLC DBA Alpha Platinum Auto Broker.

## Milestone

Alpha Platinum is being shaped as a serious business model: a virtual luxury auto showroom and procurement concierge that can help buyers source vehicles without owning a car lot or carrying inventory.

June 17 update: public site now includes the founder-service background, operations desk, Lance Johnson as Operations Manager, and the Georgia / South Florida sourcing lane concept.

Later June 17 update: the Virtual Showroom now appears before the About/service-background section so buyers see dream-car opportunities first. Header includes an EN/ES toggle scaffold for the upcoming bilingual pass.

June 19 update: EN/ES toggle now switches the main website copy, form labels, placeholders, select prompts, concierge flow, disclosures, footer, and inventory card UI. `app.js` is cache-busted in `index.html` for GitHub Pages updates.

Later June 19 update: added a compact Atlanta desk widget below the region strip with live Atlanta date, time, and current weather. Weather uses Open-Meteo's no-key public forecast endpoint and falls back gracefully if unavailable.

Brand update: added the Alpha Platinum logo stack. `alpha-platinum-mark.png` is used in the header and `alpha-platinum-logo.png` is used in the contact/business registry area.

June 20 update: added a secondary powered-by footer line for Rowtronic LLC web design and AI receptionist services.

Contact fix: corrected bilingual contact rewriting so Lance Johnson and the operations cell appear once in the business registry card.

June 21 update: replaced the native mobile select indicator with a custom light dropdown chevron so form arrows stay visible on dark fields in mobile browsers.

## Operations

- Operations Manager: Lance Johnson
- Cell: 518-698-7516

## Prospective Dealer / Inventory Leads

- Georgia lane: current early sourcing relationship through EJ / Gravity Motor Cars context.
- South Florida lane: Fort Lauderdale Collection, Pompano Beach, FL. Public site presents luxury and exotic inventory categories including Aston Martin, Bentley, Bugatti, Ferrari, Lamborghini, Land Rover, Lexus, Maserati, Mercedes-Benz, Porsche, and Rolls Royce. Treat as a prospective relationship to pursue, not a public partner claim until permission or an agreement exists.

## Run Locally

Open `index.html` directly, or serve the folder:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then visit:

```text
http://127.0.0.1:4173/
```

## GitHub Pages Deployment

Recommended GitHub repo:

```text
alpha-platinum-auto-broker
```

Expected public URL after GitHub Pages is enabled:

```text
https://rasrohan.github.io/alpha-platinum-auto-broker/
```

Upload the contents of this folder to that repo, then enable GitHub Pages from:

```text
Settings -> Pages -> Deploy from a branch -> main -> /root
```

## Update Inventory

Edit the `inventory` array in `app.js`. Each vehicle card is generated from that list.

## Intake Eligibility

The intake form requires the buyer to confirm:

- age 18 or older
- valid bank account or approved payment method
- valid government identification, such as passport or driver's license

Destination-country selection is for intake routing only. Export eligibility still requires compliance review, dealer documentation, and destination-country import checks.

## Vehicle Make, Model, And Fee Logic

The intake form uses a curated U.S.-market make dropdown and a model field with suggestions. Buyers can still type a model if it is not listed.

The intake also includes a preferred exterior color dropdown with a custom write-in option.

The form auto-selects Premium / Export Concierge when it detects:

- premium/luxury make
- premium or specialty model term
- higher budget band
- newer low-mileage target
- international destination

Example: `2024 Infiniti Q45`, `$42,000 - $45,000`, under `25,000 mi`, and an overseas destination is automatically classified as Premium / Export Concierge.

## About Us Notes

Founder story material for the future About page:

- over 25 years of customer service experience
- bus driver experience with Adirondack and New York Transit in Albany, NY
- South Florida move in 2002
- Dish Network installer / lead technician for 9 years
- Atlanta, GA technician / dispatcher for Prime Rangers Inc. for over 16 years
- Alpha Platinum Auto Broker registered in Georgia in 2023 by founder and son Lance
- original international vehicle-sourcing idea traced back to a 2018 ATL Airport Uber conversation
- 2026 spark came from a friend regularly posting high-end vehicles for sale

## Activate Stripe

Create two Stripe Checkout payment links or server-generated Checkout session routes:

- Standard Concierge: `$699`
- Premium / Export Concierge: `$1,400`

Paste the final URLs into `STRIPE_CHECKOUT_URLS` in `app.js`.

```js
const STRIPE_CHECKOUT_URLS = {
  standard: "https://checkout.stripe.com/...",
  premium: "https://checkout.stripe.com/..."
};
```

For production, route form data to a backend or form service before sending the buyer to Stripe.
