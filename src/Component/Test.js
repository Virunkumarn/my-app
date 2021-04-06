
import logoTest from '../logo.svg';
import '../App.css'

const Test=()=> {
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'row'}}>
        <div style={{height:'100%',width:'200px',borderRight:'5px solid red'}}>
        <input type="text" onChange={(event)=>{console.log("e",event)}}/>
        </div>
        <div style={{height:'100%',flex:1,borderRight:'5px solid red',justifyContent:'flex-end'}}>
            dddd
        </div>
        <div style={{height:'100%',width:'300px',borderRight:'5px solid red',justifyContent:'flex-end'}}>
            dddd
        </div>
</div>
  );
}

export default Test;
