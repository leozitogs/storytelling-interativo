# Storytelling Interativo - HiUFPE

Uma aplicação web interativa para apresentar o storytelling profissional da marca HiUFPE com características de história em quadrinhos e navegação fluída de páginas.

## Características

- **Navegação Interativa**: Experiência similar a uma história em quadrinhos com passagem de páginas fluída
- **Tecnologia React**: Construído com React e a biblioteca react-pageflip para animações profissionais
- **Design Responsivo**: Funciona perfeitamente em desktop e dispositivos móveis
- **Interface Intuitiva**: Controles de navegação visíveis e indicador de progresso
- **Animações Suaves**: Transições fluídas entre páginas com efeitos visuais profissionais

## Funcionalidades

### Controles de Navegação
- **Botão de Próxima Página**: Avança para a próxima página do storytelling
- **Botão de Página Anterior**: Retorna para a página anterior
- **Botão Voltar ao Início**: Retorna diretamente para a primeira página
- **Navegação por Clique**: Clique na página para avançar
- **Indicador de Progresso**: Mostra a página atual e total de páginas

### Design e Experiência
- **Fundo Gradiente**: Design moderno com gradiente roxo/azul
- **Sombras Profissionais**: Efeito de sombra realista no livro
- **Animações de Carregamento**: Feedback visual durante o carregamento
- **Responsividade Completa**: Adaptação automática para diferentes tamanhos de tela

## Estrutura do Projeto

```
storytelling-app/
├── public/
├── src/
│   ├── assets/          # Imagens das páginas (1.png - 8.png)
│   ├── components/
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos personalizados
│   └── main.jsx         # Ponto de entrada
├── dist/                # Build de produção
└── package.json
```

## Como Usar

### Desenvolvimento
```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev --host
```

### Produção
```bash
# Construir para produção
pnpm run build

# Os arquivos estarão na pasta dist/
```

## Tecnologias Utilizadas

- **React 19**: Framework principal
- **react-pageflip**: Biblioteca para efeito de virar páginas
- **Vite**: Bundler e servidor de desenvolvimento
- **Tailwind CSS**: Framework de CSS
- **Lucide React**: Ícones para os controles

## Páginas do Storytelling

1. **Capa**: "Hi UFPE - O FIM DO CAOS ACADÊMICO"
2. **Apresentação**: Hub Inteligente UFPE e equipe iCina
3. **História**: "A ROTINA ESTAFOSSÍVEL..." - Quadrinhos da rotina estudantil
4. **Continuação**: "NO PRÓXIMO DIA..." e "E SE EU... DESISTIR?"
5. **Solução**: "SÉRIO, UMA AMIGA SE APROXIMA DE JOÃO..." - Descoberta do app
6. **Desenvolvimento**: Mais detalhes da solução
7. **Implementação**: Como a solução funciona
8. **Conclusão**: Resultado final da história

## Personalização

Para usar com seu próprio conteúdo:
1. Substitua as imagens em `src/assets/` (mantenha os nomes 1.png - 8.png)
2. Ajuste o número de páginas na variável `totalPages`
3. Modifique os estilos em `App.css` conforme necessário
4. Atualize o título em `index.html`

## Suporte

A aplicação foi testada e otimizada para:
- Chrome, Firefox, Safari, Edge
- Dispositivos desktop e móveis
- Diferentes resoluções de tela
- Touch e mouse navigation

---

Desenvolvido com ❤️ para apresentações profissionais interativas.

