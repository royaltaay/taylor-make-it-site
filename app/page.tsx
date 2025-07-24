import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 px-8 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-medium">Taylor— make it!</div>
          <div className="flex items-center gap-4">
            <button className="text-xl font-medium hover:opacity-70 transition-opacity">
              Contact
            </button>
            <Button className="bg-black text-white hover:bg-black/90 rounded-lg px-4 py-3 text-xl font-medium">
              See pricing
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden px-16 py-20 text-center bg-gradient-to-r from-pink-200 via-yellow-100 via-purple-200 via-blue-200 to-cyan-200">
            <h1 className="text-[5.5rem] leading-[0.9] font-normal mb-8 tracking-tight">
              Custom<br />
              websites
            </h1>
            <p className="text-xl text-gray-800 mb-12 max-w-xl mx-auto leading-relaxed">
              Professional web design and development to help small
              businesses and entrepreneurs shine online.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-11 h-11 bg-gray-400 rounded-full overflow-hidden">
                {/* Profile image placeholder */}
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-32 h-32 bg-gray-100 rounded-2xl mb-8 border border-gray-200"></div>
              <h3 className="text-2xl font-medium mb-3">Custom design</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Visually stunning, responsive
                designs tailored to your brand.
              </p>
            </div>
            <div>
              <div className="w-32 h-32 bg-gray-100 rounded-2xl mb-8 border border-gray-200"></div>
              <h3 className="text-2xl font-medium mb-3">Fast Delivery</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Receive your project in as little
                as 1 week.
              </p>
            </div>
            <div>
              <div className="w-32 h-32 bg-gray-100 rounded-2xl mb-8 border border-gray-200"></div>
              <h3 className="text-2xl font-medium mb-3">Premium Quality</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Expert-level design and
                development on each project.
              </p>
            </div>
          </div>

          <div className="mt-20 rounded-2xl p-12 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto text-xl">
              Taylor Prince has worked in the creative industry for
              over 10 years, crafting unique experiences, premium
              designs, and developing professional quality websites
              that have helped businesses shine.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left card with image placeholder */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="bg-gray-100 rounded-xl h-80 mb-8"></div>
              <h2 className="text-3xl font-normal mb-3">Recent projects</h2>
              <p className="text-gray-600 text-xl mb-6">
                My custom-coded websites drive results. Each
                is built to fit your needs, ready in 1-3 weeks.
              </p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-lg px-6 py-3.5 text-xl font-medium">
                See recent projects
              </Button>
            </div>

            {/* Right card with list */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center flex flex-col justify-center min-h-[500px]">
              <div>
                <div className="space-y-4 text-xl text-gray-700 mb-16">
                  <p>Responsive Websites</p>
                  <p>E-Commerce Stores</p>
                  <p>Booking Systems</p>
                  <p>SEO Optimization</p>
                  <p>Content Management</p>
                  <p>Social Media Integration</p>
                </div>

                <div>
                  <h3 className="text-3xl font-normal mb-3">Everything you need</h3>
                  <p className="text-gray-600 text-xl">
                    Powerful features, endless
                    customization.
                  </p>
                </div>
              </div>
            </div>
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
            <Card className="p-8 border-gray-200">
              <h3 className="text-xl font-medium mb-2">Starter site</h3>
              <div className="text-4xl font-normal mb-6">$3,500</div>
              <ul className="space-y-3 text-xl text-gray-600 mb-8">
                <li>• 5-page custom-coded site</li>
                <li>• Basic SEO optimization</li>
                <li>• 1-2 week delivery</li>
                <li>• 2 rounds of revisions</li>
              </ul>
              <div className="flex gap-3">
                <Button className="bg-black text-white hover:bg-black/90 rounded-lg px-6 py-3 text-xl font-medium">
                  Checkout →
                </Button>
                <Button variant="outline" className="rounded-lg px-6 py-3 text-xl font-medium border-gray-300">
                  Contact me
                </Button>
              </div>
            </Card>

            {/* Advanced Site Card */}
            <Card className="p-8 border-0 bg-gradient-to-br from-orange-100 via-purple-100 to-cyan-100">
              <h3 className="text-xl font-medium mb-2">Advanced site</h3>
              <div className="text-4xl font-normal mb-6">$7,500</div>
              <ul className="space-y-3 text-xl text-gray-700 mb-8">
                <li>• 8-12 pages</li>
                <li>• Custom features and integrations</li>
                <li>• 2-4 week delivery</li>
                <li>• 4 rounds of revisions</li>
              </ul>
              <div className="flex gap-3">
                <Button className="bg-black text-white hover:bg-black/90 rounded-lg px-6 py-3 text-xl font-medium">
                  Checkout →
                </Button>
                <Button variant="outline" className="bg-white/50 rounded-lg px-6 py-3 text-xl font-medium border-gray-300">
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
      <footer className="py-12 px-8 border-t border-gray-200">
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
