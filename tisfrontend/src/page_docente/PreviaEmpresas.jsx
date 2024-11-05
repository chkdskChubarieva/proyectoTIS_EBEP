import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CardGrupoEmpresa from "../components/CardGrupoEmpresa";

const PreviaEmpresas = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container mx-auto">
        <div className="my-4 rounded-md bg-primary-600 p-3 text-center">
          <span className="text-xl font-semibold text-primary-100">
            Proyectos designados
          </span>
        </div>

        <article className="container grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CardGrupoEmpresa
            imagen={
              "https://img.freepik.com/foto-gratis/belleza-otonal-abstracta-patron-venas-hoja-multicolor-generado-ia_188544-9871.jpg"
            }
            nombreGrupoEmpresa={"VistaSoft Solutions"}
          />

          <CardGrupoEmpresa
            imagen={
              "https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg"
            }
            nombreGrupoEmpresa={"Google"}
          />

          <CardGrupoEmpresa
            imagen={
              "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            nombreGrupoEmpresa={"VistaSoft Solutions"}
          />

          <CardGrupoEmpresa
            imagen={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcu8AuAutwd4IjxWlpddvPVnAv98ZhLPaovA&s"
            }
            nombreGrupoEmpresa={"Microsoft"}
          />

          <CardGrupoEmpresa
            imagen={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcu8AuAutwd4IjxWlpddvPVnAv98ZhLPaovA&s"
            }
            nombreGrupoEmpresa={"Microsoft"}
          />
        </article>
      </div>
    </>
  );
};

export default PreviaEmpresas;
