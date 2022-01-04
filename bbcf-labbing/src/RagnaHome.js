import BackHome from "./BackHome";
import mainPic from "./images/main-ragna.png"

const RagnaHome = () => {
  return ( 
    <div className="px-4 py-4">
      <h1 className="text-2xl px-2 py-2 bg-slate-400 rounded-lg m-4">Ragna</h1>

      <img src={mainPic} alt="not available" />

      <h3 className="text-xl px-2 py-2 rounded-lg m-4">Overview</h3>
      <p className="px-2 py-2 rounded-lg m-4">
        Es is a <b>well rounded character</b> that has straightforward tools such as a fast projectile and a DP. Es's unique mechanics involve her Drive and her Bors buff. Es's Drive allows her to set crests after certain attacks that deal damage after a set period of time. Es's Bors buff gives her the ability to use an enhanced version of each of her specials. Es's normals also have amazing range that she can use to dominate the midrange safely. In short, Es has a <b>strong neutral game.</b> 
      </p>

      <h3 className="text-xl px-2 py-2 rounded-lg m-4">Combos</h3>
      <p className="px-2 py-2 rounded-lg m-4">
        5B > 5C > 6C > 5D > 236B > 236A > dash 6C > 2D > sjc j.2BB > (2D Hits) > j.D > 6C |> 6C > 236B > 236A > neutral jump j.D oki
      </p>
      <p className="px-2 py-2 rounded-lg m-4">
        IAD j.D > 5B > 5C > 2C > jc J.C > (j.D Crest Hits) > j.D > 6C > 6C > 6D > delay jc j.C > (6D Crest Hits) > j.D > 6C > 214D
      </p>
      <p className="px-2 py-2 rounded-lg m-4">
        5A > 5B > 5C > 3C > 214C > 214C > 5B > 5C > 2C > jc j.C > j.D oki
      </p>

      <BackHome />

    </div>

   );
}
 
export default RagnaHome;