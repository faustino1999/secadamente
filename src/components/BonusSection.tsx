import React from 'react';
import { Gift, Zap, Droplets, Clock } from 'lucide-react';

const BonusSection = () => {
  const bonuses = [
    {
      icon: Droplets,
      title: "Shot anti-inflamatório",
      description: "Receita exclusiva para acelerar seu metabolismo e reduzir inchaço",
      value: "€47"
    },
    {
      icon: Gift,
      title: "Aula de auto-massagem",
      description: "Técnicas profissionais de massagem para fazer em casa",
      value: "€67"
    },
    {
      icon: Zap,
      title: "Método caseiro de criolipólise",
      description: "Técnica natural para quebrar gordura localizada",
      value: "€97"
    },
    {
      icon: Clock,
      title: "Estratégias de jejum intermitente",
      description: "Guia completo para acelerar a queima de gordura",
      value: "€77"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white px-6 py-2 rounded-full font-bold text-sm mb-6" style={{ backgroundColor: '#FF6B35' }}>
            🎁 BÔNUS EXCLUSIVOS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            Receba também estes <span style={{ color: '#48C774' }}>bônus incríveis</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
            Conteúdos extras que potencializam seus resultados e valem mais de €288
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-6 rounded-2xl border hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: '#F9FAFB', borderColor: '#FFB6B9' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FFB6B9' }}>
                <bonus.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold" style={{ color: '#2D2D2D' }}>
                    {bonus.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-sm font-bold text-white" style={{ backgroundColor: '#48C774' }}>
                    {bonus.value}
                  </span>
                </div>
                <p style={{ color: '#2D2D2D' }}>
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-4 text-white px-8 py-4 rounded-2xl" style={{ backgroundColor: '#3A86FF' }}>
            <span className="text-2xl font-bold">Total em bônus: €288</span>
            <span className="text-sm opacity-90">GRÁTIS hoje!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;