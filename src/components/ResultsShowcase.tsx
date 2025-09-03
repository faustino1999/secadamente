import React from 'react';
import { secadamenteImages, placeholderImages } from '../assets/images/images';

const ResultsShowcase = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#2D2D2D' }}>
            O meu resultado em <span style={{ color: '#48C774' }}>72 dias</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
            Veja a transformação real da Monica De Oliveira com o programa Secadamente
          </p>
        </div>
        
        {/* Imagens lado a lado */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
          {/* Before Image */}
          <div className="text-center flex-1 max-w-md">
            <div className="relative mb-6">
              <img 
                src="https://images.pexels.com/photos/4056530/pexels-photo-4056530.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Monica De Oliveira - Antes da transformação"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://images.pexels.com/photos/4056530/pexels-photo-4056530.jpeg?auto=compress&cs=tinysrgb&w=600";
                }}
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                ANTES
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#2D2D2D' }}>
              Antes do programa
            </h3>
            <p className="text-gray-600">
              Monica antes de começar sua jornada de transformação
            </p>
          </div>
          
          {/* VS Separator */}
          <div className="flex items-center justify-center">
            <div className="text-6xl font-bold" style={{ color: '#FFB6B9' }}>VS</div>
          </div>
          
          {/* After Image */}
          <div className="text-center flex-1 max-w-md">
            <div className="relative mb-6">
              <img 
                src="https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Monica De Oliveira - Depois da transformação"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=600";
                }}
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                DEPOIS
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#2D2D2D' }}>
              Depois de 72 dias
            </h3>
            <p className="text-gray-600">
              Resultado comprovado com o programa Secadamente
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2D2D2D' }}>
              Transformação Real e Comprovada
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              "Perdi 10 quilos e voltei a ganhar os mesmos quilos que perdeu. 
              Hoje com mais experiência, compartilho minha jornada e ajudo outras mulheres 
              a alcançarem seus objetivos de fitness e autoestima."
            </p>
            <div className="flex items-center justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold" style={{ color: '#48C774' }}>72</div>
                <div className="text-sm text-gray-600">dias de programa</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: '#3A86FF' }}>10kg</div>
                <div className="text-sm text-gray-600">perdidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: '#FFB6B9' }}>100%</div>
                <div className="text-sm text-gray-600">natural</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
