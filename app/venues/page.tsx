import Image from "next/image";
import Button from "@/components/ui/Button";
import {
    MdKeyboardArrowDown, MdGroups, MdWbSunny, MdCheckCircle, MdEventSeat,
    MdArchitecture, MdLightbulb, MdMic, MdAcUnit, MdLiquor, MdWifi,
    MdAccessible, MdLocalParking, MdRestaurant, MdShield, MdRoomService,
    MdTableBar, MdCleaningServices, MdLocationOn, MdPhone, MdMail
} from "react-icons/md";

export default function VenuesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8QgANWXxLTXdSZh9c0JtDZdZotcyzpz8Dvz211PEsDpWwYNdBcyteB6H2ksY6QiipHTteyIsgvbVXbgSCLYPmM7MKpPyS6SG29VTTI9TTmU0bLUbrEq1lhjifYSzckgkmRi3UPp4LG3e597J113mppE7wYXzEfhhZka3V0k-JVp1ae1Oo80Iss1h1DM2LIi_h29anerX3O6nWsz6JYqxya_h2G_oamaRF-aFOGiwS6KK1TMKR92Md8Tcr-CUJM40_bW8wWOsgHoI"
                    alt="Elegant wedding altar"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/20 to-black/60"></div>
                <div className="relative text-center text-white px-4 max-w-4xl z-10">
                    <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">Elegant Spaces for <br /><span className="font-serif font-semibold italic">Enduring Love</span></h1>
                    <p className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90 leading-relaxed">Discover our collection of curated indoor and outdoor venues designed to make your special day absolutely timeless.</p>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <MdKeyboardArrowDown className="text-white opacity-50 text-4xl" />
                </div>
            </header>

            {/* Content Sections */}
            <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
                {/* Space 1: Ceremony Garden */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 space-y-8">
                        <div>
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">The Great Outdoors</span>
                            <h2 className="text-4xl font-serif font-bold mb-4">The Ceremony Garden</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Surrounded by century-old oaks and manicured floral borders, our Ceremony Garden offers a breathtaking natural backdrop. Exchange vows under a custom-wrought iron gazebo with the soft fragrance of blooming roses in the air.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start space-x-3">
                                <MdGroups className="text-primary bg-primary/10 p-2 rounded-lg text-4xl" />
                                <div>
                                    <p className="font-bold text-sm">Capacity</p>
                                    <p className="text-sm text-gray-500">250 Seated Guests</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MdWbSunny className="text-primary bg-primary/10 p-2 rounded-lg text-4xl" />
                                <div>
                                    <p className="font-bold text-sm">Best Time</p>
                                    <p className="text-sm text-gray-500">Golden Hour / Sunset</p>
                                </div>
                            </div>
                        </div>
                        <ul className="space-y-3 pt-4">
                            <li className="flex items-center text-sm text-gray-600">
                                <MdCheckCircle className="text-primary text-lg mr-2" />
                                Built-in sound system for crystal clear ceremony audio
                            </li>
                            <li className="flex items-center text-sm text-gray-600">
                                <MdCheckCircle className="text-primary text-lg mr-2" />
                                Groomed lawn suitable for all types of footwear
                            </li>
                            <li className="flex items-center text-sm text-gray-600">
                                <MdCheckCircle className="text-primary text-lg mr-2" />
                                Power outlets integrated into landscaping
                            </li>
                        </ul>
                        <Button variant="outline" href="/gallery">View Gallery</Button>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="relative group">
                            <div className="absolute -top-4 -right-4 w-full h-full border border-sage-200 rounded-xl -z-10 group-hover:top-0 group-hover:right-0 transition-all"></div>
                            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiNbP59k_MTuvAp7oCXZHWZmDUCb0GHBqreGbd9_QFgVM_RoY3Dr4VxcNRdArl7FoFbgP3b1y0jC2Bu8ObpPwQdKK1v2LqLYyc1sfOvGEi-xnNUiF-CTzUFDCH98R2D3OP8BtTV29jUa7toCdDGDcVFsOqSz3hZh3EJ92I_5cRPnMtlcSjU4-SihIB9iNBoY7V65RtC-DJapRDZSKWGjRAKAI2FsdHk9OtbrHlB6Wi5iRX-7JHmL3xqx9bcccTLZSqDwOozIi0WZw"
                                    alt="Outdoor wedding aisle"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Space 2: Grand Ballroom */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-1">
                        <div className="relative group">
                            <div className="absolute -bottom-4 -left-4 w-full h-full border border-sage-200 rounded-xl -z-10 group-hover:bottom-0 group-hover:left-0 transition-all"></div>
                            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWEh79_NCT-mhhONonvOFsXDhrGfdV4IvaoNB4jHT7zHjCAubDszgXWNBuUKGqpbgpiGlWFOTuANA-HUkN1Q2FBaaRoKynm5TgqtYZCNjMrF1VcRQry47aCtKvQTrwz69ArZF0kVCDMePwYvxhRT1Qfiql0yWSZ5fLKlMIJy5v08OQb8s6OpkPg35ncMEXTBm_asB0uM5d9wRwu1SkYLdvoYjUwCLeOy0zYLf-u1AeCqsSsUWWH_5KJvJyZ_PobiQGmtPfkENia0Y"
                                    alt="Grand ballroom"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="order-2 space-y-8">
                        <div>
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Sophisticated Grandeur</span>
                            <h2 className="text-4xl font-serif font-bold mb-4">The Grand Ballroom</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Exuding opulence and timeless charm, our Grand Ballroom features 20-foot vaulted ceilings, hand-crafted crystal chandeliers, and a sprawling hardwood dance floor designed for unforgettable celebrations.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start space-x-3">
                                <MdEventSeat className="text-primary bg-primary/10 p-2 rounded-lg text-4xl" />
                                <div>
                                    <p className="font-bold text-sm">Capacity</p>
                                    <p className="text-sm text-gray-500">400 Standing / 300 Seated</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MdArchitecture className="text-primary bg-primary/10 p-2 rounded-lg text-4xl" />
                                <div>
                                    <p className="font-bold text-sm">Size</p>
                                    <p className="text-sm text-gray-500">6,500 Square Feet</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-sage-50 p-6 rounded-xl border border-sage-100">
                            <h4 className="font-bold mb-3 text-sm uppercase tracking-wider">Premium Features</h4>
                            <div className="grid grid-cols-2 gap-4 text-xs">
                                <div className="flex items-center gap-2"><MdLightbulb className="text-primary text-sm" />Smart Lighting Control</div>
                                <div className="flex items-center gap-2"><MdMic className="text-primary text-sm" />Professional A/V Setup</div>
                                <div className="flex items-center gap-2"><MdAcUnit className="text-primary text-sm" />Zoned Climate Control</div>
                                <div className="flex items-center gap-2"><MdLiquor className="text-primary text-sm" />Two Full-Service Bars</div>
                            </div>
                        </div>
                        <Button href="/contact">Check Availability</Button>
                    </div>
                </section>

                {/* Space 3: Bridal Suite */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 space-y-8">
                        <div>
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Intimate Luxury</span>
                            <h2 className="text-4xl font-serif font-bold mb-4">The Bridal Suite</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                A sanctuary of calm before the festivities begin. Flooded with natural light and furnished with plush velvet seating, our suite provides the perfect environment for hair, makeup, and pre-ceremony champagne toasts.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-background-light border border-sage-200 rounded-full text-sm font-medium">Vanity Stations (4)</span>
                            <span className="px-4 py-2 bg-background-light border border-sage-200 rounded-full text-sm font-medium">Private En-suite</span>
                            <span className="px-4 py-2 bg-background-light border border-sage-200 rounded-full text-sm font-medium">Floor Length Mirrors</span>
                            <span className="px-4 py-2 bg-background-light border border-sage-200 rounded-full text-sm font-medium">Champagne Bar</span>
                        </div>
                        <p className="text-gray-500 italic text-sm border-l-4 border-primary/20 pl-4">
                            "The light in the suite was a dream for our photographers. It felt so spacious and calm while we were getting ready." — Sarah M., Bride
                        </p>
                        <Button variant="outline" href="/packages">Explore Amenities</Button>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="relative group">
                            <div className="absolute -top-4 -right-4 w-full h-full border border-sage-200 rounded-xl -z-10 group-hover:top-0 group-hover:right-0 transition-all"></div>
                            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfx8EnzL9X9D0GsMOsVr_fs0d6H1OQkTfn9SQ1MNw7eOb2I4Nm8ZmTSmePue1zePSwH8rUGkPph89KnMh_zMP7NcBtEpj_2Nx9KFJ53CZGFlo7gI_OezjGxSbOZ5aUkdeT0ne_bRSQpIBjjgXQ6X6rGGtV2k0PIla5UPhiQzhTujIJB_kTNJyCk1ggyuphz5cqljsmzW80QFuvn2R0hFyHMQJo1vhq-AXGU5iqIKpmyW9gD1FUno-NoZgAt7beRWu6aqjnebm8_-k"
                                    alt="Linear bridal suite"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Amenities Grid */}
            <section className="bg-sage-50 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold mb-4">Premier Amenities</h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                        <p className="mt-6 text-gray-500 max-w-2xl mx-auto">Included with every venue rental, our top-tier amenities ensure a seamless and luxurious experience for you and your guests.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {[
                            { icon: MdWifi, label: "High Speed WiFi" },
                            { icon: MdAccessible, label: "Full ADA Access" },
                            { icon: MdLocalParking, label: "Valet Parking" },
                            { icon: MdRestaurant, label: "Catering Kitchen" },
                            { icon: MdShield, label: "On-site Security" },
                            { icon: MdRoomService, label: "Venue Manager" },
                            { icon: MdTableBar, label: "Furniture Suite" },
                            { icon: MdCleaningServices, label: "Janitorial Team" }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl border border-sage-100 text-center hover:shadow-xl transition-all hover:border-primary/20 group">
                                <item.icon className="text-primary text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-sm uppercase tracking-wide">{item.label}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map & Inquiry */}
            <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-serif font-bold mb-6">Visit Our Estate</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Experience the magic in person. We offer guided tours Tuesday through Sunday by appointment. Find us nestled in the heart of the rolling hills, just 30 minutes from downtown.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-gray-600">
                            <MdLocationOn className="text-primary text-xl" />
                            <span>123 Willow Lane, Serenity Valley, CA 90210</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                            <MdPhone className="text-primary text-xl" />
                            <span>(555) 123-4567</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                            <MdMail className="text-primary text-xl" />
                            <span>hello@luxeestates.com</span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Button href="/contact" size="lg">Schedule a Private Tour</Button>
                    </div>
                </div>
                <div className="h-[450px] bg-slate-200 rounded-2xl overflow-hidden relative shadow-2xl">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDeEmkz0A45_jXhb__2yaeKhc1ITx3vU7-eIWIQPUBaJu0u-ugr9fyK8QApTYiJ5NJr3UdnqBY59pASriyyF2M-LJ_vQLmqiHMVyVKy6-3FLfmNiDRP3WbuZlZPXmzHI3X4dpDdpQEVhqXXmYEPWZzBGOCSSK8pwi02BP0ibLspDUOxF3apbc-DbefikME4tfHtuXmIsugNa_2fVltvl-U_ZKuWrQ4ZRMtUDqOXr0tbzpclBC8XGpLMtGyxiAwqMXqGeODaPTHUNg"
                        alt="Venue Location"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-2xl">
                        <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute"></div>
                        <div className="w-4 h-4 bg-primary rounded-full relative"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
