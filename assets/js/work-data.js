/* ============================================================
   THE WORK — Editable Data File
   ------------------------------------------------------------
   To add a new item: copy any object below (including the { }),
   paste it into the array, and update the fields.
   To remove an item: delete its whole { ... } block.
   Save this file and re-upload it — no other file needs to change.

   FIELDS
   - type: "image" | "video" | "site"
   - category: "Graphic Design" | "Video Edits" | "Web Projects"
   - client: the brand/company name
   - title: short title for the piece
   - description: 1–3 sentences, what it is / what it did
   - thumb: path to the thumbnail image (required for all types)
   - src: for "image" — full-size image path (usually same as thumb)
          for "video" — path to the video file
          for "site"  — leave as "" (not used)
   - link: for "site" — the live URL. For image/video, leave as ""
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
