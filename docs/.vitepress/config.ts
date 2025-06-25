import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'PetLand',

  themeConfig: {
   
    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: '1. Introdução', link: '/1_introducao' },
          { text: '2. Descrição do projeto', link: '/2_Descrição do Projeto' },
          { text: '3. Principais Recursos e Funcionalidades', link: '/3_Principais Recursos e Funcionalidades' },
          { text: '4. Diagrama de Caso de Uso', link: '/4_Diagrama de Caso de Uso' },
          { text: '5. Diagrama de Classes', link: '/5_Diagrama de Classes' },
          { text: '6. Protótipos de Telas', link: '/6_Protótipos de Telas' },
          { text: '7. Cronograma e Entrega', link: '/7_Cronograma e Entrega' },
          { text: '8. Riscos e Mitigação', link: '/8_Riscos e Mitigação' },
          { text: '9. Custos e Orçamento', link: '/9_Custos e Orçamento' },
          { text: '10. Considerações Finais', link: '/10_Considerações Finais' },
          // ...
        ],
      },
    ],
  },
});
