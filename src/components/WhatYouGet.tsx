import React from 'react';
import { BookOpen, Video, Utensils, ShoppingCart, Users, FileText, Target, Calculator, Heart, Zap } from 'lucide-react';

const WhatYouGet = () => {
  const items = [
    {
      icon: Target,
      title: "Desinche e emagreça sem dietas extremas",
      description: "Programa completo para desinchar e emagrecer de forma saudável e sustentável"
    },
    {
      icon: Utensils,
      title: "Como montar sua própria dieta",
      description: "Aprenda a criar sua dieta personalizada com base nas suas necessidades"
    },
    {
      icon: ShoppingCart,
      title: "Lista de supermercado completa",
      description: "Lista organizada com todos os alimentos necessários para seu programa"
    },
    {
      icon: Video,
      title: "Circuito de treino em casa",
      description: "Vídeos demonstrativos focados em queima de gordura e ganho de massa magra"
    },
    {
      icon: BookOpen,
      title: "Ideias de refeições completas",
      description: "Receitas para café da manhã, almoço, lanche e jantar"
    },
    {
      icon: Calculator,
      title: "Calcular suas calorias",
      description: "Aprenda sobre gasto calórico basal e como calcular suas necessidades"
    },
    {
      icon: FileText,
      title: "Planner de emagrecimento",
      description: "Organizador completo para acompanhar sua jornada de transformação"
    },
    {
      icon: Heart,
      title: "Aprender a ler rótulos",
      description: "Entenda proteínas, gorduras e hidratos de carbono nos alimentos"
    },
    {
      icon: Users,
      title: "Grupo VIP exclusivo",
      description: "Acesso à comunidade de mulheres com o mesmo objetivo"
    }
  ];

  const bonuses = [
    {
      icon: Zap,
      title: "Shot anti-inflamatório para desinchar",
      description: "Receita especial para reduzir inflamação e inchaço"
    },
    {
      icon: Heart,
      title: "Aula de auto-massagem para desinchar",
      description: "Técnicas de massagem para modelar e afinar a cintura"
    },
    {
      icon: Target,
      title: "Criolipólise caseira para secar",
      description: "Métodos caseiros para queimar gordura localizada"
    },
    {
      icon: BookOpen,
      title: "Jejum intermitente estratégico",
      description: "Para um abdômen definido e resultados rápidos"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            O que vai encontrar no <span style={{ color: '#48C774' }}>SECADAMENTE</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
            Um programa completo com tudo que você precisa para transformar seu corpo, mente e saúde
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {items.map((item, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border"
              style={{ backgroundColor: '#F9FAFB', borderColor: '#FFB6B9' }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#3A86FF' }}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2D2D2D' }}>
                {item.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#2D2D2D' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-8" style={{ color: '#2D2D2D' }}>
            <span style={{ color: '#FFB6B9' }}>BÔNUS</span> Exclusivos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl shadow-lg border-2 border-dashed"
                style={{ backgroundColor: '#F9FAFB', borderColor: '#48C774' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#48C774' }}>
                  <bonus.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: '#2D2D2D' }}>
                  {bonus.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#2D2D2D' }}>
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-lg" style={{ backgroundColor: '#F9FAFB' }}>
            <span className="text-2xl font-bold" style={{ color: '#48C774' }}>20 dias de desafio</span>
            <span className="text-gray-400">para desinchar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;