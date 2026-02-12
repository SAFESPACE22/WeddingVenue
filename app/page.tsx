import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { MdExpandMore, MdGroups, MdLocationOn, MdSpa, MdArrowForward, MdFormatQuote, MdCameraAlt, MdFacebook, MdPublic } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTnQAtZYEs6ub5pmfiJ3Km-bDLTeRJ1P_B0BcENGIpaYIrlhghT4SZ9p1jYbLvy-MZ5zfZ2fOXCECk8pIOgRRkpDR7fMiC3gPfhQQPZgriXfZ28RzS8NJ66JbUCFC6_jZi-GBf-SkjFj3KDe7_Cm4YrUK_OSpnKTpxgcVNLuiq03z7crpmeic6-HmymdMz1m5cupcVp0SFeOzjI7ckHvS44UzObvBsVlub9e3YujzCGt1idLcb8VOj0Tt6cDbx3i3ALYExHgdeo5I"
            alt="Main Venue View"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-white/90 uppercase tracking-[0.3em] text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">A Dream Awaits</span>
          <h1 className="font-serif text-5xl md:text-8xl text-white mb-8 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">Where your forever begins</h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <Button href="/contact" size="lg" className="w-full md:w-auto">
              Schedule a Tour
            </Button>
            <Button href="/packages" variant="glass" size="lg" className="w-full md:w-auto">
              View Packages
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <MdExpandMore className="text-white text-3xl" />
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Our Philosophy</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-gray-900">An Unforgettable Setting for Your Love Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Nestled in the heart of the rolling hills, Ethereal Estates offers a breathtaking sanctuary for couples seeking an elegant, timeless celebration. From our sun-drenched oak groves to the grand ballroom with floor-to-ceiling windows, every corner of our property is designed to tell your unique story.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-primary font-serif text-4xl mb-2 font-bold">15+</div>
                <p className="text-gray-500 uppercase tracking-widest text-xs">Years of Magic</p>
              </div>
              <div>
                <div className="text-primary font-serif text-4xl mb-2 font-bold">500+</div>
                <p className="text-gray-500 uppercase tracking-widest text-xs">Weddings Hosted</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcfATL4m_6PARTUGZFT7mG4IFRbY-zJwjMthP2cguvLJIcuuASFh9pidMvhH5U7pbOrfSTQx3QXk_nAIh0MDgHd3GZeHJ8w1_ojFohS3Xkau-tlBzlsrmjMLZEiKJTAc3A88IYa8pc_pM-IO9cQc-kLa7F6dqmCraUZ6yY5KgH687gThQiRjYw7Tgglp61Bt44oeZ8ZHKqTMEl3qto3C6Nm0KekQ0FVzOM3TAqmaRSFef0Xt98FK7lg54Q0RrDL7GwnMCl7IH-HRI"
                alt="Reception Hall"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 hidden xl:block w-64 h-64 border-8 border-blush rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2MbyQakSzuRV4uRSVzvicyLygUB2jPwlU57l_mnVbYzphwoaPVQy0E-k5Dy2PqttkhPyGNAtiCPqXTPBSeQuim_caMvyLFIMhS8h1bfyxPbzD7Al72NV5xl-tNNIBLsajAsvjPlMBTl4jhVmyuoVJP7g9pI6N4usZHpMvEtOqM6sAPTi8Y0AZmJqVZaFHQnLbm114XixV5suu813m939RH1xFo2TlJZPhOfqTPQF9SpTNG2g5ECOiodquRg2SSueH7F1AbSBGNUs"
                alt="Couple Details"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="bg-blush py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MdGroups className="text-3xl" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Capacity</h3>
              <p className="text-gray-600">Up to 300 guests for ceremony and formal dinner reception.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MdLocationOn className="text-3xl" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Location</h3>
              <p className="text-gray-600">Located in the heart of Napa Valley, just 45 minutes from the airport.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MdSpa className="text-3xl" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Amenities</h3>
              <p className="text-gray-600">Full bridal suite, groom's lounge, and private coordination services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Capturing the Moment</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">Explore the breathtaking views and intimate spaces that make our venue the premier choice for luxury weddings.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTJUSDBufBAJTRqyBSs3lo0y5y1pzdSUGeYV_7w4pacyaWQ-JFutEex3HCio9xDjpBMMMsiMB9lxiSzcpuOZQpxZgNfsuD-es2tNWsNz_hmIMesGWluBGnWvy_50b4YZ8jxky73kLAilFaKLFq0V8N7OtU-MPKk3553idC4V7-GzUzQXkhtEpeYwp65vqRthNcHhImIRmciVs6W0zyW_LmUyEecjGN4NaFhpnUXM3lNuhfwtHjAAYjRgWsCS2KuZLSGFEGTu0yYm8" alt="Outdoor View" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-md group">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Z1HJbeypY5vPqe_ik199rGen8gE2BhCw9OVkQbeDz31_AOiv08LsluS3NS6LdgPSLHWAvP36xt6jwj106a5t0-eXuhTICZLdLOD2JeUnw4jKvXxTiq3Hb96YaTPkHz8ntLOD6bCdzdlmvvSK5tts_NljRsc4gYJaMPQkicCy8PUypUyYZ6s10N85AwqszylTbe-XwElfFXOHDt6tygS-NtltJqo9DoQTDPosa3orvZRt--tTpGMcAs9grxNFarluWAKtrczYQYI" alt="Bride" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-md group">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_sXD405E_ietEUxPq5jKpC_v1YsfyPnDk7nf22POLW9nHYcn5Wf5r63SojrreEU_79QSUzJZpP13wlwpQBiG5e8bcWmJ9ywxEpfOimfkvxWfqlodgXHiIfSX6EO3mZmb7YnFvSkxtlfYSkjLVzE89iRbkbAZFhzCgUuWNYw3rN0-2rVYgNBDyT_41EZv0ZC04EFx7vvRo41z5U051tYGxOB__bGWFoq452BkBy0ycuLDS6pBI3BPzNOgg8XNHL4-jJ3oR6N0Mhms" alt="Reception Detail" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtEBmKTCtCZ2vayBP9VQ6nbYIykymLAbppKfzVu_jUH7Cd5M6GZJ1N8RUFWkllTHeNaB9OvJhQFby7dxnoVbVz1c4kXdNbIqdZCAzX0TpCNT9LHGjmi5mWyoiXY4nc2law5j_9oi46ZRe7YI_0zwoKG4tgL8lzIlYxkcdFhKKhsZJiEAQXZPnHmKss5Gy1wl9Z_ZMq27i9bjYVVGZeyPFUIEDdVNATcmCyH4HkWkAjLwqJ2RK5DnbzTkXgQXuHrK0gkh27zBUf0Cc" alt="Ceremony" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL0MMnqXSV9vetsDs85ArsTpTKleo7csCSlsL2GzNiUMmUPYUy9LRtzv9TeCm6h5Rubpx725BC59hwOlqzI1Ch6d5lJgQBHn1zGtBNVpCG-R_GAMOtpP3swF-C8VLBVJetmwoSp2-DvvZCbgO8spXUaRlbxr1F-QUray4lDnMrWNwh3w2syesS-1f6BO2JBTOxXdHKvmGu4z1X5Bq7KM9rna1fDHi129p8pn7Luj-iPyE5QJQvEwA0ZaywQoRtawB5sdVvMwbPAXI" alt="Estate Exterior" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-md group">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-qHH9rt4JOM9DolrUtaaDe7KhAaJkpCbnMPyMm7qv4tHOs7YbXowRZ_ntdVh0OUO9GA2ungM7forqzXMVNdOKOrmIp97CjIh5zQbvbvzNefpPRwyxcEbql7P-jjE1WYWjhmhhW92wQTC2SbVtqIOHBXEzK5dFBL_TRtlaXKzCqdENki8Cpb28W7NPQ4VZfddLg38EjvXGJwZ91ivKAFWhkKm-fryrzBXYncPd0YXGbsSpUIXlL5YMtHbkdIh5NBz4H5-N503wYuA" alt="Groom Detail" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-md group">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoESCWdMVPmHQgKb_FQfX-_d4nFdwOmPM14ZpNMvohbWr62QHjLhmo80eCIYPdSAw-5fxyda5hDyVzFn1F7ee02wdZwu3P7qTcq5uvt5pjcJ-m4i_swNhLvC-axl2OJpfjMkXqmP0eX04hDcq0tihqSs4LAFKNo9m9Be93Mb59f6iLFr61TM2bmhMFat31_NLMSzfE5sjo9ytyq-_aviEOovBbweYHuw9cV4hHMK7SzHx6C_lFtXD1zV2CrBxyqycZdq3v43-db-s" alt="Cake" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ-qUW7nlOBdSXzdh5TXzfQ3YOSbIf5CcQlV4HFq_9RS78IHXg9HqzLwdBcRwyzNuMrCszux7IrYXB0jq_UI9a7CgLH32DgiO5-ueJVOAH8HSBuhvEUPiTYYqM29JjWPght-QNxPU7JB64xQckojFoD-EWk1xQYlbrqJuko97uvXaX6puK_EM-d-NUckL4RJxEcaEebJNLL4k5AVOvMYiiDVr1GvtYXs5KliyWrjckdlkSrYrlpFl7MSZjR9jWJHBC4rHMho1q-Jk" alt="Dancing" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/gallery" className="inline-flex items-center gap-2 text-primary border-b border-primary pb-1 font-semibold hover:gap-4 transition-all group">
            View Full Gallery <MdArrowForward className="group-hover:ml-1 transition-all" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-ivory overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <MdFormatQuote className="text-primary text-6xl mb-8 mx-auto opacity-50" />
          <div className="relative">
            <p className="font-serif text-3xl italic leading-relaxed text-gray-800 mb-10">
              "The moment we stepped onto the grounds, we knew this was where we had to say 'I do'. The staff treated us like family, and every detail was executed beyond our wildest dreams. It was truly the most magical day of our lives."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl mb-4 relative overflow-hidden">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnyrvpQkPa8s4uti9N9-OEoN65UrM4SYfWzgJ5VNEhW6r_ptKesnsz4nG4VftmCNTiDAKbQ7pweZgJUQ7hC6Fid8YGp5zQzXNFJwRFPWlcUbJ9nyQHygkkC5-iNTroCFuyPNqJTHqiocgi49oh60CdWWFs7SHX6RqozCVnzg0Tx-Kmggrbq9LF7WoxeSuDEaWd-sMQIRbFTEhs9qTLnUVYGxW_xN3-8wgM0X7Iz2kr6rI9FhWjDcGHZPb8H0GWdyVjWYAEzWIk6xc" alt="Sarah and James" fill className="object-cover" />
              </div>
              <h4 className="font-bold text-lg">Sarah & James Miller</h4>
              <p className="text-primary text-sm font-medium uppercase tracking-widest">October 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[500px]">
          <div className="absolute inset-0 bg-gray-200">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqGMpQvWmPqBvCpeW6ueaGMEvg5lQ0Nv8edsLlpQn07aoJ81uCtqIpD3SYl1O1qXIm9mdJWxJKXPZk7RgqWX4yE_ef9urPpoCygkQ1KHY1mnf9aVot0LS1GO4YViawTy3guFI6GlEVe_LEd0ZWFaCXLLd_OKtzllx15RdU_5d68CNlXxsA5h06g-skZyZY10RobwY6YPCeeA5s5yjtUIpLFPOjW9eUy4K1ovosTrWhGRTuE32vFgtiywJ2E9tuJCuz8fvH9ZBPe_g" alt="Map" fill className="object-cover grayscale opacity-60" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="bg-white/95 backdrop-blur p-10 rounded-2xl shadow-2xl max-w-md text-center">
              <h3 className="font-serif text-3xl mb-4">Visit Our Estate</h3>
              <p className="text-gray-600 mb-8 font-light">
                1248 Vineyard Lane, Oakville, Napa Valley, CA 94562<br />
                Tours available Tuesday - Sunday by appointment.
              </p>
              <Button href="#" size="lg">Get Directions</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-primary rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(240,66,110,0.3)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">Start Planning Your Dream Day</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Our dedicated wedding specialists are here to help you craft an experience as unique as your love. Inquire today for pricing and availability.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="white" size="lg">
                Request a Proposal
              </Button>
              <Button href="#" variant="glass" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
