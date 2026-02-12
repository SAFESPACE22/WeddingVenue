import Image from "next/image";
import Button from "@/components/ui/Button";
import {
    MdCheckCircle, MdAutoAwesome, MdDiamond, MdPhotoCamera,
    MdPiano, MdLocalBar, MdNightlight
} from "react-icons/md";

export default function PackagesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <header className="relative py-24 overflow-hidden bg-background-light">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAdB0dpndcgnJFs6BI0wpujA3UW_EXsEyCbkpYwBK4wI3X17g04L5xsr1ijKGjRdTD-owure5T6wrVuc6smh4haf2CDOJyuAdq3fl-VCo9op2dIFrc3NVDgc7flw9Hp6akaFGKWOJr-7dE81T_FMTlWcYov0R-h0p1F3yXpBuUL8zOYyTWqrDN6PV0vQXJU9li0b-ubNbiDXbps5B-BsXQRjMVXbIhatiQmteojZBoIvVOq1HunWvEF5qa5vEsTAdn3FbdMxd8i1M"
                        alt="Wedding Venue Decor"
                        fill
                        className="object-cover opacity-10 grayscale"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Curated Experiences</span>
                    <h1 className="text-5xl md:text-7xl font-sans font-extrabold text-slate-900 mb-6 leading-tight">
                        Wedding Packages <br /> & <span className="italic text-primary font-serif">Investment</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Every love story is unique. We’ve designed three distinct tiers to provide the foundation for your perfect day, allowing you to focus on the moments that matter most.
                    </p>
                </div>
            </header>

            {/* Pricing Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {/* Classic Package */}
                    <div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col hover:border-primary/40 transition-all hover:shadow-xl group">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2 font-serif">Classic</h3>
                            <p className="text-gray-500 text-sm">Essential elegance for intimate celebrations.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-extrabold tracking-tight">$4,500</span>
                            <span className="text-slate-400">/ starting at</span>
                        </div>
                        <ul className="space-y-4 mb-10 flex-grow">
                            {[
                                "6 Hours of Venue Access",
                                "Standard Tables & Linens",
                                "Sound System & Microphone",
                                "Bridal Suite Access",
                                "On-site Coordinator"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start space-x-3 text-sm">
                                    <MdCheckCircle className="text-primary text-lg" />
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button variant="outline" className="w-full">View Details</Button>
                    </div>

                    {/* Signature Package */}
                    <div className="bg-white border-2 border-primary rounded-xl p-8 flex flex-col shadow-2xl shadow-primary/10 relative scale-105 z-20">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                            Most Popular
                        </div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2 font-serif">Signature</h3>
                            <p className="text-gray-500 text-sm">The full-day experience with premium touches.</p>
                        </div>
                        <div className="mb-8 text-primary">
                            <span className="text-5xl font-extrabold tracking-tight">$7,200</span>
                            <span className="opacity-70">/ starting at</span>
                        </div>
                        <ul className="space-y-4 mb-10 flex-grow">
                            {[
                                "Full Day Venue Access (12 hrs)",
                                "Premium Floral Arrangements",
                                "Gourmet Buffet Catering",
                                "Both Bridal & Groom Suites",
                                "Open Bar (Standard Selection)",
                                "Professional AV & Lighting"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start space-x-3 text-sm">
                                    <MdAutoAwesome className="text-primary text-lg" />
                                    <span className="font-semibold text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button className="w-full">Reserve This Package</Button>
                    </div>

                    {/* Luxury Package */}
                    <div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col hover:border-primary/40 transition-all hover:shadow-xl group">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2 font-serif">Luxury</h3>
                            <p className="text-gray-500 text-sm">Bespoke luxury for grand celebrations.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-extrabold tracking-tight">$12,500</span>
                            <span className="text-slate-400">/ starting at</span>
                        </div>
                        <ul className="space-y-4 mb-10 flex-grow">
                            {[
                                "Full Weekend Venue Access",
                                "Premium Plated 5-Course Meal",
                                "Custom Floral Design Team",
                                "Ultra-Premium Open Bar",
                                "Concierge Wedding Planning",
                                "Complimentary Valet Service"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start space-x-3 text-sm">
                                    <MdDiamond className="text-primary text-lg" />
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button variant="outline" className="w-full">View Details</Button>
                    </div>
                </div>
            </section>

            {/* Optional Add-ons */}
            <section className="bg-primary/5 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold mb-4 font-serif">Enhance Your Day</h2>
                        <p className="text-gray-600">Customize your package with our curated selection of add-ons.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-primary/10 flex items-center space-x-4">
                            <div className="bg-primary/10 p-3 rounded-lg"><MdPhotoCamera className="text-primary text-xl" /></div>
                            <div><h4 className="font-bold text-sm">Photo Booth</h4><p className="text-xs text-gray-500">$600 / 4 hrs</p></div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-primary/10 flex items-center space-x-4">
                            <div className="bg-primary/10 p-3 rounded-lg"><MdPiano className="text-primary text-xl" /></div>
                            <div><h4 className="font-bold text-sm">Live Pianist</h4><p className="text-xs text-gray-500">$450 / Ceremony</p></div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-primary/10 flex items-center space-x-4">
                            <div className="bg-primary/10 p-3 rounded-lg"><MdLocalBar className="text-primary text-xl" /></div>
                            <div><h4 className="font-bold text-sm">Champagne Wall</h4><p className="text-xs text-gray-500">$350 / Entry</p></div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-primary/10 flex items-center space-x-4">
                            <div className="bg-primary/10 p-3 rounded-lg"><MdNightlight className="text-primary text-xl" /></div>
                            <div><h4 className="font-bold text-sm">Late Night Tacos</h4><p className="text-xs text-gray-500">$12 / Person</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-12 md:p-20 text-center">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL0B2uI2ahXK7qXVE0kb97sXLgvgleiqsTdQv_0zcp2mytX2064qmDQnBNjDqMq6_ldzJxUwWvRgYEVSHnsCAohvtR3U1b7GM61KbUSYXD6bXKdrt0xn8LSazK3yOF-RAQrQO83MbJbxAhO-N7uEIYKWrgxjq5pTJfX-JUUKt3MB56RKmOnlp2w-O7M3CzHXLPRih1zGTwPHEcWeLQ5hUZ4gIFt4D5fYjNuM9pRPXsvtHehSc5en3qLc3uqFzt_LRu4R-COKyxm4Q"
                            alt="Happy Wedding Couple"
                            fill
                            className="object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    </div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 font-serif">Need a custom quote?</h2>
                        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                            Have a specific vision that doesn’t fit into our standard packages? We specialize in creating bespoke events tailored exactly to your needs.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <Button href="/contact" size="lg">Request Custom Proposal</Button>
                            <Button href="/contact" variant="glass" size="lg">Schedule a Consultation</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
