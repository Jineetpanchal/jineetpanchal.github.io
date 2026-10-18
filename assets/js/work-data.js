/* ============================================================
   THE WORK — Editable Data File
   ------------------------------------------------------------
   To add a new item: copy any object below (including the { }),
   paste it into the array, and update the fields.
   To remove an item: delete its whole { ... } block.
   Save this file and re-upload it — no other file needs to change.

   FIELDS
   - type: "image" | "video" | "site" | "carousel"
   - category: "Graphic Design" | "Video Edits" | "Web Projects"
   - client: the brand/company name
   - title: short title for the piece
   - description: 1–3 sentences, what it is / what it did
   - thumb: path to the thumbnail image (required for all types)
   - src: for "image" — full-size image path (usually same as thumb)
          for "video" — path to the video file
          for "site"  — leave as "" (not used)
   - link: for "site" — the live URL. For image/video, leave as ""
   - slides: for "carousel" only — array of image paths, in order.
             Shows as a full-width strip card; click opens a swipeable viewer.
   - aspect: optional CSS aspect ratio for document pages, e.g. "1000 / 1415" (A4)
   - layout: for "carousel" — set to "doc" for portrait document pages (scrolling strip of pages)
   - note: optional small italic line under the description (e.g. confidentiality note)
   ============================================================ */

const WORK_ITEMS = [

  // ---------- WEB PROJECTS ----------
  {
    type: "site",
    category: "Web Projects",
    client: "Shri Dutt Jewellers",
    title: "Brand identity, content & website",
    description: "A concept jewellery brand built end-to-end — identity, copywriting, and a full site designed and built on Lovable. Used as a sandbox to sharpen web design and content-to-conversion skills outside of client work.",
    thumb: "assets/img/work/site-dutt-jewellers.jpg",
    src: "",
    link: "https://dutt-legacy-showcase.lovable.app/"
  },
  {
    type: "site",
    category: "Web Projects",
    client: "NorthNest Realty",
    title: "Brand identity, content & website",
    description: "A concept real-estate brand — identity, content strategy, and a full site designed and built on v0 by Vercel. Built to explore a second industry and a different site-building tool.",
    thumb: "assets/img/work/site-northnest-realty.jpg",
    src: "",
    link: "https://northnest.atoms.world"
  },
   {
  type: "site",
  category: "Web Projects",
  client: "SattvaMunch",
  title: "Full brand system, 3D-driven website & investor deck",
  description: "A complete brand build for a concept organic snack company — positioning, visual identity, a 4-flavor global campaign, a 3D-animated website with a real interactive product model, a finished brand film, and an investor pitch deck. Built end-to-end to demonstrate strategy, design, and web development together in one project.",
  thumb: "assets/img/work/site-sattvamunch.jpg",
  thumbVideo: "assets/img/work/sattvamunch-loop.mp4",
  src: "",
  link: "https://sattvamunch.ai.studio/"
},

  // ---------- VIDEO EDITS ----------
  {
    type: "video",
    category: "Video Edits",
    client: "Om Dental Care",
    title: "Clinic promo edit",
    description: "Full promotional edit for Om Dental Care — pacing, captions, and brand-consistent graphics cut for social and YouTube distribution.",
    thumb: "assets/img/work/om-dental-care-poster.jpg",
    src: "assets/video/om-dental-care.mp4"
  },
  {
    type: "video",
    category: "Video Edits",
    client: "Dental Solution",
    title: "School dental check-up camp recap",
    description: "Vertical recap edit of a community dental check-up camp run at a school — shot coverage cut into a fast, reels-ready story.",
    thumb: "assets/img/work/dental-solution-camp-poster.jpg",
    src: "assets/video/dental-solution-camp.mp4"
  },

  // ---------- MARKETING STRATEGY ----------
  {
    type: "carousel",
    layout: "doc",
    category: "Marketing Strategy",
    client: "Zolar Technology & MFG (Canada)",
    title: "3-month marketing plan — Month 1 in detail",
    description: "A marketing plan prepared for Zolar Technology, a Canadian dental and veterinary laser manufacturer. Month 1 is laid out in detail: platform audit, content pillars, weekly content calendar, paid media, creative production, KPIs, budget, and a week-by-week execution plan. A contents page at the front shows what is covered.",
    note: "Sections 4, 5, 7 and 8 (content calendar, paid advertising, KPIs and budget) are blurred because they contain company-specific schedules, ad budgets and performance targets. Full plan available to discuss in conversation.",
    thumb: "assets/img/work/zolar-strategy/zolar-strategy-01.jpg",
    slides: [
      "assets/img/work/zolar-strategy/zolar-strategy-01.jpg",
      "assets/img/work/zolar-strategy/zolar-strategy-02.jpg",
      "assets/img/work/zolar-strategy/zolar-strategy-03.jpg",
      "assets/img/work/zolar-strategy/zolar-strategy-04.jpg",
      "assets/img/work/zolar-strategy/zolar-strategy-05.jpg",
      "assets/img/work/zolar-strategy/zolar-strategy-06.jpg",
      "assets/img/work/zolar-strategy/zolar-strategy-07.jpg",
      "assets/img/work/zolar-strategy/zolar-strategy-08.jpg",
      "assets/img/work/zolar-strategy/zolar-strategy-09.jpg",
      "assets/img/work/zolar-strategy/zolar-strategy-10.jpg",
      "assets/img/work/zolar-strategy/zolar-strategy-11.jpg",
      "assets/img/work/zolar-strategy/zolar-strategy-12.jpg",
      "assets/img/work/zolar-strategy/zolar-strategy-13.jpg",
      "assets/img/work/zolar-strategy/zolar-strategy-14.jpg",
      "assets/img/work/zolar-strategy/zolar-strategy-15.jpg"
    ]
  },

  {
    type: "carousel",
    layout: "doc",
    aspect: "1000 / 1415",
    category: "Marketing Strategy",
    client: "Royal Truck & Trailer Sales (Canada)",
    title: "30-day launch strategy + 60-day roadmap",
    description: "A marketing strategy prepared for Royal Truck & Trailer Sales Ltd., a Canadian commercial truck and trailer dealership in Brampton, Ontario. It covers a full account audit, competitor benchmarking, buyer personas, a week-by-week 30-day plan, four video campaign concepts, a content calendar, paid media, an onboarding checklist, KPIs, and a high-level roadmap for months 2 and 3.",
    note: "Visible: cover, contents, buyer personas, Week 1 plan, one video campaign concept and the onboarding checklist. Blurred: the audit, benchmarking, Weeks 2–4, remaining video concepts, content calendar, paid ads, budget, KPIs, roadmap and executive summary, because they contain the company's account data, ad budgets and performance targets. Full strategy available to discuss in conversation.",
    thumb: "assets/img/work/royal-strategy/royal-strategy-01.jpg",
    slides: [
      "assets/img/work/royal-strategy/royal-strategy-01.jpg",
      "assets/img/work/royal-strategy/royal-strategy-02.jpg",
      "assets/img/work/royal-strategy/royal-strategy-03.jpg",
      "assets/img/work/royal-strategy/royal-strategy-04.jpg",
      "assets/img/work/royal-strategy/royal-strategy-05.jpg",
      "assets/img/work/royal-strategy/royal-strategy-06.jpg",
      "assets/img/work/royal-strategy/royal-strategy-07.jpg",
      "assets/img/work/royal-strategy/royal-strategy-08.jpg",
      "assets/img/work/royal-strategy/royal-strategy-09.jpg",
      "assets/img/work/royal-strategy/royal-strategy-10.jpg",
      "assets/img/work/royal-strategy/royal-strategy-11.jpg",
      "assets/img/work/royal-strategy/royal-strategy-12.jpg",
      "assets/img/work/royal-strategy/royal-strategy-13.jpg",
      "assets/img/work/royal-strategy/royal-strategy-14.jpg",
      "assets/img/work/royal-strategy/royal-strategy-15.jpg",
      "assets/img/work/royal-strategy/royal-strategy-16.jpg",
      "assets/img/work/royal-strategy/royal-strategy-17.jpg",
      "assets/img/work/royal-strategy/royal-strategy-18.jpg",
      "assets/img/work/royal-strategy/royal-strategy-19.jpg",
      "assets/img/work/royal-strategy/royal-strategy-20.jpg",
      "assets/img/work/royal-strategy/royal-strategy-21.jpg",
      "assets/img/work/royal-strategy/royal-strategy-22.jpg",
      "assets/img/work/royal-strategy/royal-strategy-23.jpg",
      "assets/img/work/royal-strategy/royal-strategy-24.jpg"
    ]
  },

  // ---------- GRAPHIC DESIGN — Canadian market work ----------
  {
    type: "carousel",
    category: "Graphic Design",
    client: "Zolar Technology & MFG (Canada)",
    title: "Instagram carousel — painless laser dentistry",
    description: "A 4-slide social media carousel created for Zolar Technology, a Canadian dental-technology company. It moves from an emotional hook (\"What if dental treatments didn't hurt?\") to benefits, outcomes and a booking call to action, built around the brand's blue palette and logo.",
    thumb: "assets/img/work/zolar/zolar-01.jpg",
    slides: [
      "assets/img/work/zolar/zolar-01.jpg",
      "assets/img/work/zolar/zolar-02.jpg",
      "assets/img/work/zolar/zolar-03.jpg",
      "assets/img/work/zolar/zolar-04.jpg"
    ]
  },

  // ---------- GRAPHIC DESIGN — Satyam Dental Care & Implant Center ----------
  {
    type: "image",
    category: "Graphic Design",
    client: "Satyam Dental Care & Implant Center",
    title: "Patient education series",
    description: "Bilingual (English & Gujarati) patient-education creative — decay symptoms, cavity treatment steps, and gum-problem awareness content.",
    thumb: "assets/img/work/satyam-01.jpg",
    src: "assets/img/work/satyam-01.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "Satyam Dental Care & Implant Center",
    title: "Decay symptoms (Gujarati)",
    description: "Localized symptom-awareness post in Gujarati, matching brand color and layout system.",
    thumb: "assets/img/work/satyam-02.jpg",
    src: "assets/img/work/satyam-02.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "Satyam Dental Care & Implant Center",
    title: "Gum problems checklist",
    description: "Symptom checklist creative built to prompt self-recognition and drive appointment bookings.",
    thumb: "assets/img/work/satyam-03.jpg",
    src: "assets/img/work/satyam-03.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "Satyam Dental Care & Implant Center",
    title: "Denture treatment",
    description: "Benefits-led creative for denture treatment, aimed at an older patient demographic.",
    thumb: "assets/img/work/satyam-04.jpg",
    src: "assets/img/work/satyam-04.jpg"
  },

  // ---------- GRAPHIC DESIGN — other dental clients ----------
  {
    type: "image",
    category: "Graphic Design",
    client: "Just Smile Dental Clinic",
    title: "Missing teeth — implants campaign",
    description: "Lead-generation creative promoting dental implants as a natural-looking, long-lasting solution, with a clear call to action.",
    thumb: "assets/img/work/justsmile-01.jpg",
    src: "assets/img/work/justsmile-01.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "The Tooth Saga",
    title: "Microscope-enhanced dental care",
    description: "Educational creative highlighting the clinic's dental operating microscope as a precision-care differentiator.",
    thumb: "assets/img/work/toothsaga-01.jpg",
    src: "assets/img/work/toothsaga-01.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "R.G. Dental Care",
    title: "Confident smile — implants",
    description: "Portrait-led creative driving consultation bookings around dental implant benefits.",
    thumb: "assets/img/work/rgdental-01.jpg",
    src: "assets/img/work/rgdental-01.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "Ramesh Dental Care",
    title: "Geriatric dentistry awareness",
    description: "Awareness creative on senior dental care, built to speak to adult children booking care for aging parents.",
    thumb: "assets/img/work/ramesh-01.jpg",
    src: "assets/img/work/ramesh-01.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "Jalaram Dental Clinic",
    title: "Gum disease early signs",
    description: "Symptom-awareness creative on gum disease, paired with a clear visit-us call to action.",
    thumb: "assets/img/work/jalaram-01.jpg",
    src: "assets/img/work/jalaram-01.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "Jalaram Dental Clinic",
    title: "Fact-check series",
    description: "Bite-sized dental fact creative built for shareability and feed engagement.",
    thumb: "assets/img/work/jalaram-02.jpg",
    src: "assets/img/work/jalaram-02.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "PG Dental Clinic",
    title: "Oral hygiene mistakes",
    description: "Educational carousel-style creative on commonly ignored oral hygiene habits.",
    thumb: "assets/img/work/pgdental-01.jpg",
    src: "assets/img/work/pgdental-01.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "32 Intact Multi Speciality Dental Clinic",
    title: "Losing teeth — treatment awareness",
    description: "Awareness-to-action creative for the clinic's advanced microscope-based treatment offering.",
    thumb: "assets/img/work/intact32-01.jpg",
    src: "assets/img/work/intact32-01.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "32 Intact Multi Speciality Dental Clinic",
    title: "Clear aligners campaign",
    description: "Product-led creative for clear aligner treatment, doctor-fronted for credibility.",
    thumb: "assets/img/work/intact32-02.jpg",
    src: "assets/img/work/intact32-02.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "Anand 32 Point Dental Care",
    title: "Dental health check reminder",
    description: "Direct-response creative built to prompt immediate appointment booking.",
    thumb: "assets/img/work/anand32-01.jpg",
    src: "assets/img/work/anand32-01.jpg"
  },

  // ---------- GRAPHIC DESIGN — Jewellery ----------
  {
    type: "image",
    category: "Graphic Design",
    client: "Shree Shakti Jewellers",
    title: "Indulge in the hues of royalty",
    description: "Luxury product-led creative for a manufacturing-first jewellery brand, dark-background styling to let the piece lead.",
    thumb: "assets/img/work/shaktijewellers-01.jpg",
    src: "assets/img/work/shaktijewellers-01.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "DSJ Jewellers",
    title: "Making you a style sensation",
    description: "Editorial-style luxury creative for a second jewellery client, moody dark palette with fine-jewellery photography.",
    thumb: "assets/img/work/duttjewellers-03.jpg",
    src: "assets/img/work/duttjewellers-03.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "DSJ Jewellers",
    title: "Self-expression campaign",
    description: "Ornate, brand-forward creative built around the line 'jewellery as self-expression.'",
    thumb: "assets/img/work/duttjewellers-02.jpg",
    src: "assets/img/work/duttjewellers-02.jpg"
  },

  // ---------- GRAPHIC DESIGN — Food & Beverage ----------
  {
    type: "image",
    category: "Graphic Design",
    client: "Kulcha House",
    title: "Visit us again",
    description: "Appetite-led food creative for a QSR brand, built for delivery-platform visibility (Zomato/Swiggy).",
    thumb: "assets/img/work/kulchahouse-01.jpg",
    src: "assets/img/work/kulchahouse-01.jpg"
  },
  {
    type: "image",
    category: "Graphic Design",
    client: "Kulcha House",
    title: "We do magic with our kulchas",
    description: "Product-hero food creative with bold typography, tuned for scroll-stopping feed presence.",
    thumb: "assets/img/work/kulchahouse-02.jpg",
    src: "assets/img/work/kulchahouse-02.jpg"
  }

];
