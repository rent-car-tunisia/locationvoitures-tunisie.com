import { getCars, Car } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { CarCard } from "@/components/car-card";
import { HeroSection } from "@/components/hero-section";
import { FloatingSearch } from "@/components/floating-search";
import { GoogleReviews } from "@/components/google-reviews";
import { LocalBusinessSchema, WebsiteSchema, FAQSchema } from "@/components/seo-schemas";
import { getFaqs } from "@/lib/get-site-data";
import Link from "next/link";

const DESTINATIONS = [
    { city: "Tunis", slug: "tunis", icon: "apartment", desc: "Capitale & aéroport" },
    { city: "Djerba", slug: "djerba", icon: "beach_access", desc: "L'île de rêve" },
    { city: "Hammamet", slug: "hammamet", icon: "pool", desc: "Station balnéaire" },
    { city: "Sousse", slug: "sousse", icon: "fort", desc: "La Perle du Sahel" },
    { city: "Monastir", slug: "monastir", icon: "flight", desc: "Aéroport & côte" },
    { city: "Sfax", slug: "sfax", icon: "business", desc: "Capitale économique" },
];

export default async function Home() {
    const [cars, faqs] = await Promise.all([getCars(), getFaqs()]);
    const featuredCars = cars.slice(0, 6);
    const displayFaqs = faqs.slice(0, 8);

    return (
        <div className="flex flex-col">
            <HeroSection />
            <FloatingSearch />

            {/* Stats Strip */}
            <section style={{ backgroundColor: 'var(--site-primary)' }} className="py-8 px-4">
                <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
                    {[
                        { value: "15+", label: "Villes couvertes" },
                        { value: "200+", label: "Véhicules disponibles" },
                        { value: "15", label: "Ans d'expérience" },
                        { value: "4.9★", label: "Note moyenne" },
                    ].map((s) => (
                        <div key={s.label}>
                            <div className="text-3xl md:text-4xl font-extrabold font-headline">{s.value}</div>
                            <div className="text-sm opacity-80 mt-1 font-body">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Destinations Grid */}
            <section className="bg-white py-20 px-4 md:px-12">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="font-body text-sm font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--site-primary)' }}>
                            Partout en Tunisie
                        </p>
                        <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-gray-900">
                            Choisissez votre destination
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {DESTINATIONS.map((dest) => (
                            <Link
                                key={dest.slug}
                                href={`/location-voiture-${dest.slug}`}
                                className="group flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-100 hover:border-[var(--site-primary)] hover:shadow-lg transition-all duration-300 bg-gray-50 hover:bg-white"
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'color-mix(in srgb, var(--site-primary) 12%, white)' }}>
                                    <span className="material-symbols-outlined text-2xl" style={{ color: 'var(--site-primary)' }}>{dest.icon}</span>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 font-headline">{dest.city}</div>
                                    <div className="text-xs text-gray-500 font-body">{dest.desc}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fleet */}
            <section className="bg-[#f7f9fc] py-24 px-4 md:px-12">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <p className="font-body text-sm font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--site-primary)' }}>
                                {siteConfig.content.home.fleetLabel}
                            </p>
                            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-gray-900">
                                {siteConfig.content.home.fleetTitle}
                            </h2>
                        </div>
                        <Link href="/nos-voitures" className="hidden md:flex items-center gap-2 font-bold text-sm hover:gap-4 transition-all duration-300" style={{ color: 'var(--site-primary)' }}>
                            {siteConfig.content.home.viewAll}
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredCars.map((car: Car) => (
                            <CarCard key={car.id} id={car.id} title={car.title} slug={car.slug} subtitle={car.subtitle} price3Days={car.price3Days} currency={car.currency} image={car.featured_image} category={car.category} seats={car.seats} doors={car.doors} transmission={car.transmission} fuel={car.fuel} caution={car.caution} freeCancellation={car.freeCancellation} />
                        ))}
                    </div>
                    <div className="text-center mt-10 md:hidden">
                        <Link href="/nos-voitures" className="inline-flex items-center gap-2 font-bold" style={{ color: 'var(--site-primary)' }}>
                            {siteConfig.content.home.viewAllMobile}
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="bg-white py-20 px-4 md:px-12">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="font-body text-sm font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--site-primary)' }}>Nos Engagements</p>
                        <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-gray-900">Pourquoi nous choisir ?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {siteConfig.content.trust.badges.map((badge) => (
                            <div key={badge.title} className="text-center p-8 rounded-2xl border border-gray-100" style={{ backgroundColor: 'color-mix(in srgb, var(--site-primary) 4%, white)' }}>
                                <span className="material-symbols-outlined text-5xl mb-4 block" style={{ color: 'var(--site-primary)' }}>{badge.icon}</span>
                                <h3 className="font-headline font-bold text-xl text-gray-900 mb-2">{badge.title}</h3>
                                <p className="font-body text-gray-600 text-sm leading-relaxed">{badge.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section style={{ backgroundColor: 'var(--site-footer-bg)' }} className="py-16 px-4 text-center text-white">
                <div className="max-w-2xl mx-auto">
                    <p className="text-sm font-bold tracking-widest uppercase mb-3 opacity-70 font-body">{siteConfig.content.promo.badge}</p>
                    <h2 className="font-headline text-3xl md:text-4xl font-extrabold mb-4">{siteConfig.content.promo.h2}</h2>
                    <p className="opacity-80 mb-8 font-body">{siteConfig.content.promo.subtitle}</p>
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <Link href="/nos-voitures" className="px-8 py-4 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-transform" style={{ backgroundColor: 'var(--site-primary)' }}>
                            {siteConfig.content.promo.cta}
                        </Link>
                        <a href={`tel:${siteConfig.contact.phone.link}`} className="px-8 py-4 rounded-full font-bold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all">
                            {siteConfig.contact.phone.display}
                        </a>
                    </div>
                </div>
            </section>

            <GoogleReviews />

            {/* FAQ — 2 column grid */}
            <section className="bg-[#f7f9fc] py-20 px-4 md:px-12">
                <div className="max-w-screen-lg mx-auto">
                    <div className="text-center mb-12">
                        <p className="font-body text-sm font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--site-primary)' }}>
                            {siteConfig.content.home.faqLabel}
                        </p>
                        <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-gray-900">
                            {siteConfig.content.home.faqTitle}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {displayFaqs.map((faq, i) => (
                            <details key={i} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                                    <span className="font-bold text-gray-900 text-left pr-4 text-sm">{faq.question}</span>
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180 shrink-0" style={{ color: 'var(--site-primary)' }}>expand_more</span>
                                </summary>
                                <div className="px-5 pb-5 text-gray-600 leading-relaxed font-body text-sm">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <LocalBusinessSchema />
            <WebsiteSchema />
            <FAQSchema faqs={displayFaqs} />
        </div>
    );
}
