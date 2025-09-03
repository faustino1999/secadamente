# 🖼️ Imagens do Projeto Secadamente

Este projeto utiliza imagens de referência do site oficial do Secadamente para criar uma experiência visual autêntica e alinhada com a marca.

## 📁 Estrutura de Imagens

### 📂 Localização
```
src/assets/images/
├── images.ts          # Configuração das imagens
└── README.md          # Este arquivo
```

### 🎯 Imagens Disponíveis

#### 1. **Imagens da Monica (Criadora)**
- `monica.profile1` - Foto de perfil principal
- `monica.profile2` - Foto de perfil secundária

#### 2. **Imagens dos Serviços**
- `services.challenge20Days` - 20 dias de desafio para desinchar
- `services.homeWorkout` - Treino em casa
- `services.lowCalorieRecipes` - Receitas baixas em calorias
- `services.vipGroup` - Grupo VIP
- `services.equipmentSetup` - Configuração de equipamentos

#### 3. **Imagens de Resultados**
- `results.beforeAfter1` - Monica antes da transformação
- `results.beforeAfter2` - Monica depois da transformação (72 dias)
- `results.transformation72Days` - Resultado comprovado

#### 4. **Imagens de Fundo**
- `backgrounds.orangeBackground` - Fundo laranja
- `backgrounds.screenshot` - Captura de tela do site

## 🚀 Como Usar

### Importar as Imagens
```typescript
import { secadamenteImages, placeholderImages } from '../assets/images/images';
```

### Usar em Componentes
```typescript
<img 
  src={secadamenteImages.monica.profile1 || placeholderImages.monicaProfile}
  alt="Monica De Oliveira"
  onError={(e) => {
    e.currentTarget.src = placeholderImages.monicaProfile;
  }}
/>
```

## 🔄 Fallback de Imagens

O projeto inclui imagens de placeholder que são carregadas caso as URLs do site Secadamente não estejam disponíveis:

- `placeholderImages.monicaProfile` - Foto de perfil genérica
- `placeholderImages.fitnessWoman` - Mulher fitness genérica
- `placeholderImages.workout` - Treino genérico
- `placeholderImages.healthyFood` - Comida saudável genérica

## 📱 URLs das Imagens Originais

Todas as imagens são referenciadas diretamente do site Secadamente:
- **Site Principal**: https://secadamente.wixsite.com/my-site-6
- **Imagens**: URLs diretas para os arquivos de imagem

## ⚠️ Notas Importantes

1. **Responsividade**: Todas as imagens são responsivas e se adaptam a diferentes tamanhos de tela
2. **Otimização**: As imagens incluem tratamento de erro para garantir que sempre sejam exibidas
3. **Performance**: Uso de lazy loading e fallbacks para melhor experiência do usuário
4. **Acessibilidade**: Todas as imagens incluem textos alternativos descritivos

## 🎨 Componentes que Usam Imagens

- `HeroSection` - Imagem de perfil da Monica
- `AboutCreator` - Foto da Monica
- `ServicesGallery` - Galeria de serviços com imagens
- `ResultsShowcase` - Antes e depois da transformação

## 🔧 Personalização

Para adicionar novas imagens:

1. Adicione a URL no arquivo `images.ts`
2. Crie um fallback apropriado
3. Atualize os componentes que usarão a nova imagem
4. Teste a responsividade e tratamento de erro

---

**Desenvolvido com base no site oficial do Secadamente by Monica De Oliveira**
