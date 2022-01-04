
const BtnChar = ({character}) => {
  const name = character[0];
  const chibi = character[1];

  return ( 
    <div className="">
      <button className="px-2 py-2 bg-slate-400 rounded-lg m-4 ">
        <img className ="h-24 w-24" src= {chibi} 
        alt="not available" />
        <p>{name}</p>
      </button>
    </div>
   );
}
 
export default BtnChar;
