import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://instagram.com/linux.ju",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com/company/linux-society-at-ju/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/oss-ju",
    label: "GitHub",
    icon: FaGithub,
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#07111f] px-6 py-10 text-white md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">OSS Community</p>
          <p className="text-sm text-white/60">Follow the chapter and stay close to upcoming events and announcements.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/80 transition-all duration-300 hover:scale-105 hover:border-cyan-300/40 hover:text-cyan-100"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <p className="text-sm text-white/55">
          &copy; {new Date().getFullYear()} The OSS Community. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
