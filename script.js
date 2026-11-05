/* =========================================================
   Sefas Cleaning — script.js
   - Mobile nav toggle
   - Sticky header shadow on scroll
   - Auto-close menu on link tap
   - Smooth scroll fallback for older browsers
   - Reveal-on-scroll animations
   - Contact form mailto fallback
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const isOpen = menu.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close mobile menu when a link is tapped
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (menu.classList.contains("open")) {
          menu.classList.remove("open");
          toggle.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = function () {
      if (window.scrollY > 8) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Smooth-scroll fallback (older Safari, etc.) ---------- */
  const supportsScrollBehavior =
    "scrollBehavior" in document.documentElement.style;

  if (!supportsScrollBehavior) {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        const id = link.getAttribute("href");
        if (id && id.length > 1) {
          const target = document.querySelector(id);
          if (target) {
            e.preventDefault();
            window.scrollTo({
              top: target.getBoundingClientRect().top + window.scrollY - 70,
              behavior: "smooth"
            });
          }
        }
      });
    });
  }

  /* ---------- Reveal-on-scroll animations ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: just show everything
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Services accordion ----------
     Click a service to expand description + image.
     Opening one closes the previous one.
  ---------------------------------------------------- */
  const accordionToggles = document.querySelectorAll(".accordion-toggle");
  accordionToggles.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".accordion-item");
      if (!item) return;
      const wasOpen = item.classList.contains("is-open");

      // Close any other open item
      document.querySelectorAll(".accordion-item.is-open").forEach(function (open) {
        open.classList.remove("is-open");
        const t = open.querySelector(".accordion-toggle");
        if (t) t.setAttribute("aria-expanded", "false");
      });

      // Toggle the clicked one
      if (!wasOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- Scroll-spy active nav state ----------
     As the user scrolls through sections on the home page,
     highlight the matching link in the nav.
  ---------------------------------------------------- */
  const spyLinks = Array.from(
    document.querySelectorAll('.nav-menu a[href^="#"], .nav-menu a[href*="index.html#"]')
  );
  if (spyLinks.length && "IntersectionObserver" in window) {
    const sectionLinks = new Map();
    spyLinks.forEach(function (link) {
      const href = link.getAttribute("href") || "";
      const hashIndex = href.indexOf("#");
      if (hashIndex < 0) return;
      const id = href.slice(hashIndex + 1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) sectionLinks.set(target, link);
    });

    if (sectionLinks.size) {
      const setActive = function (link) {
        spyLinks.forEach(function (l) { l.classList.remove("is-active"); });
        if (link) link.classList.add("is-active");
      };

      const spyObserver = new IntersectionObserver(function (entries) {
        // Find the most-visible entry that's currently intersecting
        const visible = entries.filter(function (e) { return e.isIntersecting; });
        if (visible.length) {
          // Pick the one closest to the top of the viewport
          visible.sort(function (a, b) {
            return a.boundingClientRect.top - b.boundingClientRect.top;
          });
          const link = sectionLinks.get(visible[0].target);
          if (link) setActive(link);
        }
      }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

      sectionLinks.forEach(function (_link, target) {
        spyObserver.observe(target);
      });
    }
  }

  /* ---------- Contact form mailto fallback ----------
     NOTE: Remove this listener when switching to Formspree (or another
     real form backend). See the comment in index.html above the form.
  ------------------------------------------------------ 
  const form = document.getElementById("quoteForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", function (e) {
      // If the form action is no longer mailto:, let it submit normally
      const action = form.getAttribute("action") || "";
      if (!action.toLowerCase().startsWith("mailto:")) return;

      e.preventDefault();

      // Basic native validation
      if (!form.checkValidity()) {
        form.reportValidity();
        return;*/
      }

      const data = new FormData(form);
      const name = (data.get("Name") || "").toString().trim();
      const email = (data.get("Email") || "").toString().trim();
      const phone = (data.get("Phone") || "").toString().trim();
      const service = (data.get("Service-Interest") || "").toString().trim();
      const message = (data.get("Message") || "").toString().trim();

      const subject = "Free Quote Request from " + (name || "Website Visitor");
      const body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Service Interest: " + service + "\n\n" +
        "Message:\n" + message + "\n";

      const mailto =
        "mailto:Hans.hoyos@sefascleaningllc.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;

      if (status) {
        status.textContent =
          "Opening your email app… If nothing happens, please email info@sefascleaning.com directly.";
      }
    });
  }
})();
