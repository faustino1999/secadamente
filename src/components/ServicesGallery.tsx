import React from 'react';
import { secadamenteImages, placeholderImages } from '../assets/images/images';

const ServicesGallery = () => {
  const services = [
    {
      image: "https://images.pexels.com/photos/4056530/pexels-photo-4056530.jpeg?auto=compress&cs=tinysrgb&w=600",
      fallback: "https://images.pexels.com/photos/4056530/pexels-photo-4056530.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "20 - Dias de Desafio para desinchar",
      description: "Programa completo de transformação em 20 dias"
    },
    {
      image: "https://images.pexels.com/photos/4056530/pexels-photo-4056530.jpeg?auto=compress&cs=tinysrgb&w=600",
      fallback: "https://images.pexels.com/photos/4056530/pexels-photo-4056530.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Treino em casa",
      description: "Circuitos de exercícios para fazer em casa"
    },
    {
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      fallback: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Receitas baixas em calorias",
      description: "Ideias de refeições para café, almoço, lanche e jantar"
    },
    {
      image: "https://images.pexels.com/photos/4056530/pexels-photo-4056530.jpeg?auto=compress&cs=tinysrgb&w=600",
      fallback: "https://images.pexels.com/photos/4056530/pexels-photo-4056530.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Grupo VIP",
      description: "Comunidade exclusiva de mulheres com o mesmo objetivo"
    },
    {
      image: "https://images.pexels.com/photos/4056530/pexels-photo-4056530.jpeg?auto=compress&cs=tinysrgb&w=600",
      fallback: "https://images.pexels.com/photos/4056530/pexels-photo-4056530.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Configuração de equipamentos",
      description: "Como montar sua academia em casa"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            O que vai encontrar no <span style={{ color: '#48C774' }}>SECADAMENTE</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
            Um programa completo com tudo que você precisa para transformar seu corpo, mente e saúde
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image || service.fallback}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = service.fallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/90">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGallery;
