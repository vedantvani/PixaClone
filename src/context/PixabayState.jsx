// import React, { useEffect, useState } from "react";
// import PixabayContext from "./PixabayContext";

// const PixabayState = (props) => {

// const [imageData ,  SetImageData]=  useState([])

// const [query,Setquery] = useState('london')
//   const api_key = "45399899-5c8fcc54414519b449b9e05f4";

//   useEffect(() => {
//     const fetchdata = async () => {
//       const api = await fetch(
//         `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`
//       );
//       const data = await api.json();
//   SetImageData(data.hits)
//       console.log(data.hits);
    
//     };
//     fetchdata();
//   }, [query]);


//   const  FetchImageBycategory = async(cat)=>{

//      const api = await fetch(
//         `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
//       );
//       const data = await api.json();
//   SetImageData(data.hits)
//       console.log(data.hits);
//   }


//   return (
//     <div>
//       <PixabayContext.Provider value={{imageData,FetchImageBycategory,Setquery}}>
//         {props.children}
//       </PixabayContext.Provider>
//     </div>
//   );
// };

// export default PixabayState;

import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState('london');


  const api_key = "45399899-5c8fcc54414519b449b9e05f4";

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits);
      console.log(data.hits);
    };
    fetchData();
  }, [query]);

  const fetchImageByCategory = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    const data = await api.json();
    setImageData(data.hits);
    console.log(data.hits);
  };

  return (
    <PixabayContext.Provider
      value={{ imageData, fetchImageByCategory, setQuery }}
    >
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;