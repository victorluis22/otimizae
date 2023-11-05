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
    <nav className="w-1/4 p-10">
      {
        routes.map((eachRoute, index) => {
          return <Category key={index} category={eachRoute.category} pages={eachRoute.pages}/>
        })
      }
    </nav>
);
}
