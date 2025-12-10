    let LANG = localStorage.getItem('lang') || ((navigator.language || 'de').startsWith('de') ? 'de' : 'en');
    const DICT = { 
      de:{
        // Navigation
    "nav.home": "Start",
    "nav.services": "Leistungen",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",

    // Hero
    "hero.kicker": "Unternehmensberatung • Strategy • Operations",
    "hero.title": "Beratung, die Ergebnisse liefert.",
    "hero.lead":
      "Ouya Sphere unterstützt Unternehmen dabei, schneller besser zu werden – in Strategie, Vertrieb, Transaktionen sowie Prozess- und Organisationsoptimierung. Mit langjähriger Industrieerfahrung, datengetriebenen Analysen und einem klaren Fokus auf Umsetzung.",
    "hero.cta": "Gespräch vereinbaren",
    "hero.seeServices": "Leistungen ansehen",
    "hero.feature1.title": "Messbare Wirkung",
    "hero.feature1.text":
      "Fokus auf klaren KPIs, Umsetzungsroadmaps und schnellen Ergebnissen.",
    "hero.feature2.title": "Industrieerfahrung",
    "hero.feature2.text":
      "Tiefe Expertise in Automotive, Industrie und Supply Chain.",
    "hero.feature3.title": "Hands-on Ansatz",
    "hero.feature3.text":
      "Wir begleiten nicht nur auf PowerPoint – sondern bis in die Umsetzung.",
    "hero.image.alt":
      "Bildplatzhalter: Strategieworkshop mit Management-Team",

    // Services
    "services.title": "Leistungen",
    "services.lead":
      "Ouya Sphere deckt den gesamten Wertstrom von Strategie bis Umsetzung ab – mit modularen Beratungsbausteinen, die sich auf Ihr Geschäftsmodell zuschneiden lassen.",

    "services.strategy.title": "Business & Growth Strategy",
    "services.strategy.text":
      "Entwicklung klarer Wachstumsstrategien, Markt- & Wettbewerbsanalysen sowie belastbarer Geschäftsmodelle. Methoden: PESTEL, Porters Five Forces, Ansoff-Matrix, BCG-Portfolio.",

    "services.ops.title": "Sales & Distribution Excellence",
    "services.ops.text":
      "Optimierung von Vertriebskanälen, Pricing, Konditionssystemen und Partnernetzwerken – mit Fokus auf Skalierung und Profitabilität. Methoden: CRM-Best Practices (CLV, Lead-Scoring), Preisforschung (Conjoint, Van-Westendorp), Pocket-Price-Waterfall.",

    "services.digital.title": "M&A Advisory & Due Diligence",
    "services.digital.text":
      "Unterstützung entlang des gesamten Deal-Cycles – von Target-Screening über Commercial & Operational Due Diligence bis Post-Merger-Integration. Methoden: Quality of Earnings, Net-Working-Capital-Analysen, OEE- & Bottleneck-Analysen im Operations-Umfeld.",

    "services.process.title": "Process Optimization & Operating Model",
    "services.process.text":
      "End-to-End-Optimierung in Operations, Supply Chain und Vertrieb – inklusive Target Operating Model und Governance. Methoden: Wertstromanalyse, Lean-Tools (5S, Kaizen, Kanban), KPI-basierte Performance-Steuerung.",
    
    // About
    "about.heading": "Über uns",
    "about.intro": "Mit über 25 Jahren Branchenerfahrung begleiten wir bereits mehrere internationale Kunden im Automotive- und Maschinenbausektor - von der strategischen Ausrichtung bis zur operativen Umsetzung. Ouya Sphere verbindet OEM- und Tier-1-Perspektive mit pragmatischer Beratung, um messbare Ergebnisse entlang der gesamten Wertschöpfungskette zu erzielen.",      
          
    // Metrics (About-Bereich = Counter)
    "metrics.kicker": "MANDATE WELTWEIT",
    "metrics.title": "Ouya Sphere in Zahlen",
    "metrics.clients": "Mandanten weltweit",
    "metrics.projects": "Internationale Projekte",
    "metrics.partners": "Globale Kooperationspartner",
    "metrics.experts": "Jahre Branchenerfahrung",

    // Kontakt / Formular
    "contact.title": "Kontakt aufnehmen",
    "contact.lead":
      "Sie möchten ein konkretes Projekt, ein mögliches Mandat oder eine Sparrings-Runde besprechen? Schreiben Sie uns kurz Ihr Anliegen – wir melden uns zeitnah mit einem Terminvorschlag.",
    "form.name": "Name *",
    "form.email": "E-Mail *",
    "form.company": "Firma",
    "form.message": "Ihr Anliegen *",
    "form.send": "Nachricht senden",
    "form.mailto": "Per E-Mail öffnen",
    "form.placeholder.name": "Vor- und Nachname",
    "form.placeholder.email": "name@unternehmen.de",
    "form.placeholder.company": "Unternehmen (optional)",
    "form.placeholder.message": "Wie können wir helfen?",
          
    //Footer
    "footer.contact.title": "Kontakt",
    "footer.links.title": "Weiterführende Links",
    "footer.keywords.title": "Keywords",
    "footer.legal.aria": "Rechtliches",
    "footer.legal.imprint": "Impressum",
    "footer.legal.privacy": "Datenschutzhinweise",
    "footer.legal.cookies": "Cookie-Richtlinien",

    // Cookies Banner
    "cookie.title": "Cookies & Datenschutz",
    "cookie.desc":
      "Wir verwenden Cookies, um unsere Website sicher zu betreiben und – mit Ihrer Einwilligung – zur Reichweitenmessung. Sie können Ihre Auswahl jederzeit ändern.",
    "cookie.necessary": "Technisch erforderlich",
    "cookie.necessarySub":
      "immer aktiv – z. B. Sicherheits- und Session-Cookies",
    "cookie.analyticsSub":
      "anonyme Nutzungsstatistiken (optional)",
    "cookie.decline": "Nur notwendige",
    "cookie.accept": "Alle akzeptieren",
    "cookie.analytics": "Analytics"
  },
      en:{ 
        // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.kicker": "Management Consulting • Strategy • Operations",
    "hero.title": "Consulting that delivers results.",
    "hero.lead":
      "Ouya Sphere helps companies improve faster – in strategy, sales, transactions as well as process and organizational optimization. Many years of industry experience, data-driven analytics and a strong execution focus ensure measurable impact.",
    "hero.cta": "Schedule a call",
    "hero.seeServices": "View services",
    "hero.feature1.title": "Measurable impact",
    "hero.feature1.text":
      "Focus on clear KPIs, implementation roadmaps and rapid results.",
    "hero.feature2.title": "Industry experience",
    "hero.feature2.text":
      "Deep expertise in automotive, industry and supply chain.",
    "hero.feature3.title": "Hands-on approach",
    "hero.feature3.text":
      "We don’t stop at slides – we support execution end to end.",
    "hero.image.alt":
      "Image placeholder: strategy workshop with management team",

    // Services
    "services.title": "Services",
    "services.lead":
      "Ouya Sphere covers the full value chain from strategy to implementation – with modular consulting building blocks tailored to your business model.",

    "services.strategy.title": "Business & Growth Strategy",
    "services.strategy.text":
      "Development of clear growth strategies, market & competitive analyses and robust business models. Methods: PESTEL, Porter’s Five Forces, Ansoff matrix, BCG portfolio.",

    "services.ops.title": "Sales & Distribution Excellence",
    "services.ops.text":
      "Optimization of sales channels, pricing, terms and partner networks – with a focus on scale and profitability. Methods: CRM best practices (CLV, lead scoring), price research (conjoint, Van Westendorp), pocket price waterfall.",

    "services.digital.title": "M&A Advisory & Due Diligence",
    "services.digital.text":
      "Support along the full deal cycle – from target screening and commercial & operational due diligence to post-merger integration. Methods: Quality of Earnings, net working capital analysis, OEE & bottleneck analysis in operations.",

    "services.process.title": "Process Optimization & Operating Model",
    "services.process.text":
      "End-to-end optimization in operations, supply chain and sales – including target operating model and governance. Methods: value stream mapping, lean tools (5S, Kaizen, Kanban), KPI-based performance management.",
    // About
    "about.heading": "About us",
    "about.intro": "With more than 25 years of industry experience, we support several international clients in the automotive and mechanical engineering sectors – from strategic direction to hands-on implementation. Ouya Sphere combines OEM and Tier-1 perspectives with pragmatic consulting to deliver measurable impact across the entire value chain.",  
          
    // Metrics
    "metrics.kicker": "MANDATES WORLDWIDE",
    "metrics.title": "Ouya Sphere in numbers",
    "metrics.clients": "Clients worldwide",
    "metrics.projects": "International projects",
    "metrics.partners": "Global cooperation partners",
    "metrics.experts": "Years of industry experience",

    // Contact / Form
    "contact.title": "Get in touch",
    "contact.lead":
      "Would you like to discuss a specific project, mandate or sparring session? Send us a short note – we will come back with a meeting proposal.",
    "form.name": "Name *",
    "form.email": "Email *",
    "form.company": "Company",
    "form.message": "Your request *",
    "form.send": "Send message",
    "form.mailto": "Open in email client",
    "form.placeholder.name": "First and last name",
    "form.placeholder.email": "name@company.com",
    "form.placeholder.company": "Company (optional)",
    "form.placeholder.message": "How can we help?",
          
    //Footer
    "footer.contact.title": "Contact",
    "footer.links.title": "Further links",
    "footer.keywords.title": "Keywords",
    "footer.legal.aria": "Legal",
    "footer.legal.imprint": "Legal notice",
    "footer.legal.privacy": "Privacy policy",
    "footer.legal.cookies": "Cookie policy",
          
    // Cookies Banner
    "cookie.title": "Cookies & privacy",
    "cookie.desc":
      "We use cookies to operate our website securely and – with your consent – for reach and usage analytics. You can change your selection at any time.",
    "cookie.necessary": "Strictly necessary",
    "cookie.necessarySub":
      "always active – e.g. security and session cookies",
    "cookie.analyticsSub":
      "anonymous usage statistics (optional)",
    "cookie.decline": "Only necessary",
    "cookie.accept": "Accept all",
    "cookie.analytics": "Analytics"
  }
};

    

// === i18n extensions for legal pages (safe to edit) ===
try{
  Object.assign(DICT.de, {
    'legal.common.phone':'Telefon',
    'legal.common.email':'E‑Mail',
    'legal.country':'Deutschland',
    'legal.imprint.title':'Impressum',
    'legal.imprint.address':'Angaben gemäß § 5 TMG',
    'legal.representedBy':'Vertreten durch',
    'legal.contact':'Kontakt',
    'legal.register':'Registereintrag',
    'legal.register.details':'Eintragung im Handelsregister.',
    'legal.register.court':'Registergericht',
    'legal.register.number':'Registernummer',
    'legal.vat':'Umsatzsteuer',
    'legal.vat.details':'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG',
    'legal.dispute':'Streitschlichtung',
    'legal.dispute.text1':'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
    'legal.dispute.text2':'Wir sind nicht verpflichtet oder bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    'legal.liability.content':'Haftung für Inhalte',
    'legal.liability.content.text':'Als Diensteanbieter sind wir nach § 7 Abs. 1 TMG für eigene Inhalte verantwortlich. Nach den §§ 8–10 TMG sind wir nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt. Eine Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.',
    'legal.liability.links':'Haftung für Links',
    'legal.liability.links.text':'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese Inhalte ist stets der jeweilige Anbieter verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.',
    'legal.copyright':'Urheberrecht',
    'legal.copyright.text':'Die von uns erstellten Inhalte unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der Zustimmung der Rechteinhaber. Soweit Inhalte nicht von uns erstellt wurden, werden die Urheberrechte Dritter beachtet.',
    'legal.image.credits':'Bildquellen / Credits',
    'privacy.title':'Datenschutzerklärung',
    'privacy.controller':'I. Verantwortlicher',
    'privacy.rights':'II. Rechte der Betroffenen',
    'privacy.rights.text':'Rechte auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Beschwerde (Art. 77) und Widerspruch (Art. 21) gegen Verarbeitungen nach Art. 6 Abs. 1 lit. f DSGVO.',
    'privacy.general':'III. Allgemeines zur Datenverarbeitung',
    'privacy.general.text':'Wir verarbeiten personenbezogene Daten nur soweit erforderlich für eine funktionsfähige, sichere Website sowie unsere Leistungen (Art. 6 Abs. 1 lit. a, b, c, f DSGVO). Löschung erfolgt nach Zweckfortfall und Ablauf von Aufbewahrungsfristen.',
    'privacy.logs':'IV. Server-Logfiles',
    'privacy.logs.text':'Beim Aufruf werden technische Daten (Browser, OS, Referrer, Seiten, Datum/Uhrzeit, IP) verarbeitet, um Stabilität und Sicherheit zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO).',
    'privacy.cookies':'V. Cookies & Einwilligungsverwaltung',
    'privacy.cookies.text':'Technisch notwendige Cookies setzen wir stets; optionale (Statistik/Marketing) nur mit Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Widerruf jederzeit über den Cookie‑Banner. Details in der Cookie‑Richtlinie.',
    'privacy.contact':'VI. Kontaktaufnahme per E‑Mail / Formular',
    'privacy.contact.text':'Ihre Angaben werden zur Bearbeitung der Anfrage verarbeitet (Art. 6 Abs. 1 lit. b oder f DSGVO) und nach Abschluss gelöscht, sofern keine Pflichten entgegenstehen.',
    'privacy.newsletter':'VII. Newsletter (falls angeboten)',
    'privacy.newsletter.text':'Bei Anmeldung verarbeiten wir E‑Mail (optional Name/Adresse), IP und Zeitpunkt. Versand nur mit Einwilligung; Widerruf jederzeit möglich.',
    'privacy.embeds':'VIII. Eingebundene Inhalte & Drittanbieter',
    'privacy.embeds.text':'Externe Links/Buttons (z. B. LinkedIn, Instagram) übertragen bei Klick Daten an den Anbieter. Bitte die Datenschutzhinweise dort beachten.',
    'privacy.processing':'IX. Auftragsverarbeitung / Hosting',
    'privacy.processing.text':'Einsatz von Dienstleistern gem. Art. 28 DSGVO mit Auftragsverarbeitungsverträgen.',
    'privacy.security':'X. Datensicherheit',
    'privacy.security.text':'Wir setzen technische und organisatorische Maßnahmen (z. B. TLS) zum Schutz Ihrer Daten ein.',
    'privacy.update':'XI. Aktualität',
    'privacy.update.text':'Diese Datenschutzerklärung wird bei Bedarf angepasst.',
    'privacy.lastUpdated':'Stand',
    'cookiePolicy.title.h1':'Cookie‑Richtlinie',
    'cookiePolicy.intro':'Diese Richtlinie erläutert den Einsatz von Cookies und ähnlichen Technologien und wie Sie Ihre Einwilligung verwalten können.',
    'cookiePolicy.what':'1. Was sind Cookies?',
    'cookiePolicy.what.text':'Cookies sind kleine Textdateien, die Ihr Browser auf Ihrem Endgerät speichert.',
    'cookiePolicy.legal':'2. Rechtsgrundlagen',
    'cookiePolicy.legal.text':'Notwendige Cookies: Art. 6 Abs. 1 lit. f DSGVO. Optionale Cookies (Statistik/Marketing): Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, jederzeit widerruflich).',
    'cookiePolicy.cats':'3. Cookie‑Kategorien',
    'cookiePolicy.cat.necessary':'Notwendig: Grundfunktionen (Navigation, Sicherheit, Sprache).',
    'cookiePolicy.cat.functional':'Funktional: Komfortfunktionen (Einstellungen merken).',
    'cookiePolicy.cat.analytics':'Statistik: anonyme Reichweitenanalyse (nur mit Einwilligung).',
    'cookiePolicy.cat.marketing':'Marketing: personalisierte Inhalte/Verknüpfungen zu Drittanbietern (nur mit Einwilligung).',
    'cookiePolicy.third':'4. Drittanbieter',
    'cookiePolicy.third.text':'Bei Einwilligung können Cookies/Tracker von Drittanbietern gesetzt werden (z. B. Social Media). Es gelten deren Datenschutzbestimmungen.',
    'cookiePolicy.retention':'5. Speicherdauer / Löschung',
    'cookiePolicy.retention.text':'Session‑Cookies werden beim Schließen des Browsers gelöscht; persistente Cookies bleiben bis zum Ablauf oder zur manuellen Löschung.',
    'cookiePolicy.manage':'6. Verwaltung der Einwilligung',
    'cookiePolicy.manage.text':'Über unseren Cookie‑Banner können Sie Kategorien aktivieren/deaktivieren und Ihre Auswahl jederzeit ändern oder widerrufen.',
    'cookiePolicy.browser':'7. Browser‑Einstellungen',
    'cookiePolicy.browser.text':'Im Browser (Datenschutz/Sicherheit) können Cookies blockiert/gelöscht werden; Funktionen können eingeschränkt sein.',
    'cookiePolicy.change':'8. Änderungen',
    'cookiePolicy.change.text':'Wir aktualisieren diese Richtlinie bei Bedarf.'
  });

  Object.assign(DICT.en, {
    'legal.common.phone':'Phone',
    'legal.common.email':'E‑mail',
    'legal.country':'Germany',
    'legal.imprint.title':'Legal Notice',
    'legal.imprint.address':'Information pursuant to Sec. 5 German Telemedia Act (TMG)',
    'legal.representedBy':'Represented by',
    'legal.contact':'Contact',
    'legal.register':'Commercial Register',
    'legal.register.details':'Registered with the commercial register.',
    'legal.register.court':'Local Court',
    'legal.register.number':'Registration No.',
    'legal.vat':'VAT ID',
    'legal.vat.details':'Value Added Tax Identification No. pursuant to Sec. 27a UStG',
    'legal.dispute':'Dispute Resolution',
    'legal.dispute.text1':'The European Commission provides a platform for online dispute resolution:',
    'legal.dispute.text2':'We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.',
    'legal.liability.content':'Liability for Content',
    'legal.liability.content.text':'As a service provider, we are responsible for our own content pursuant to Sec. 7 (1) TMG. Under Secs. 8–10 TMG, we are not obliged to monitor transmitted or stored third‑party information. Obligations to remove or block the use of information under general laws remain unaffected. Liability is only possible from the time of knowledge of a specific infringement.',
    'legal.liability.links':'Liability for Links',
    'legal.liability.links.text':'Our website contains links to external third‑party websites over whose content we have no influence. The respective provider is responsible for such content. Illegal contents were not recognizable at the time of linking. If we become aware of infringements, we will remove such links immediately.',
    'legal.copyright':'Copyright',
    'legal.copyright.text':'The contents created by us are subject to German copyright law. Reproduction, adaptation, distribution and exploitation outside the limits of copyright require the consent of the rights holders. Where content was not created by us, third‑party copyrights are respected.',
    'legal.image.credits':'Image Credits',
    'privacy.title':'Privacy Policy',
    'privacy.controller':'I. Controller',
    'privacy.rights':'II. Data Subject Rights',
    'privacy.rights.text':'Rights of access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18), portability (Art. 20), complaint (Art. 77), and the right to object (Art. 21) to processing based on Art. 6 (1) (f) GDPR.',
    'privacy.general':'III. General Information on Data Processing',
    'privacy.general.text':'We process personal data only as necessary to provide a functional and secure website as well as our services (Art. 6 (1) (a), (b), (c), (f) GDPR). Data is deleted once the purpose no longer applies and retention periods expire.',
    'privacy.logs':'IV. Server Log Files',
    'privacy.logs.text':'When you access our website, technical data (browser, OS, referrer, pages viewed, date/time, IP) is processed to ensure stability and security (Art. 6 (1) (f) GDPR).',
    'privacy.cookies':'V. Cookies & Consent Management',
    'privacy.cookies.text':'We always set technically necessary cookies; optional cookies (analytics/marketing) are set only with consent (Art. 6 (1) (a) GDPR). You can withdraw consent at any time via the cookie banner. See the Cookie Policy for details.',
    'privacy.contact':'VI. Contact via E‑mail / Forms',
    'privacy.contact.text':'We process your details to handle your request (Art. 6 (1) (b) or (f) GDPR) and delete the data once completed unless retention obligations apply.',
    'privacy.newsletter':'VII. Newsletter (if offered)',
    'privacy.newsletter.text':'When you subscribe, we process your e‑mail (optionally name/address), IP and timestamp. Newsletters are sent only with consent; you may withdraw at any time.',
    'privacy.embeds':'VIII. Embedded Content & Third Parties',
    'privacy.embeds.text':'External links/buttons (e.g., LinkedIn, Instagram) may transmit data to the provider when clicked. Please refer to their privacy policies.',
    'privacy.processing':'IX. Processors / Hosting',
    'privacy.processing.text':'Use of service providers in accordance with Art. 28 GDPR with data processing agreements.',
    'privacy.security':'X. Data Security',
    'privacy.security.text':'We implement technical and organizational measures (e.g., TLS) to protect your data.',
    'privacy.update':'XI. Updates',
    'privacy.update.text':'This Privacy Policy will be updated as required.',
    'privacy.lastUpdated':'Last updated',
    'cookiePolicy.title.h1':'Cookie Policy',
    'cookiePolicy.intro':'This policy explains the use of cookies and similar technologies and how you can manage your consent.',
    'cookiePolicy.what':'1. What are Cookies?',
    'cookiePolicy.what.text':'Cookies are small text files stored by your browser on your device.',
    'cookiePolicy.legal':'2. Legal Bases',
    'cookiePolicy.legal.text':'Necessary cookies: Art. 6 (1) (f) GDPR. Optional cookies (analytics/marketing): Art. 6 (1) (a) GDPR (consent, revocable at any time).',
    'cookiePolicy.cats':'3. Categories of Cookies',
    'cookiePolicy.cat.necessary':'Necessary: basic functions (navigation, security, language).',
    'cookiePolicy.cat.functional':'Functional: convenience features (remembering settings).',
    'cookiePolicy.cat.analytics':'Analytics: anonymous reach measurement (consent only).',
    'cookiePolicy.cat.marketing':'Marketing: personalized content/links to third parties (consent only).',
    'cookiePolicy.third':'4. Third Parties',
    'cookiePolicy.third.text':'With consent, third‑party cookies/trackers may be set (e.g., social media). Their privacy policies apply.',
    'cookiePolicy.retention':'5. Retention / Deletion',
    'cookiePolicy.retention.text':'Session cookies are deleted when you close the browser; persistent cookies remain until expiration or manual deletion.',
    'cookiePolicy.manage':'6. Managing Consent',
    'cookiePolicy.manage.text':'Use our cookie banner to enable/disable categories and change or withdraw your choices at any time.',
    'cookiePolicy.browser':'7. Browser Settings',
    'cookiePolicy.browser.text':'You can block/delete cookies in your browser (privacy/security settings); functionality may be impaired.',
    'cookiePolicy.change':'8. Changes',
    'cookiePolicy.change.text':'We update this policy as required.'
  });
}catch(e){ console.error('i18n legal keys extend failed', e); }

function t(k){return (DICT[LANG]&&DICT[LANG][k])||DICT.de[k]||k}
    
    function applyI18n(){
      document.documentElement.lang=LANG;
        
      //Normale textbausteine
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const k=el.getAttribute('data-i18n'); if(!k) return; el.innerHTML=t(k)
      });
        
        // Placeholder von Inputs/Textareas
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        const k = el.getAttribute('data-i18n-placeholder');
        if(!k) return;
        el.setAttribute('placeholder', t(k));
      });    
      const currentFlag = document.getElementById('current-flag');
      if (currentFlag) {
        currentFlag.className = 'flag-icon flag-icon-' + (LANG === 'en' ? 'gb' : LANG);
      }
      const desc=document.querySelector('meta[name="description"]'); if(desc) desc.setAttribute('content', t('hero.lead'));
      document.title = 'Ouya Sphere – ' + (LANG==='de'?'Unternehmensberatung':'Management Consulting');
      updateThemeButton();
    }

    const indicator = document.getElementById('indicator');
    function moveIndicator(link){
      if(!indicator || !link) return;
      const pr = link.parentElement.getBoundingClientRect();
      const r  = link.getBoundingClientRect();
      indicator.style.left = (r.left - pr.left) + 'px';
      indicator.style.width = r.width + 'px';
    }

    const sections = Array.from(document.querySelectorAll('main > section'));
    const navLinks = Array.from(document.querySelectorAll('nav a.nav-link'));

    function setActiveByScroll(){
      const center = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0];
      for(const s of sections){
        const top = s.offsetTop;
        const bottom = top + s.offsetHeight;
        if(center >= top && center < bottom){ current = s; break; }
      }
      const id = current.id;
      const href = (id === 'home-section') ? '#home' : ('#' + id);
      const link = navLinks.find(a => a.getAttribute('href') === href);
      navLinks.forEach(a => a.classList.toggle('active', a === link));
      moveIndicator(link);
    }

    const secObserver = new IntersectionObserver(() => { setActiveByScroll(); }, { rootMargin:'-30% 0px -50% 0px', threshold:0.01 });


    function initCounters(){
      const els = document.querySelectorAll('.metrics .number[data-target]'); if(!els.length) return;
      const obs = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
          if(e.isIntersecting){
            const el = e.target; const end = +el.getAttribute('data-target'); const dur = 1300; const plus = el.getAttribute('data-suffix') || ''; const start = 0; const t0 = performance.now();
            function step(t){ const p = Math.min(1, (t - t0) / dur); const val = Math.floor(start + (end - start) * p); el.textContent = (p < 1 ? val : end) + (p >= 1 ? plus : ''); if(p < 1) requestAnimationFrame(step); }
            requestAnimationFrame(step); obs.unobserve(el);
          }
        });
      }, {threshold:.4});
      els.forEach(el=> obs.observe(el));
    }

   function initCasesCarousel(){
  const root = document.getElementById('cases');
  if (!root) return;

  const cards = root.querySelectorAll('.case-card');
  if (!cards.length) return;

  const prev = root.querySelector('[data-case-nav="prev"]');
  const next = root.querySelector('[data-case-nav="next"]');

  let current = 0;

  function show(idx){
    if (!cards.length) return;
    const total = cards.length;
    current = (idx + total) % total;
    cards.forEach((card, i)=>{
      card.classList.toggle('active', i === current);
    });
  }

  prev && prev.addEventListener('click', ()=> show(current - 1));
  next && next.addEventListener('click', ()=> show(current + 1));

  // Start mit erster Karte
  show(0);
}


    /* SVGs inline einbetten und einfärbbar machen */
    async function inlineSVGIcons(){
      const nodes = document.querySelectorAll('.icon[data-src]');
      for (const el of nodes){
        const src = el.getAttribute('data-src');
        const w = el.getAttribute('data-w') || '36';
        const h = el.getAttribute('data-h') || '36';
        try{
          const resp = await fetch(src, { cache: 'force-cache' });
          if(!resp.ok) throw new Error('HTTP ' + resp.status);
          const txt = await resp.text();
          const doc = new DOMParser().parseFromString(txt, 'image/svg+xml');
          let svg = doc.documentElement;
          if(!svg || svg.nodeName.toLowerCase() !== 'svg') throw new Error('Invalid SVG');

          svg.setAttribute('width', w);
          svg.setAttribute('height', h);
          svg.setAttribute('aria-hidden', 'true');
          svg.classList.add('icon-svg');

          svg.querySelectorAll('[fill]').forEach(n=>{ if(n.getAttribute('fill') !== 'none') n.setAttribute('fill','currentColor'); });
          svg.querySelectorAll('[stroke]').forEach(n=>{ if(n.getAttribute('stroke') !== 'none') n.setAttribute('stroke','currentColor'); });

          el.replaceWith(svg);
        }catch(e){
          const img = document.createElement('img');
          img.src = src; img.width = +w; img.height = +h; img.alt = ''; img.className = 'icon-img';
          el.replaceWith(img);
        }
      }
    }

    window.addEventListener('DOMContentLoaded',()=>{
      try{
        applyI18n();
      }catch(e){ console.error('i18n/theme init failed', e); }

      function setHeaderOffset(){ const h=document.getElementById('topbar')?.offsetHeight || 0; document.documentElement.style.setProperty('--header-h', h + 'px'); }
      setHeaderOffset();
      window.addEventListener('resize', ()=>{ setHeaderOffset(); setActiveByScroll(); });

const langDropdown = document.getElementById('lang-dropdown');
	      const langToggle = document.getElementById('lang-toggle');
	      const langOptions = document.querySelectorAll('.lang-option');
	
	      // Funktion zum Umschalten des Dropdowns
	      function toggleDropdown(open) {
	        const content = document.getElementById('lang-dropdown-content');
	        if (content) {
	          content.style.display = open ? 'block' : 'none';
	          langToggle.setAttribute('aria-expanded', open);
	        }
	      }
	
	      // Event-Listener für den Button, um das Dropdown zu öffnen/schließen
	      if (langToggle) {
	        langToggle.addEventListener('click', (e) => {
	          e.stopPropagation();
	          const isExpanded = langToggle.getAttribute('aria-expanded') === 'true';
	          toggleDropdown(!isExpanded);
	        });
	      }
	
	      // Event-Listener für die Sprachoptionen
	      langOptions.forEach(option => {
	        option.addEventListener('click', (e) => {
	          e.preventDefault();
	          const newLang = option.getAttribute('data-lang');
	          if (newLang !== LANG) {
	            LANG = newLang;
	            localStorage.setItem('lang', LANG);
	            applyI18n();
	            // Re-check active link for indicator after text change
	            setTimeout(() => setActiveByScroll(), 50);
	          }
	          toggleDropdown(false); // Dropdown nach Auswahl schließen
	        });
	      });
	
	      // Dropdown schließen, wenn außerhalb geklickt wird
	      document.addEventListener('click', (e) => {
	        if (langDropdown && !langDropdown.contains(e.target)) {
	          toggleDropdown(false);
	        }
	      });
// Simple intersection observer for section fade-in
const sectionEls = document.querySelectorAll('.section');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sectionEls.forEach(sec => io.observe(sec));
} else {
  // Fallback: alles sichtbar
  sectionEls.forEach(sec => sec.classList.add('is-visible'));
}

      const homeLink=document.querySelector('nav a.nav-link[href="#home"]');
      if(homeLink){ homeLink.classList.add('active'); moveIndicator(homeLink); }

      const progress=document.getElementById('progress'); const topbar=document.getElementById('topbar');
      window.addEventListener('scroll', ()=>{ const s = window.scrollY>20; topbar.classList.toggle('scrolled', s); setHeaderOffset(); const h=document.documentElement; const sc=(h.scrollTop)/(h.scrollHeight - h.clientHeight); progress.style.width=(sc*100)+'%'; });

      document.querySelectorAll('main > section').forEach(s=> secObserver.observe(s));
      window.addEventListener('scroll', setActiveByScroll);
      setActiveByScroll();

      requestAnimationFrame(()=>{ try{ initCasesCarousel(); }catch(e){ console.error('carousel init failed', e); } });
      try{ initCounters(); }catch(e){ console.error('counters init failed', e); }

            const form=document.getElementById('contact-form');
      const statusEl=document.getElementById('form-status');
      const mailtoBtn=document.getElementById('mailto-btn');

      if(form){
        form.addEventListener('submit', async (e)=>{
          e.preventDefault();

          const recaptchaToken = typeof grecaptcha !== 'undefined'
          ? grecaptcha.getResponse()
          : '';

        if (!recaptchaToken) {
          if (statusEl) {
            statusEl.textContent = (LANG === 'de')
              ? 'Bitte bestätigen Sie, dass Sie kein Roboter sind.'
              : 'Please confirm that you are not a robot.';
            statusEl.style.color = '#b91c1c';
          }
          return;
        }

        const payload = {
          name: form.name.value.trim(),
          email: form.email.value.trim(),
          company: form.company.value.trim(),
          message: form.message.value.trim(),
          recaptcha: recaptchaToken
        };


          if(!payload.name || !payload.email || !payload.message){
            if(statusEl){
              statusEl.textContent = (LANG==='de')
                ? 'Bitte füllen Sie alle Pflichtfelder aus.'
                : 'Please fill in all required fields.';
              statusEl.style.color='var(--brand-2)';
            }
            return;
          }

          if(statusEl){
            statusEl.textContent = (LANG==='de')
              ? 'Nachricht wird gesendet …'
              : 'Sending message…';
            statusEl.style.color='var(--muted)';
          }

          try{
            const res = await fetch('contact.php', {
              method:'POST',
              headers:{ 'Content-Type':'application/json' },
              body: JSON.stringify(payload)
            });

            const data = await res.json().catch(()=>({}));

            if(!res.ok || data.error){
              throw new Error(data.error || 'Serverfehler');
            }

            if(statusEl){
              statusEl.textContent = (LANG==='de')
                ? 'Vielen Dank – Ihre Nachricht wurde gesendet.'
                : 'Thank you – your message has been sent.';
              statusEl.style.color='var(--brand-2)';
            }
            form.reset();
          }catch(err){
            console.error(err);
            if(statusEl){
              statusEl.textContent = (LANG==='de')
                ? 'Fehler beim Senden. Bitte versuchen Sie es erneut oder nutzen Sie die E-Mail-Option.'
                : 'Sending failed. Please try again or use the email option.';
              statusEl.style.color='#b91c1c';
            }
          }
        });
      }

      if(mailtoBtn){
        mailtoBtn.addEventListener('click',(e)=>{
          e.preventDefault();

          const subject=encodeURIComponent(
            LANG==='de'
              ? 'Anfrage über ouya-sphere.de'
              : 'Inquiry via ouya-sphere.de'
          );
          const body=encodeURIComponent(
            `Name: ${form.name.value}\n`+
            `E-Mail: ${form.email.value}\n`+
            `Firma: ${form.company.value}\n\n`+
            `Nachricht:\n${form.message.value}`
          );

          window.location.href=`mailto:info@ouya-sphere.de?subject=${subject}&body=${body}`;
        });
      }


      // Cookie-Dialog
      try{
        const cookie=document.getElementById('cookie'); 
        const backdrop=document.getElementById('cookie-backdrop'); 
        const KEY='cookie-consent-v1';
        function show(){ cookie?.classList.add('visible'); backdrop?.classList.add('visible'); setTimeout(()=>{ document.getElementById('cookie-accept')?.focus(); }, 0); }
        function hide(){ cookie?.classList.remove('visible'); backdrop?.classList.remove('visible'); }

        if(cookie && (!localStorage.getItem(KEY) || location.hash==='#cookie')) show();

        const acc=document.getElementById('cookie-accept'); 
        const dec=document.getElementById('cookie-decline');
        acc && (acc.onclick=()=>{ hide(); localStorage.setItem(KEY, JSON.stringify({analytics: document.getElementById('ck-analytics')?.checked || false})); });
        dec && (dec.onclick=()=>{ hide(); localStorage.setItem(KEY, JSON.stringify({analytics:false})); });
        backdrop?.addEventListener('click', hide);
        document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ hide(); }});
        window.showCookieBanner = show;
      }catch(e){ console.error('cookie init failed', e); }

      // Mobile-Menü
              const menuBtn = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuBackdrop = document.getElementById('menu-backdrop');

        function openMenu() {
          if (!mobileMenu || !menuBtn) return;
          mobileMenu.classList.add('open');
          menuBackdrop?.classList.add('open');
          menuBtn.classList.add('is-open');

          menuBtn.setAttribute('aria-expanded', 'true');
          mobileMenu.setAttribute('aria-hidden', 'false');
        }

        function closeMenu() {
          if (!mobileMenu || !menuBtn) return;
          mobileMenu.classList.remove('open');
          menuBackdrop?.classList.remove('open');
          menuBtn.classList.remove('is-open');

          menuBtn.setAttribute('aria-expanded', 'false');
          mobileMenu.setAttribute('aria-hidden', 'true');
        }

        menuBtn?.addEventListener('click', () => {
          const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
          if (expanded) {
            closeMenu();
          } else {
            openMenu();
          }
        });

        menuBackdrop?.addEventListener('click', closeMenu);

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            closeMenu();
          }
        });

        // Close the menu when a mobile link is clicked
        document.querySelectorAll('#mobile-menu a').forEach(link => {
          link.addEventListener('click', closeMenu);
        });

      // Jahr
      const yEl=document.getElementById('year'); if(yEl) yEl.textContent = new Date().getFullYear();

      // Icons inline laden (nicht blockierend)
      try{ inlineSVGIcons(); }catch(e){ console.error('inline SVG failed', e); }
    });
