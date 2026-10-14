(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list a");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const isDark = () => document.documentElement.getAttribute("data-theme") === "dark";

  const syncThemeUi = () => {
    const dark = isDark();
    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        dark ? "Ativar tema claro" : "Ativar tema escuro"
      );
    }
    if (themeMeta) {
      themeMeta.setAttribute("content", dark ? "#0d141c" : "#f3f6fa");
    }
  };

  const setTheme = (mode) => {
    if (mode === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    try {
      localStorage.setItem("theme", mode);
    } catch (_) {}
    syncThemeUi();
  };

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      setTheme(isDark() ? "light" : "dark");
    });
  }
  syncThemeUi();

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
      nav.classList.toggle("is-open", !open);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
        nav.classList.remove("is-open");
      });
    });
  }

  const sectionIds = ["sobre", "escopo", "impacto", "livros", "ensino", "escrita", "contato"];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const setCurrent = (id) => {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      const match = href === `#${id}`;
      if (match) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  if ("IntersectionObserver" in window && sections.length) {
    const sectionIo = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setCurrent(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );
    sections.forEach((el) => sectionIo.observe(el));
  }

  const reveals = document.querySelectorAll(".reveal");
  const show = (el) => el.classList.add("is-visible");

  if (!("IntersectionObserver" in window)) {
    reveals.forEach(show);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          show(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: [0, 0.08, 0.2], rootMargin: "0px 0px -4% 0px" }
  );

  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (inView) {
      show(el);
    } else {
      io.observe(el);
    }
  });
})();
