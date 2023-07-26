import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Search = () => {

const [nameProd,setNameProd]=useState('');
const navigate =useNavigate();

const changeHandler =(event)=>{

console.log(event.target.value);
setNameProd(event.target.value);
}
const clickHandler =()=>{
navigate(`/recherche/${nameProd}`);
}

  return (
    <>
      <input
        type="text"
        style={{ marginTop: "30px" }}
        placeholder="Search products..."
        onChange={changeHandler}
      />
      <input type="button" value="Search" onClick={clickHandler}/>
    </>
  );
};
export default Search;
