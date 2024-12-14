import InfiniteMarquee from "./components/InfiniteMarquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <InfiniteMarquee />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-purple-500/10" />
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-7xl md:text-9xl font-bold mb-8">MILLYFAM</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/80">
            Join the most vibrant Web3 community. Where family meets future.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Community First", "Web3 Innovation", "Family Forever"].map(
              (title, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl bg-white/5 p-8 hover:bg-white/10 transition-all"
                >
                  <div className="aspect-square bg-purple-500/20 rounded-lg mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {title}
                  </h3>
                  <p className="text-white/60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Family
              </h2>
              <p className="text-xl text-white/60 mb-8">
                Be part of something bigger. Connect, grow, and thrive with
                MillyFam.
              </p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors">
                Connect Wallet
              </button>
            </div>
            <div className="flex-1">
              <div className="aspect-square bg-purple-500/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
