import { useState } from "react";
import RegForm from "./components/RegForm";
import Report_Table from "./components/Report_Table";
import Report_Generator from "./components/Report_Generator";
import 'bootstrap/dist/css/bootstrap.css';


export default function App() {
  const [regDataA, setRegDataA] = useState({
    fName: '',
    email: '',
    password: '',
    rememberMe: false
  });

  const [regDataB, setRegDataB] = useState({
    fName: '',
    email: '',
    password: '',
    rememberMe: false
  });

  const [displayData, setDisplayData] = useState(false);

  const handleChange = (e, form)=>{
    const {target} = e;
    const {name, value} = target;
    if(form === 'A')
      setRegDataA((prevValue)=> ({...prevValue, [name]: (name === 'rememberMe' ? target.checked : value)}));
    else if(form === 'B'){
      setDisplayData(false);
      setRegDataB((prevValue)=> ({...prevValue, [name]: (name === 'rememberMe' ? target.checked : value)}));
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayData(true);
  }

  return (
    <div className="container-fluid">
      <div className='row'>
        <div className="col-sm-12 col-md-6">
          <RegForm handleSubmit={handleSubmit} handleChange={handleChange} regData={regDataA} enableSubmit={false} form={'A'}/>
          <Report_Table regData={{...regDataA}}/>
        </div>
        <div className="col-sm-12 col-md-6">
          <RegForm handleSubmit={handleSubmit} handleChange={handleChange} regData={regDataB} enableSubmit={true} form={'B'}/>
          <Report_Generator  regData={{...regDataB}} displayData={displayData}/>
        </div>
      </div>
    </div>
  )
}