import Navigation from './Navigation';
import AnimatedBackground from './AnimatedBackground';

export default function Layout({ children, showNavigation = true }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="relative z-10">
        {/* Navigation - conditionally rendered */}
        {showNavigation && <Navigation />}
        
        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}