import {Link} from 'react-router-dom';


const BtnChar = ({character}) => {
  const name = character[0];
  const chibi = character[1];

  const url = "/bbcf/" + name;


  return ( 
    <div >
      <Link to={url} >
        <div className="px-2 py-2 bg-slate-400 rounded-lg m-4 hover:bg-slate-300">
          <img className ="h-24 w-24" src= {chibi} alt="not available" />
          <p>{name}</p>
        </div>
      </Link>
    </div>
   );
}
 
export default BtnChar;

