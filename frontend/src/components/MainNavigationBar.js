import { useCallback, useEffect,useState } from "react";
import "./MainNavigationBar.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import CategorieMenu from "./CategorieMenu";


const MainNavigationBar = () => {
const [categories,setCategories]=useState();
 
  useEffect(()=>{
    const fetchMenu =async()=>{
      const response = await fetch("http://localhost:3000/categories");
      const data = await response.json();
    
      setCategories(data);
      
    }

    fetchMenu();
  },[]);

  return (
  <>
  
  {categories && <CategorieMenu categories={categories} />}
  
  </>
  );
};
export default MainNavigationBar;
