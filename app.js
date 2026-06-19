const STRIPE_CHECKOUT_URLS = {
  standard: "https://buy.stripe.com/cNifZhbdEeACg6Sczf73G04",
  premium: "https://buy.stripe.com/7sY8wPepQ9gi2g2czf73G05"
};

const destinationCountries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cyprus", "Czech Republic",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Republic of the Congo", "Romania", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Suriname", "Sweden", "Switzerland",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

const vehicleMakes = [
  { make: "Acura", premium: true, models: ["Integra", "MDX", "RDX", "TLX", "ZDX"] },
  { make: "Alfa Romeo", premium: true, models: ["Giulia", "Stelvio", "Tonale"] },
  { make: "Aston Martin", premium: true, models: ["DB12", "DBX", "Vantage"] },
  { make: "Audi", premium: true, models: ["A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7", "Q8", "RS 5", "RS 6", "e-tron"] },
  { make: "Bentley", premium: true, models: ["Bentayga", "Continental GT", "Flying Spur"] },
  { make: "BMW", premium: true, models: ["3 Series", "4 Series", "5 Series", "7 Series", "8 Series", "M3", "M4", "M5", "X3", "X5", "X6", "X7", "XM"] },
  { make: "Buick", premium: false, models: ["Enclave", "Encore GX", "Envision", "Envista"] },
  { make: "Cadillac", premium: true, models: ["CT4", "CT5", "Escalade", "Escalade ESV", "LYRIQ", "XT4", "XT5", "XT6"] },
  { make: "Chevrolet", premium: false, models: ["Blazer", "Camaro", "Colorado", "Corvette", "Equinox", "Malibu", "Silverado", "Suburban", "Tahoe", "Trailblazer", "Traverse"] },
  { make: "Chrysler", premium: false, models: ["300", "Pacifica", "Voyager"] },
  { make: "Dodge", premium: false, models: ["Challenger", "Charger", "Durango", "Hornet"] },
  { make: "Ferrari", premium: true, models: ["296", "812", "F8", "Purosangue", "Roma", "SF90"] },
  { make: "Fiat", premium: false, models: ["500e"] },
  { make: "Ford", premium: false, models: ["Bronco", "Edge", "Escape", "Expedition", "Explorer", "F-150", "F-250", "Mustang", "Ranger"] },
  { make: "Genesis", premium: true, models: ["G70", "G80", "G90", "GV60", "GV70", "GV80"] },
  { make: "GMC", premium: false, models: ["Acadia", "Canyon", "Hummer EV", "Savana", "Sierra", "Terrain", "Yukon"] },
  { make: "Honda", premium: false, models: ["Accord", "Civic", "CR-V", "HR-V", "Odyssey", "Passport", "Pilot", "Ridgeline"] },
  { make: "Hyundai", premium: false, models: ["Elantra", "Ioniq 5", "Ioniq 6", "Kona", "Palisade", "Santa Fe", "Sonata", "Tucson"] },
  { make: "Infiniti", premium: true, models: ["Q45", "Q50", "Q60", "QX50", "QX55", "QX60", "QX80"] },
  { make: "Jaguar", premium: true, models: ["E-PACE", "F-PACE", "F-TYPE", "I-PACE", "XF"] },
  { make: "Jeep", premium: false, models: ["Cherokee", "Compass", "Gladiator", "Grand Cherokee", "Grand Wagoneer", "Wagoneer", "Wrangler"] },
  { make: "Kia", premium: false, models: ["Carnival", "EV6", "EV9", "K5", "Seltos", "Sorento", "Sportage", "Telluride"] },
  { make: "Lamborghini", premium: true, models: ["Aventador", "Huracan", "Revuelto", "Urus"] },
  { make: "Land Rover", premium: true, models: ["Defender", "Discovery", "Discovery Sport", "Range Rover", "Range Rover Sport", "Range Rover Velar"] },
  { make: "Lexus", premium: true, models: ["ES", "GX", "IS", "LC", "LS", "LX", "NX", "RC", "RX", "TX", "UX"] },
  { make: "Lincoln", premium: true, models: ["Aviator", "Corsair", "Nautilus", "Navigator"] },
  { make: "Lucid", premium: true, models: ["Air", "Gravity"] },
  { make: "Maserati", premium: true, models: ["Ghibli", "Grecale", "GranTurismo", "Levante", "MC20", "Quattroporte"] },
  { make: "Mazda", premium: false, models: ["CX-30", "CX-5", "CX-50", "CX-70", "CX-90", "Mazda3", "MX-5 Miata"] },
  { make: "McLaren", premium: true, models: ["570S", "720S", "750S", "Artura", "GT"] },
  { make: "Mercedes-Benz", premium: true, models: ["A-Class", "C-Class", "E-Class", "G 550", "G-Class", "GLA", "GLB", "GLC", "GLE", "GLS", "S-Class", "SL", "AMG GT"] },
  { make: "Mini", premium: false, models: ["Clubman", "Convertible", "Cooper", "Countryman"] },
  { make: "Mitsubishi", premium: false, models: ["Eclipse Cross", "Mirage", "Outlander", "Outlander Sport"] },
  { make: "Nissan", premium: false, models: ["Altima", "Armada", "Frontier", "Kicks", "Maxima", "Murano", "Pathfinder", "Rogue", "Sentra", "Titan", "Z"] },
  { make: "Polestar", premium: true, models: ["Polestar 2", "Polestar 3", "Polestar 4"] },
  { make: "Porsche", premium: true, models: ["718", "911", "Cayenne", "Macan", "Panamera", "Taycan"] },
  { make: "Ram", premium: false, models: ["1500", "2500", "3500", "ProMaster"] },
  { make: "Rivian", premium: true, models: ["R1S", "R1T"] },
  { make: "Rolls-Royce", premium: true, models: ["Cullinan", "Ghost", "Phantom", "Spectre"] },
  { make: "Subaru", premium: false, models: ["Ascent", "BRZ", "Crosstrek", "Forester", "Impreza", "Legacy", "Outback", "WRX"] },
  { make: "Tesla", premium: true, models: ["Cybertruck", "Model 3", "Model S", "Model X", "Model Y"] },
  { make: "Toyota", premium: false, models: ["4Runner", "Camry", "Corolla", "Crown", "Grand Highlander", "Highlander", "Land Cruiser", "Prius", "RAV4", "Sequoia", "Sienna", "Tacoma", "Tundra"] },
  { make: "Volkswagen", premium: false, models: ["Arteon", "Atlas", "Golf GTI", "Golf R", "ID.4", "Jetta", "Taos", "Tiguan"] },
  { make: "Volvo", premium: true, models: ["C40", "EX30", "EX90", "S60", "S90", "V60", "XC40", "XC60", "XC90"] },
  { make: "Other / Not listed", premium: false, models: [] }
];

const premiumModelTerms = [
  "amg", "blackwing", "corvette", "escalade", "g 550", "g-class", "grand wagoneer", "gt-r", "hellcat", "land cruiser",
  "m3", "m4", "m5", "m8", "maybach", "navigator", "platinum", "q45", "qx55", "qx60", "qx80", "range rover", "raptor",
  "rs", "s-class", "shelby", "supra", "trackhawk", "trx", "urus", "wagoneer", "911"
];

const vehicleColors = [
  "Black", "White", "Pearl White", "Silver", "Gray", "Charcoal", "Blue", "Navy Blue", "Red", "Burgundy", "Green", "Brown",
  "Beige", "Gold", "Orange", "Yellow", "Purple", "Matte Black", "Satin Gray", "Two-tone", "Flexible", "Other / write in"
];

const inventory = [
  {
    year: 2023,
    make: "Mercedes-Benz",
    model: "G 550",
    mileage: "8,950 mi",
    price: "Price on request",
    region: "Georgia partner lane",
    port: "Savannah / Brunswick",
    status: "Verify",
    tier: "premium",
    note: "Luxury SUV target for export-minded buyers. Dealer identity released after verified inquiry."
  },
  {
    year: 2022,
    make: "Porsche",
    model: "911 Carrera",
    mileage: "14,200 mi",
    price: "Price on request",
    region: "Georgia partner lane",
    port: "Savannah / Brunswick",
    status: "Verify",
    tier: "premium",
    note: "Sports coupe target spec. Availability and final pricing confirmed through licensed selling dealer."
  },
  {
    year: 2021,
    make: "BMW",
    model: "M5 Competition",
    mileage: "22,100 mi",
    price: "Price on request",
    region: "Georgia partner lane",
    port: "Savannah / Brunswick",
    status: "Verify",
    tier: "premium",
    note: "Performance sedan target for clients seeking clean, high-spec U.S. inventory."
  },
  {
    year: 2024,
    make: "Range Rover",
    model: "Sport",
    mileage: "Under 15,000 mi",
    price: "Sourcing target",
    region: "South Florida lane",
    port: "Miami / Port Everglades",
    status: "Source",
    tier: "premium",
    note: "South Florida target category for clients who want newer luxury SUVs."
  },
  {
    year: 2023,
    make: "Cadillac",
    model: "Escalade",
    mileage: "Under 25,000 mi",
    price: "Sourcing target",
    region: "Georgia + Florida",
    port: "Client destination",
    status: "Source",
    tier: "premium",
    note: "Large SUV target for executive transport, family, and export buyers."
  },
  {
    year: 2022,
    make: "Lexus",
    model: "LX 600",
    mileage: "Under 30,000 mi",
    price: "Sourcing target",
    region: "Georgia + Florida",
    port: "Client destination",
    status: "Source",
    tier: "premium",
    note: "Reliability-focused luxury SUV target with international buyer appeal."
  }
];

const grid = document.querySelector("#inventoryGrid");
const intakeForm = document.querySelector("#intakeForm");
const countrySelect = document.querySelector("#country");
const vehicleYearSelect = document.querySelector("#vehicleYear");
const vehicleMakeSelect = document.querySelector("#vehicleMake");
const vehicleModelInput = document.querySelector("#vehicleModel");
const modelOptions = document.querySelector("#modelOptions");
const budgetSelect = document.querySelector("#budget");
const maxMileageSelect = document.querySelector("#maxMileage");
const vehicleColorSelect = document.querySelector("#vehicleColor");
const customColorWrap = document.querySelector("#customColorWrap");
const customColorInput = document.querySelector("#customColor");
const tierSelect = document.querySelector("#tier");
const feeAmount = document.querySelector("#feeAmount");
const feeLabel = document.querySelector("#feeLabel");
const tierReason = document.querySelector("#tierReason");
const formNote = document.querySelector("#formNote");
const languageToggle = document.querySelector(".language-toggle");

function renderInventory() {
  grid.innerHTML = inventory.map((vehicle, index) => `
    <article class="vehicle-card">
      <div class="vehicle-visual" aria-hidden="true">
        <span>${vehicle.region}</span>
      </div>
      <div class="vehicle-body">
        <div class="vehicle-title">
          <h3>${vehicle.year} ${vehicle.make} ${vehicle.model}</h3>
          <span class="status">${vehicle.status}</span>
        </div>
        <div class="spec-list">
          <div>Mileage<strong>${vehicle.mileage}</strong></div>
          <div>Price<strong>${vehicle.price}</strong></div>
          <div>Nearest port<strong>${vehicle.port}</strong></div>
          <div>Tier<strong>${vehicle.tier === "premium" ? "Premium" : "Standard"}</strong></div>
        </div>
        <p class="vehicle-note">${vehicle.note}</p>
        <div class="card-actions">
          <button class="button secondary" type="button" data-index="${index}">Request This Vehicle</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCountries() {
  const options = destinationCountries
    .map((country) => `<option value="${country}">${country}</option>`)
    .join("");
  countrySelect.insertAdjacentHTML("beforeend", options);
}

function renderMakes() {
  const options = vehicleMakes
    .map((item) => `<option value="${item.make}">${item.make}</option>`)
    .join("");
  vehicleMakeSelect.insertAdjacentHTML("beforeend", options);
}

function renderColors() {
  const options = vehicleColors
    .map((color) => `<option value="${color}">${color}</option>`)
    .join("");
  vehicleColorSelect.insertAdjacentHTML("beforeend", options);
}

function renderModels(make) {
  const selected = vehicleMakes.find((item) => item.make === make);
  modelOptions.innerHTML = selected
    ? selected.models.map((model) => `<option value="${model}"></option>`).join("")
    : "";
}

function getSelectedColor(data) {
  const color = data.get("vehicleColor");
  if (color === "Other / write in") {
    return data.get("customColor") || "Other color not provided";
  }
  return color || "Not selected";
}

function getBudgetMinimum(value) {
  if (!value) return 0;
  if (value.includes("$175,000+")) return 175000;
  const match = value.match(/\$([\d,]+)/);
  return match ? Number(match[1].replace(/,/g, "")) : 0;
}

function evaluateTier() {
  const make = vehicleMakeSelect.value;
  const model = vehicleModelInput.value.trim();
  const year = Number(vehicleYearSelect.value);
  const budgetMinimum = getBudgetMinimum(budgetSelect.value);
  const mileage = maxMileageSelect.value === "any" ? Number.POSITIVE_INFINITY : Number(maxMileageSelect.value || 0);
  const selectedMake = vehicleMakes.find((item) => item.make === make);
  const modelText = model.toLowerCase();
  const reasons = [];

  if (selectedMake?.premium) reasons.push(`${make} is treated as a premium/luxury make`);
  if (premiumModelTerms.some((term) => modelText.includes(term))) reasons.push(`${model} is a premium or specialty model`);
  if (budgetMinimum >= 60000) reasons.push("target budget is above the standard sourcing band");
  if (year >= 2023 && budgetMinimum >= 35000 && mileage <= 25000) reasons.push("newer low-mileage search requires tighter sourcing");
  if (countrySelect.value && countrySelect.value !== "United States") reasons.push("international destination requires export-minded coordination");

  return {
    tier: reasons.length ? "premium" : "standard",
    reason: reasons.length ? reasons.join("; ") : "Standard tier applies until the request requires premium sourcing."
  };
}

function setTier(tier, reason = "") {
  const premium = tier === "premium";
  feeAmount.textContent = premium ? "$1,400" : "$699";
  feeLabel.textContent = premium ? "Premium / Export Concierge" : "Standard Concierge";
  tierSelect.value = tier;
  tierReason.textContent = reason || (premium ? "Premium sourcing criteria detected." : "Standard tier applies until the request requires premium sourcing.");
}

function updateTierFromVehicle() {
  const result = evaluateTier();
  setTier(result.tier, result.reason);
}

function requestVehicle(index) {
  const vehicle = inventory[index];
  vehicleYearSelect.value = String(vehicle.year);
  vehicleMakeSelect.value = vehicle.make;
  renderModels(vehicle.make);
  vehicleModelInput.value = vehicle.model;
  setTier(vehicle.tier, "Showroom vehicle is pre-classified for premium concierge sourcing.");
  document.querySelector("#source").scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildLeadSummary(data) {
  return [
    `Alpha Platinum intake request`,
    `Name: ${data.get("fullName")}`,
    `Email: ${data.get("email")}`,
    `Phone: ${data.get("phone")}`,
    `Country: ${data.get("country")}`,
    `Vehicle: ${data.get("vehicleYear")} ${data.get("vehicleMake")} ${data.get("vehicleModel")}`,
    `Preferred exterior color: ${getSelectedColor(data)}`,
    `Budget: ${data.get("budget")}`,
    `Maximum mileage: ${data.get("maxMileage") === "any" ? "Flexible" : `Under ${Number(data.get("maxMileage")).toLocaleString()} mi`}`,
    `Destination: ${data.get("destination")}`,
    `Timeline: ${data.get("timeline")}`,
    `Tier: ${data.get("tier")}`,
    `Tier reason: ${tierReason.textContent}`,
    `Buyer 18+: ${data.get("ageConfirm") === "on" ? "Yes" : "No"}`,
    `Valid bank/payment method: ${data.get("bankConfirm") === "on" ? "Yes" : "No"}`,
    `Valid government ID: ${data.get("idConfirm") === "on" ? "Yes" : "No"}`,
    `Specs: ${data.get("specs") || "None provided"}`
  ].join("\n");
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-index]");
  if (!button) return;
  requestVehicle(Number(button.dataset.index));
});

vehicleMakeSelect.addEventListener("change", () => {
  renderModels(vehicleMakeSelect.value);
  vehicleModelInput.value = "";
  updateTierFromVehicle();
});

[vehicleYearSelect, vehicleModelInput, budgetSelect, maxMileageSelect, countrySelect].forEach((field) => {
  field.addEventListener("input", updateTierFromVehicle);
  field.addEventListener("change", updateTierFromVehicle);
});

vehicleColorSelect.addEventListener("change", () => {
  const custom = vehicleColorSelect.value === "Other / write in";
  customColorWrap.classList.toggle("hidden-field", !custom);
  customColorInput.required = custom;
  if (!custom) customColorInput.value = "";
});

tierSelect.addEventListener("change", () => {
  setTier(tierSelect.value, "Tier was manually selected for this intake.");
});

languageToggle.addEventListener("click", () => {
  const current = document.documentElement.lang === "es" ? "es" : "en";
  const next = current === "en" ? "es" : "en";
  document.documentElement.lang = next;
  languageToggle.querySelectorAll("span").forEach((item) => {
    item.classList.toggle("active", item.textContent.toLowerCase() === next);
  });
});

intakeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(intakeForm);
  const tier = data.get("tier");
  const checkoutUrl = STRIPE_CHECKOUT_URLS[tier];
  const summary = buildLeadSummary(data);

  console.info(summary);

  if (checkoutUrl) {
    window.location.href = checkoutUrl;
    return;
  }

  formNote.textContent = "Intake captured for demo. Add Stripe Checkout URLs in app.js to activate payment routing.";
});

renderCountries();
renderMakes();
renderColors();
renderInventory();
setTier(tierSelect.value);
