/*
 * All site content lives here. Edit this file to update the portfolio;
 * index.html and main.js only handle layout and interaction.
 */
window.PORTFOLIO = {
  name: "Manish Sakhakarmy",
  role: "Mechanical / Process Engineer",
  credential: "Ph.D., Biosystems Engineering",
  location: "Billings, MT",
  tagline: "Engineer · Researcher · Builder",
  summary:
    "I'm a mechanical and process engineer with a Ph.D. in Biosystems Engineering. At ASI Industrial I design processes and material-handling systems for renewable feedstocks. Before that, my doctoral research at Auburn University turned biomass into bio-oil, biochar and biofuels through pyrolysis and hydrothermal liquefaction, from reactor design to characterization to life cycle analysis.",
  photo: "assets/portfolio_image.png",

  contact: {
    email: "sakhakarmym@gmail.com",
    phone: "+14064266585",
    linkedin: "https://www.linkedin.com/in/manish-sakhakarmy/",
    github: "https://github.com/sakhamanish",
    scholar: "https://scholar.google.com/citations?user=wd5q0rMAAAAJ&hl=en",
  },

  // type: "work" | "education". Most recent first.
  timeline: [
    {
      type: "work",
      title: "Mechanical / Process Engineer",
      org: "ASI Industrial",
      place: "Billings, MT",
      start: "Dec 2024",
      end: "Present",
      points: [
        "Designing a novel process for efficient storage and handling of renewable feedstocks.",
        "Creating and reviewing process flow diagrams and piping and instrumentation diagrams.",
        "Analyzing scopes of work and specifications for material handling systems.",
        "Scheduling construction and design projects.",
        "Generating equipment and wiring lists for material handling systems.",
        "Selecting and procuring equipment and components for material handling systems.",
      ],
    },
    {
      type: "education",
      title: "Ph.D., Biosystems Engineering",
      org: "Auburn University, Samuel Ginn College of Engineering",
      place: "Auburn, AL",
      start: "Jan 2022",
      end: "Dec 2024",
      points: ["Best Dissertation Award in Biosystems Engineering, Auburn University (2025)."],
    },
    {
      type: "work",
      title: "Research Assistant",
      org: "Center for Bioenergy and Bioproducts, Auburn University",
      place: "Auburn, AL",
      start: "Jan 2022",
      end: "Dec 2024",
      points: [
        "Performed hydrothermal liquefaction (HTL) and pyrolysis of lignocellulosic biomass to produce bio-oil.",
        "Designed and used fixed bed and fluidized bed reactors for thermochemical conversion.",
        "Characterized bio-oil using GC-MS, NMR, thermogravimetric analysis, ultimate analysis and Karl Fischer titration.",
        "Provided characterized bio-oil for additive manufacturing in the NSF-funded PrinTimber project.",
        "Conducted hydrotreatment experiments to produce biofuels and other value-added products.",
        "Prepared and characterized biochar for wastewater treatment and bio-oil hydrotreatment.",
        "Designed reactor components in SOLIDWORKS and AutoCAD.",
        "Optimized pyrolysis operating parameters with response surface methodology (RSM) in Minitab.",
        "Performed life cycle analysis (LCA) of pine pyrolysis for biofuel production.",
        "Performed statistical analysis of experimental results in R.",
      ],
    },
    {
      type: "work",
      title: "Electro-mechanical Engineering Technician Intern",
      org: "Hamilton Company",
      place: "Reno, NV",
      start: "Jun 2021",
      end: "Aug 2021",
      points: [
        "Assembled simple to sophisticated laboratory fluid handling equipment from blueprints and schematics.",
        "Worked in a production environment assembling mechanical laboratory devices.",
        "Used hand tools, tweezers and other light machinery.",
        "Used standard test equipment, including voltmeters and product-specific testers.",
      ],
    },
    {
      type: "education",
      title: "M.S., Mechanical Engineering",
      org: "University of Nevada, Reno, College of Engineering",
      place: "Reno, NV",
      start: "Jan 2020",
      end: "Dec 2021",
      points: [],
    },
    {
      type: "work",
      title: "Graduate Assistant",
      org: "Department of Mechanical Engineering, University of Nevada, Reno",
      place: "Reno, NV",
      start: "Jan 2020",
      end: "May 2021",
      points: [
        "Studied the printability of nanocomposites made by adding laponite to graphene oxide.",
        "Studied the feasibility of direct ink writing for additive manufacturing with yield-stress materials.",
        "Mentored undergraduates as a teaching assistant for Computer Aided Design and Manufacturing, and Additive Manufacturing Technology.",
        "Assisted in teaching SOLIDWORKS to a class of about 20 students.",
      ],
    },
    {
      type: "work",
      title: "Assistant Lecturer",
      org: "Khwopa Engineering College",
      place: "Bhaktapur, Nepal",
      start: "May 2018",
      end: "Dec 2020",
      points: [
        "Taught engineering drawing interactively: limit dimensioning, assembly and disassembly, isometric and oblique drawings, orthographic projection, sectional and auxiliary views.",
        "Taught thermodynamics through lectures and labs: energy and heat transfer, the first and second laws, power cycles, refrigeration and air conditioning.",
        "Set question papers and examined students' understanding.",
      ],
    },
    {
      type: "work",
      title: "Regional Officer",
      org: "V.G Automobiles Pvt. Ltd.",
      place: "Kathmandu, Nepal",
      start: "Jul 2017",
      end: "Jan 2018",
      points: [
        "Performed pre-delivery inspection (PDI) of three-wheelers.",
        "Solved technical engine problems and trained technicians on three-wheeler specifications and functions.",
        "Delivered spare parts, service and sales training to dealers and supported marketing.",
      ],
    },
    {
      type: "work",
      title: "Mechanical Engineer",
      org: "Chandra and Basant Construction Pvt. Ltd.",
      place: "Lalitpur, Nepal",
      start: "Feb 2017",
      end: "Apr 2017",
      points: [
        "Supervised and kept records of all vehicles and heavy equipment.",
        "Made maintenance and servicing decisions for heavy equipment.",
        "Planned and executed road construction with the project manager.",
      ],
    },
    {
      type: "education",
      title: "B.E., Mechanical Engineering",
      org: "Tribhuvan University, Institute of Engineering, Thapathali Campus",
      place: "Kathmandu, Nepal",
      start: "Sep 2012",
      end: "Oct 2016",
      points: [
        "Campus topper in the seventh semester; ranked 3rd of about 350 students in the B.E. program.",
        "Merit-based scholarship from the Institute of Engineering.",
      ],
    },
  ],

  skills: [
    {
      group: "Reactors",
      items: ["Hydrothermal liquefaction reactors", "Fixed bed reactors", "Fluidized bed reactors"],
    },
    {
      group: "Characterization",
      items: [
        "Ultimate (CHNS) analysis", "Thermogravimetric analysis (TGA)", "Micro-GC", "GC-MS", "GC-FID",
        "FTIR", "HHV calorimetry", "Viscometry & rheometry", "Karl Fischer titration",
        "Total organic carbon (TOC)", "NMR (¹H, ¹³C, ³¹P)", "Rotary evaporation", "BET surface area",
        "SEM", "EDS",
      ],
    },
    {
      group: "Engineering software",
      items: ["AutoCAD", "Revit", "Inventor", "SOLIDWORKS", "SuperPro Designer", "ANSYS", "System Advisor Model"],
    },
    {
      group: "Programming",
      items: ["Python", "R", "MATLAB", "SAS", "C", "G-code"],
    },
    {
      group: "Other",
      items: ["Life cycle analysis (LCA)", "Origin", "Zotero", "MS Excel", "MS Word", "PowerPoint"],
    },
  ],

  // Topics drive the publication filter chips. `doi` may be null until one is known;
  // the site then links to a Google Scholar search for the title instead.
  publications: [
    {
      year: 2027,
      authors: "Sakhakarmy, M., Biswas, B., Wongsurakul, P., Feyzbar-Khalkhali-Nejad, F., Ivanchenko, P., Jaisi, D. P., … & Adhikari, S.",
      title: "Efficient upgrading of pyrolysis bio-oil via hydrodeoxygenation using cost-effective Cu-based catalysts supported on alumina",
      venue: "Fuel, 428, 140271",
      doi: null,
      topics: ["Upgrading & catalysis"],
    },
    {
      year: 2026,
      authors: "Wongsurakul, P., Chotigkrai, N., Kiatkittipong, W., Sakhakarmy, M., Hongloi, N., Khanal, C. K., … & Adhikari, S.",
      title: "Integrated experimental and machine learning study of pyrolysis oil and model waste cooking oil co-hydrotreating over NiMo/γ-Al2O3",
      venue: "Biomass and Bioenergy, 109880",
      doi: null, // add when known, e.g. "10.1016/j.biombioe.…"
      topics: ["Upgrading & catalysis", "Modeling & statistics"],
    },
    {
      year: 2026,
      authors: "Sakhakarmy, M., Gaertner, J., Wongsurakul, P., Ivanchenko, P., Jaisi, D. P., Ammar, M., Baltrusaitis, J., & Adhikari, S.",
      title: "Response surface method to optimize bio-oil yield and hydroxyl number from pine pyrolysis using a bubbling fluidized bed reactor",
      venue: "Renewable Energy, 125208",
      doi: "10.1016/j.renene.2026.125208",
      topics: ["Pyrolysis", "Modeling & statistics"],
    },
    {
      year: 2025,
      authors: "Shezi, M., Sakhakarmy, M., Adhikari, S., & Kiambi, S. L.",
      title: "Stabilization of the bio-oil organic phase via solvent-assisted hydrotreating, Part 1: Investigating the influence of various solvents",
      venue: "Bioengineering, 12(5), 537",
      doi: "10.3390/bioengineering12050537",
      topics: ["Upgrading & catalysis"],
    },
    {
      year: 2025,
      authors: "Drabold, E. T., Sakhakarmy, M., Shanmugam, S. R., Adhikari, S., Arthur, W., Rudar, M., Boersma, M., Wang, Q., & Higgins, B. T.",
      title: "Thermal hydrolysis of poultry byproducts for the production of microbial media",
      venue: "Scientific Reports, 15(1), 6107",
      doi: "10.1038/s41598-025-90411-7",
      topics: ["Hydrothermal"],
    },
    {
      year: 2024,
      authors: "Sakhakarmy, M., Kemp, A., Biswas, B., Kafle, S., & Adhikari, S.",
      title: "A comparative analysis of bio-oil collected using an electrostatic precipitator from the pyrolysis of Douglas fir, eucalyptus, and poplar biomass",
      venue: "Energies, 17(12), 2800",
      doi: "10.3390/en17122800",
      topics: ["Pyrolysis"],
    },
    {
      year: 2024,
      authors: "Sakhakarmy, M., Kafle, S., & Adhikari, S.",
      title: "Upcycling of pine and sodium silicate composites through pyrolysis: Effects of pyrolysis temperature and sodium silicate content",
      venue: "Energy Conversion and Management: X, 23, 100615",
      doi: "10.1016/j.ecmx.2024.100615",
      topics: ["Pyrolysis"],
    },
    {
      year: 2024,
      authors: "Bhattarai, A., Kafle, S., Sakhakarmy, M., Moogi, S., & Adhikari, S.",
      title: "Fluidized-bed gasification kinetics model development using genetic algorithm for biomass, coal, municipal plastic waste, and their blends",
      venue: "Energy, 133989",
      doi: "10.1016/j.energy.2024.133989",
      topics: ["Gasification", "Modeling & statistics"],
    },
    {
      year: 2024,
      authors: "Biswas, B., Sakhakarmy, M., Rahman, T., Jahromi, H., Adhikari, S., Krishna, B. B., Bhaskar, T., Baltrusaitis, J., Eisa, M., Kouzehkanan, S., & Oh, T. S.",
      title: "Selective production of phenolic monomer via catalytic depolymerization of lignin over cobalt-nickel-zirconium dioxide catalyst",
      venue: "Bioresource Technology, 130517",
      doi: "10.1016/j.biortech.2024.130517",
      topics: ["Upgrading & catalysis"],
    },
    {
      year: 2023,
      authors: "Biswas, B., Rahman, T., Sakhakarmy, M., Jahromi, H., Eisa, M., Baltrusaitis, J., Jahromi, H., Tobert, A., & Adhikari, S.",
      title: "Phosphorus adsorption using chemical and metal chloride activated biochars: Isotherms, kinetics, and mechanism study",
      venue: "Heliyon, 9(9)",
      doi: "10.1016/j.heliyon.2023.e19830",
      topics: ["Biochar"],
    },
    {
      year: 2023,
      authors: "Khanal, G., Shrestha, R., Devkota, N., Sakhakarmy, M., Mahato, S., Paudel, U. R., Acharya, Y., & Khanal, C. K.",
      title: "An investigation of green supply chain management practices on organizational performance using multivariate statistical analysis",
      venue: "Supply Chain Analytics, 3, 100034",
      doi: "10.1016/j.sca.2023.100034",
      topics: ["Modeling & statistics"],
    },
    {
      year: 2021,
      authors: "Sakhakarmy, M., Tian, S., Raymond, L., Xiong, G., Chen, J., & Jin, Y.",
      title: "Printability study of self-supporting graphene oxide-laponite nanocomposites for 3D printing applications",
      venue: "The International Journal of Advanced Manufacturing Technology, 114(1), 343-355",
      doi: "10.1007/s00170-021-06870-5",
      topics: ["Additive manufacturing"],
    },
    {
      year: 2019,
      authors: "Kshetri, A., Sakhakarmy, M., & Gusain, R.",
      title: "Performance study of 4-stroke diesel engine using soybean oil blend",
      venue: "Journal of Science and Engineering, 7, 20-26",
      doi: "10.3126/jsce.v7i0.26785",
      topics: ["Biofuels & engines"],
    },
  ],

  presentations: [
    {
      kind: "Oral",
      event: "ASABE 2024 Annual International Meeting, Anaheim, CA",
      date: "Jul 2024",
      title: "Upcycling of pine and sodium silicate composites through pyrolysis: Effects of pyrolysis temperature and sodium silicate content",
    },
    {
      kind: "Oral",
      event: "Auburn University Research Symposium",
      date: "Mar 2024",
      title: "Application of pyrolysis to upcycle pine and sodium silicate composites",
    },
    {
      kind: "Poster",
      event: "Graduate Engineering Research Showcase, Auburn University",
      date: "Oct 2023",
      title: "Investigation of recyclability of pine and sodium silicate composites through pyrolysis",
    },
    {
      kind: "Oral",
      event: "ASABE 2023 Annual International Meeting, Omaha, NE",
      date: "Jul 2023",
      title: "Comparative study on pyrolysis of Douglas fir, eucalyptus, and poplar for novolac production",
    },
    {
      kind: "Poster",
      event: "PrinTimber Annual Meeting, Auburn, AL",
      date: "May 2023",
      title: "Depolymerization of lignocellulosic biomass via pyrolysis",
    },
  ],

  supervision: [
    "Supervised a Fulbright scholar from South Africa on biomass pyrolysis, bio-oil characterization and hydrotreatment (Aug 2023 – May 2024).",
    "Supervised an undergraduate student optimizing the laboratory pyrolysis reactor (Summer 2024).",
  ],

  awards: [
    { year: "2025", title: "Best Dissertation Award, Biosystems Engineering", org: "Auburn University" },
    { year: "2023", title: "1st place, ASABE Student Oral/Poster Competition", org: "Omaha, NE" },
    { year: "2023", title: "Presentation Excellence Award", org: "ASABE Annual International Meeting" },
    { year: "2023", title: "1st place, Biosystems Engineering Trivia (team)", org: "Auburn University" },
    { year: "", title: "Campus topper, 7th semester of B.E.; ranked 3rd of ~350 students", org: "Thapathali Campus" },
    { year: "", title: "Merit-based scholarship for B.E. study", org: "Institute of Engineering" },
    { year: "2010", title: "School Topper Award, secondary school", org: "" },
  ],

  projects: [
    {
      name: "Jhilke",
      blurb:
        "A local-first job search agent. It plans searches across job APIs, ranks postings against my resume with a local LLM, and drafts tailored resumes and cover letters.",
      tags: ["Python", "FastAPI", "Ollama", "React", "TypeScript"],
      url: null, // private repository
    },
    {
      name: "LoCha",
      blurb:
        "A private, local chat assistant that answers questions about your documents using retrieval-augmented generation (RAG) on your own machine.",
      tags: ["Python", "RAG", "Ollama", "Llama 3.2"],
      url: "https://github.com/sakhamanish/LoCha",
    },
  ],
};
