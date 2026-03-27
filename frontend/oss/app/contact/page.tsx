import Image from "next/image";
import { ArrowUpRight, Linkedin, Phone, type LucideIcon } from "lucide-react";

import { HeroNav } from "@/home/hero/components/HeroNav";

type ContactPerson = {
  name: string;
  role: string;
  heading: string;
  description: string;
  phoneLabel: string;
  phoneHref?: string;
  linkedInLabel?: string;
  linkedInHref?: string;
  photoSrc: string;
  focus: string[];
  accentClassName: string;
};

function buildWhatsAppHref(phone: string) {
  const normalized = phone.replace(/\D/g, "");
  return normalized ? `https://wa.me/${normalized}` : undefined;
}

function buildLinkedInHref(linkedIn: string) {
  if (!linkedIn.trim()) {
    return undefined;
  }

  if (linkedIn.startsWith("http://") || linkedIn.startsWith("https://")) {
    return linkedIn;
  }

  return `https://${linkedIn}`;
}

const contactPeople: ContactPerson[] = [
  {
    name: "Hashem",
    role: "Chair",
    heading: "Community Leadership",
    description:
      "Best for partnerships, chapter planning, event direction, and any request that needs leadership visibility.",
    phoneLabel: "+962 79 746 2906",
    linkedInLabel: "linkedin.com/in/hashem-otoom",
    photoSrc: "/images/contact/chair-placeholder.svg",
    focus: ["Leadership", "Partnerships", "Events"],
    accentClassName: "from-cyan-400/20 via-sky-400/10 to-transparent",
  },
  {
    name: "Celine Hajaya",
    role: "Public Relations Lead",
    heading: "Outreach & Communications",
    description:
      "Best for collaborations, campaign planning, public announcements, and the society's external communication.",
    phoneLabel: "+962 79 212 2251",
    // linkedInLabel: "linkedin.com/in/",
    photoSrc: "/images/contact/pr-placeholder.svg",
    focus: ["Outreach", "Campaigns", "Media"],
    accentClassName: "from-lime-300/20 via-emerald-400/10 to-transparent",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroNav />
      <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.20),transparent_30%),linear-gradient(180deg,#050b14_0%,#07111f_55%,#020617_100%)] px-6 pb-20 pt-28 text-white md:px-10 md:pt-36">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
          <header className="max-w-3xl space-y-5">
            <span className="inline-flex items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-1 text-sm uppercase tracking-[0.3em] text-cyan-100">
              Contact
            </span>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Meet the people you can reach directly.
            </h1>
            <p className="text-lg leading-8 text-white/70">
              Reach out to the people leading OSS for partnerships, events, collaborations, and community questions.
              Choose the contact that fits your request best and get in touch directly.
            </p>
          </header>

          <section className="mx-auto grid w-full max-w-7xl gap-6 md:grid-cols-2 md:justify-items-center xl:gap-8">
            {contactPeople.map((person) => (
              <article
                key={person.role}
                className="group relative w-full max-w-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${person.accentClassName}`}
                />
                <div className="relative flex h-full flex-col">
                  <div className="relative overflow-hidden border-b border-white/10 bg-black/25">
                    <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="inline-flex items-center rounded-full border border-white/12 bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-100 backdrop-blur-sm">
                        {person.role}
                      </span>
                    </div>
                    <div className="aspect-[4/3] overflow-hidden md:aspect-[16/10]">
                      <Image
                        src={person.photoSrc}
                        alt={`${person.name} portrait`}
                        width={640}
                        height={800}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={person.role === "Chair"}
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50">{person.heading}</p>
                      <h2 className="text-2xl font-semibold tracking-tight">{person.name}</h2>
                      <p className="text-sm leading-6 text-white/72">{person.description}</p>
                    </div>

                    <div className="grid gap-3">
                      <ContactMethod
                        icon={Phone}
                        label="Phone"
                        value={person.phoneLabel}
                        href={person.phoneHref ?? buildWhatsAppHref(person.phoneLabel)}
                      />
                      {person.linkedInLabel ? (
                        <ContactMethod
                          icon={Linkedin}
                          label="LinkedIn"
                          value={person.linkedInLabel}
                          href={person.linkedInHref ?? buildLinkedInHref(person.linkedInLabel)}
                        />
                      ) : null}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {person.focus.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/12 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

function ContactMethod({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  if (!href) {
    return (
      <div className="flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-black/20 px-4 py-4">
        <div className="rounded-full border border-white/10 bg-white/5 p-3 text-cyan-100">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">{label}</p>
          <p className="truncate text-sm text-white/78">{value}</p>
        </div>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-black/20 px-4 py-4 transition-colors duration-200 hover:border-cyan-300/35 hover:bg-black/30"
    >
      <div className="rounded-full border border-white/10 bg-white/5 p-3 text-cyan-100">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">{label}</p>
        <p className="truncate text-sm text-white">{value}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 text-cyan-100" />
    </a>
  );
}
