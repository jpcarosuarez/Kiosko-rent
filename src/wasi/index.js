import React,{useState, useEffect} from 'react';

let id_company='4484127';
let wasi_token='NPKJ_QVOy_OByB_PnbF';
let url='https://api.wasi.co/v1'
let chapinero='/location/location/2?'
let allCountries='/location/all-countries?';

function WasiView() {

  const [data,setData] =useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchWasiData = () => {
      return fetch(url + chapinero + "id_company="+id_company+"&wasi_token="+ wasi_token
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    ).then(function(response){
        console.log(response)
        return response.json();
      })
    };

     fetchWasiData()
     .then(function(myJson) {
       if(mounted){
         console.log(myJson);
        setData(myJson);
      }

    })
    return () => mounted = false;
  }, [])
 

    return (
    <div className="App">
     {
      data.map((item)=><p>{item.about}</p>)
     }
    </div>
  );
}

export default WasiView;