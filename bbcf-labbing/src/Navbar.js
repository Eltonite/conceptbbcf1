import {Link} from 'react-router-dom';

const Navbar = () => {
  return ( 
    <div className= "flex justify-center gap-4 px-4 py-4 bg-slate-400">
      <Link to="/ggst" className="bg-emerald-500 hover:bg-emerald-300 px-3 text-4xl rounded-lg border-slate-500 border-4">GGST</Link>
      <Link to="/dbfz" className="bg-orange-500 hover:bg-orange-300 px-3 text-4xl rounded-lg border-slate-500 border-4">DBFZ</Link>
      <Link to="/bbcf" className="bg-blue-500 hover:bg-blue-300 px-3 text-4xl  rounded-lg border-slate-500 border-4">BBCF</Link>
    </div>
   );
}
 
export default Navbar;