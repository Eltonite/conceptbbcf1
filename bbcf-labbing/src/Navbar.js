const Navbar = () => {
  return ( 
    <div className= "flex justify-center gap-4 px-4 py-4 bg-slate-400">
      <button className="bg-emerald-500 hover:bg-emerald-300 px-3 text-4xl rounded-lg">GGST</button>
      <button className="bg-orange-500 hover:bg-orange-300 px-3 text-4xl rounded-lg">DBFZ</button>
      <button className="bg-blue-500 hover:bg-blue-300 px-3 text-4xl  rounded-lg">BBCF</button>
    </div>
   );
}
 
export default Navbar;