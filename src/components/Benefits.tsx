import React from 'react';
import { Heart, Home, Calendar, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Emagreça sem dietas rígidas",
      description: "Alimentação equilibrada e saborosa que você consegue manter para sempre"
    },
    {
      icon: Home,
      title: "Treinos rápidos em casa",
      description: "Exercícios eficazes de 15-30 minutos que cabem na sua rotina"
    },
    {
      icon: Calendar,
      title: "Planner de emagrecimento",
      description: "Organização simples e prática para acompanhar sua evolução"
    },
    {
      icon: Users,
      title: "Grupo VIP de apoio",
      description: "Comunidade exclusiva de mulheres com o mesmo objetivo que você"
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            Por que o método <span style={{ color: '#48C774' }}>Secadamente</span> funciona?
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
            Um sistema completo desenvolvido especialmente para mulheres que querem emagrecer de forma saudável e duradoura
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ borderColor: '#FFB6B9' }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#48C774' }}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2D2D2D' }}>
                {benefit.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#2D2D2D' }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;