'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Check,
  Globe2,
  Menu,
  MessageCircle,
  Sparkles,
  Star,
  X,
} from 'lucide-react';

const copy = {
  es: {
    nav: ['Servicios', 'Ejemplos', 'Proceso'],
    book: 'Agenda una charla',
    eyebrow: 'Sitios web bilingües para negocios locales',
    hero: 'Tu negocio merece verse tan bueno como trabaja.',
    sub: 'Diseñamos páginas web claras, rápidas y llenas de personalidad para que más vecinos te encuentren, confíen en ti y te contacten.',
    cta: 'Agenda tu consulta gratis',
    examples: 'Ver ejemplos',
    trust: ['En español e inglés', 'Listo para celular', 'Diseño hecho a tu medida'],
    mock: {
      url: 'www.tunegocio.com',
      nav: ['Cortes', 'Barba', 'Visítanos'],
      eyebrow: 'PRECIOS JUSTOS · SIN ESPERAS',
      head: ['Tu mejor corte.', 'Cada semana.'],
      cta: 'Ver horarios →',
      badge: ['CITAS EL', 'MISMO DÍA'],
      note: 'Hecho para tu comunidad',
    },
    workEyebrow: 'TRABAJO DE MUESTRA',
    workTitle: 'Imagina tu negocio aquí.',
    workSub: 'Conceptos creados para mostrar cómo podemos convertir la esencia de un negocio local en una experiencia digital que vende.',
    view: 'Ver concepto',
    projectLines: ['Pan dulce. Café. Comunidad.', 'Sabor que se siente como casa.', 'Detalles que hablan por ti.'],
    serviceEyebrow: 'LO QUE HACEMOS',
    serviceTitle: 'Todo lo que necesitas para empezar bien.',
    services: [
      ['Diseño bilingüe', 'Tu historia y tus servicios, escritos con claridad en español e inglés.'],
      ['Hecho para vender', 'Botones claros, formularios simples y una experiencia pensada para convertir visitas en clientes.'],
      ['Listo para crecer', 'SEO local, conexión con redes y una base que puede crecer junto con tu negocio.'],
    ],
    processEyebrow: 'SIMPLE Y SIN ENREDOS',
    processTitle: 'De una plática a una página lista para compartir.',
    steps: [
      ['01', 'Nos conocemos', 'Hablamos 30 minutos sobre tu negocio, tus clientes y lo que necesitas.'],
      ['02', 'Creamos tu propuesta', 'Preparamos el estilo, el mensaje y una primera versión para que la revises.'],
      ['03', 'Lanzamos juntos', 'Afinamos los detalles, conectamos todo y publicamos tu nueva página.'],
    ],
    bookingEyebrow: 'PRIMER PASO: 30 MINUTOS',
    bookingTitle: 'Cuéntame de tu negocio.',
    bookingSub: 'Elige una fecha y hora. Google Calendar abrirá con tu consulta gratuita lista para guardar.',
    dateLabel: 'Elige un día',
    timeLabel: 'Elige una hora',
    confirm: 'Continuar en Google Calendar',
    helper: 'Sin compromiso · Videollamada por Google Meet · 30 minutos',
    selected: 'Tu consulta',
    review: '“Nos explicó todo sin palabras complicadas y ahora nuestros clientes encuentran el menú en segundos.”',
    reviewBy: '— Elena, negocio familiar',
    reviewNote: 'Testimonio de ejemplo',
    footer: 'Diseño web con corazón local.',
    fake: 'Datos de demostración — reemplázalos antes de publicar',
  },
  en: {
    nav: ['Services', 'Examples', 'Process'],
    book: 'Book a call',
    eyebrow: 'Bilingual websites for local businesses',
    hero: 'Your business deserves to look as good as it works.',
    sub: 'We design clear, fast, personality-filled websites so more neighbors can find you, trust you, and get in touch.',
    cta: 'Book your free consultation',
    examples: 'See examples',
    trust: ['Spanish & English', 'Mobile-ready', 'Designed around your business'],
    mock: {
      url: 'www.yourbusiness.com',
      nav: ['Cuts', 'Beard', 'Visit us'],
      eyebrow: 'FAIR PRICES · NO WAITING',
      head: ['Your best cut.', 'Every week.'],
      cta: 'See hours →',
      badge: ['SAME-DAY', 'BOOKING'],
      note: 'Made for your community',
    },
    workEyebrow: 'SAMPLE WORK',
    workTitle: 'Picture your business here.',
    workSub: 'Concepts created to show how we turn the spirit of a local business into a digital experience that sells.',
    view: 'View concept',
    projectLines: ['Sweet bread. Coffee. Community.', 'Flavor that feels like home.', 'Details that speak for you.'],
    serviceEyebrow: 'WHAT WE DO',
    serviceTitle: 'Everything you need to start strong.',
    services: [
      ['Bilingual design', 'Your story and services, written clearly in both Spanish and English.'],
      ['Built to sell', 'Clear buttons, simple forms, and an experience designed to turn visitors into customers.'],
      ['Ready to grow', 'Local SEO, social connections, and a foundation that can grow with your business.'],
    ],
    processEyebrow: 'SIMPLE, NO RUNAROUND',
    processTitle: 'From one conversation to a site ready to share.',
    steps: [
      ['01', 'We meet', 'We talk for 30 minutes about your business, your customers, and what you need.'],
      ['02', 'We create', 'We prepare the style, message, and a first version for you to review.'],
      ['03', 'We launch together', 'We refine the details, connect everything, and publish your new site.'],
    ],
    bookingEyebrow: 'FIRST STEP: 30 MINUTES',
    bookingTitle: 'Tell me about your business.',
    bookingSub: 'Choose a date and time. Google Calendar will open with your free consultation ready to save.',
    dateLabel: 'Choose a day',
    timeLabel: 'Choose a time',
    confirm: 'Continue in Google Calendar',
    helper: 'No obligation · Google Meet video call · 30 minutes',
    selected: 'Your consultation',
    review: '“Everything was explained without complicated words, and now our customers find the menu in seconds.”',
    reviewBy: '— Elena, family business owner',
    reviewNote: 'Sample testimonial',
    footer: 'Web design with a local heart.',
    fake: 'Demo contact details — replace before publishing',
  },
};

const projects = [
  { name: 'La Estrella', type: 'PANADERÍA · BAKERY', theme: 'bakery' },
  { name: 'Sol y Sal', type: 'TAQUERÍA · TAQUERIA', theme: 'tacos' },
  { name: 'Flores Marisol', type: 'FLORERÍA · FLORIST', theme: 'flowers' },
];

function Splash({ className }: { className: string }) {
  return (
    <svg className={`splash ${className}`} viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <path d="M60 8c3 14 2 26-3 37-2 4-8 2-7-2 3-12 6-23 10-35z" fill="#bd3f27" />
      <path d="M104 34c-11 9-22 15-34 18-4 1-6-6-2-8 12-4 23-7 36-10z" fill="#f2b233" />
      <path d="M16 30c9 11 19 19 30 24 4 2 1 8-3 7-12-5-21-11-27-31z" fill="#1e50a2" />
    </svg>
  );
}

function scallopPath(cx: number, cy: number, r: number, n: number) {
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r] as const;
  });
  const rr = r * Math.sin(Math.PI / n) * 1.08;
  return (
    pts
      .map(([x, y], i) => {
        const [nx, ny] = pts[(i + 1) % n];
        const move = i === 0 ? `M${x.toFixed(1)} ${y.toFixed(1)}` : '';
        return `${move}A${rr.toFixed(1)} ${rr.toFixed(1)} 0 0 1 ${nx.toFixed(1)} ${ny.toFixed(1)}`;
      })
      .join('') + 'Z'
  );
}

function ConchaArt() {
  return (
    <svg className="project-art" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="100" cy="112" r="82" fill="#e09a3c" stroke="#2b1832" strokeWidth="8" />
      <path
        d={scallopPath(100, 104, 58, 9)}
        fill="#fffaf0"
        stroke="#2b1832"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path
        d="M54 86q46-19 92 0M48 110q52-21 104 0M58 134q42-17 84 0"
        fill="none"
        stroke="#2b1832"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TacoArt() {
  return (
    <svg className="project-art" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="64" cy="76" r="21" fill="#4f9d4f" stroke="#2b1832" strokeWidth="7" />
      <circle cx="102" cy="66" r="21" fill="#bd3f27" stroke="#2b1832" strokeWidth="7" />
      <circle cx="140" cy="78" r="19" fill="#fffaf0" stroke="#2b1832" strokeWidth="7" />
      <path d="M22 92q78 94 156 0z" fill="#fdeec9" stroke="#2b1832" strokeWidth="8" strokeLinejoin="round" />
    </svg>
  );
}

function FlowerArt() {
  return (
    <svg className="project-art" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <path d="M100 96v104" stroke="#3f8f3f" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M100 178c30-4 46-24 46-48-28 0-46 20-46 48z" fill="#4f9d4f" stroke="#2b1832" strokeWidth="7" strokeLinejoin="round" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const r = (deg * Math.PI) / 180;
        return (
          <circle
            key={deg}
            cx={100 + Math.cos(r) * 44}
            cy={96 + Math.sin(r) * 44}
            r="28"
            fill="#f2b233"
            stroke="#2b1832"
            strokeWidth="7"
          />
        );
      })}
      <circle cx="100" cy="96" r="26" fill="#1e50a2" stroke="#2b1832" strokeWidth="7" />
    </svg>
  );
}

const projectArt = [ConchaArt, TacoArt, FlowerArt];

function BarberPole() {
  return (
    <svg className="pole-art" viewBox="0 0 120 214" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="barber-pole-clip">
          <rect x="34" y="44" width="52" height="124" rx="26" />
        </clipPath>
      </defs>
      <rect x="24" y="22" width="72" height="24" rx="12" fill="#f2b233" stroke="#2b1832" strokeWidth="7" />
      <rect x="34" y="44" width="52" height="124" rx="26" fill="#fffaf0" stroke="#2b1832" strokeWidth="7" />
      <g clipPath="url(#barber-pole-clip)">
        {[60, 92, 124, 156, 188, 220, 252].map((y, i) => (
          <path key={y} d={`M2 ${y}L118 ${y - 128}`} stroke={i % 2 ? '#1e50a2' : '#bd3f27'} strokeWidth="18" fill="none" />
        ))}
      </g>
      <rect x="34" y="44" width="52" height="124" rx="26" fill="none" stroke="#2b1832" strokeWidth="7" />
      <rect x="24" y="166" width="72" height="24" rx="12" fill="#f2b233" stroke="#2b1832" strokeWidth="7" />
    </svg>
  );
}

function getDates() {
  const dates: Date[] = [];
  let cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);
  while (dates.length < 4) {
    if (cursor.getDay() !== 0 && cursor.getDay() !== 6) dates.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return dates;
}

export default function Home() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [menuOpen, setMenuOpen] = useState(false);
  const dates = useMemo(getDates, []);
  const [dateIndex, setDateIndex] = useState(0);
  const [time, setTime] = useState('10:00');
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const bookingUrl = useMemo(() => {
    const start = new Date(dates[dateIndex]);
    const [hours, minutes] = time.split(':').map(Number);
    start.setHours(hours, minutes, 0, 0);
    const end = new Date(start.getTime() + 30 * 60 * 1000);
    const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const title = lang === 'es' ? 'Consulta gratuita — San Luis Web Studio' : 'Free consultation — San Luis Web Studio';
    const details = lang === 'es'
      ? 'Consulta de 30 minutos para hablar sobre tu negocio y tu nueva página web. Agrega un enlace de Google Meet al guardar.'
      : 'A 30-minute consultation to talk about your business and new website. Add a Google Meet link when saving.';
    const params = new URLSearchParams({
      action: 'TEMPLATE', text: title, dates: `${stamp(start)}/${stamp(end)}`, details,
      add: 'hola@sanluiswebstudio.com',
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }, [dateIndex, dates, lang, time]);

  const formatDate = (date: Date, compact = false) =>
    new Intl.DateTimeFormat(lang === 'es' ? 'es-US' : 'en-US', {
      weekday: compact ? 'short' : 'long', month: compact ? 'short' : 'long', day: 'numeric',
    }).format(date);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="San Luis Web Studio home">
          <img className="logo-mark" src="/logo-tamale.png" alt="" /><span>San Luis Web <em>Studio</em></span>
        </a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          {['servicios', 'ejemplos', 'proceso'].map((id, i) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{t.nav[i]}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="lang-toggle" onClick={() => setLang(lang === 'es' ? 'en' : 'es')} aria-label="Change language"><Globe2 size={16} /> {lang === 'es' ? 'EN' : 'ES'}</button>
          <a className="button small" href="#agenda">{t.book}</a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <Splash className="hero-splash" />
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> {t.eyebrow}</p>
          <h1>{t.hero}</h1>
          <p className="hero-sub">{t.sub}</p>
          <div className="hero-actions">
            <a className="button" href="#agenda">{t.cta}<ArrowRight size={18} /></a>
            <a className="text-link" href="#ejemplos">{t.examples}<span>↓</span></a>
          </div>
          <div className="trust-row">{t.trust.map((item) => <span key={item}><Check size={15} /> {item}</span>)}</div>
        </div>
        <div className="hero-art" aria-label="Preview of a colorful bilingual website">
          <div className="sunburst" />
          <div className="browser-card">
            <div className="browser-top"><span /><span /><span /><b>{t.mock.url}</b></div>
            <div className="browser-body shop-site">
              <div className="mini-nav"><strong>Barbería La Corona</strong><span>{t.mock.nav.join('   ')}</span></div>
              <p>{t.mock.eyebrow}</p>
              <h2>{t.mock.head[0]}<br /><i>{t.mock.head[1]}</i></h2>
              <button>{t.mock.cta}</button>
              <BarberPole />
              <span className="shop-badge" aria-hidden="true">{t.mock.badge[0]}<br />{t.mock.badge[1]}</span>
            </div>
          </div>
          <div className="floating-note"><Star size={16} fill="currentColor" /> {t.mock.note}</div>
        </div>
      </section>

      <section className="portfolio section" id="ejemplos">
        <div className="section-heading">
          <div><p className="eyebrow">{t.workEyebrow}</p><h2>{t.workTitle}</h2></div>
          <p style={{ position: 'relative' }}><Splash className="work-splash" />{t.workSub}</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.theme}`} key={project.name}>
              <div className="project-preview">
                <div className="project-browser"><i /><i /><i /></div>
                <div className="project-inner">
                  <small>{project.type}</small><h3>{project.name}</h3><p>{t.projectLines[index]}</p>
                  {projectArt[index] && projectArt[index]()}
                </div>
              </div>
              <div className="project-meta"><span><strong>{project.name}</strong><small>{project.type}</small></span><button aria-label={`${t.view}: ${project.name}`}>↗</button></div>
            </article>
          ))}
        </div>
        <p className="demo-note">* {lang === 'es' ? 'Proyectos conceptuales creados como demostración.' : 'Concept projects created for demonstration.'}</p>
      </section>

      <section className="services section" id="servicios">
        <div className="services-intro"><p className="eyebrow">{t.serviceEyebrow}</p><h2>{t.serviceTitle}</h2></div>
        <div className="service-list">
          {t.services.map((service, i) => <article key={service[0]}><span>0{i + 1}</span><div><h3>{service[0]}</h3><p>{service[1]}</p></div></article>)}
        </div>
      </section>

      <section className="process section" id="proceso">
        <div className="section-heading centered"><div><p className="eyebrow">{t.processEyebrow}</p><h2>{t.processTitle}</h2></div></div>
        <div className="steps">{t.steps.map((step) => <article key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div>
        <blockquote>
          <MessageCircle /><p>{t.review}</p><cite>{t.reviewBy}</cite>
          <div><span className="demo-flag">{t.reviewNote}</span></div>
        </blockquote>
      </section>

      <section className="booking section" id="agenda">
        <div className="booking-copy">
          <p className="eyebrow"><CalendarDays size={16} /> {t.bookingEyebrow}</p><h2>{t.bookingTitle}</h2><p>{t.bookingSub}</p>
          <div className="booking-contact"><span>hola@sanluiswebstudio.com</span><span>(602) 555-0148</span></div><small>{t.fake}</small>
        </div>
        <div className="booking-card">
          <div className="booking-card-head"><img className="logo-mark booking-logo" src="/logo-tamale.png" alt="San Luis Web Studio logo" /><div><strong>{t.selected}</strong><small>San Luis Web Studio · 30 min</small></div></div>
          <label>{t.dateLabel}</label>
          <div className="date-grid">{dates.map((date, i) => (
            <button className={dateIndex === i ? 'selected' : ''} key={date.toISOString()} onClick={() => setDateIndex(i)}>
              <span>{formatDate(date, true).split(' ')[0]}</span><strong>{date.getDate()}</strong><small>{new Intl.DateTimeFormat(lang === 'es' ? 'es-US' : 'en-US', { month: 'short' }).format(date)}</small>
            </button>
          ))}</div>
          <label>{t.timeLabel}</label>
          <div className="time-grid">{['09:00', '10:00', '14:00', '16:00'].map((slot) => <button className={time === slot ? 'selected' : ''} key={slot} onClick={() => setTime(slot)}>{new Date(`2000-01-01T${slot}`).toLocaleTimeString(lang === 'es' ? 'es-US' : 'en-US', { hour: 'numeric', minute: '2-digit' })}</button>)}</div>
          <div className="selection"><CalendarDays size={18} /><span>{formatDate(dates[dateIndex])}<b> · {new Date(`2000-01-01T${time}`).toLocaleTimeString(lang === 'es' ? 'es-US' : 'en-US', { hour: 'numeric', minute: '2-digit' })}</b></span></div>
          <a className="button booking-button" href={bookingUrl} target="_blank" rel="noreferrer">{t.confirm}<ArrowRight size={18} /></a>
          <small className="helper">{t.helper}</small>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><img className="logo-mark" src="/logo-tamale.png" alt="" /><span>San Luis Web <em>Studio</em></span></a>
        <p>{t.footer}</p><div><a href="mailto:hola@sanluiswebstudio.com">hola@sanluiswebstudio.com</a><span>© 2026</span></div>
      </footer>
    </main>
  );
}
