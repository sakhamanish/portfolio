(() => {
  "use strict";

  const D = window.PORTFOLIO;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const slots = (name) => $$(`[data-slot="${name}"]`);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const ICONS = {
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>',
    award: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="M8.5 14 7 22l5-3 5 3-1.5-8"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  };

  /* ---------- Simple bindings ---------- */
  $$("[data-bind]").forEach((el) => (el.textContent = D[el.dataset.bind] ?? ""));
  $$("[data-bind-src]").forEach((el) => (el.src = D[el.dataset.bindSrc]));
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Contact buttons ---------- */
  const c = D.contact;
  const contactHtml = [
    c.email && `<a class="btn primary" href="mailto:${esc(c.email)}">${ICONS.mail} Email me</a>`,
    c.phone && `<a class="btn" href="tel:${esc(c.phone)}">${ICONS.phone} Call</a>`,
    c.linkedin && `<a class="btn" href="${esc(c.linkedin)}" target="_blank" rel="noopener">${ICONS.linkedin} LinkedIn</a>`,
    c.scholar && `<a class="btn" href="${esc(c.scholar)}" target="_blank" rel="noopener">${ICONS.scholar} Scholar</a>`,
    c.github && `<a class="btn" href="${esc(c.github)}" target="_blank" rel="noopener">${ICONS.github} GitHub</a>`,
    `<button class="btn" type="button" data-action="cv">${ICONS.download} Download CV</button>`,
  ]
    .filter(Boolean)
    .join("");
  slots("contact-buttons").forEach((el) => (el.innerHTML = contactHtml));

  /* ---------- Stats ---------- */
  const isFirstAuthor = (p) => /^Sakhakarmy\b/.test(p.authors);
  const firstYear = Math.min(...D.timeline.filter((t) => t.type === "work").map((t) => parseInt(t.start.slice(-4), 10)));
  const stats = [
    { value: D.publications.length, label: "peer-reviewed publications" },
    { value: D.publications.filter(isFirstAuthor).length, label: "as first author" },
    { value: D.presentations.length, label: "conference talks & posters" },
    { value: new Date().getFullYear() - firstYear, suffix: "+", label: "years in engineering" },
  ];
  slots("stats")[0].innerHTML = stats
    .map((s) => `<div class="stat"><b data-count="${s.value}" data-suffix="${s.suffix ?? ""}">${s.value}${s.suffix ?? ""}</b><span>${esc(s.label)}</span></div>`)
    .join("");

  function countUp(el) {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix;
    if (reducedMotion) return;
    const t0 = performance.now();
    const dur = 1100;
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + suffix;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------- Timeline ---------- */
  const tlList = slots("timeline")[0];
  tlList.innerHTML = D.timeline
    .map((t, i) => {
      const id = `tl-${i}`;
      const has = t.points.length > 0;
      return `<li class="tl-item ${t.type} reveal" data-type="${t.type}">
        <div class="tl-card">
          <button class="tl-head" type="button" ${has ? `aria-expanded="false" aria-controls="${id}"` : "disabled"}>
            <span><span class="tl-tag">${t.type === "work" ? "Work" : "Education"}</span><br>
              <span class="tl-title">${esc(t.title)}</span></span>
            <span class="tl-meta">${esc(t.start)} – ${esc(t.end)}<br>${esc(t.place)}${has ? '<span class="tl-chevron" aria-hidden="true">▾</span>' : ""}</span>
            <span class="tl-org">${esc(t.org)}</span>
          </button>
          ${has ? `<div class="tl-body" id="${id}"><div><ul>${t.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div></div>` : ""}
        </div>
      </li>`;
    })
    .join("");

  const setOpen = (item, open) => {
    item.classList.toggle("open", open);
    $(".tl-head", item).setAttribute("aria-expanded", String(open));
  };
  $$(".tl-head:not([disabled])", tlList).forEach((btn) =>
    btn.addEventListener("click", () => {
      const item = btn.closest(".tl-item");
      setOpen(item, !item.classList.contains("open"));
    }),
  );
  setOpen($(".tl-item", tlList), true); // current role starts open

  const tlFilters = [
    { key: "all", label: "All" },
    { key: "work", label: "Work" },
    { key: "education", label: "Education" },
  ];
  const tlFilterEl = slots("timeline-filters")[0];
  tlFilterEl.innerHTML = tlFilters
    .map((f) => {
      const n = f.key === "all" ? D.timeline.length : D.timeline.filter((t) => t.type === f.key).length;
      return `<button class="chip" type="button" data-filter="${f.key}" aria-pressed="${f.key === "all"}">${f.label}<span class="n">${n}</span></button>`;
    })
    .join("");
  tlFilterEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    $$("[data-filter]", tlFilterEl).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    const key = btn.dataset.filter;
    $$(".tl-item", tlList).forEach((li) => {
      li.hidden = key !== "all" && li.dataset.type !== key;
      li.classList.add("visible");
    });
  });

  /* ---------- Publications ---------- */
  const topics = [...new Set(D.publications.flatMap((p) => p.topics))];
  const PUBS_PREVIEW = 5;
  const pubState = { topic: "all", query: "", firstOnly: false, expanded: false };
  const topicEl = slots("topic-filters")[0];
  topicEl.innerHTML = [{ key: "all", label: "All topics", n: D.publications.length }]
    .concat(topics.map((t) => ({ key: t, label: t, n: D.publications.filter((p) => p.topics.includes(t)).length })))
    .map((t) => `<button class="chip" type="button" data-topic="${esc(t.key)}" aria-pressed="${t.key === "all"}">${esc(t.label)}<span class="n">${t.n}</span></button>`)
    .join("");

  const highlight = (text, q) => {
    const safe = esc(text);
    if (!q) return safe;
    const pattern = esc(q).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safe.replace(new RegExp(`(${pattern})`, "gi"), "<mark>$1</mark>");
  };
  const authorsHtml = (authors, q) =>
    highlight(authors, q).replace(/Sakhakarmy, M\.?/g, (m) => `<strong>${m}</strong>`);

  function renderPubs() {
    const q = pubState.query.trim().toLowerCase();
    const list = D.publications.filter(
      (p) =>
        (pubState.topic === "all" || p.topics.includes(pubState.topic)) &&
        (!pubState.firstOnly || isFirstAuthor(p)) &&
        (!q || `${p.title} ${p.authors} ${p.venue} ${p.year}`.toLowerCase().includes(q)),
    );
    const scholar = c.scholar ? ` · <a href="${esc(c.scholar)}" target="_blank" rel="noopener">Citations on Google Scholar ↗</a>` : "";
    slots("pub-count")[0].innerHTML = `Showing ${list.length} of ${D.publications.length} publications${scholar}`;
    // Unfiltered, show a short preview; any filter or search shows every match.
    const filtered = pubState.topic !== "all" || pubState.firstOnly || q;
    const shown = filtered || pubState.expanded ? list : list.slice(0, PUBS_PREVIEW);
    const more = list.length - shown.length;
    slots("publications")[0].innerHTML = shown.length
      ? shown
          .map(
            (p) => `<li class="pub">
              <div class="pub-year">${p.year}</div>
              <div>
                <p class="pub-title">${highlight(p.title, q)}</p>
                <p class="pub-authors">${authorsHtml(p.authors, q)}</p>
                <span class="pub-venue">${highlight(p.venue, q)}</span>
                <div class="pub-foot">
                  ${isFirstAuthor(p) ? '<span class="tag first">First author</span>' : ""}
                  ${p.topics.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
                  <a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">Read paper ↗</a>
                </div>
              </div>
            </li>`,
          )
          .join("") +
        (more > 0
          ? `<li><button class="btn more" type="button" data-action="more-pubs">Show all ${list.length} publications</button></li>`
          : "")
      : `<li class="pubs-empty">No publications match. Try another topic or search term.</li>`;
  }
  slots("publications")[0].addEventListener("click", (e) => {
    if (!e.target.closest('[data-action="more-pubs"]')) return;
    pubState.expanded = true;
    renderPubs();
  });
  topicEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-topic]");
    if (!btn) return;
    $$("[data-topic]", topicEl).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    pubState.topic = btn.dataset.topic;
    renderPubs();
  });
  $("#pub-search").addEventListener("input", (e) => {
    pubState.query = e.target.value;
    renderPubs();
  });
  $("#pub-first").addEventListener("change", (e) => {
    pubState.firstOnly = e.target.checked;
    renderPubs();
  });
  renderPubs();

  slots("presentations")[0].innerHTML = D.presentations
    .map(
      (p) => `<li>
        <div class="talk-meta"><span class="talk-kind">${esc(p.kind)}</span> · ${esc(p.date)} · ${esc(p.event)}</div>
        <div class="talk-title">${esc(p.title)}</div>
      </li>`,
    )
    .join("");
  slots("awards")[0].innerHTML = D.awards
    .map(
      (a) => `<li><span class="award-icon">${ICONS.award}</span><span>${esc(a.title)}
        <div class="award-sub">${[a.org, a.year].filter(Boolean).map(esc).join(" · ")}</div></span></li>`,
    )
    .join("");
  slots("supervision")[0].innerHTML = D.supervision.map((s) => `<li>${esc(s)}</li>`).join("");

  /* ---------- Skills explorer ---------- */
  const tabsEl = slots("skill-tabs")[0];
  const panelEl = slots("skill-panel")[0];
  tabsEl.innerHTML = D.skills
    .map(
      (g, i) =>
        `<button class="tab" role="tab" type="button" id="tab-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(g.group)} <span class="n">${g.items.length}</span></button>`,
    )
    .join("");
  const showSkills = (i) => {
    $$(".tab", tabsEl).forEach((t, j) => {
      t.setAttribute("aria-selected", String(i === j));
      t.tabIndex = i === j ? 0 : -1;
    });
    panelEl.setAttribute("aria-labelledby", `tab-${i}`);
    panelEl.innerHTML = D.skills[i].items
      .map((s, k) => `<span class="skill" style="animation-delay:${k * 30}ms">${esc(s)}</span>`)
      .join("");
  };
  tabsEl.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (tab) showSkills($$(".tab", tabsEl).indexOf(tab));
  });
  tabsEl.addEventListener("keydown", (e) => {
    const tabs = $$(".tab", tabsEl);
    const cur = tabs.indexOf(document.activeElement);
    if (cur < 0 || !["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    const next = (cur + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    tabs[next].focus();
    showSkills(next);
  });
  showSkills(0);

  /* ---------- Projects ---------- */
  slots("projects")[0].innerHTML = D.projects
    .map(
      (p) => `<article class="project reveal">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.blurb)}</p>
        <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        ${p.url ? `<a class="project-link" href="${esc(p.url)}" target="_blank" rel="noopener">View on GitHub ↗</a>` : '<span class="project-private">Private repository</span>'}
      </article>`,
    )
    .join("");

  /* ---------- Printable CV ---------- */
  const cv = slots("print-cv")[0];
  const section = (title, body) => `<h2>${title}</h2>${body}`;
  const entries = (type) =>
    D.timeline
      .filter((t) => t.type === type)
      .map(
        (t) => `<div class="cv-entry">
          <div class="cv-row"><span>${esc(t.title)}</span><span>${esc(t.start)} – ${esc(t.end)}</span></div>
          <div class="cv-org">${esc(t.org)}, ${esc(t.place)}</div>
          ${t.points.length ? `<ul>${t.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
        </div>`,
      )
      .join("");
  cv.innerHTML = [
    `<h1>${esc(D.name)}</h1>`,
    `<p class="cv-sub">${esc(D.role)} · ${esc(D.credential)} · ${esc(D.location)}</p>`,
    `<p class="cv-contact">${[c.email, c.phone && c.phone.replace(/^\+1(\d{3})(\d{3})(\d{4})$/, "($1) $2-$3"), c.linkedin]
      .filter(Boolean)
      .map(esc)
      .join(" · ")}</p>`,
    section("Summary", `<p>${esc(D.summary)}</p>`),
    section("Education", entries("education")),
    section("Experience", entries("work")),
    section("Skills", `<ul>${D.skills.map((g) => `<li><b>${esc(g.group)}:</b> ${g.items.map(esc).join(", ")}</li>`).join("")}</ul>`),
    section(
      "Publications",
      `<ul>${D.publications.map((p) => `<li>${esc(p.authors)} (${p.year}). ${esc(p.title)}. <i>${esc(p.venue)}</i>. https://doi.org/${esc(p.doi)}</li>`).join("")}</ul>`,
    ),
    section("Presentations", `<ul>${D.presentations.map((p) => `<li>${esc(p.kind)}: “${esc(p.title)}.” ${esc(p.event)}, ${esc(p.date)}.</li>`).join("")}</ul>`),
    section("Supervision", `<ul>${D.supervision.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`),
    section("Honors & Awards", `<ul>${D.awards.map((a) => `<li>${esc(a.title)}${a.org ? `, ${esc(a.org)}` : ""}${a.year ? ` (${esc(a.year)})` : ""}</li>`).join("")}</ul>`),
  ].join("");

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  document.body.appendChild(toast);
  const showToast = (msg) => {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3200);
  };
  document.addEventListener("click", (e) => {
    if (!e.target.closest('[data-action="cv"]')) return;
    showToast('Choose "Save as PDF" in the print dialog');
    setTimeout(() => window.print(), 400);
  });

  /* ---------- Theme toggle ---------- */
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const effectiveTheme = () => root.dataset.theme || (systemDark.matches ? "dark" : "light");
  $("#theme-toggle").addEventListener("click", () => {
    const next = effectiveTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });

  /* ---------- Scroll effects ---------- */
  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const links = $$(".nav-links a");
  const spy = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  $$("main > section[id]").forEach((s) => spy.observe(s));

  const revealer = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("visible");
        $$("[data-count]", en.target).forEach(countUp);
        revealer.unobserve(en.target);
      }),
    { rootMargin: "0px 0px -8% 0px" },
  );
  $$(".reveal").forEach((el) => revealer.observe(el));
})();
