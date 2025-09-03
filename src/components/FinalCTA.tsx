import React from 'react';
import { ArrowRight, Clock, Shield } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 text-white relative overflow-hidden" style={{ backgroundColor: '#2D2D2D' }}>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
          Sua transformação <span style={{ color: '#48C774' }}>começa agora</span>
        </h2>
        
        <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: '#F9FAFB' }}>
          Não deixe mais um dia passar sem dar o primeiro passo para conquistar o corpo e a autoestima que você merece. 
          Junte-se às milhares de mulheres que já transformaram suas vidas com o Secadamente.
        </p>
        
        <div className="rounded-3xl p-8 mb-12 border" style={{ backgroundColor: '#F9FAFB', borderColor: '#FFB6B9' }}>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-3" style={{ color: '#48C774' }} />
              <div className="font-bold text-lg" style={{ color: '#2D2D2D' }}>Acesso imediato</div>
              <div className="text-sm" style={{ color: '#2D2D2D' }}>Comece hoje mesmo</div>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-3" style={{ color: '#3A86FF' }} />
              <div className="font-bold text-lg" style={{ color: '#2D2D2D' }}>Garantia de 7 dias</div>
              <div className="text-sm" style={{ color: '#2D2D2D' }}>Risco zero para você</div>
            </div>
            <div className="text-center">
              <ArrowRight className="w-8 h-8 mx-auto mb-3" style={{ color: '#FFB6B9' }} />
              <div className="font-bold text-lg" style={{ color: '#2D2D2D' }}>Resultados garantidos</div>
              <div className="text-sm" style={{ color: '#2D2D2D' }}>Ou seu dinheiro de volta</div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Entrar para o Secadamente agora
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
          <span>✓ Pagamento 100% seguro</span>
          <span>✓ Dados protegidos</span>
          <span>✓ Suporte 24h</span>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm" style={{ color: '#F9FAFB' }}>
            © 2025 Secadamente by Monica De Oliveira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;