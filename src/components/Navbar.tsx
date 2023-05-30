import { useRef, useEffect } from "react";

const links = [
  { url: "#container", label: "Portfolio" },
  { url: "#skills", label: "Skills" },
  { url: "#about", label: "About" },
  { url: "#contact", label: "Contact" },
  { url: "#marketing", label: "Marketing" },
  { url: "#social-media", label: "Social Media" },
];

export const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      if (pageYOffset > lastScrollTop.current) {
        navRef.current?.classList.remove("visible");
      } else if (pageYOffset < lastScrollTop.current) {
        navRef.current?.classList.add("visible");
      } //else horizontal scroll

      lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar visible" ref={navRef}>
      <div className="logo">Logo</div>
      <ul className="links">
        {links.map(({ url, label }, idx) => (
          <li key={idx}>
            <a href={url} className="link">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
