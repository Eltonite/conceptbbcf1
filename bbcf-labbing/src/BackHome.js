import { Link } from "react-router-dom";

const BackHome = () => {
  return ( 
    <Link to="/">
      <div>
        <button className="px-2 py-2 bg-slate-400 rounded-lg m-4 hover:bg-slate-300">
         <p>Back to Home</p>
        </button>
      </div>
    </Link>
   );
}
 
export default BackHome;