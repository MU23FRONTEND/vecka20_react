import { useParams } from 'react-router-dom';

function SingleProduct() {
  
  // useParams returnerar by default en string
  const { id } = useParams();
  if(id !== undefined) {
    const parameter : number = parseInt(id);
  }
  

  return (
    <h1>Single Product #{ id }</h1>
  )
}

export default SingleProduct;
