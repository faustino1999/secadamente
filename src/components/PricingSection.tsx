import React from 'react';
import { Check, Clock, Shield } from 'lucide-react';

const PricingSection = () => {
  const features = [
    "Desinche e emagreça sem dietas extremas",
    "Como montar sua própria dieta",
    "Lista de supermercado completa",
    "Circuito de treino em casa",
    "Ideias de refeições para café, almoço, lanche e jantar",
    "Aprender a ler rótulos dos alimentos",
    "Calcular suas calorias e gasto calórico basal",
    "Planner de emagrecimento completo",
    "Grupo VIP exclusivo",
    "4 bônus exclusivos incluindo shot anti-inflamatório e auto-massagem"
  ];

  return (
    <section className="py-20 px-4 text-white" style={{ backgroundColor: '#3A86FF' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-2 rounded-full font-bold text-sm mb-6">
            ⚡ OFERTA ESPECIAL
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pronta para a sua transformação?
          </h2>
          <p className="text-xl mb-4">
            Tenho a certeza que você nunca mais será a mesma
          </p>
        </div>
        
        <div className="rounded-3xl p-8 shadow-2xl max-w-md mx-auto mb-12" style={{ backgroundColor: '#F9FAFB', color: '#2D2D2D' }}>
          <div className="text-center mb-6">
            <div className="text-sm mb-2" style={{ color: '#2D2D2D' }}>Por apenas</div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-5xl font-bold" style={{ color: '#48C774' }}>€13,99</span>
              <span className="text-lg" style={{ color: '#2D2D2D' }}>/mês</span>
            </div>
            <div className="text-sm" style={{ color: '#2D2D2D' }}>ou R$ 89/mês</div>
          </div>
          
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0" style={{ color: '#48C774' }} />
                <span className="text-sm" style={{ color: '#2D2D2D' }}>{feature}</span>
              </div>
            ))}
          </div>
          
          <button className="w-full text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-4" style={{ backgroundColor: '#FF6B35' }}>
            🔥 ENTRAR AGORA
          </button>
          
          <div className="flex items-center justify-center gap-6 text-sm" style={{ color: '#2D2D2D' }}>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Pagamento seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Acesso imediato</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <div className="text-2xl font-bold mb-2">✅</div>
            <div className="font-semibold mb-2">Garantia de 7 dias</div>
            <div className="text-sm opacity-90">Ou seu dinheiro de volta</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <div className="text-2xl font-bold mb-2">📱</div>
            <div className="font-semibold mb-2">Acesso total mobile</div>
            <div className="text-sm opacity-90">Treine onde e quando quiser</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <div className="text-2xl font-bold mb-2">🎯</div>
            <div className="font-semibold mb-2">Resultados em 20 dias</div>
            <div className="text-sm opacity-90">Desafio para desinchar</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;