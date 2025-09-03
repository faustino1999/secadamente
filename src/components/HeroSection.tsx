import React from 'react';
import { Play, Star } from 'lucide-react';
import { secadamenteImages, placeholderImages } from '../assets/images/images';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 py-20 px-4 overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400" style={{ fill: '#FFB6B9' }} />
            ))}
            <span className="text-sm font-medium" style={{ color: '#2D2D2D' }}>Grupo Secadamente</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#2D2D2D' }}>
            Bem-vindos ao{' '}
            <span style={{ color: '#48C774' }}>
              SECADAMENTE
            </span>
          </h1>
          
          <p className="text-xl mb-8 leading-relaxed" style={{ color: '#2D2D2D' }}>
            Começa a tua jornada sem ses... Quer fazer parte do Grupo Secadamente? 
            Pense comigo, se você fosse pagar Nutricionista, Personal trainer, Coach, 
            Aulas privadas, massagista, e-books de marmitas, já pensou quanto gastaria?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <button className="group text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ backgroundColor: '#FF6B35' }}>
              🔥 ENTRAR AGORA
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            
            <button className="flex items-center gap-2 transition-colors duration-300" style={{ color: '#2D2D2D' }}>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="font-medium">Assista ao vídeo</span>
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#48C774' }}>20</div>
              <div className="text-sm" style={{ color: '#2D2D2D' }}>dias de desafio</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#3A86FF' }}>€13,99</div>
              <div className="text-sm" style={{ color: '#2D2D2D' }}>por mês</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#48C774' }}>7 dias</div>
              <div className="text-sm" style={{ color: '#2D2D2D' }}>garantia</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10">
            <img 
              src={secadamenteImages.monica.profile1 || placeholderImages.monicaProfile}
              alt="Monica De Oliveira - Coach Motivacional Fitness"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              onError={(e) => {
                e.currentTarget.src = placeholderImages.monicaProfile;
              }}
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg" style={{ backgroundColor: '#F9FAFB' }}>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#48C774' }}>72 dias</div>
                <div className="text-sm" style={{ color: '#2D2D2D' }}>resultado comprovado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;