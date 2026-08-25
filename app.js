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
      label: "ATL operations desk",
      time: "Atlanta local time",
      weather: "ATL weather watch",
      status: "Desk status",
      statusText: "Monitoring buyer requests",
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
    resetIntake: "Reset",
    processEyebrow: "Concierge Sourcing Process",
    processTitle: "From dream vehicle to serious sourcing request",
    steps: [
      ["Choose the target", "Select a showroom vehicle or tell us the exact year, make, model, budget, mileage, color, and destination you want."],
      ["Confirm the request", "We review the vehicle goal, buyer readiness, destination, and sourcing level before active work begins."],
      ["Search real options", "Alpha Platinum checks available dealer inventory and presents serious options for the buyer to review."],
      ["Coordinate next steps", "The team supports communication, inspection questions, dealer handoff, and logistics guidance."]
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
      label: "Mesa de operaciones ATL",
      time: "Hora local de Atlanta",
      weather: "Clima ATL",
      status: "Estado del desk",
      statusText: "Monitoreando solicitudes",
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
    resetIntake: "Limpiar",
    processEyebrow: "Proceso de Busqueda Concierge",
    processTitle: "Del vehiculo sonado a una solicitud seria",
    steps: [
      ["Elige el objetivo", "Selecciona un vehiculo del showroom o dinos ano, marca, modelo, presupuesto, millaje, color y destino."],
      ["Confirma la solicitud", "Revisamos el objetivo, preparacion del comprador, destino y nivel de busqueda antes de comenzar."],
      ["Buscamos opciones reales", "Alpha Platinum revisa inventario disponible de dealers y presenta opciones serias para el comprador."],
      ["Coordinamos proximos pasos", "El equipo apoya comunicacion, preguntas de inspeccion, handoff al dealer y orientacion logistica."]
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

const mariaTranslations = {
  en: {
    launcher: "Chat with Maria",
    nudge: "Need help choosing? I can prepare your request.",
    kicker: "Alpha Platinum concierge",
    title: "Need help choosing?",
    message: "Maria can collect your vehicle request and prepare it clearly for the Alpha Platinum team.",
    stateReady: "Ready",
    stateCollecting: "Collecting details",
    stateCheckout: "Checkout ready",
    stateTeam: "Team review",
    stateConsent: "Consent needed",
    nameLabel: "Full name",
    vehicleLabel: "What vehicle are you looking for?",
    destinationLabel: "Destination",
    budgetLabel: "Budget",
    addressLabel: "Address / destination details",
    mileageLabel: "Maximum mileage",
    timelineLabel: "Timeline",
    contactLabel: "Email or WhatsApp",
    questionLabel: "Anything else Maria should add?",
    consentLabel: "I consent to Alpha Platinum / Rowtronic contacting me about this request.",
    prepareButton: "Prepare buyer request",
    mainIntake: "Open full intake",
    speak: "Hear greeting",
    speakUnavailable: "Voice preview unavailable",
    reset: "Reset",
    close: "Close Maria assistant",
    checkoutButton: "Continue to secure website checkout",
    paymentNote: "Payments are completed through secure Alpha Platinum website checkout. Maria does not collect card details in chat.",
    leadLabel: "Lead ID",
    initialReply: "Welcome to Alpha Platinum. I'm Maria, your AI concierge. Tell me what vehicle you want and I will help build your buyer packet.",
    consentReply: "I can prepare the request, but I need your consent before Alpha Platinum / Rowtronic can contact you about it.",
    guardrailReply: "I do not want to guess on that. I can add your question to the buyer request and have the Alpha Platinum team follow up with the right answer.",
    readyReply: "You are in the right place. I will prepare this clearly for the Alpha Platinum team.",
    checkoutReply: "Payments are completed through secure Alpha Platinum website checkout. I do not collect card details in chat.",
    resetReply: "Maria is reset. Tell me what vehicle you want to source.",
    voiceUnavailable: "Voice preview is not ready on this device. You can continue with the chat request.",
    nextPrompts: {
      name: "May I have the buyer's full name first?",
      vehicle: "What vehicle should I help you find?",
      destination: "What destination country should I prepare this for?",
      address: "Please add the street address, port, or destination details you want us to confirm.",
      budget: "What budget range should I note in USD?",
      mileage: "What maximum mileage should I use for the search?",
      contact: "What email or WhatsApp should the team use for follow-up?",
      consent: "Please confirm consent so Alpha Platinum / Rowtronic can follow up about this request.",
      ready: "I have the core details. Review the packet and press Prepare buyer request when ready."
    },
    confirmLine: (name, address) => `Let me confirm the spelling of the name: ${name || "the buyer"}. I have the address or destination details as ${address || "not provided yet"}. Is that correct?`,
    packetReady: (leadId, tierLabel, fee) => `Your buyer packet is ready. Reference number ${leadId}. Based on your request, this looks like ${tierLabel} - ${fee}. You can continue to secure checkout when ready.`,
    handoffEmail: "Email handoff",
    handoffWhatsApp: "WhatsApp handoff",
    vehicleReply: (vehicle) => `I can help you request the ${vehicle.year} ${vehicle.make} ${vehicle.model}. Add your destination, budget, mileage, timeline, and contact details when ready.`,
    voiceGreeting: (vehicle) => vehicle
      ? `Hi, I'm Maria. I can help prepare a request for the ${vehicle.year} ${vehicle.make} ${vehicle.model}.`
      : "Hi, I'm Maria. I can help prepare your vehicle request for the Alpha Platinum team."
  },
  es: {
    launcher: "Chat con Maria",
    nudge: "Necesitas ayuda? Puedo preparar tu solicitud.",
    kicker: "Conserje Alpha Platinum",
    title: "Necesitas ayuda?",
    message: "Maria puede recopilar tu solicitud de vehiculo y prepararla claramente para el equipo de Alpha Platinum.",
    stateReady: "Lista",
    stateCollecting: "Recopilando datos",
    stateCheckout: "Checkout listo",
    stateTeam: "Revision del equipo",
    stateConsent: "Falta consentimiento",
    nameLabel: "Nombre completo",
    vehicleLabel: "Que vehiculo buscas?",
    destinationLabel: "Destino",
    budgetLabel: "Presupuesto",
    addressLabel: "Direccion / detalles de destino",
    mileageLabel: "Millaje maximo",
    timelineLabel: "Tiempo",
    contactLabel: "Email o WhatsApp",
    questionLabel: "Algo mas que Maria deba agregar?",
    consentLabel: "Acepto que Alpha Platinum / Rowtronic me contacte sobre esta solicitud.",
    prepareButton: "Preparar solicitud",
    mainIntake: "Abrir intake completo",
    speak: "Escuchar saludo",
    speakUnavailable: "Voz no disponible",
    reset: "Limpiar",
    close: "Cerrar asistente Maria",
    checkoutButton: "Continuar al checkout seguro",
    paymentNote: "Los pagos se completan por el checkout seguro de Alpha Platinum. Maria no recopila datos de tarjeta en el chat.",
    leadLabel: "Lead ID",
    initialReply: "Bienvenido a Alpha Platinum. Soy Maria, tu conserje AI. Dime que vehiculo buscas y te ayudo a preparar el paquete del comprador.",
    consentReply: "Puedo preparar la solicitud, pero necesito tu consentimiento antes de que Alpha Platinum / Rowtronic pueda contactarte.",
    guardrailReply: "No quiero adivinar esa respuesta. Puedo agregar tu pregunta a la solicitud para que el equipo de Alpha Platinum responda correctamente.",
    readyReply: "Estas en el lugar correcto. Preparare esto claramente para el equipo de Alpha Platinum.",
    checkoutReply: "Los pagos se completan por el checkout seguro de Alpha Platinum. No recopilo datos de tarjeta en el chat.",
    resetReply: "Maria fue reiniciada. Dime que vehiculo quieres buscar.",
    voiceUnavailable: "La vista previa de voz no esta lista en este dispositivo. Puedes continuar con la solicitud por chat.",
    nextPrompts: {
      name: "Puedo tener el nombre completo del comprador?",
      vehicle: "Que vehiculo quieres que busque?",
      destination: "Para que pais de destino preparo esto?",
      address: "Agrega la direccion, puerto o detalles de destino que debemos confirmar.",
      budget: "Que presupuesto en USD debo anotar?",
      mileage: "Que millaje maximo debo usar para la busqueda?",
      contact: "Que email o WhatsApp debe usar el equipo para seguimiento?",
      consent: "Confirma el consentimiento para que Alpha Platinum / Rowtronic pueda dar seguimiento.",
      ready: "Tengo los datos principales. Revisa el paquete y presiona Preparar solicitud cuando estes listo."
    },
    confirmLine: (name, address) => `Permiteme confirmar la ortografia del nombre: ${name || "el comprador"}. Tengo la direccion o detalles de destino como ${address || "no indicado todavia"}. Es correcto?`,
    packetReady: (leadId, tierLabel, fee) => `Tu paquete de comprador esta listo. Referencia ${leadId}. Segun tu solicitud, parece ${tierLabel} - ${fee}. Puedes continuar al checkout seguro cuando estes listo.`,
    handoffEmail: "Email handoff",
    handoffWhatsApp: "WhatsApp handoff",
    vehicleReply: (vehicle) => `Puedo ayudarte a solicitar el ${vehicle.year} ${vehicle.make} ${vehicle.model}. Agrega destino, presupuesto, millaje, tiempo y contacto cuando estes listo.`,
    voiceGreeting: (vehicle) => vehicle
      ? `Hola, soy Maria. Puedo ayudarte a preparar una solicitud para el ${vehicle.year} ${vehicle.make} ${vehicle.model}.`
      : "Hola, soy Maria. Puedo ayudarte a preparar tu solicitud de vehiculo para el equipo de Alpha Platinum."
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
const intakeResetTab = document.querySelector("#intakeResetTab");
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
const atlStatusLabel = document.querySelector("#atlStatusLabel");
const atlDate = document.querySelector("#atlDate");
const atlTime = document.querySelector("#atlTime");
const atlWeather = document.querySelector("#atlWeather");
const atlStatus = document.querySelector("#atlStatus");
const mariaLauncher = document.querySelector("#mariaLauncher");
const mariaNudge = document.querySelector("#mariaNudge");
const mariaNudgeText = document.querySelector("#mariaNudgeText");
const mariaPopover = document.querySelector("#mariaPopover");
const mariaClose = document.querySelector("#mariaClose");
const mariaReset = document.querySelector("#mariaReset");
const mariaWidgetForm = document.querySelector("#mariaWidgetForm");
const mariaWidgetState = document.querySelector("#mariaWidgetState");
const mariaWidgetTitle = document.querySelector("#mariaWidgetTitle");
const mariaWidgetMessage = document.querySelector("#mariaWidgetMessage");
const mariaLeadId = document.querySelector("#mariaLeadId");
const mariaReply = document.querySelector("#mariaReply");
const mariaCheckoutPreview = document.querySelector("#mariaCheckoutPreview");
const mariaFeeLane = document.querySelector("#mariaFeeLane");
const mariaFeeAmount = document.querySelector("#mariaFeeAmount");
const mariaCheckoutButton = document.querySelector("#mariaCheckoutButton");
const mariaHandoffActions = document.querySelector("#mariaHandoffActions");
const mariaEmailHandoff = document.querySelector("#mariaEmailHandoff");
const mariaWhatsAppHandoff = document.querySelector("#mariaWhatsAppHandoff");
const mariaMainIntake = document.querySelector("#mariaMainIntake");
const mariaSpeak = document.querySelector("#mariaSpeak");

let atlWeatherData = null;
let selectedConciergeVehicle = null;
let mariaNudgeTimer = null;
let mariaHasEngaged = false;
let cachedMariaVoices = [];
let currentMariaLeadId = createMariaLeadId();

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
  atlWeather.textContent = `${temp} F / ${getWeatherSummary(atlWeatherData.code)}`;
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

function mariaCopy() {
  return mariaTranslations[currentLanguage] || mariaTranslations.en;
}

function createMariaLeadId() {
  const datePart = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date()).replace(/-/g, "");
  const sequence = String(Math.floor(Math.random() * 9000) + 1000);
  return `APAB-${datePart}-${sequence}`;
}

function isMariaVoicePreviewAvailable() {
  return "speechSynthesis" in window;
}

function mariaField(name) {
  return mariaWidgetForm?.elements[name];
}

function setMariaValue(name, value, force = false) {
  const field = mariaField(name);
  if (!field || (!force && field.value)) return;
  field.value = value || "";
}

function getMariaWidgetData() {
  const data = new FormData(mariaWidgetForm);
  return {
    name: `${data.get("name") || ""}`.trim(),
    vehicle: `${data.get("vehicle") || ""}`.trim(),
    destination: `${data.get("destination") || ""}`.trim(),
    address: `${data.get("address") || ""}`.trim(),
    budget: `${data.get("budget") || ""}`.trim(),
    mileage: `${data.get("mileage") || ""}`.trim(),
    timeline: `${data.get("timeline") || ""}`.trim(),
    contact: `${data.get("contact") || ""}`.trim(),
    question: `${data.get("question") || ""}`.trim(),
    consent: data.get("consent") === "on"
  };
}

function mariaPromptForData(data = getMariaWidgetData()) {
  const prompts = mariaCopy().nextPrompts;
  if (!data.name) return prompts.name;
  if (!data.vehicle) return `${mariaCopy().confirmLine(data.name, data.address)} ${prompts.vehicle}`;
  if (!data.destination) return prompts.destination;
  if (!data.address) return prompts.address;
  if (!data.budget) return prompts.budget;
  if (!data.mileage) return prompts.mileage;
  if (!data.contact) return prompts.contact;
  if (!data.consent) return prompts.consent;
  return `${mariaCopy().confirmLine(data.name, data.address)} ${prompts.ready}`;
}

function mariaTierLabel(tier) {
  return tier === "premium" ? mariaCopy().premiumConcierge || t().premiumConcierge : t().standardConcierge;
}

function mariaTierFee(tier) {
  return tier === "premium" ? "$1,400" : "$699";
}

function buildMariaLeadSummary(data, tier) {
  const tierLabel = mariaTierLabel(tier);
  const fee = mariaTierFee(tier);
  return [
    "ALPHA PLATINUM MARIA BUYER PACKET",
    "",
    `Lead ID: ${currentMariaLeadId}`,
    `Buyer: ${data.name || "[missing]"}`,
    `Contact: ${data.contact || "[missing]"}`,
    `Address / destination details: ${data.address || "[missing]"}`,
    `Vehicle: ${data.vehicle || "[missing]"}`,
    `Destination: ${data.destination || "[missing]"}`,
    `Budget: ${data.budget || "[missing]"}`,
    `Maximum mileage: ${data.mileage || "[missing]"}`,
    `Timeline: ${data.timeline || "[missing]"}`,
    `Customer notes: ${data.question || "None provided"}`,
    `Likely tier: ${tierLabel}`,
    `Concierge fee: ${fee}`,
    `Consent: ${data.consent ? "confirmed" : "missing"}`,
    "",
    `Maria confirmation: ${mariaCopy().confirmLine(data.name, data.address)}`,
    "Payment boundary: Maria routes to approved website Stripe checkout and never collects card details in chat.",
    "Human-only: final price, availability, dealer paperwork, title, export, customs, taxes, and finance questions."
  ].join("\n");
}

function updateMariaHandoffLinks(summary) {
  const subject = encodeURIComponent(`Alpha Platinum Maria Lead ${currentMariaLeadId}`);
  const body = encodeURIComponent(summary);
  mariaEmailHandoff.href = `mailto:rowtronicconsulting@gmail.com?subject=${subject}&body=${body}`;
  mariaWhatsAppHandoff.href = `https://wa.me/16783870355?text=${body}`;
}

function setMariaHandoffVisible(visible) {
  mariaHandoffActions.classList.toggle("is-visible", visible);
  mariaHandoffActions.setAttribute("aria-hidden", String(!visible));
}

function parseMariaAmount(value) {
  if (!value) return 0;
  const normalized = String(value).toLowerCase().replace(/,/g, "");
  const match = normalized.match(/\$?\s*(\d+(?:\.\d+)?)\s*(k|000)?/);
  if (!match) return 0;
  const number = Number(match[1]);
  return match[2] === "k" || match[2] === "000" ? number * 1000 : number;
}

function getMariaYear(text) {
  const match = String(text || "").match(/\b(20[1-3]\d|19[8-9]\d)\b/);
  return match ? Number(match[1]) : 0;
}

function isMariaLowMileage(value) {
  const text = String(value || "").toLowerCase();
  if (/under|less|below|fewer|<=/.test(text) && parseMariaAmount(text) <= 25000) return true;
  const number = parseMariaAmount(text);
  return number > 0 && number <= 25000;
}

function mariaLikelyTier(data) {
  const vehicle = `${data.get("vehicle") || ""}`.toLowerCase();
  const destination = `${data.get("destination") || ""}`.trim().toLowerCase();
  const budget = parseMariaAmount(data.get("budget"));
  const year = getMariaYear(data.get("vehicle"));
  const mileage = data.get("mileage") || "";
  const domesticDestinations = ["", "us", "usa", "u.s.", "u.s.a.", "united states", "united states of america"];

  if (!domesticDestinations.includes(destination)) return "premium";
  if (premiumModelTerms.some((term) => vehicle.includes(term))) return "premium";
  if (vehicleMakes.some((item) => item.premium && vehicle.includes(item.make.toLowerCase()))) return "premium";
  if (budget >= 60000) return "premium";
  if (year >= 2023 && budget >= 35000 && isMariaLowMileage(mileage)) return "premium";
  return "standard";
}

function mariaHasSensitiveQuestion(question) {
  return /finance|loan|title|customs|export document|sanction|dealer fee|tax|availability|final price|wire|card number|routing|account number/i.test(question || "");
}

function refreshMariaVoices() {
  if (!("speechSynthesis" in window)) return [];
  cachedMariaVoices = window.speechSynthesis.getVoices();
  return cachedMariaVoices;
}

function mariaVoicePreference(language = currentLanguage) {
  return language === "es"
    ? { lang: "es-US", languageRoot: "es", preferredName: "Google español de Estados Unidos" }
    : { lang: "en-US", languageRoot: "en", preferredName: "Google US English" };
}

function chooseMariaVoice(voices, language = currentLanguage) {
  const preference = mariaVoicePreference(language);
  const preferred = preference.languageRoot === "es"
    ? [
        new RegExp(`^${preference.preferredName}$`, "i"),
        /Google.*espa/i,
        /Google.*Spanish/i,
        /Paulina|Monica|Luciana|Marisol|Maria/i
      ]
    : [
        new RegExp(`^${preference.preferredName}$`, "i"),
        /Google US English/i,
        /Google.*English.*United States/i,
        /Samantha|Ava|Nicky|Susan|Victoria/i,
        /Microsoft Zira/i,
        /Microsoft Aria/i,
        /Jenny|Sara|Sonia|Female|Natural|Maria/i
      ];

  const exactLocaleVoices = voices.filter((voice) => voice.lang?.toLowerCase() === preference.lang.toLowerCase());
  const languageVoices = voices.filter((voice) => voice.lang?.toLowerCase().startsWith(preference.languageRoot));
  const voice = preferred
    .map((pattern) => exactLocaleVoices.find((item) => pattern.test(`${item.name} ${item.lang}`)))
    .find(Boolean)
    || exactLocaleVoices[0]
    || preferred
      .map((pattern) => languageVoices.find((item) => pattern.test(`${item.name} ${item.lang}`)))
      .find(Boolean)
    || languageVoices[0]
    || voices.find((item) => item.default)
    || null;

  return {
    voice,
    preference,
    fallbackUsed: !voice || voice.name !== preference.preferredName || voice.lang !== preference.lang
  };
}

function mariaSpeechState() {
  if (!isMariaVoicePreviewAvailable()) {
    return {
      available: false,
      speaking: false,
      pending: false,
      paused: false
    };
  }

  return {
    available: true,
    speaking: window.speechSynthesis.speaking,
    pending: window.speechSynthesis.pending,
    paused: window.speechSynthesis.paused
  };
}

function logMariaVoiceDiagnostics(voices, selectedVoice, preference, fallbackUsed, stage = "voice-selected", extra = {}) {
  console.info("Maria voice diagnostics", {
    stage,
    userAgent: navigator.userAgent,
    appLanguage: currentLanguage,
    preferredLanguage: preference.lang,
    preferredVoiceHint: preference.preferredName,
    selectedVoice: selectedVoice ? `${selectedVoice.name} (${selectedVoice.lang})` : "browser default by utterance.lang",
    fallbackUsed,
    speechState: mariaSpeechState(),
    ...extra,
    availableVoices: voices.map((voice) => ({
      name: voice.name,
      lang: voice.lang,
      localService: voice.localService,
      default: voice.default
    }))
  });
}

function setMariaCheckout(tier, muted = false) {
  const copy = t();
  const premium = tier === "premium";
  mariaFeeLane.textContent = `${premium ? copy.premiumConcierge : copy.standardConcierge} - ${premium ? "$1,400" : "$699"}`;
  mariaFeeAmount.textContent = premium ? "$1,400" : "$699";
  mariaCheckoutButton.dataset.tier = tier;
  mariaCheckoutButton.disabled = muted;
  mariaCheckoutPreview.classList.add("is-visible");
  mariaCheckoutPreview.classList.toggle("is-muted", muted);
}

function updateMariaConductorReply() {
  if (!mariaPopover.classList.contains("open")) return;
  mariaWidgetState.textContent = mariaCopy().stateCollecting;
  mariaReply.textContent = mariaPromptForData();
}

function speakMariaGreeting(vehicle = selectedConciergeVehicle) {
  const copy = mariaCopy();
  if (!isMariaVoicePreviewAvailable()) {
    mariaWidgetState.textContent = copy.voiceUnavailable;
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(copy.voiceGreeting(vehicle));
  const voices = cachedMariaVoices.length ? cachedMariaVoices : refreshMariaVoices();
  const { voice: warmVoice, preference, fallbackUsed } = chooseMariaVoice(voices);
  const buttonPressedAt = performance.now();
  logMariaVoiceDiagnostics(voices, warmVoice, preference, fallbackUsed, "button-pressed", {
    textLength: utterance.text.length,
    beforeSpeak: mariaSpeechState()
  });
  if (warmVoice) utterance.voice = warmVoice;
  utterance.lang = warmVoice?.lang || preference.lang;
  utterance.rate = 0.92;
  utterance.pitch = 1.04;
  utterance.volume = 0.86;
  utterance.onstart = () => {
    mariaWidgetState.textContent = mariaCopy().stateReady;
    console.info("Maria speech started", {
      elapsedMs: Math.round(performance.now() - buttonPressedAt),
      speechState: mariaSpeechState()
    });
  };
  utterance.onend = () => {
    console.info("Maria speech ended", {
      durationMs: Math.round(performance.now() - buttonPressedAt),
      speechState: mariaSpeechState()
    });
  };
  utterance.onerror = (event) => {
    console.info("Maria speech error", {
      error: event.error,
      elapsedMs: Math.round(performance.now() - buttonPressedAt),
      speechState: mariaSpeechState()
    });
  };
  window.speechSynthesis.resume();
  logMariaVoiceDiagnostics(voices, warmVoice, preference, fallbackUsed, "before-speak", {
    afterResume: mariaSpeechState()
  });
  console.info(`Maria selected voice: ${warmVoice ? `${warmVoice.name} (${warmVoice.lang})` : `browser default (${preference.lang})`}`);
  window.speechSynthesis.speak(utterance);
  console.info("Maria speak issued", {
    elapsedMs: Math.round(performance.now() - buttonPressedAt),
    speechState: mariaSpeechState()
  });
}

function resetMariaWidget() {
  const copy = mariaCopy();
  selectedConciergeVehicle = null;
  currentMariaLeadId = createMariaLeadId();
  mariaLeadId.textContent = currentMariaLeadId;
  mariaWidgetForm.reset();
  mariaWidgetTitle.textContent = copy.title;
  mariaWidgetMessage.textContent = copy.message;
  mariaWidgetState.textContent = copy.stateReady;
  mariaReply.textContent = copy.resetReply;
  mariaCheckoutPreview.classList.remove("is-visible", "is-muted");
  mariaCheckoutButton.disabled = false;
  mariaCheckoutButton.dataset.tier = "";
  setMariaHandoffVisible(false);
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

function hideMariaNudge() {
  mariaNudge.classList.remove("is-visible");
  mariaLauncher.classList.remove("is-pulsing");
  if (mariaNudgeTimer) {
    window.clearTimeout(mariaNudgeTimer);
    mariaNudgeTimer = null;
  }
}

function showMariaNudge() {
  if (mariaHasEngaged || mariaPopover.classList.contains("open")) return;
  mariaNudge.classList.add("is-visible");
  mariaLauncher.classList.add("is-pulsing");
}

function scheduleMariaNudge() {
  hideMariaNudge();
  mariaNudgeTimer = window.setTimeout(showMariaNudge, 24000);
}

function openMariaWidget(vehicle = null, shouldSpeak = false) {
  mariaHasEngaged = true;
  hideMariaNudge();
  selectedConciergeVehicle = vehicle;
  mariaLeadId.textContent = currentMariaLeadId;
  if (vehicle) {
    setMariaValue("vehicle", `${vehicle.year} ${vehicle.make} ${vehicle.model}`, true);
    setMariaValue("mileage", vehicle.mileage, true);
    setMariaValue("question", `I am interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model}.`, true);
  }

  const copy = mariaCopy();
  mariaWidgetTitle.textContent = copy.title;
  mariaWidgetMessage.textContent = vehicle ? copy.vehicleReply(vehicle) : copy.message;
  mariaWidgetState.textContent = copy.stateReady;
  mariaReply.textContent = vehicle ? mariaPromptForData() : copy.initialReply;
  mariaCheckoutPreview.classList.remove("is-visible", "is-muted");
  mariaCheckoutButton.disabled = false;
  setMariaHandoffVisible(false);
  mariaPopover.classList.add("open");
  mariaPopover.setAttribute("aria-hidden", "false");
  mariaLauncher.style.display = "none";
  if (shouldSpeak) speakMariaGreeting(vehicle);
}

function closeMariaWidget() {
  mariaPopover.classList.remove("open");
  mariaPopover.setAttribute("aria-hidden", "true");
  mariaLauncher.style.display = "";
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

function applyMariaVoiceAvailability() {
  const copy = mariaCopy();
  const available = isMariaVoicePreviewAvailable();
  mariaSpeak.disabled = !available;
  mariaSpeak.setAttribute("aria-disabled", String(!available));
  mariaSpeak.title = available ? copy.speak : copy.voiceUnavailable;
  mariaSpeak.textContent = available ? copy.speak : copy.speakUnavailable;
}

function prepareMariaRequest() {
  const copy = mariaCopy();
  const data = new FormData(mariaWidgetForm);
  const packet = getMariaWidgetData();
  const tier = mariaLikelyTier(data);
  const tierLabel = mariaTierLabel(tier);
  const fee = mariaTierFee(tier);
  const hasConsent = data.get("consent") === "on";
  const sensitive = mariaHasSensitiveQuestion(data.get("question"));
  const summary = buildMariaLeadSummary(packet, tier);

  setMariaCheckout(tier, !hasConsent || sensitive);
  updateMariaHandoffLinks(summary);
  console.info(summary);

  if (!hasConsent) {
    mariaWidgetState.textContent = copy.stateConsent;
    mariaReply.textContent = copy.consentReply;
    setMariaHandoffVisible(false);
    return;
  }

  if (sensitive) {
    mariaWidgetState.textContent = copy.stateTeam;
    mariaReply.textContent = `${copy.guardrailReply} ${copy.confirmLine(packet.name, packet.address)}`;
    setMariaHandoffVisible(true);
    return;
  }

  mariaWidgetState.textContent = copy.stateCheckout;
  mariaReply.textContent = `${copy.packetReady(currentMariaLeadId, tierLabel, fee)} ${copy.checkoutReply}`;
  setMariaHandoffVisible(true);
}

function updateTierFromVehicle() {
  const result = evaluateTier();
  setTier(result.tier, result.reason);
}

function resetIntakeForm() {
  intakeForm.reset();
  renderModels("");
  customColorWrap.classList.add("hidden-field");
  customColorInput.required = false;
  setTier("standard", t().tierDefault);
  formNote.textContent = "";
}

function requestVehicle(index) {
  const vehicle = inventory[index];
  vehicleYearSelect.value = String(vehicle.year);
  vehicleMakeSelect.value = vehicle.make;
  renderModels(vehicle.make);
  vehicleModelInput.value = vehicle.model;
  setTier(vehicle.tier, t().tierShowroom);
  openMariaWidget(vehicle, false);
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

mariaLauncher.addEventListener("click", () => openMariaWidget(null, false));
mariaNudge.addEventListener("click", () => openMariaWidget(null, false));
mariaClose.addEventListener("click", closeMariaWidget);
mariaReset.addEventListener("click", resetMariaWidget);
mariaSpeak.addEventListener("click", () => speakMariaGreeting());
mariaMainIntake.addEventListener("click", () => {
  closeMariaWidget();
});
mariaWidgetForm.addEventListener("input", () => {
  updateMariaConductorReply();
});
mariaWidgetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  prepareMariaRequest();
});
mariaCheckoutButton.addEventListener("click", () => {
  const tier = mariaCheckoutButton.dataset.tier || "premium";
  const checkoutUrl = STRIPE_CHECKOUT_URLS[tier];
  if (checkoutUrl) window.location.href = checkoutUrl;
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

intakeResetTab.addEventListener("click", resetIntakeForm);

function applyMariaLanguage() {
  const copy = mariaCopy();
  setText("#mariaLauncher span", copy.launcher);
  setText("#mariaNudgeText", copy.nudge);
  setText("#mariaWidgetKicker", copy.kicker);
  setText("#mariaWidgetTitle", copy.title);
  setText("#mariaWidgetMessage", selectedConciergeVehicle ? copy.vehicleReply(selectedConciergeVehicle) : copy.message);
  setText("#mariaWidgetState", copy.stateReady);
  setText("#mariaNameLabel", copy.nameLabel);
  setText("#mariaVehicleLabel", copy.vehicleLabel);
  setText("#mariaDestinationLabel", copy.destinationLabel);
  setText("#mariaBudgetLabel", copy.budgetLabel);
  setText("#mariaAddressLabel", copy.addressLabel);
  setText("#mariaMileageLabel", copy.mileageLabel);
  setText("#mariaTimelineLabel", copy.timelineLabel);
  setText("#mariaContactLabel", copy.contactLabel);
  setText("#mariaQuestionLabel", copy.questionLabel);
  setText("#mariaConsentLabel", copy.consentLabel);
  setText("#mariaPrepare", copy.prepareButton);
  setText("#mariaMainIntake", copy.mainIntake);
  setText("#mariaSpeak", copy.speak);
  setText("#mariaReset", copy.reset);
  setText("#mariaCheckoutButton", copy.checkoutButton);
  setText("#mariaPaymentNote", copy.paymentNote);
  setText("#mariaLeadLabel", copy.leadLabel);
  setText("#mariaEmailHandoff", copy.handoffEmail);
  setText("#mariaWhatsAppHandoff", copy.handoffWhatsApp);
  if (!mariaReply.textContent || mariaReply.textContent.includes("Hi, I'm Maria") || mariaReply.textContent.includes("Hola, soy Maria")) {
    mariaReply.textContent = copy.initialReply;
  }
  mariaClose.setAttribute("aria-label", copy.close);
  mariaReset.setAttribute("aria-label", copy.reset);
  mariaLauncher.setAttribute("aria-label", copy.launcher);
  mariaNudge.setAttribute("aria-label", copy.launcher);
  setPlaceholder("#mariaName", currentLanguage === "es" ? "Nombre del cliente" : "Client name");
  setPlaceholder("#mariaVehicle", currentLanguage === "es" ? "2024 Mercedes-Benz G-Class" : "2024 Mercedes-Benz G-Class");
  setPlaceholder("#mariaDestination", currentLanguage === "es" ? "Jamaica" : "Jamaica");
  setPlaceholder("#mariaAddress", currentLanguage === "es" ? "Kingston, Jamaica" : "Kingston, Jamaica");
  setPlaceholder("#mariaBudget", "$75,000");
  setPlaceholder("#mariaMileage", currentLanguage === "es" ? "Menos de 25,000 mi" : "Under 25,000 mi");
  setPlaceholder("#mariaContact", "name@example.com");
  setPlaceholder("#mariaQuestion", currentLanguage === "es" ? "Version, color, envio, tiempo..." : "Trim, color, shipping needs, timing...");
  applyMariaVoiceAvailability();
  t().selects.timelineOptions.forEach((text, index) => setOptionText(mariaField("timeline"), index, text));
}

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
  atlStatusLabel.textContent = copy.atlWidget.status;
  atlStatus.textContent = copy.atlWidget.statusText;
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
  setAllText(".disclosure-copy > p", copy.disclosureCopy);
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
  setText("#intakeResetTab", copy.resetIntake);
  intakeResetTab.setAttribute("aria-label", copy.resetIntake);
  if (formNote.textContent) formNote.textContent = copy.formDemo;
  applyMariaLanguage();

  const contactParagraphs = document.querySelectorAll(".contact-card p:not(.eyebrow)");
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
mariaLeadId.textContent = currentMariaLeadId;
applyLanguage("en");
updateAtlantaClock();
fetchAtlantaWeather();
if ("speechSynthesis" in window) {
  refreshMariaVoices();
  if (typeof window.speechSynthesis.addEventListener === "function") {
    window.speechSynthesis.addEventListener("voiceschanged", refreshMariaVoices);
  } else {
    window.speechSynthesis.onvoiceschanged = refreshMariaVoices;
  }
}
scheduleMariaNudge();
setInterval(updateAtlantaClock, 1000);
setInterval(fetchAtlantaWeather, 900000);
