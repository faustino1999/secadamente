import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto tempo leva para ver os primeiros resultados?",
      answer: "Os primeiros resultados começam a aparecer já na primeira semana! A maioria das nossas alunas perde entre 2-4kg nos primeiros 7 dias e sente mais disposição e energia."
    },
    {
      question: "Preciso de equipamentos ou academia para fazer os treinos?",
      answer: "Não! Todos os exercícios foram desenvolvidos para serem feitos em casa, sem nenhum equipamento. Você só precisa de um tapete ou toalha e disposição para se exercitar."
    },
    {
      question: "O programa funciona para iniciantes que nunca fizeram exercício?",
      answer: "Sim! O método Secadamente foi criado pensando em mulheres de todos os níveis. Temos exercícios adaptados para iniciantes, com progressão gradual e segura."
    },
    {
      question: "Como faço para acessar o conteúdo após a compra?",
      answer: "Assim que confirmar o pagamento, você recebe por email todos os links de acesso aos materiais e também é adicionada automaticamente ao grupo VIP no Telegram."
    },
    {
      question: "Existe alguma garantia se eu não gostar do programa?",
      answer: "Sim! Oferecemos garantia total de 7 dias. Se por qualquer motivo você não ficar satisfeita, devolvemos 100% do seu dinheiro."
    },
    {
      question: "O programa serve para vegetarianas ou pessoas com restrições alimentares?",
      answer: "Sim! Temos opções e adaptações para vegetarianas, veganas e pessoas com intolerâncias. No grupo VIP, a Monica ajuda a personalizar o cardápio conforme suas necessidades."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            Perguntas <span style={{ color: '#48C774' }}>frequentes</span>
          </h2>
          <p className="text-xl" style={{ color: '#2D2D2D' }}>
            Tire suas dúvidas sobre o programa Secadamente
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-2xl overflow-hidden border transition-colors duration-300"
              style={{ backgroundColor: '#F9FAFB', borderColor: '#FFB6B9' }}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold pr-4" style={{ color: '#2D2D2D' }}>
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 flex-shrink-0" style={{ color: '#48C774' }} />
                ) : (
                  <ChevronDown className="w-6 h-6 flex-shrink-0" style={{ color: '#2D2D2D' }} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="leading-relaxed" style={{ color: '#2D2D2D' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="text-white p-6 rounded-2xl" style={{ backgroundColor: '#3A86FF' }}>
            <h3 className="text-xl font-bold mb-2">Ainda tem dúvidas?</h3>
            <p className="mb-4" style={{ color: '#F9FAFB' }}>Entre no grupo VIP e tire todas suas perguntas diretamente com a Monica!</p>
            <button className="px-6 py-3 rounded-full font-bold transition-colors duration-300" style={{ backgroundColor: '#FF6B35', color: 'white' }}>
              Falar com a Monica
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;