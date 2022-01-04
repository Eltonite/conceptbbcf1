
const BtnChar = ({character}) => {
  const name = character[0];
  const chibi = character[1];

  const handleClick = () => {
    console.log('Clicked ' + name)
  }

  return ( 
    <div className="">
      <button onClick={handleClick} className="px-2 py-2 bg-slate-400 rounded-lg m-4 hover:bg-slate-300">
        <img className ="h-24 w-24" src= {chibi} 
        alt="not available" />
        <p>{name}</p>
      </button>
    </div>
   );
}
 
export default BtnChar;

