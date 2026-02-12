import Link from "next/link";
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-primary/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <span className="text-3xl font-serif font-bold text-primary">Ethereal Estates</span>
                        <p className="text-gray-500 max-w-sm leading-relaxed text-sm">
                            A timeless venue for luxury weddings, private celebrations, and unforgettable corporate retreats in the heart of wine country.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <FaFacebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <FaPinterest size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-800">Explore</h4>
                        <ul className="space-y-4 text-gray-600 text-sm">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/venues" className="hover:text-primary transition-colors">Venues</Link></li>
                            <li><Link href="/packages" className="hover:text-primary transition-colors">Packages</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-800">Contact</h4>
                        <ul className="space-y-4 text-gray-600 text-sm">
                            <li className="flex items-center gap-2">
                                <MdEmail className="text-primary" />
                                hello@etherealestates.com
                            </li>
                            <li className="flex items-center gap-2">
                                <MdPhone className="text-primary" />
                                +1 (707) 555-0123
                            </li>
                            <li className="flex items-center gap-2">
                                <MdLocationOn className="text-primary" />
                                1248 Vineyard Lane, Napa Valley, CA
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-800">Legal</h4>
                        <ul className="space-y-4 text-gray-600 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© 2024 Ethereal Estates Wedding Venue. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
