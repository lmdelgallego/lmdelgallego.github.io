(function () {
    "use strict";

    document.getElementById("year").textContent = new Date().getFullYear();

    /* ---- nav scroll state + mobile toggle ---- */
    var nav = document.getElementById("nav");
    var navToggle = document.getElementById("navToggle");
    var navLinks = document.getElementById("navLinks");

    window.addEventListener("scroll", function () {
        nav.classList.toggle("is-scrolled", window.scrollY > 8);
    }, { passive: true });

    navToggle.addEventListener("click", function () {
        var open = navLinks.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    Array.prototype.forEach.call(navLinks.querySelectorAll("a"), function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });

    /* ---- active nav link on scroll (top bar + desktop sidebar) ---- */
    var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
    var navAnchors = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));

    var navObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            navAnchors.forEach(function (a) {
                a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
            });
        });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach(function (s) { navObserver.observe(s); });

    /* ---- scroll reveal ---- */
    var revealItems = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, i) {
            if (entry.isIntersecting) {
                var el = entry.target;
                setTimeout(function () { el.classList.add("is-visible"); }, (i % 6) * 60);
                revealObserver.unobserve(el);
            }
        });
    }, { threshold: 0.12 });

    revealItems.forEach(function (el) { revealObserver.observe(el); });

    /* ---- typed role rotation ---- */
    var roles = [
        "Lead Software Engineer",
        "Frontend Architect",
        "18+ years shipping web products",
        "Angular · React · Vue · TypeScript"
    ];
    var typedEl = document.getElementById("typedRole");

    if (typedEl && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        var roleIndex = 0;
        var charIndex = roles[0].length;
        var deleting = false;

        function tick() {
            var current = roles[roleIndex];
            if (!deleting) {
                charIndex++;
                if (charIndex > current.length) {
                    deleting = true;
                    setTimeout(tick, 1800);
                    return;
                }
            } else {
                charIndex--;
                if (charIndex < 0) {
                    deleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    charIndex = 0;
                }
            }
            typedEl.textContent = roles[roleIndex].slice(0, Math.max(charIndex, 0));
            setTimeout(tick, deleting ? 35 : 55);
        }

        setTimeout(tick, 2200);
    }
})();
