import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FeatureCards } from "@/components/feature-cards";
import { ServicesCard } from "@/components/services-card";
import { FAQSection } from "@/components/faq-section";
import { ContactModal } from "@/components/contact-modal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 px-8 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between md:justify-between">
          <h1 className="text-xl font-medium mx-auto md:mx-0">
            <a href="/" className="hover:opacity-70 transition-opacity">Taylor— make it!</a>
          </h1>
          <div className="hidden md:flex items-center gap-4">
            <ContactModal>
              <button className="text-xl font-medium hover:opacity-70 transition-opacity">
                Contact
              </button>
            </ContactModal>
            <a href="#pricing">
              <Button className="bg-black text-white hover:bg-black/90 rounded-lg px-4 py-3 text-xl font-medium h-auto">
                See pricing
              </Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden px-16 py-20 text-center bg-gradient-to-r from-pink-200 via-yellow-100 via-purple-200 via-blue-200 to-cyan-200 animate-gradient">
            <h2 className="text-[4.5rem] md:text-[5.5rem] leading-[0.9] font-normal mb-8 tracking-tight opacity-0 animate-fade-up">
              Custom<br />
              websites
            </h2>
            <p className="text-xl text-gray-800 mb-12 max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              Helping small businesses and entrepreneurs shine online with custom design and development.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/images/profile pic.png.webp"
                alt="Taylor Prince - Web Designer and Developer"
                width={55}
                height={55}
                className="rounded-full"
              />
              <ContactModal>
                <button className="text-xl font-medium hover:opacity-70 transition-opacity px-1">
                  Contact
                </button>
              </ContactModal>
              <a href="#pricing">
                <Button className="bg-black text-white hover:bg-black/90 rounded-lg px-5 py-3 text-xl font-medium h-auto">
                  See pricing
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-normal text-center mb-3">
            Websites that work for you
          </h2>
          <p className="text-center text-gray-600 text-xl mb-20">
            Every site is built from scratch for speed and style.
          </p>

          <FeatureCards />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-xl leading-relaxed">
            Taylor Prince has worked in the creative industry for over 10 years,
            crafting unique experiences, premium designs, and developing
            professional quality websites that have helped businesses shine.
          </p>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left card with image placeholder */}
            <div className="bg-white rounded-2xl border border-[#D5D5D5] p-8">
              <div className="rounded-xl overflow-hidden mb-8">
                <Image
                  src="/images/recentwork-3.webp"
                  alt="Recent website projects by Taylor Make It - Custom web design portfolio"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h2 className="text-3xl font-normal mb-3">Recent projects</h2>
              <p className="text-gray-600 text-xl mb-6">
                My custom-coded websites drive results. Each
                is built to fit your needs, ready in 1-3 weeks.
              </p>
              <a
                href="https://www.figma.com/proto/3RJE50tGInmIphy30kI3Lp/Taylor-Make-It---Recent-Work?page-id=0%3A1&node-id=6-292&viewport=268%2C445%2C0.17&t=gzxSCGl4SpozxBwH-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6%3A292"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-black text-white hover:bg-black/90 rounded-lg px-6 py-3 text-xl font-medium h-auto">
                  See recent projects
                </Button>
              </a>
            </div>

            {/* Right card with list */}
            <ServicesCard />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-normal text-center mb-2">Simple Pricing,</h2>
          <h2 className="text-5xl font-normal text-center mb-16">unlimited potential</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Site Card */}
            <Card className="p-8 border-[#D5D5D5]">
              <h3 className="text-xl font-medium mb-2">Starter site</h3>
              <div className="text-4xl font-normal mb-6">$3,500</div>
              <ul className="space-y-3 text-xl text-gray-600 mb-8">
                <li>• 1–5 pages</li>
                <li>• Mobile-responsive design</li>
                <li>• Basic SEO setup</li>
                <li>• Contact form integration</li>
                <li>• 1-2 week delivery</li>
                <li>• 2 rounds of revisions</li>
                <li>• Launched on your domain</li>
              </ul>
              <div className="flex gap-3">
                <ContactModal plan="Starter Site - $3,500">
                  <Button className="bg-black text-white hover:bg-black/90 rounded-lg px-6 py-3 text-xl font-medium h-auto">
                    Contact me
                  </Button>
                </ContactModal>
              </div>
            </Card>

            {/* Advanced Site Card */}
            <Card className="p-8 border-0 bg-gradient-to-r from-pink-200 via-yellow-100 via-purple-200 via-blue-200 to-cyan-200 animate-gradient">
              <h3 className="text-xl font-medium mb-2">Growth site</h3>
              <div className="text-4xl font-normal mb-6">$7,500+</div>
              <ul className="space-y-3 text-xl text-gray-700 mb-8">
                <li>• 8-12 custom pages</li>
                <li>• Strategy session to define goals</li>
                <li>• Custom features and integrations</li>
                <li>• Enhanced SEO setup</li>
                <li>• Content polish</li>
                <li>• 2-4 week delivery</li>
                <li>• 4 rounds of revisions</li>
              </ul>
              <div className="flex gap-3">
                <ContactModal plan="Growth Site - $7,500+">
                  <Button className="bg-black text-white hover:bg-black/90 rounded-lg px-6 py-3 text-xl font-medium h-auto">
                    Contact me
                  </Button>
                </ContactModal>
              </div>
            </Card>
          </div>

          {/* Maintenance Plan */}
          <div className="mt-12 max-w-md mx-auto text-center">
            <h3 className="text-xl font-medium mb-2">Maintenance plan</h3>
            <p className="text-xl text-gray-600 mb-2">
              Monthly updates & support, SEO tweaks<br />
              & backups, Priority response.
            </p>
            <div className="text-2xl font-normal">$200/mo</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-[#D5D5D5]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-medium">Taylor— make it!</div>
          <p className="text-xl text-gray-500">
            Made with love from the Pacific Northwest
          </p>
        </div>
      </footer>
    </div>
  );
}
