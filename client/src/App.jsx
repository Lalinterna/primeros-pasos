import React, { useState } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState('es');
  const content = {
    es: {
      title: 'La Linterna',
      subtitle: 'Plataforma de Reflexión sobre Participación Ciudadana y Salud Democrática',
      welcome: 'Bienvenido a La Linterna',
      description: 'Un espacio para reflexionar sobre cómo fomentar la participación ciudadana para la mejora de la salud democrática.',
      nav: {
        home: 'Inicio',
        articles: 'Artículos',
        discussions: 'Discusiones',
        resources: 'Recursos',
        events: 'Eventos',
        about: 'Acerca de'
      }
    },
    en: {
      title: 'The Lantern',
      subtitle: 'Reflection Platform on Citizen Participation and Democratic Health',
      welcome: 'Welcome to The Lantern',
      description: 'A space to reflect on how to foster citizen participation for the improvement of democratic health.',
      nav: {
        home: 'Home',
        articles: 'Articles',
        discussions: 'Discussions',
        resources: 'Resources',
        events: 'Events',
        about: 'About'
      }
    }
  };
  const t = content[language];
  return (
    <div className="App min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-blue-600">{t.title}</h1>
            <div className="flex items-center space-x-6">
              <ul className="flex space-x-6 text-gray-700">
                <li><a href="#" className="hover:text-blue-600">{t.nav.home}</a></li>
                <li><a href="#" className="hover:text-blue-600">{t.nav.articles}</a></li>
                <li><a href="#" className="hover:text-blue-600">{t.nav.discussions}</a></li>
                <li><a href="#" className="hover:text-blue-600">{t.nav.resources}</a></li>
                <li><a href="#" className="hover:text-blue-600">{t.nav.events}</a></li>
                <li><a href="#" className="hover:text-blue-600">{t.nav.about}</a></li>
              </ul>
              <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.welcome}</h2>
          <p className="text-xl text-gray-600 mb-8">{t.subtitle}</p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">{t.description}</p>
        </div>
      </section>
      {/* Coming Soon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-600 mb-2">{language === 'es' ? 'Artículos' : 'Articles'}</h3>
            <p className="text-gray-600">{language === 'es' ? 'Ensayos y reflexiones' : 'Essays and reflections'}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-green-600 mb-2">{language === 'es' ? 'Discusiones' : 'Discussions'}</h3>
            <p className="text-gray-600">{language === 'es' ? 'Debates comunitarios' : 'Community debates'}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-purple-600 mb-2">{language === 'es' ? 'Recursos' : 'Resources'}</h3>
            <p className="text-gray-600">{language === 'es' ? 'Documentos y herramientas' : 'Documents and tools'}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-orange-600 mb-2">{language === 'es' ? 'Eventos' : 'Events'}</h3>
            <p className="text-gray-600">{language === 'es' ? 'Encuentros y actividades' : 'Meetings and activities'}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;