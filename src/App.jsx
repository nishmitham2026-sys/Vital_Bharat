
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Impact from './components/Impact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AnalyticsTracker from './components/AnalyticsTracker';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Features & Value Props */}
      <Features />

      {/* Partnerships & B2B Impact */}
      <Impact />

      {/* Lead Generation Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />

      {/* Interactive Utilities */}
      <AnalyticsTracker />
      <Chatbot />
    </div>
  );
}

export default App;
