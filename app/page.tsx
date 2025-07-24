import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FeatureCards } from "@/components/feature-cards";
import { ServicesCard } from "@/components/services-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 px-8 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between md:justify-between">
          <div className="text-xl font-medium mx-auto md:mx-0">Taylor— make it!</div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-xl font-medium hover:opacity-70 transition-opacity">
              Contact
            </button>
            <Button className="bg-black text-white hover:bg-black/90 rounded-lg px-4 py-3 text-xl font-medium h-auto">
              See pricing
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden px-16 py-20 text-center bg-gradient-to-r from-pink-200 via-yellow-100 via-purple-200 via-blue-200 to-cyan-200 animate-gradient">
            <h1 className="text-[4.5rem] md:text-[5.5rem] leading-[0.9] font-normal mb-8 tracking-tight">
              Custom<br />
              websites
            </h1>
            <p className="text-xl text-gray-800 mb-12 max-w-xl mx-auto leading-relaxed">
              Professional web design and development to help small
              businesses and entrepreneurs shine online.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/images/profile pic.png.webp"
                alt="Taylor Prince"
                width={55}
                height={55}
                className="rounded-full"
              />
              <button className="text-xl font-medium hover:opacity-70 transition-opacity px-1">
                Contact
              </button>
              <Button className="bg-black text-white hover:bg-black/90 rounded-lg px-5 py-3 text-xl font-medium h-auto">
                See pricing
              </Button>
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
              <div className="bg-gray-100 rounded-xl h-80 mb-8"></div>
              <h2 className="text-3xl font-normal mb-3">Recent projects</h2>
              <p className="text-gray-600 text-xl mb-6">
                My custom-coded websites drive results. Each
                is built to fit your needs, ready in 1-3 weeks.
              </p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-lg px-6 py-3 text-xl font-medium h-auto">
                See recent projects
              </Button>
            </div>

            {/* Right card with list */}
            <ServicesCard />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-normal text-center mb-2">Simple Pricing,</h2>
          <h2 className="text-5xl font-normal text-center mb-16">unlimited potential</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Site Card */}
            <Card className="p-8 border-[#D5D5D5]">
              <h3 className="text-xl font-medium mb-2">Starter site</h3>
              <div className="text-4xl font-normal mb-6">$3,500</div>
              <ul className="space-y-3 text-xl text-gray-600 mb-8">
                <li>• 5-page custom-coded site</li>
                <li>• Basic SEO optimization</li>
                <li>• 1-2 week delivery</li>
                <li>• 2 rounds of revisions</li>
              </ul>
              <div className="flex gap-3">
                <Button className="bg-black text-white hover:bg-black/90 rounded-lg px-6 py-3 text-xl font-medium h-auto">
                  Checkout →
                </Button>
                <Button variant="outline" className="rounded-lg px-6 py-3 text-xl font-medium border-[#D5D5D5] h-auto">
                  Contact me
                </Button>
              </div>
            </Card>

            {/* Advanced Site Card */}
            <Card className="p-8 border-0 bg-gradient-to-br from-orange-100 via-purple-100 to-cyan-100 animate-gradient">
              <h3 className="text-xl font-medium mb-2">Advanced site</h3>
              <div className="text-4xl font-normal mb-6">$7,500</div>
              <ul className="space-y-3 text-xl text-gray-700 mb-8">
                <li>• 8-12 pages</li>
                <li>• Custom features and integrations</li>
                <li>• 2-4 week delivery</li>
                <li>• 4 rounds of revisions</li>
              </ul>
              <div className="flex gap-3">
                <Button className="bg-black text-white hover:bg-black/90 rounded-lg px-6 py-3 text-xl font-medium h-auto">
                  Checkout →
                </Button>
                <Button variant="outline" className="bg-white/50 rounded-lg px-6 py-3 text-xl font-medium border-[#D5D5D5] h-auto">
                  Contact me
                </Button>
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
