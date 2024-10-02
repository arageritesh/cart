import React from 'react'
import "../style/home.scss"
import toast from 'react-hot-toast';

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =  "	https://m.media-amazon.com/images/I/71rpgwRkKTL._AC_UL1500_.jpg";

const Home = () => {

  const productList = [
      { name: "Mc Book", price: 12000, imgSrc: img1, id: "fadasasfeefewfrer" },
      { name: "Black Shoes", price: 490, imgSrc:img2, id: "fkemkmeklrlrklke" }
  ]

  const addToCartHandler = (options) => {
      console.log(options); 
      toast.success("Added to cart");
  };

  return (
    <div className='home'>
      {
        productList.map(i => (
          <ProductCard
            key={i.id}
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
            handler={addToCartHandler}
          />
        ))
      }
    </div>
  )
}

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className='productCard'>
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>Add to Cart</button>
  </div>
)

export default Home
