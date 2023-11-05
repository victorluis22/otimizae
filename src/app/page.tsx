import Text from "./global/Text";
import Title from "./global/Title";

export default function Home() {
  return (
    <div>
        <img src="/logo.svg" alt="Imagem da logo do Otimizae" className="w-52"/>

        <Title text="Calculadora para otimização" size="xl"/>
        
        <Text text="Bem-vindo ao Otimizae - o seu destino definitivo para todas as suas necessidades de otimização algorítmica! Se você está em busca de ferramentas poderosas para resolver problemas de otimização, você veio ao lugar certo. Nossa missão é simplificar o processo de otimização, tornando-o acessível a todos. Com uma vasta coleção de calculadoras de algoritmos de otimização à sua disposição, Otimizae está aqui para ajudar você a encontrar as soluções mais eficazes para uma ampla gama de desafios complexos."/>
        <Text text="Nossa plataforma foi projetada com a sua conveniência em mente. Não importa se você é um estudante, um profissional da área de otimização ou alguém que está apenas começando a explorar esse mundo fascinante - Otimizae oferece as ferramentas e recursos necessários para impulsionar seus projetos e alcançar resultados notáveis."/>

        <Title text="Desenvolvido com ❤️ por Victor" size="l"/>

        <a href="https://github.com/victorluis22" target="_blank" rel="noreferrer noopener">
            <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="Logo Github" className="w-20"/>
        </a>
    </div>
  )
}
