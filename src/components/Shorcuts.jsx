import {WrenchScrewdriverIcon, 
        GlobeAmericasIcon,
        BuildingOffice2Icon,
        PresentationChartLineIcon,
        UserGroupIcon } from "@heroicons/react/24/outline";
function Shorcuts (){
    return(
        <>
<div className="mt-10 main place-items-center flex flex-row justify-between">
    <div className="card bg-white flex flex-col items-center justify-center p-3 shadow-lg rounded-2xl mr-2 hover:bg-sky-100 text-sky-800" style={{width: "145px"}}>
      <div className="profile mx-auto rounded-full py-2 w-16">
        <UserGroupIcon className="text-sky-800 stroke-1"/>
      </div>
      <div className="name text-center text-justify text-black text-1xl font-medium mt-1">
        <p className="font-semibold">Código de<br/>conducta</p>
      </div>
  </div>
    <div className="card bg-white flex flex-col items-center justify-center p-3 shadow-lg rounded-2xl mr-2 hover:bg-sky-100 text-sky-800" style={{width: "145px"}}>
      <div className="profile mx-auto rounded-full py-2 w-16">
        <PresentationChartLineIcon className="text-sky-800 stroke-1"/>
      </div>
      <div className="name text-center text-justify justify-center text-black text-1xl font-medium mt-1">
        <p className="font-semibold">Reporte<br/>trimestral</p>
      </div>
  </div>
    <div className="card bg-white flex flex-col items-center justify-center p-3 shadow-lg rounded-2xl w-54 mr-2 hover:bg-sky-100 text-sky-800" style={{width: "145px"}}>
      <div className="profile mx-auto rounded-full py-2 w-16">
        <WrenchScrewdriverIcon className="text-sky-800 stroke-1"/>
      </div>
      <div className="name text-center text-black text-1xl font-medium mt-1">
        <p className="font-semibold">Reporte <br/>operacional</p>
      </div>
  </div>
    <div className="card bg-white flex flex-col items-center justify-center p-3 shadow-lg rounded-2xl mr-2 hover:bg-sky-100 text-sky-800" style={{width: "145px"}}>
      <div className="profile mx-auto rounded-full py-2 w-16">
        <BuildingOffice2Icon className="text-sky-800 stroke-1"/>
      </div>
      <div className="name text-center text-black text-1xl font-medium mt-1">
        <p className="font-semibold">Boletín de <br/>industria</p>
      </div>
  </div>
  <div className="card bg-white flex flex-col items-center justify-center p-3 shadow-lg rounded-2xl hover:bg-sky-100 text-sky-800" style={{width: "145px"}}>
      <div className="profile mx-auto rounded-full py-2 w-16">
        <GlobeAmericasIcon className="text-sky-800 stroke-1"/>
      </div>
      <div className="name text-center text-black text-1xl font-medium mt-1">
        <p className="font-semibold">Informe de <br/>sostenibilidad</p>
      </div>
  </div>
  </div>
        </>
    )
}

export default Shorcuts