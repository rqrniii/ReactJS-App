const ProductDetails = ({ product }) => {
    return (
      <div className="product-details">
        <h2>{product.name}</h2>
        <img src={product.image_url} alt="Product" />
        <p>Price: {product.price}$</p>
        <p>Description: {product.description}</p>
        <p>region:{product.region}</p>
        <p>weight:{product.weight}</p>
        <p>flavor:{product.flavor_profile}</p>
        <p>grind ption:{product.grind_option}</p>
  
  
  
      </div>
    );
  };
  
  export default ProductDetails;