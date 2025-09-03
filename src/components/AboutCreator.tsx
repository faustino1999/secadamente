import React from 'react';
import { Star, Award, Users, Heart, Target, Zap } from 'lucide-react';
import { secadamenteImages, placeholderImages } from '../assets/images/images';

const AboutCreator = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Quem é a <span className="text-pink-500">Monica</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Coach motivacional do mundo fitness há mais de 3 anos. Perdeu 10 quilos e voltou a ganhar os mesmos quilos que perdeu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Experiência Pessoal
                </h3>
                <p className="text-gray-600">
                  Perdeu 10 quilos e voltou a ganhar os mesmos quilos que perdeu. Hoje com mais experiência, compartilha sua jornada e ajuda outras mulheres.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Formação Profissional
                </h3>
                <p className="text-gray-600">
                  Formada como auxiliar de fisioterapia e massagem pelo centro de formação em Lisboa. Ensina técnicas para desinchar, modelar e afinar a cintura.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Missão e Propósito
                </h3>
                <p className="text-gray-600">
                  Ajuda mulheres que queiram emagrecer, recuperar sua autoestima e mudar sua mente através do fitness e bem-estar.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8">
              <div className="text-center">
                <img 
                  src={secadamenteImages.monica.profile2 || placeholderImages.monicaProfile}
                  alt="Monica De Oliveira - Coach Motivacional Fitness"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = placeholderImages.monicaProfile;
                  }}
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Monica De Oliveira
                </h3>
                <p className="text-gray-600 mb-4">
                  Coach Motivacional Fitness
                </p>
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Especialista em transformação feminina
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Por que confiar na Monica?
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              "Minha missão é empoderar mulheres através do fitness, mostrando que é possível 
              ter um corpo saudável e bonito sem extremismos. Cada programa é criado com base 
              na ciência e adaptado para a realidade da mulher brasileira."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCreator;