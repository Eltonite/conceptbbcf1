import BtnChar from "./BtnChr";
import es from "./images/chibi-es.png"
import haku from "./images/chibi-haku.png"
import ragna from "./images/chibi-ragna.png"

const Es = [ "Es", es ]
const Hakumen = [ "Hakumen", haku ]
const Ragna = [ "Ragna", ragna ]

const Homebbcf = () => {
  return ( 
    <div className="px-4 py-4">
      <h1 className="text-2xl">CHARACTERS</h1>
      <div className="flex flex-row flex-wrap">
        <BtnChar character = {Es}/>
        <BtnChar character = {Hakumen}/>
        <BtnChar character = {Ragna}/>
        <BtnChar character = {Es}/>
        <BtnChar character = {Hakumen}/>
        <BtnChar character = {Ragna}/>
        <BtnChar character = {Es}/>
        <BtnChar character = {Hakumen}/>
        <BtnChar character = {Ragna}/>
        <BtnChar character = {Es}/>
        <BtnChar character = {Hakumen}/>
        <BtnChar character = {Ragna}/>
      </div>
    </div>
   );
}
 
export default Homebbcf;