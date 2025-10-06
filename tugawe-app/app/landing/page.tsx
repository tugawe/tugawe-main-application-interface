import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ImageGrid from '@/components/ImageGrid';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="order-2 lg:order-1">
            <HeroSection />
          </div>

          {/* Right Side - Image Grid */}
          <div className="order-1 lg:order-2 h-[600px]">
            <ImageGrid />
          </div>
        </div>
      </main>
    </div>
  );
}
