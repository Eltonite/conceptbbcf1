import { Link } from "react-router-dom";

const BackCharSel = () => {
  return ( 
    
    <Link to="/bbcf">
      <button className="px-2 py-2 bg-slate-400 rounded-lg m-4 hover:bg-slate-300">
        <p>Back to Character Select</p>
      </button>
    </Link>
   );
}
 
export default BackCharSel;