import Category from "./Components/Category";

const routes = [
  {category: "Otimização",
    pages: [
      {url: "/otimizacao/secaoAurea" , page:"Seção Áurea"},
      {url: "/otimizacao/bissecao" , page:"Método da Bisseção"},
      {url: "/otimizacao/newton" , page:"Método de Newton"},
    ]
  }
]

export default function Navigation({}){
  return (
    <nav className="w-full p-10 sm:w-1/4 sm:self-start sm:top-0 sm:sticky">
      {
        routes.map((eachRoute, index) => {
          return <Category key={index} category={eachRoute.category} pages={eachRoute.pages}/>
        })
      }
    </nav>
);
}
