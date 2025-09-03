import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      age: "32 anos",
      result: "-9kg em 20 dias",
      text: "Nunca pensei que conseguiria emagrecer sem passar fome. O método da Monica mudou minha vida completamente!",
      image: "https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Carla Santos",
      age: "28 anos", 
      result: "-7kg em 15 dias",
      text: "Os treinos são perfeitos para quem tem pouco tempo. Consegui resultados incríveis treinando apenas 20 minutos por dia!",
      image: "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Beatriz Costa",
      age: "35 anos",
      result: "-11kg em 25 dias", 
      text: "Recuperei minha autoestima e confiança. O grupo VIP me deu todo o suporte que eu precisava para não desistir!",
      image: "https://images.pexels.com/photos/4498597/pexels-photo-4498597.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const beforeAfter = [
    {
      before: "https://images.pexels.com/photos/5938546/pexels-photo-5938546.jpeg?auto=compress&cs=tinysrgb&w=300",
      after: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=300",
      result: "-8kg"
    },
    {
      before: "https://images.pexels.com/photos/5938546/pexels-photo-5938546.jpeg?auto=compress&cs=tinysrgb&w=300",
      after: "https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=300", 
      result: "-12kg"
    },
    {
      before: "https://images.pexels.com/photos/5938546/pexels-photo-5938546.jpeg?auto=compress&cs=tinysrgb&w=300",
      after: "https://images.pexels.com/photos/4498597/pexels-photo-4498597.jpeg?auto=compress&cs=tinysrgb&w=300",
      result: "-10kg"
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            Resultados <span style={{ color: '#48C774' }}>reais</span> de mulheres reais
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
            Mais de 2.000 mulheres já transformaram seus corpos e suas vidas com o Secadamente
          </p>
        </div>
        
        {/* Before/After Gallery */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {beforeAfter.map((transformation, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex gap-4 mb-4">
                <div className="text-center flex-1">
                  <div className="text-sm font-medium text-gray-500 mb-2">ANTES</div>
                  <img 
                    src={transformation.before}
                    alt="Antes da transformação"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="text-center flex-1">
                  <div className="text-sm font-medium text-gray-500 mb-2">DEPOIS</div>
                  <img 
                    src={transformation.after}
                    alt="Depois da transformação"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#48C774' }}>{transformation.result}</div>
                <div className="text-sm" style={{ color: '#2D2D2D' }}>em 20 dias</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
              style={{ backgroundColor: '#F9FAFB' }}
            >
              <Quote className="w-8 h-8 mb-4" style={{ color: '#FFB6B9' }} />
              <p className="mb-6 leading-relaxed italic" style={{ color: '#2D2D2D' }}>
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold" style={{ color: '#2D2D2D' }}>{testimonial.name}</div>
                  <div className="text-sm" style={{ color: '#2D2D2D' }}>{testimonial.age}</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-lg font-bold" style={{ color: '#48C774' }}>{testimonial.result}</div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" style={{ fill: '#FFB6B9' }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;