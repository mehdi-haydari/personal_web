const navigation = [
  { label: "Work", section: "work" },
  { label: "Experience", section: "experience" },
  { label: "About", section: "about" },
  { label: "LinkedIn ↗", url: "https://www.linkedin.com/in/heydari-m/" },
  { label: "GitHub ↗", url: "https://github.com/mehdi-haydari" },
  { label: "Contact", section: "contact" },
];

export default function SiteHeader({ homePage = "" }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="shell top" id="top">
        <a className="logo" href={homePage || "#top"} aria-label="Mehdi Heydari home">MH</a>
        <nav className="nav" aria-label="Main navigation">
          {navigation.map(({ label, section, url }) => (
            <a
              key={label}
              href={url || `${homePage}#${section}`}
              target={url ? "_blank" : undefined}
              rel={url ? "noopener noreferrer" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="status"><i aria-hidden="true"></i>Istanbul, Turkey</div>
      </header>
    </>
  );
}
