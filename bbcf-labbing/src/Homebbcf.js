import BtnChar from "./BtnChr";
import es from "./images/chibi-es.png"
import haku from "./images/chibi-haku.png"
import ragna from "./images/chibi-ragna.png"
import BackHome from "./BackHome"
import EsHome from "./EsHome";
import RagnaHome from "./RagnaHome";
import HakumenHome from "./HakumenHome";

const Es = [ "Es", es, <EsHome />]
const Hakumen = [ "Hakumen", haku, <HakumenHome /> ]
const Ragna = [ "Ragna", ragna, <RagnaHome />]

const Homebbcf = () => {
  return (
    <div className="flex-col bg-slate-500 h-screen">
      <div className="px-4 py-4">
        <h1 className="text-2xl px-2 py-2 bg-slate-400 rounded-lg m-4">CHARACTERS</h1>
        <div className="flex flex-row flex-wrap">
          <BtnChar character = {Es}/>
          <BtnChar character = {Hakumen}/>
          <BtnChar character = {Ragna}/>
        </div>
        <BackHome />
      </div>
    </div>
      
   );
}
 
export default Homebbcf;