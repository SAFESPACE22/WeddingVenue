"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import {
    MdChevronLeft, MdChevronRight, MdFavorite, MdLocationOn,
    MdMail, MdCameraAlt, MdSend
} from "react-icons/md";
import { FaFacebook, FaPinterest } from "react-icons/fa";

export default function ContactPage() {
    const [selectedDate, setSelectedDate] = useState<number | null>(10);
    const [selectedTime, setSelectedTime] = useState<string | null>("02:00 PM");

    const dates = Array.from({ length: 31 }, (_, i) => i + 1);
    const timeSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow flex flex-col lg:flex-row">
                {/* Left Side: Interactive Form & Booking */}
                <div className="w-full lg:w-3/5 p-8 lg:p-20 bg-background-light">
                    <div className="max-w-2xl mx-auto">
                        <header className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Begin Your Forever</span>
                            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-4">Start Your Journey</h1>
                            <p className="text-gray-500 leading-relaxed">Schedule a private tour of our historic estate or send us a message about your dream wedding. Our specialists are here to curate your perfect day.</p>
                        </header>

                        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                            {/* Section 1: Inquiry Details */}
                            <section>
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 font-serif">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
                                    Your Inquiry
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Full Name</label>
                                        <input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Julianne Smith" type="text" />
                                    </div>
                                    <div className="relative">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Email Address</label>
                                        <input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="julianne@example.com" type="email" />
                                    </div>
                                    <div className="relative">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Preferred Season</label>
                                        <div className="relative">
                                            <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none appearance-none cursor-pointer">
                                                <option>Spring 2025</option>
                                                <option>Summer 2025</option>
                                                <option>Autumn 2025</option>
                                                <option>Winter 2025</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Guest Count</label>
                                        <input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="150" type="number" />
                                    </div>
                                </div>
                            </section>

                            {/* Section 2: Tour Booking Widget */}
                            <section>
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 font-serif">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
                                    Schedule a Private Tour
                                </h2>
                                <div className="bg-white border border-slate-100 rounded-xl p-6 soft-shadow">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="font-bold">October 2024</h3>
                                        <div className="flex gap-2">
                                            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors"><MdChevronLeft /></button>
                                            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors"><MdChevronRight /></button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-7 text-center text-xs font-bold text-gray-400 uppercase tracking-tighter mb-4">
                                        <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                                    </div>
                                    <div className="grid grid-cols-7 text-center gap-2">
                                        <button className="p-3 text-gray-300 pointer-events-none">29</button>
                                        <button className="p-3 text-gray-300 pointer-events-none">30</button>
                                        {dates.slice(0, 15).map(date => (
                                            <button
                                                key={date}
                                                onClick={() => setSelectedDate(date)}
                                                className={`p-3 rounded-lg transition-all ${selectedDate === date
                                                    ? "bg-primary text-white font-bold shadow-md transform scale-105"
                                                    : "hover:bg-primary/5 text-gray-700"
                                                    }`}
                                            >
                                                {date}
                                            </button>
                                        ))}
                                        {/* Just showing first 15 days for demo */}
                                    </div>

                                    {selectedDate && (
                                        <div className="mt-8 border-t border-slate-100 pt-6 animate-in fade-in zoom-in-95 duration-300">
                                            <p className="text-sm font-bold mb-4 text-gray-500">Available Time Slots for Oct {selectedDate}th</p>
                                            <div className="flex flex-wrap gap-3">
                                                {timeSlots.map(time => (
                                                    <button
                                                        key={time}
                                                        onClick={() => setSelectedTime(time)}
                                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${selectedTime === time
                                                            ? "bg-primary/10 text-primary border-primary/20 font-bold ring-2 ring-primary/20"
                                                            : "border-primary/20 hover:bg-primary hover:text-white"
                                                            }`}
                                                    >
                                                        {time}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </section>

                            <Button size="lg" className="w-full flex items-center justify-center gap-3">
                                Request Your Booking <MdFavorite />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Map & Info */}
                <div className="w-full lg:w-2/5 relative min-h-[600px] bg-slate-900">
                    <Image
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="Map Background"
                        fill
                        className="object-cover opacity-40 mix-blend-multiply grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/20 to-transparent lg:from-slate-900 lg:via-slate-900/20"></div>

                    <div className="relative h-full flex flex-col justify-end p-8 lg:p-16">
                        <div className="bg-white/95 backdrop-blur-xl p-10 rounded-2xl border border-primary/10 soft-shadow">
                            <h3 className="text-2xl font-bold mb-8 font-serif">Visit the Estate</h3>
                            <div className="space-y-6 mb-10">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MdLocationOn />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Our Location</h4>
                                        <p className="text-gray-500 text-sm">1224 Rose Avenue, Heritage Valley<br />Napa County, CA 94558</p>
                                        <a href="#" className="text-primary text-sm font-bold mt-2 inline-block border-b border-primary/30 pb-0.5 hover:border-primary transition-all">Open in Google Maps</a>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MdMail />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Get in Touch</h4>
                                        <p className="text-gray-500 text-sm">hello@etherealestates.com<br />+1 (555) 808-1924</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-primary/10 pt-8">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Follow Our Story</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><MdCameraAlt /></a>
                                    <a href="#" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><FaFacebook /></a>
                                    <a href="#" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><FaPinterest /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
