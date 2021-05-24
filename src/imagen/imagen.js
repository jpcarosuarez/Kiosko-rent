import React, { useState, useEffect } from "react";
import { getStorage } from '../db';
import { SpinningCircles } from 'svg-loaders-react'
import './imagen.css';

export default function Imagen({ src, alt, width,height, className}) {
  const [url, setUrl] = useState("http://placehold.it/" +width+"x"+height);//ruta por defecto
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    let imageRef = getStorage().ref(src);
    imageRef.getDownloadURL()
      .then(val=>{
          setUrl(val);
          console.log(val);
        })
      .catch(err=>console.log(err))
      .finally(() => setLoading(false));

  },[]);

  return (
    <>
      {loading ? (
        <SpinningCircles fill="Aquamarine" size="small" />
        ) : (
          <img src={url} alt={alt} width={width} height={height} className={className}/>
        )}
     </>
  );


}



