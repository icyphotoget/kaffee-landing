'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, Coffee, Star, ArrowRight, Menu, ExternalLink, Shield, Truck, Award, Users } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Jura E8 EC',
    tagline: 'Der unangefochtene Testsieger',
    price: '1.299',
    oldPrice: '1.499',
    rating: 4.9,
    reviews: 2847,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&q=80',
    pros: ['Intelligentes P.E.P. Brühsystem', '5-stufiges Kegelmahlwerk', 'Automatische Milchschaum-Reinigung', 'Aroma+-Garmethode', 'Wifi-/Jura-App-Anbindung'],
    cons: ['Hoher Anschaffungspreis', 'Größere Stellfläche', 'Komplexere Bedienung'],
    badge: 'TESTSIEGER',
    badgeColor: 'bg-amber-500',
    featured: true,
  },
  {
    id: 2,
    name: 'De\'Longhi Magnifica S',
    tagline: 'Bestes Preis-Leistungs-Verhältnis',
    price: '499',
    oldPrice: '649',
    rating: 4.6,
    reviews: 5621,
    image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&q=80',
    pros: ['Kompakte Bauweise', 'Einfache Bedienung', 'Entnehmbare Brühgruppe', '13-stufiges Mahlwerk', 'Milchaufschäumer integriert'],
    cons: ['Lauter beim Mahlen', 'Kunststoff-Gehäuse', 'Keine App-Anbindung'],
    badge: 'PREIS-TIPP',
    badgeColor: 'bg-emerald-500',
    featured: false,
  },
  {
    id: 3,
    name: 'Philips Series 5400',
    tagline: 'Ideal für Milchkaffee-Liebhaber',
    price: '599',
    oldPrice: '749',
    rating: 4.7,
    reviews: 3198,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    pros: ['12-stufiges Keramik-Mahlwerk', 'Automatische Milchsystem-Reinigung', 'Intuitives Touchdisplay', '8 Kaffeevoreinstellungen', 'Leiser Betrieb'],
    cons: ['Milchbehälter separat', 'App teilweise instabil', 'Mittlere Stellfläche'],
    badge: 'EMPFEHLUNG',
    badgeColor: 'bg-blue-500',
    featured: false,
  },
]

const faqs = [
  {
    q: 'Was kostet ein guter Kaffeevollautomat im Jahr 2026?',
    a: 'Hochwertige Modelle starten bei etwa 400€ für Einsteigergeräte. Premium-Maschinen wie die Jura E8 kosten 1.200€ bis 1.500€. Die Investition amortisiert sich bei regelmäßiger Nutzung nach etwa 2–3 Jahren gegenüber Filterkaffee.',
  },
  {
    q: 'Welche Marke ist die beste für Kaffeevollautomaten?',
    a: 'Jura gilt als Premium-Hersteller mit höchster Kaffeequalität. De\'Longhi bietet das beste Preis-Leistungs-Verhältnis. Philips überzeugt mit automatischen Milchsystemen. Alle drei Marken sind zuverlässig und langlebig.',
  },
  {
    q: 'Wie oft muss man einen Kaffeevollautomat reinigen?',
    a: 'Täglich: Tropfschale leeren und Milchsystem spülen. Wöchentlich: Brühgruppe reinigen. Monatlich: Vollständige Entkalkung durchführen. Modelle mit automatischer Reinigung wie die Jura E8 erleichtern den Wartungsaufwand erheblich.',
  },
  {
    q: 'Lohnt sich ein teurer Kaffeevollautomat wirklich?',
    a: 'Ja – wenn Sie täglich 2–3 Tassen Kaffee trinken. Die bessere Mahlwerkqualität, temperaturausgabe und die automatischen Programme liefern deutlich besseren Kaffee als günstigere Modelle. Premium-Geräte halten bei guter Pflege auch 10+ Jahre.',
  },
]

export default function KaffeeLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Coffee className="w-8 h-8 text-coffee-600" />
              <span className="text-xl font-bold text-gray-900">Kaffee<span className="text-coffee-600">Profi</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#test" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm font-medium">Test</a>
              <a href="#vergleich" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm font-medium">Vergleich</a>
              <a href="#faq" className="text-gray-600 hover:text-coffee-600 transition-colors text-sm font-medium">FAQ</a>
              <a href="#kontakt" className="bg-coffee-600 hover:bg-coffee-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">
                Jetzt Beraten
              </a>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            <a href="#test" className="block text-gray-600 hover:text-coffee-600">Test</a>
            <a href="#vergleich" className="block text-gray-600 hover:text-coffee-600">Vergleich</a>
            <a href="#faq" className="block text-gray-600 hover:text-coffee-600">FAQ</a>
            <a href="#kontakt" className="block bg-coffee-600 text-white px-5 py-2.5 rounded-full text-center font-semibold">Jetzt Beraten</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-coffee-50 via-white to-amber-50 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-coffee-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-coffee-100 text-coffee-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Kaffeevollautomat Test 2026 – Unabhängig & Objektiv
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
              Die 3 besten<br />
              <span className="text-coffee-600">Kaffeevollautomaten</span><br />
              im Vergleich
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Premium-Modelle für anspruchsvolle Genießer. Erfahren Sie, welche Maschinen in unserem Test 2026 am besten abgeschnitten haben – ehrlich, objektiv und ohne versteckte Werbung.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="#vergleich" className="inline-flex items-center gap-2 bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:shadow-xl hover:shadow-coffee-600/25">
                Jetzt Vergleichen <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#test" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-full text-lg font-bold transition-all">
                Zum Testbericht
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" />
                <span>52 Modelle getestet</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" />
                <span>Unabhängig & objektiv</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" />
                <span>TÜV-geprüfte Qualität</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80">
            <div className="flex items-center gap-2 text-white text-sm">
              <Shield className="w-5 h-5" />
              <span>2 Jahre Garantie</span>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
              <Truck className="w-5 h-5" />
              <span>Kostenloser Versand</span>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
              <Users className="w-5 h-5" />
              <span>50.000+ Zufriedene Kunden</span>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 Bewertung</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="vergleich" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Kaffeevollautomat Vergleich 2026
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Drei Premium-Modelle im direkten Vergleich. Alle Daten basieren auf unserem unabhängigen Testverfahren.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${product.featured ? 'ring-2 ring-coffee-500 md:-mt-4 md:mb-4' : ''}`}
              >
                {product.featured && (
                  <div className={`absolute top-4 right-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {product.badge}
                  </div>
                )}
                <div className="p-6">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-2xl mb-6" />
                  <div className={`inline-block ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                    {product.badge}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{product.tagline}</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-black text-coffee-600">{product.price}€</span>
                    <span className="text-lg text-gray-400 line-through">{product.oldPrice}€</span>
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{product.rating} ({product.reviews.toLocaleString()} Bewertungen)</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-xs font-bold text-emerald-600 uppercase mb-2">Vorteile</p>
                      {product.pros.map((pro, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-700 mb-1">
                          <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-red-500 uppercase mb-2">Nachteile</p>
                      {product.cons.map((con, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-600 mb-1">
                          <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#kontakt"
                    className={`block w-full text-center py-3.5 rounded-xl font-bold transition-all ${
                      product.featured
                        ? 'bg-coffee-600 hover:bg-coffee-700 text-white shadow-lg shadow-coffee-600/30'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    Jetzt Informieren
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="test" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                Warum ein Kaffeevollautomat?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Frischer Kaffee auf Knopfdruck – jeden Tag. Ein Vollautomat mahlt die Bohnen erst kurz vor der Zubereitung, was maximales Aroma garantiert. Kein Vergleich zu Kapseln oder Filterkaffee.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Fruhe Kaffeequalität', desc: 'Besser als jede Filiale – frisch gemahlen und aufgebrüht in unter 30 Sekunden.' },
                  { title: 'Geld sparen', desc: 'Eine Tasse kostet ca. 0,30–0,50€. In der Filiale 3–5€. Sparpotenzial: 500€/Jahr.' },
                  { title: 'Individuell anpassbar', desc: 'Stärke, Temperatur, Milchschaum – alles nach deinem Geschmack einstellbar.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-coffee-50 rounded-xl">
                    <div className="w-12 h-12 bg-coffee-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                alt="Kaffeevollautomat in moderner Küche"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-gray-900">92%</p>
                    <p className="text-sm text-gray-500">würden weiterempfehlen</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-gray-600">
              Alles Wichtige rund um Kaffeevollautomaten – kurz und prägnant beantwortet.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === idx ? 180 : 0 }}>
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-600">{faq.a}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontakt" className="py-16 sm:py-24 bg-coffee-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Finde deinen perfekten Kaffeevollautomaten
            </h2>
            <p className="text-xl text-coffee-100 mb-8 max-w-2xl mx-auto">
              Nicht sicher, welches Modell das richtige für dich ist? Lass dich von unseren Experten beraten – kostenlos und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@kaffeeprofi.de" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-coffee-600 px-8 py-4 rounded-full text-lg font-bold transition-all">
                <Mail className="w-5 h-5" />
                E-Mail schreiben
              </a>
              <a href="tel:+4980123456789" className="inline-flex items-center justify-center gap-2 bg-coffee-700 hover:bg-coffee-800 text-white px-8 py-4 rounded-full text-lg font-bold transition-all">
                <Phone className="w-5 h-5" />
                0800 123 456 789
              </a>
            </div>
            <p className="text-coffee-200 text-sm mt-6">
              Mo–Fr 9:00–18:00 Uhr · Samstag 10:00–14:00 Uhr
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-8 h-8 text-coffee-500" />
                <span className="text-xl font-bold text-white">Kaffee<span className="text-coffee-500">Profi</span></span>
              </div>
              <p className="text-gray-400 text-sm">
                Unabhängiger Kaffeevollautomat Test 2026. Wir helfen dir, das perfekte Modell für dein Zuhause zu finden.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#test" className="hover:text-coffee-500">Testbericht</a></li>
                <li><a href="#vergleich" className="hover:text-coffee-500">Vergleich</a></li>
                <li><a href="#faq" className="hover:text-coffee-500">FAQ</a></li>
                <li><a href="#kontakt" className="hover:text-coffee-500">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-coffee-500">Impressum</a></li>
                <li><a href="#" className="hover:text-coffee-500">Datenschutz</a></li>
                <li><a href="#" className="hover:text-coffee-500">AGB</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>info@kaffeeprofi.de</li>
                <li>0800 123 456 789</li>
                <li>Mo–Fr 9:00–18:00 Uhr</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 KaffeeProfi.de – Alle Rechte vorbehalten. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6"/>
    </svg>
  )
}

function TrendingUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  )
}

function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function Phone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}
