import React from 'react';
import { Palette, PenTool, Globe, MessageSquare, Users, ChevronRight, Mail, Phone, MapPin, Instagram } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PortfolioItemProps {
  image: string;
  title: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PortfolioItem({ image, title }: PortfolioItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img 
        src={image} 
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <h4 className="text-white font-medium p-6">{title}</h4>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <nav className="absolute top-0 w-full py-6 px-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Spirit Print</h1>
            <div className="space-x-8">
              <a href="#services" className="text-white hover:text-gray-200">Services</a>
              <a href="#portfolio" className="text-white hover:text-gray-200">Portfolio</a>
              <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-white mb-6">
            Solutions Créatives pour<br />Votre Communication
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Spécialistes en conception d'affiches, cartes de visite, invitations et création de sites web. 
            Donnez vie à vos projets avec notre expertise en design et marketing.
          </p>
          <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
            Commencer un Projet
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-3xl font-bold text-center mb-16">Nos Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Palette />}
              title="Design d'Affiches"
              description="Création d'affiches percutantes pour vos événements et cérémonies"
            />
            <ServiceCard 
              icon={<PenTool />}
              title="Cartes & Invitations"
              description="Conception élégante de cartes de visite et d'invitations personnalisées"
            />
            <ServiceCard 
              icon={<Globe />}
              title="Sites Web"
              description="Développement de sites web modernes et responsifs"
            />
            <ServiceCard 
              icon={<MessageSquare />}
              title="Marketing Digital"
              description="Stratégies marketing efficaces pour développer votre présence en ligne"
            />
            <ServiceCard 
              icon={<Users />}
              title="Conseil"
              description="Accompagnement personnalisé pour vos projets de communication"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-3xl font-bold text-center mb-16">Nos Réalisations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?auto=format&fit=crop&q=80"
              title="Affiche Festival"
            />
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1544177817-4f7040e12b8d?auto=format&fit=crop&q=80"
              title="Carte de Visite"
            />
            <PortfolioItem 
              image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
              title="Invitation Mariage"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-3xl font-bold text-center mb-16">Contactez-nous</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h4 className="text-xl font-semibold mb-6">Informations de Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>
                    <a href="mailto:nasabsas@gmail.com" className="hover:text-gray-300 transition-colors">nasabsas@gmail.com</a>
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>
                    <a href="https://wa.me/qr/YD3P4N2ANCVEL1" className="hover:text-gray-300 transition-colors">+226 60 29 72 99</a>
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>123 Rue du Design, 75000 Paris</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="h-5 w-5 mr-3" />
                  <span>
                    <a href="https://www.instagram.com/abdoul_nasser_sdg/" className="hover:text-gray-300 transition-colors">@abdoul_nasser_sdg</a>
                  </span>
                </div>
                <div className="mt-6 flex space-x-4">
                  <a 
                    href="https://wa.me/qr/YD3P4N2ANCVEL1" 
                    className="bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-lg flex items-center"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    WhatsApp
                  </a>
                  <a 
                    href="https://www.instagram.com/abdoul_nasser_sdg/" 
                    className="bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg flex items-center"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Nom"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
              ></textarea>
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-8 text-center text-gray-400">
          © 2024 DesignPro. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

export default App;