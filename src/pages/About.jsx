import CardAbout from "../components/CardAbout"
import Title_section from "../ui/Title_section"

function about() {
  return (
    <>
    <Title_section heading="About US" />
    <div>
    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 ">Indro</h1>
      <div className="mb-6 relative">
        <div className="w-1/4 h-2 rounded-lg bg-red-700 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
       <div className="  text-center mb-6">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste libero obcaecati nisi voluptatum. Nulla pariatur rerum quidem iste eum officiis? Ullam omnis recusandae iste porro exercitationem odio consectetur incidunt, repudiandae impedit rem.</p>
       </div>
       </div>
       <div>
       <CardAbout />


       </div>


   
    </>
  )
}

export default about