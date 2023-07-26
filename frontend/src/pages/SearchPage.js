import { useParams } from "react-router-dom";
import SearchProduct from "../components/sumsungProducts/SearchProduct";
import BigTitle from "../components/UI/BigTitle";

const SearchPage =()=>{
    const param =useParams();
    
    return(<>
  
        <BigTitle title="Recherche"/>
       
        <SearchProduct name={param.result}/>
    </>);
}
export default SearchPage ;