(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{391:function(a,t,s){a.exports=s.p+"assets/img/vuex.9228193f.png"},427:function(a,t,s){"use strict";s.r(t);var e=s(43),o=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"gerenciamento-de-estado"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gerenciamento-de-estado"}},[a._v("#")]),a._v(" Gerenciamento de Estado")]),a._v(" "),e("p",[a._v("Agora vamos introduzir sobre o "),e("strong",[a._v("Vuex")]),a._v(", o "),e("strong",[a._v("gerenciador de estado")]),a._v(" do "),e("strong",[a._v("Vue")]),a._v(". O "),e("strong",[a._v("Vuex")]),a._v(" pode ser relacionado com o "),e("strong",[a._v("Redux")]),a._v(", mas possuem diferenças cruciais.")]),a._v(" "),e("p",[a._v("Ele é um padrão de gerenciamento de estado + biblioteca para a. Ele serve como uma loja centralizada para todos os componentes em uma aplicação, com regras garantindo que o estado só possa ser mutado de forma previsível. Ou seja, dessa forma conseguimos salvar dados temporários que podem ser úteis ao longo da aplicação. Por exemplo, o id de um usuário ou produto, que precisamos consultar em vários componentes diferentes!")]),a._v(" "),e("h2",{attrs:{id:"fluxo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fluxo"}},[a._v("#")]),a._v(" Fluxo")]),a._v(" "),e("h1",{attrs:{align:"center"}},[e("img",{attrs:{src:s(391),alt:"Imagem mostrando o resultado da estrutura",width:"80%"}})]),a._v(" "),e("p",[a._v("Todo o "),e("strong",[a._v("Vuex")]),a._v(" funciona em torno deste ciclo, mas, oque É esse ciclo você me pergunta:")]),a._v(" "),e("h2",{attrs:{id:"vue-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-components"}},[a._v("#")]),a._v(" Vue Components")]),a._v(" "),e("p",[a._v("Seria todos os nossos componentes "),e("strong",[a._v(".vue")]),a._v(", seja ela "),e("strong",[a._v("propriedade")]),a._v(" ou "),e("strong",[a._v("page")]),a._v(" o "),e("strong",[a._v("vuex")]),a._v(" irá realizar uma série de ações até chegar novamente no nosso componente.")]),a._v(" "),e("p",[a._v("Para mandar uma ação para o "),e("strong",[a._v("vuex")]),a._v(", usamos o "),e("strong",[a._v("dispatch")]),a._v(", que irá conter o nome para onde queremos mandar, e como segundo parâmetro o conteúdo.")]),a._v(" "),e("p",[a._v("Exemplo:")]),a._v(" "),e("p",[e("code",[a._v("dispatch('nome_da_action', { hello: world });")])]),a._v(" "),e("p",[a._v("Podemos enviar o que quisermos, como objetos, booleanos, etc. "),e("strong",[a._v("NÃO")]),a._v(" recomendamos mandar "),e("strong",[a._v("templates")]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[a._v("#")]),a._v(" Action")]),a._v(" "),e("p",[a._v("As actions é a onde o "),e("strong",[a._v("dispatch")]),a._v(" irá enviar o conteúdo. As actions servem para realizar código "),e("strong",[a._v("assíncrono")]),a._v(" no "),e("strong",[a._v("Vuex")]),a._v(".")]),a._v(" "),e("p",[a._v("Em caso de não ter necessidade de realizar código assíncrono, podemos apenas enviar o conteúdo diretamente para a "),e("strong",[a._v("Mutation")]),a._v(".")]),a._v(" "),e("p",[a._v("Depois de executarmos o que for preciso, vamos "),e("strong",[a._v("commitar")]),a._v(" para a "),e("strong",[a._v("Mutation")]),a._v(", como o próprio nome sugere, ele que irá "),e("strong",[a._v("mutar")]),a._v(" o estado.")]),a._v(" "),e("p",[a._v("Exemplo:")]),a._v(" "),e("p",[e("code",[a._v("commit('nome_da_mutation', objeto);")])]),a._v(" "),e("ul",[e("li",[a._v("Para mandar para uma "),e("strong",[a._v("action")]),a._v(" usamos o "),e("strong",[a._v("dispatch")]),a._v(" e para uma "),e("strong",[a._v("mutation")]),a._v(" usamos o "),e("strong",[a._v("commit")]),a._v(", possuem nomes diferentes exatamente para não confundir o desenvolvedor.")])]),a._v(" "),e("h2",{attrs:{id:"mutations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mutations"}},[a._v("#")]),a._v(" Mutations")]),a._v(" "),e("p",[a._v("Na "),e("strong",[a._v("mutation")]),a._v(", teremos acesso ao "),e("strong",[a._v("estado")]),a._v(" do "),e("strong",[a._v("Vuex")]),a._v(", assim conseguindo "),e("strong",[a._v("mutar")]),a._v(". Iremos explicar detalhadamente na seção de "),e("strong",[a._v("Mutations")]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[a._v("#")]),a._v(" State")]),a._v(" "),e("p",[a._v("Aqui é a onde estará os nossos estados, por exemplo:")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("state"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  contador"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("ul",[e("li",[a._v("Apenas isso? Sim!")])]),a._v(" "),e("h2",{attrs:{id:"getters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getters"}},[a._v("#")]),a._v(" Getters")]),a._v(" "),e("p",[a._v("Os "),e("strong",[a._v("getters")]),a._v(" funcionam com a mesma lógia das "),e("strong",[a._v("computeds")]),a._v(", podemos fazer uma "),e("strong",[a._v("cópia")]),a._v(" do estado para modificação sem a "),e("strong",[a._v("mutação")]),a._v(" do "),e("strong",[a._v("estado")])]),a._v(" "),e("h2",{attrs:{id:"estrutura-da-loja"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#estrutura-da-loja"}},[a._v("#")]),a._v(" Estrutura da Loja")]),a._v(" "),e("p",[a._v("A estrutura de nossa loja é bem simples, nada distante do que já vimos no "),e("strong",[a._v("Vue")]),a._v(":")]),a._v(" "),e("p",[e("strong",[a._v("Vue")])]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Vue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  data"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  methods"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  computed"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[e("strong",[a._v("Vuex")])]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Vuex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Store")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  state"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  mutations"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  actions"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  getters"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("ul",[e("li",[a._v("O "),e("strong",[a._v("Vuex")]),a._v(" "),e("strong",[a._v("NÃO")]),a._v(" irá substituir a estrutura dos componentes do "),e("strong",[a._v("Vue")]),a._v(", é recomendável só utilizar o "),e("strong",[a._v("Vuex")]),a._v(" quando realmente necessitamos acessar um mesmo "),e("strong",[a._v("conteúdo")]),a._v(" em várias partes diferentes da "),e("strong",[a._v("aplicação")]),a._v(".")])]),a._v(" "),e("p",[a._v("Na próxima seção, iremos implementar a "),e("strong",[a._v("loja")]),a._v(" em nosso projeto atual, nos vemos lá!")]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/tutorial/5-Vuex/2-Iniciando com Vuex.html"}},[a._v("Próxima Seção")])],1)])}),[],!1,null,null,null);t.default=o.exports}}]);