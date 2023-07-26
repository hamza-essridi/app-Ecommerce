import { useParams } from "react-router-dom";

import ProductsList from "../components/sumsungProducts/ProductsList";
import BigTitle from "../components/UI/BigTitle";

const SamsungPage = () => {

  const param =useParams();
 // console.log(param.nameProd);

  return (
    <>
      <BigTitle title={param.nameProd} />
      <ProductsList name={param.nameProd}/>
    </>
  );
};
export default SamsungPage;
