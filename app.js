const STRIPE_CHECKOUT_URLS = {
  standard: "https://buy.stripe.com/cNifZhbdEeACg6Sczf73G04",
  premium: "https://buy.stripe.com/7sY8wPepQ9gi2g2czf73G05"
};

const translations = {
  en: {
    pageTitle: "Alpha Platinum Auto Broker | Premium Vehicle Procurement Concierge",
    metaDescription: "Alpha Platinum Auto Broker helps qualified buyers source premium U.S. vehicles through licensed dealer relationships in Georgia and South Florida.",
    brandSmall: "Auto Broker",
    nav: ["Showroom", "Custom Sourcing", "Process", "About", "Contact"],
    heroEyebrow: "Rowtronic LLC DBA",
    heroCopy: "A virtual luxury auto showroom and procurement concierge for qualified buyers seeking premium U.S. vehicles through trusted licensed dealer relationships in Georgia and South Florida.",
    browseShowroom: "Browse Showroom",
    tellUs: "Tell Us What You Want",
    regionLabels: ["Primary sourcing lanes", "Expansion lane", "Buyer support"],
    regionTitles: ["Georgia Partner Inventory", "South Florida Dealer Network", "International Intake + Export Coordination"],
    atlWidget: {
      label: "Atlanta desk",
      time: "Local time",
      weather: "ATL weather",
      loadingDate: "Loading date...",
      loadingWeather: "Checking...",
      unavailable: "Weather unavailable"
    },
    showroomEyebrow: "Virtual Showroom",
    showroomTitle: "Featured sourcing opportunities",
    aboutEyebrow: "Built From Real Service Experience",
    aboutTitle: "A concierge desk for serious vehicle buyers",
    aboutCopy: "Alpha Platinum Auto Broker was registered in Georgia in 2023 after years of seeing the same opportunity: overseas buyers want access to premium U.S. vehicles, but they need a trustworthy local process to help find, verify, and coordinate the right deal.",
    founderSummary: "Founder Background",
    founderCopy1: "The foundation is more than 25 years of customer service, logistics, field support, and dispatch experience across New York, South Florida, and Atlanta. That includes bus operations with Adirondack and New York Transit in Albany, nine years as a Dish Network installer and lead technician in South Florida, and more than 16 years as a technician and dispatcher with Prime Rangers Inc. in Atlanta.",
    founderCopy2: "The original spark came from a 2018 ATL Airport ride conversation about international demand for American vehicles. The business sat quiet after registration, then came back to life in 2026 as high-end dealer inventory started appearing through trusted local relationships.",
    lanesTitle: "Sourcing Lanes",
    lanesCopy1: "Current development focuses on Georgia partner inventory and a South Florida exotic-vehicle lane. Fort Lauderdale Collection is logged internally as a prospective South Florida lead because its public inventory categories include luxury and exotic brands such as Ferrari, Lamborghini, Bentley, Rolls-Royce, Porsche, Mercedes-Benz, Lexus, Land Rover, and more.",
    lanesCopy2: "Dealer names are treated as prospective or verified sourcing relationships only. Public partner claims should wait until permission or a formal agreement exists.",
    sourceEyebrow: "Custom Procurement Intake",
    sourceTitle: "Tell us what you want. We will find it.",
    sourceCopy: "Submit the desired make, model, budget, destination, and timing. Alpha Platinum reviews export eligibility, confirms the right procurement tier, then begins active sourcing after the concierge fee is paid through Stripe.",
    currentTier: "Current procurement tier",
    standardConcierge: "Standard Concierge",
    premiumConcierge: "Premium / Export Concierge",
    labels: {
      fullName: "Full name",
      email: "Email",
      phone: "WhatsApp / phone",
      country: "Destination country",
      year: "Vehicle year",
      make: "Vehicle make",
      model: "Vehicle model",
      budget: "Budget in USD",
      mileage: "Maximum mileage",
      color: "Preferred exterior color",
      customColor: "Custom color",
      destination: "Destination port / city",
      timeline: "Purchase timeline",
      tier: "Procurement tier",
      specs: "Must-have specs"
    },
    placeholders: {
      fullName: "Client name",
      email: "name@example.com",
      phone: "+1 678 387 0355",
      model: "Select or type model",
      customColor: "Type preferred color",
      destination: "Lagos, Dubai, Accra, Kingston",
      specs: "Trim, engine, interior color, title preference, shipping needs..."
    },
    selects: {
      country: "Select destination country",
      year: "Select year",
      make: "Select make",
      budget: "Select range",
      mileage: "Select mileage",
      color: "Select color",
      timeline: "Select timing",
      mileageOptions: ["Under 15,000 mi", "Under 25,000 mi", "Under 40,000 mi", "Under 60,000 mi", "Flexible"],
      timelineOptions: ["Ready now", "Within 14 days", "Within 30 days", "Researching options"],
      tierOptions: ["Standard Concierge - $699", "Premium / Export Concierge - $1,400"]
    },
    tierDefault: "Standard tier applies until the request requires premium sourcing.",
    tierPremiumDetected: "Premium sourcing criteria detected.",
    tierManual: "Tier was manually selected for this intake.",
    tierShowroom: "Showroom vehicle is pre-classified for premium concierge sourcing.",
    tierReasons: {
      premiumMake: (make) => `${make} is treated as a premium/luxury make`,
      premiumModel: (model) => `${model} is a premium or specialty model`,
      budget: "target budget is above the standard sourcing band",
      lowMileage: "newer low-mileage search requires tighter sourcing",
      export: "international destination requires export-minded coordination"
    },
    eligibilityLegend: "Buyer eligibility confirmations",
    eligibilityAge: "I confirm the buyer is 18 years of age or older.",
    eligibilityBank: "I confirm the buyer has a valid bank account or approved payment method for vehicle purchase funds.",
    eligibilityId: "I confirm the buyer has valid government identification, such as a passport or valid driver's license.",
    eligibilityNote: "Destination selection does not guarantee export approval. Final eligibility depends on U.S. export requirements, sanctions screening, destination-country import rules, and licensed dealer documentation.",
    startIntake: "Start Intake",
    processEyebrow: "Concierge Flow",
    processTitle: "Designed to help buyers procure their dream car",
    steps: [
      ["Tell us the target", "Select a showroom vehicle or submit the exact year, make, model, budget, mileage, color, destination, and timing."],
      ["Confirm the sourcing tier", "Alpha Platinum reviews the request, confirms the concierge tier, and starts the procurement path after Stripe checkout."],
      ["Verify real options", "Available vehicles are checked through licensed dealer relationships before pricing, availability, and next steps are presented."],
      ["Coordinate the handoff", "The licensed selling dealer handles the final sale documents while Alpha Platinum supports communication, inspection, and shipping coordination."]
    ],
    businessEyebrow: "Business Registry",
    dba: "DBA:",
    email: "Email:",
    phone: "Phone:",
    address: "Address:",
    operationsManager: "Operations Manager:",
    operationsCell: "Operations Cell:",
    disclosureTitle: "Corporate & logistics disclosures",
    disclosureCopy: [
      "Alpha Platinum Auto Broker operates as a DBA of Rowtronic LLC. Our service focuses on buyer intake, vehicle sourcing support, procurement coordination, dealer communication, and logistics guidance.",
      "Alpha Platinum Auto Broker is not an exclusive agent, franchise, or representative of any single dealership. We source through trusted licensed dealer relationships in Georgia and South Florida to help clients identify available premium vehicles.",
      "Alpha Platinum Auto Broker does not directly sell, finance, title, or export vehicles. Final vehicle sale terms, title documentation, taxes, fees, dealer paperwork, export documentation, sanctions screening, destination import eligibility, and customs requirements are handled by the licensed selling dealer and applicable third-party providers."
    ],
    footer: "© 2026 Rowtronic LLC. Alpha Platinum Auto Broker DBA. Independent vehicle procurement concierge.",
    poweredBy: "Powered by Rowtronic LLC | Custom Web Design & AI Receptionist Agents | +1 (404) 664-1309",
    inventoryLabels: {
      mileage: "Mileage",
      price: "Price",
      port: "Nearest port",
      tier: "Tier",
      premium: "Premium",
      standard: "Standard",
      request: "Request This Vehicle",
      verify: "Verify",
      source: "Source"
    },
    formDemo: "Intake captured for demo. Add Stripe Checkout URLs in app.js to activate payment routing."
  },
  es: {
    pageTitle: "Alpha Platinum Auto Broker | Conserje de Procuración de Vehículos Premium",
    metaDescription: "Alpha Platinum Auto Broker ayuda a compradores calificados a localizar vehículos premium en EE. UU. mediante relaciones con concesionarios autorizados en Georgia y el sur de Florida.",
    brandSmall: "Auto Broker",
    nav: ["Showroom", "Búsqueda Personalizada", "Proceso", "Acerca", "Contacto"],
    heroEyebrow: "Rowtronic LLC DBA",
    heroCopy: "Un showroom virtual de autos de lujo y conserje de procuración para compradores calificados que buscan vehículos premium de EE. UU. mediante relaciones con concesionarios autorizados en Georgia y el sur de Florida.",
    browseShowroom: "Ver Showroom",
    tellUs: "Dinos Qué Buscas",
    regionLabels: ["Rutas principales", "Ruta de expansión", "Soporte al comprador"],
    regionTitles: ["Inventario Asociado en Georgia", "Red de Concesionarios del Sur de Florida", "Intake Internacional + Coordinación de Exportación"],
    atlWidget: {
      label: "Mesa de Atlanta",
      time: "Hora local",
      weather: "Clima ATL",
      loadingDate: "Cargando fecha...",
      loadingWeather: "Consultando...",
      unavailable: "Clima no disponible"
    },
    showroomEyebrow: "Showroom Virtual",
    showroomTitle: "Oportunidades destacadas de búsqueda",
    aboutEyebrow: "Construido Desde Experiencia Real de Servicio",
    aboutTitle: "Un escritorio conserje para compradores serios",
    aboutCopy: "Alpha Platinum Auto Broker fue registrado en Georgia en 2023 después de años viendo la misma oportunidad: compradores internacionales quieren acceso a vehículos premium de EE. UU., pero necesitan un proceso local confiable para ayudar a encontrar, verificar y coordinar la compra correcta.",
    founderSummary: "Historia del Fundador",
    founderCopy1: "La base es más de 25 años de experiencia en servicio al cliente, logística, soporte de campo y despacho en Nueva York, el sur de Florida y Atlanta. Incluye operaciones de autobús con Adirondack y New York Transit en Albany, nueve años como instalador y técnico líder de Dish Network en el sur de Florida, y más de 16 años como técnico y despachador con Prime Rangers Inc. en Atlanta.",
    founderCopy2: "La chispa original vino de una conversación durante un viaje desde el aeropuerto ATL en 2018 sobre la demanda internacional de vehículos americanos. El negocio quedó quieto después del registro, y volvió a tomar vida en 2026 cuando inventario de alta gama empezó a aparecer por relaciones locales de confianza.",
    lanesTitle: "Rutas de Búsqueda",
    lanesCopy1: "El desarrollo actual se enfoca en inventario asociado de Georgia y una ruta de vehículos exóticos en el sur de Florida. Fort Lauderdale Collection está registrado internamente como un prospecto del sur de Florida porque sus categorías públicas de inventario incluyen marcas de lujo y exóticas como Ferrari, Lamborghini, Bentley, Rolls-Royce, Porsche, Mercedes-Benz, Lexus, Land Rover y más.",
    lanesCopy2: "Los nombres de concesionarios se tratan solamente como relaciones prospectivas o verificadas de búsqueda. Cualquier declaración pública de alianza debe esperar permiso o un acuerdo formal.",
    sourceEyebrow: "Intake de Procuración Personalizada",
    sourceTitle: "Dinos qué quieres. Nosotros lo buscamos.",
    sourceCopy: "Envía la marca, modelo, presupuesto, destino y tiempo deseado. Alpha Platinum revisa la elegibilidad de exportación, confirma el nivel correcto de procuración y comienza la búsqueda activa después de pagar la tarifa de conserje por Stripe.",
    currentTier: "Nivel actual de procuración",
    standardConcierge: "Conserje Estándar",
    premiumConcierge: "Conserje Premium / Exportación",
    labels: {
      fullName: "Nombre completo",
      email: "Correo electrónico",
      phone: "WhatsApp / teléfono",
      country: "País de destino",
      year: "Año del vehículo",
      make: "Marca del vehículo",
      model: "Modelo del vehículo",
      budget: "Presupuesto en USD",
      mileage: "Millaje máximo",
      color: "Color exterior preferido",
      customColor: "Color personalizado",
      destination: "Puerto / ciudad de destino",
      timeline: "Tiempo de compra",
      tier: "Nivel de procuración",
      specs: "Especificaciones importantes"
    },
    placeholders: {
      fullName: "Nombre del cliente",
      email: "nombre@ejemplo.com",
      phone: "+1 678 387 0355",
      model: "Selecciona o escribe el modelo",
      customColor: "Escribe el color preferido",
      destination: "Lagos, Dubái, Acra, Kingston",
      specs: "Versión, motor, color interior, preferencia de título, necesidades de envío..."
    },
    selects: {
      country: "Selecciona país de destino",
      year: "Selecciona año",
      make: "Selecciona marca",
      budget: "Selecciona rango",
      mileage: "Selecciona millaje",
      color: "Selecciona color",
      timeline: "Selecciona tiempo",
      mileageOptions: ["Menos de 15,000 mi", "Menos de 25,000 mi", "Menos de 40,000 mi", "Menos de 60,000 mi", "Flexible"],
      timelineOptions: ["Listo ahora", "Dentro de 14 días", "Dentro de 30 días", "Investigando opciones"],
      tierOptions: ["Conserje Estándar - $699", "Conserje Premium / Exportación - $1,400"]
    },
    tierDefault: "El nivel estándar aplica hasta que la solicitud requiera búsqueda premium.",
    tierPremiumDetected: "Se detectaron criterios de búsqueda premium.",
    tierManual: "El nivel fue seleccionado manualmente para este intake.",
    tierShowroom: "Este vehículo del showroom está preclasificado para conserje premium.",
    tierReasons: {
      premiumMake: (make) => `${make} se trata como una marca premium/de lujo`,
      premiumModel: (model) => `${model} es un modelo premium o especializado`,
      budget: "el presupuesto objetivo está por encima del rango estándar",
      lowMileage: "una búsqueda reciente con bajo millaje requiere búsqueda más precisa",
      export: "el destino internacional requiere coordinación enfocada en exportación"
    },
    eligibilityLegend: "Confirmaciones de elegibilidad del comprador",
    eligibilityAge: "Confirmo que el comprador tiene 18 años de edad o más.",
    eligibilityBank: "Confirmo que el comprador tiene una cuenta bancaria válida o método de pago aprobado para los fondos de compra del vehículo.",
    eligibilityId: "Confirmo que el comprador tiene identificación gubernamental válida, como pasaporte o licencia de conducir válida.",
    eligibilityNote: "Seleccionar un destino no garantiza aprobación de exportación. La elegibilidad final depende de requisitos de exportación de EE. UU., revisión de sanciones, reglas de importación del país destino y documentación del concesionario autorizado.",
    startIntake: "Iniciar Intake",
    processEyebrow: "Flujo Conserje",
    processTitle: "Diseñado para ayudar a compradores a conseguir el auto de sus sueños",
    steps: [
      ["Dinos el objetivo", "Selecciona un vehículo del showroom o envía el año, marca, modelo, presupuesto, millaje, color, destino y tiempo exacto."],
      ["Confirma el nivel de búsqueda", "Alpha Platinum revisa la solicitud, confirma el nivel de conserje y comienza el camino de procuración después del checkout de Stripe."],
      ["Verificamos opciones reales", "Los vehículos disponibles se revisan mediante relaciones con concesionarios autorizados antes de presentar precio, disponibilidad y próximos pasos."],
      ["Coordinamos la entrega", "El concesionario autorizado maneja los documentos finales de venta mientras Alpha Platinum apoya comunicación, inspección y coordinación de envío."]
    ],
    businessEyebrow: "Registro Comercial",
    dba: "DBA:",
    email: "Correo:",
    phone: "Teléfono:",
    address: "Dirección:",
    operationsManager: "Gerente de Operaciones:",
    operationsCell: "Celular de Operaciones:",
    disclosureTitle: "Divulgaciones corporativas y logísticas",
    disclosureCopy: [
      "Alpha Platinum Auto Broker opera como DBA de Rowtronic LLC. Nuestro servicio se enfoca en intake de compradores, soporte de búsqueda de vehículos, coordinación de procuración, comunicación con concesionarios y orientación logística.",
      "Alpha Platinum Auto Broker no es agente exclusivo, franquicia ni representante de ningún concesionario individual. Buscamos mediante relaciones con concesionarios autorizados en Georgia y el sur de Florida para ayudar a clientes a identificar vehículos premium disponibles.",
      "Alpha Platinum Auto Broker no vende, financia, titula ni exporta vehículos directamente. Los términos finales de venta, documentación de título, impuestos, cargos, documentos del concesionario, documentación de exportación, revisión de sanciones, elegibilidad de importación del destino y requisitos de aduana son manejados por el concesionario autorizado y proveedores terceros aplicables."
    ],
    footer: "© 2026 Rowtronic LLC. Alpha Platinum Auto Broker DBA. Conserje independiente de procuración vehicular.",
    poweredBy: "Desarrollado por Rowtronic LLC | Diseño Web Personalizado y Agentes Recepcionistas con IA | +1 (404) 664-1309",
    inventoryLabels: {
      mileage: "Millaje",
      price: "Precio",
      port: "Puerto cercano",
      tier: "Nivel",
      premium: "Premium",
      standard: "Estándar",
      request: "Solicitar Este Vehículo",
      verify: "Verificar",
      source: "Buscar"
    },
    formDemo: "Intake capturado para demo. Agrega URLs de Stripe Checkout en app.js para activar el pago."
  }
};

let currentLanguage = "en";

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
const timelineSelect = document.querySelector("#timeline");
const tierSelect = document.querySelector("#tier");
const feeAmount = document.querySelector("#feeAmount");
const feeLabel = document.querySelector("#feeLabel");
const tierReason = document.querySelector("#tierReason");
const formNote = document.querySelector("#formNote");
const languageToggle = document.querySelector(".language-toggle");
const atlWidgetLabel = document.querySelector("#atlWidgetLabel");
const atlTimeLabel = document.querySelector("#atlTimeLabel");
const atlWeatherLabel = document.querySelector("#atlWeatherLabel");
const atlDate = document.querySelector("#atlDate");
const atlTime = document.querySelector("#atlTime");
const atlWeather = document.querySelector("#atlWeather");

let atlWeatherData = null;

function t() {
  return translations[currentLanguage];
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function setAllText(selector, values) {
  document.querySelectorAll(selector).forEach((node, index) => {
    if (values[index]) node.textContent = values[index];
  });
}

function setPlaceholder(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.placeholder = value;
}

function setOptionText(select, index, value) {
  if (select?.options[index]) select.options[index].textContent = value;
}

function getWeatherSummary(code) {
  const summaries = {
    en: {
      0: "Clear",
      1: "Mostly clear",
      2: "Partly cloudy",
      3: "Cloudy",
      45: "Fog",
      48: "Fog",
      51: "Light drizzle",
      53: "Drizzle",
      55: "Heavy drizzle",
      61: "Light rain",
      63: "Rain",
      65: "Heavy rain",
      71: "Light snow",
      73: "Snow",
      75: "Heavy snow",
      80: "Light showers",
      81: "Showers",
      82: "Heavy showers",
      95: "Thunderstorms"
    },
    es: {
      0: "Despejado",
      1: "Mayormente despejado",
      2: "Parcialmente nublado",
      3: "Nublado",
      45: "Niebla",
      48: "Niebla",
      51: "Llovizna leve",
      53: "Llovizna",
      55: "Llovizna fuerte",
      61: "Lluvia leve",
      63: "Lluvia",
      65: "Lluvia fuerte",
      71: "Nieve leve",
      73: "Nieve",
      75: "Nieve fuerte",
      80: "Chubascos leves",
      81: "Chubascos",
      82: "Chubascos fuertes",
      95: "Tormentas"
    }
  };

  return summaries[currentLanguage][code] || (currentLanguage === "es" ? "Clima variable" : "Variable weather");
}

function updateAtlantaClock() {
  const now = new Date();
  const locale = currentLanguage === "es" ? "es-US" : "en-US";
  atlDate.textContent = new Intl.DateTimeFormat(locale, {
    timeZone: "America/New_York",
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(now);
  atlTime.textContent = new Intl.DateTimeFormat(locale, {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: currentLanguage === "en"
  }).format(now);
}

function updateAtlantaWeatherText() {
  if (!atlWeatherData) {
    atlWeather.textContent = t().atlWidget.loadingWeather;
    return;
  }

  const temp = Math.round(atlWeatherData.temperature);
  atlWeather.textContent = `${temp}°F · ${getWeatherSummary(atlWeatherData.code)}`;
}

async function fetchAtlantaWeather() {
  try {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=33.749&longitude=-84.388&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=America%2FNew_York");
    if (!response.ok) throw new Error("Weather request failed");
    const data = await response.json();
    atlWeatherData = {
      temperature: data.current.temperature_2m,
      code: data.current.weather_code
    };
    updateAtlantaWeatherText();
  } catch (error) {
    atlWeather.textContent = t().atlWidget.unavailable;
  }
}

function renderInventory() {
  const copy = t().inventoryLabels;
  grid.innerHTML = inventory.map((vehicle, index) => `
    <article class="vehicle-card">
      <div class="vehicle-visual" aria-hidden="true">
        <span>${vehicle.region}</span>
      </div>
      <div class="vehicle-body">
        <div class="vehicle-title">
          <h3>${vehicle.year} ${vehicle.make} ${vehicle.model}</h3>
          <span class="status">${vehicle.status === "Verify" ? copy.verify : copy.source}</span>
        </div>
        <div class="spec-list">
          <div>${copy.mileage}<strong>${vehicle.mileage}</strong></div>
          <div>${copy.price}<strong>${vehicle.price}</strong></div>
          <div>${copy.port}<strong>${vehicle.port}</strong></div>
          <div>${copy.tier}<strong>${vehicle.tier === "premium" ? copy.premium : copy.standard}</strong></div>
        </div>
        <p class="vehicle-note">${vehicle.note}</p>
        <div class="card-actions">
          <button class="button secondary" type="button" data-index="${index}">${copy.request}</button>
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
  const reasonCopy = t().tierReasons;

  if (selectedMake?.premium) reasons.push(reasonCopy.premiumMake(make));
  if (premiumModelTerms.some((term) => modelText.includes(term))) reasons.push(reasonCopy.premiumModel(model));
  if (budgetMinimum >= 60000) reasons.push(reasonCopy.budget);
  if (year >= 2023 && budgetMinimum >= 35000 && mileage <= 25000) reasons.push(reasonCopy.lowMileage);
  if (countrySelect.value && countrySelect.value !== "United States") reasons.push(reasonCopy.export);

  return {
    tier: reasons.length ? "premium" : "standard",
    reason: reasons.length ? reasons.join("; ") : t().tierDefault
  };
}

function setTier(tier, reason = "") {
  const premium = tier === "premium";
  feeAmount.textContent = premium ? "$1,400" : "$699";
  feeLabel.textContent = premium ? t().premiumConcierge : t().standardConcierge;
  tierSelect.value = tier;
  tierReason.textContent = reason || (premium ? t().tierPremiumDetected : t().tierDefault);
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
  setTier(vehicle.tier, t().tierShowroom);
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
  setTier(tierSelect.value, t().tierManual);
});

function applyLanguage(lang) {
  currentLanguage = lang;
  const copy = t();
  document.documentElement.lang = lang;
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", copy.metaDescription);

  setText(".brand small", copy.brandSmall);
  setAllText(".nav a", copy.nav);
  setText(".hero .eyebrow", copy.heroEyebrow);
  setText(".hero-copy", copy.heroCopy);
  setText(".hero-actions .primary", copy.browseShowroom);
  setText(".hero-actions .secondary", copy.tellUs);
  setAllText(".region-strip span", copy.regionLabels);
  setAllText(".region-strip strong", copy.regionTitles);
  atlWidgetLabel.textContent = copy.atlWidget.label;
  atlTimeLabel.textContent = copy.atlWidget.time;
  atlWeatherLabel.textContent = copy.atlWidget.weather;
  if (!atlWeatherData) atlWeather.textContent = copy.atlWidget.loadingWeather;
  updateAtlantaClock();
  updateAtlantaWeatherText();
  setText("#showroom .eyebrow", copy.showroomEyebrow);
  setText("#showroom h2", copy.showroomTitle);
  setText("#about .eyebrow", copy.aboutEyebrow);
  setText("#about h2", copy.aboutTitle);
  setText("#about .section-heading p:not(.eyebrow)", copy.aboutCopy);
  setText(".about-story summary", copy.founderSummary);
  setAllText(".about-story p", [copy.founderCopy1, copy.founderCopy2]);
  setText(".partner-lanes h3", copy.lanesTitle);
  setAllText(".partner-lanes p", [copy.lanesCopy1, copy.lanesCopy2]);
  setText(".source-panel .eyebrow", copy.sourceEyebrow);
  setText(".source-panel h2", copy.sourceTitle);
  setText(".source-panel p:not(.eyebrow)", copy.sourceCopy);
  setText(".fee-box span", copy.currentTier);
  setText("#process .eyebrow", copy.processEyebrow);
  setText("#process h2", copy.processTitle);
  document.querySelectorAll(".steps article").forEach((article, index) => {
    article.querySelector("h3").textContent = copy.steps[index][0];
    article.querySelector("p").textContent = copy.steps[index][1];
  });
  setText(".contact-card .eyebrow", copy.businessEyebrow);
  setText(".disclosure-copy h2", copy.disclosureTitle);
  setAllText(".disclosure-copy p", copy.disclosureCopy);
  setText(".footer p:first-child", copy.footer);
  setText("#poweredByLine", copy.poweredBy);

  const labelMap = [
    ["#fullName", copy.labels.fullName],
    ["#email", copy.labels.email],
    ["#phone", copy.labels.phone],
    ["#country", copy.labels.country],
    ["#vehicleYear", copy.labels.year],
    ["#vehicleMake", copy.labels.make],
    ["#vehicleModel", copy.labels.model],
    ["#budget", copy.labels.budget],
    ["#maxMileage", copy.labels.mileage],
    ["#vehicleColor", copy.labels.color],
    ["#customColor", copy.labels.customColor],
    ["#destination", copy.labels.destination],
    ["#timeline", copy.labels.timeline],
    ["#tier", copy.labels.tier],
    ["#specs", copy.labels.specs]
  ];
  labelMap.forEach(([selector, text]) => {
    const field = document.querySelector(selector);
    const label = field?.closest("label");
    if (label?.firstChild) label.firstChild.textContent = `\n            ${text}\n            `;
  });

  setPlaceholder("#fullName", copy.placeholders.fullName);
  setPlaceholder("#email", copy.placeholders.email);
  setPlaceholder("#phone", copy.placeholders.phone);
  setPlaceholder("#vehicleModel", copy.placeholders.model);
  setPlaceholder("#customColor", copy.placeholders.customColor);
  setPlaceholder("#destination", copy.placeholders.destination);
  setPlaceholder("#specs", copy.placeholders.specs);
  setOptionText(countrySelect, 0, copy.selects.country);
  setOptionText(vehicleYearSelect, 0, copy.selects.year);
  setOptionText(vehicleMakeSelect, 0, copy.selects.make);
  setOptionText(budgetSelect, 0, copy.selects.budget);
  setOptionText(maxMileageSelect, 0, copy.selects.mileage);
  setOptionText(vehicleColorSelect, 0, copy.selects.color);
  setOptionText(timelineSelect, 0, copy.selects.timeline);
  copy.selects.mileageOptions.forEach((text, index) => setOptionText(maxMileageSelect, index + 1, text));
  copy.selects.timelineOptions.forEach((text, index) => setOptionText(timelineSelect, index + 1, text));
  copy.selects.tierOptions.forEach((text, index) => setOptionText(tierSelect, index, text));

  setText(".eligibility-panel legend", copy.eligibilityLegend);
  setAllText(".eligibility-panel .check-row span", [copy.eligibilityAge, copy.eligibilityBank, copy.eligibilityId]);
  setText(".eligibility-panel p", copy.eligibilityNote);
  setText(".form-actions .button", copy.startIntake);
  if (formNote.textContent) formNote.textContent = copy.formDemo;

  const contactParagraphs = document.querySelectorAll(".contact-card p");
  if (contactParagraphs[0]) contactParagraphs[0].innerHTML = `<strong>${copy.dba}</strong> Alpha Platinum Auto Broker`;
  if (contactParagraphs[1]) contactParagraphs[1].innerHTML = `<strong>${copy.email}</strong> <a href="mailto:rowtronicconsulting@gmail.com">rowtronicconsulting@gmail.com</a>`;
  if (contactParagraphs[2]) contactParagraphs[2].innerHTML = `<strong>${copy.phone}</strong> <a href="tel:+16783870355">+1 (678) 387-0355</a>`;
  if (contactParagraphs[3]) contactParagraphs[3].innerHTML = `<strong>${copy.address}</strong> 909 Eagles Landing Pkwy Ste 440 #2159, Stockbridge, GA 30281`;
  if (contactParagraphs[4]) contactParagraphs[4].innerHTML = `<strong>${copy.operationsManager}</strong> Lance Johnson`;
  if (contactParagraphs[5]) contactParagraphs[5].innerHTML = `<strong>${copy.operationsCell}</strong> <a href="tel:+15186987516">+1 (518) 698-7516</a>`;

  setTier(tierSelect.value, tierReason.textContent || "");
  renderInventory();
  languageToggle.querySelectorAll("span").forEach((item) => {
    item.classList.toggle("active", item.textContent.toLowerCase() === lang);
  });
}

languageToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "es" : "en");
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

  formNote.textContent = t().formDemo;
});

renderCountries();
renderMakes();
renderColors();
renderInventory();
applyLanguage("en");
updateAtlantaClock();
fetchAtlantaWeather();
setInterval(updateAtlantaClock, 1000);
setInterval(fetchAtlantaWeather, 900000);
