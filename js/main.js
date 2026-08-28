(function () {
    "use strict";

    document.getElementById("year").textContent = new Date().getFullYear();

    /* ---- render dynamic content from data.js ---- */
    function renderStats() {
        var row = document.getElementById("statsRow");
        if (!row || !window.SITE_DATA) return;
        row.innerHTML = SITE_DATA.about.stats.map(function (s) {
            return '<div class="stat"><span class="stat__num">' + s.num + '</span><span class="stat__label">' + s.label + '</span></div>';
        }).join("");
    }

    function commitCardHTML(job) {
        var bullets = job.bullets.map(function (b) { return "<li>" + b + "</li>"; }).join("");
        var tech = job.tech.map(function (t) { return "<span>" + t + "</span>"; }).join("");
        return (
            '<div class="commit__rail"><span class="commit__dot' + (job.current ? " commit__dot--head" : "") + '"></span></div>' +
            '<div class="commit__card">' +
                '<div class="commit__head">' +
                    '<span class="branch">main ← ' + job.branch + '</span>' +
                    '<span class="commit__date">' + job.date + '</span>' +
                '</div>' +
                '<h3>' + job.title + ' <span class="at">@ ' + job.company + '</span> <span class="loc">' + job.location + '</span></h3>' +
                '<ul>' + bullets + '</ul>' +
                '<div class="tech">' + tech + '</div>' +
            '</div>'
        );
    }

    function earlierCardHTML(earlier) {
        var items = earlier.items.map(function (i) {
            return '<li><strong>' + i.role + '</strong>, ' + i.company + ' — ' + i.location + ' · ' + i.dates + '</li>';
        }).join("");
        return (
            '<div class="commit__rail"><span class="commit__dot commit__dot--faded"></span></div>' +
            '<div class="commit__card commit__card--faded">' +
                '<div class="commit__head">' +
                    '<span class="branch">main ← earlier-commits (squashed)</span>' +
                    '<span class="commit__date">' + earlier.date + '</span>' +
                '</div>' +
                '<h3>Earlier Experience</h3>' +
                '<ul class="squashed-list">' + items + '</ul>' +
                '<p class="squashed-note">' + earlier.stackNote + '</p>' +
            '</div>'
        );
    }

    function renderExperience() {
        var timeline = document.getElementById("timeline");
        if (!timeline || !window.SITE_DATA) return;
        var html = SITE_DATA.experience.map(function (job) {
            return '<li class="commit reveal">' + commitCardHTML(job) + '</li>';
        }).join("");
        html += '<li class="commit commit--squashed reveal">' + earlierCardHTML(SITE_DATA.earlierExperience) + '</li>';
        timeline.innerHTML = html;
    }

    function renderSkills() {
        var grid = document.getElementById("skillsGrid");
        if (!grid || !window.SITE_DATA) return;
        grid.innerHTML = SITE_DATA.skills.map(function (group) {
            var sizeClass = group.size ? " skill-tile--" + group.size : "";
            var tags = group.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("");
            return '<div class="skill-tile' + sizeClass + '"><h3>' + group.name + '</h3><div class="tags">' + tags + '</div></div>';
        }).join("");
    }

    function hydrateProfileLinks() {
        if (!window.SITE_DATA) return;
        var p = SITE_DATA.profile;
        Array.prototype.forEach.call(document.querySelectorAll('a[href^="mailto:"]'), function (a) {
            a.setAttribute("href", "mailto:" + p.email);
            if (a.textContent.trim().indexOf("@") !== -1) a.lastChild.textContent = p.email;
        });
        Array.prototype.forEach.call(document.querySelectorAll('a[href*="linkedin.com"]'), function (a) {
            a.setAttribute("href", p.linkedin);
        });
        Array.prototype.forEach.call(document.querySelectorAll('a[href*="github.com"]'), function (a) {
            a.setAttribute("href", p.github);
        });
        Array.prototype.forEach.call(document.querySelectorAll('a[download]'), function (a) {
            a.setAttribute("href", p.cvPath);
        });
    }

    renderStats();
    renderExperience();
    renderSkills();
    hydrateProfileLinks();

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
    var roles = (window.SITE_DATA && SITE_DATA.profile.roles) || ["Lead Software Engineer"];
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
