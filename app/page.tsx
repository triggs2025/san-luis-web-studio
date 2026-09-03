'use client';

import { useMemo, useState } from 'react';
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
    workEyebrow: 'TRABAJO DE MUESTRA',
    workTitle: 'Imagina tu negocio aquí.',
    workSub: 'Conceptos creados para mostrar cómo podemos convertir la esencia de un negocio local en una experiencia digital que vende.',
    view: 'Ver concepto',
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
    workEyebrow: 'SAMPLE WORK',
    workTitle: 'Picture your business here.',
    workSub: 'Concepts created to show how we turn the spirit of a local business into a digital experience that sells.',
    view: 'View concept',
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
    footer: 'Web design with a local heart.',
    fake: 'Demo contact details — replace before publishing',
  },
};

const projects = [
  { name: 'La Estrella', type: 'PANADERÍA · BAKERY', theme: 'bakery', line: 'Pan dulce. Café. Comunidad.' },
  { name: 'Sol y Sal', type: 'TAQUERÍA · TAQUERIA', theme: 'tacos', line: 'Sabor que se siente como casa.' },
  { name: 'Flores Marisol', type: 'FLORERÍA · FLORIST', theme: 'flowers', line: 'Detalles que hablan por ti.' },
];

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

  const bookingUrl = useMemo(() => {
    const start = new Date(dates[dateIndex]);
    const [hours, minutes] = time.split(':').map(Number);
    start.setHours(hours, minutes, 0, 0);
    const end = new Date(start.getTime() + 30 * 60 * 1000);
    const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const title = lang === 'es' ? 'Consulta gratuita — Barrio Web Studio' : 'Free consultation — Barrio Web Studio';
    const details = lang === 'es'
      ? 'Consulta de 30 minutos para hablar sobre tu negocio y tu nueva página web. Agrega un enlace de Google Meet al guardar.'
      : 'A 30-minute consultation to talk about your business and new website. Add a Google Meet link when saving.';
    const params = new URLSearchParams({
      action: 'TEMPLATE', text: title, dates: `${stamp(start)}/${stamp(end)}`, details,
      add: 'hola@barriowebstudio.com',
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
        <a className="brand" href="#top" aria-label="Barrio Web Studio home">
          <img className="logo-mark" src="/logo-tamale.png" alt="" /><span>Barrio Web <em>Studio</em></span>
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
            <div className="browser-top"><span /><span /><span /><b>www.tunegocio.com</b></div>
            <div className="browser-body">
              <div className="mini-nav"><strong>La Estrella</strong><span>Menú &nbsp; Historia &nbsp; Visítanos</span></div>
              <p>DESDE 1998 · SINCE 1998</p>
              <h2>Recién hecho.<br /><i>Siempre con cariño.</i></h2>
              <button>Ver nuestro menú →</button>
              <div className="conchas"><span>✦</span><span>✤</span><span>✦</span></div>
            </div>
          </div>
          <div className="floating-note"><Star size={16} fill="currentColor" /> Hecho para tu comunidad</div>
        </div>
      </section>

      <section className="portfolio section" id="ejemplos">
        <div className="section-heading">
          <div><p className="eyebrow">{t.workEyebrow}</p><h2>{t.workTitle}</h2></div>
          <p>{t.workSub}</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.theme}`} key={project.name}>
              <div className="project-preview">
                <div className="project-browser"><i /><i /><i /></div>
                <div className="project-inner">
                  <small>{project.type}</small><h3>{project.name}</h3><p>{project.line}</p>
                  {index === 0 && <div className="bread-shapes">● ◒ ●</div>}
                  {index === 1 && <div className="taco-shape">☀</div>}
                  {index === 2 && <div className="flower-shape">✿</div>}
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
        <blockquote><MessageCircle /><p>{t.review}</p><cite>{t.reviewBy}</cite></blockquote>
      </section>

      <section className="booking section" id="agenda">
        <div className="booking-copy">
          <p className="eyebrow"><CalendarDays size={16} /> {t.bookingEyebrow}</p><h2>{t.bookingTitle}</h2><p>{t.bookingSub}</p>
          <div className="booking-contact"><span>hola@barriowebstudio.com</span><span>(602) 555-0148</span></div><small>{t.fake}</small>
        </div>
        <div className="booking-card">
          <div className="booking-card-head"><img className="logo-mark booking-logo" src="/logo-tamale.png" alt="Barrio Web Studio logo" /><div><strong>{t.selected}</strong><small>Barrio Web Studio · 30 min</small></div></div>
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
        <a className="brand" href="#top"><img className="logo-mark" src="/logo-tamale.png" alt="" /><span>Barrio Web <em>Studio</em></span></a>
        <p>{t.footer}</p><div><a href="mailto:hola@barriowebstudio.com">hola@barriowebstudio.com</a><span>© 2026</span></div>
      </footer>
    </main>
  );
}
