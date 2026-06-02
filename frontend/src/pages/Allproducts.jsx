import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { sampleGroceries } from '../sampleGroceryData';
import './pagesCSS/Allproducts.css'


function Allproducts() {
  const [products] = useState(sampleGroceries);
  console.log("var products",products)
  const navigateTo=useNavigate();

    return (
        <div className='Al-pr'>
            <h4 className='pr-head'>Find out our latest Collections here..!!</h4>   

            {/* <a href='#test' className='View All'
             onClick={
                ()=>{
                axios.get("https://fakestoreapi.com/products/").then(
                  (res)=>{
                    console.log("data from api",res?.data)
                    setProducts(res?.data);
                  }
                  ).catch();
                
             }}
             >View All </a> */}

             <div className='wrapper'>
             {
                products?.map((ele)=>{
                  return(
                    <div className='card'>
                      
                      <p>Title:{ele?.title}</p>  
                      
                      <img src={ele?.image}
                      width={150} height={140} alt='product-img'
                      />

                      <p>Details:{ele?.description.slice(0,30)}</p>
                      <p>Price:₹ {ele?.price}</p>
                      <p>Category:{ele?.category}</p>

                      <p onClick={
                        ()=>{
                              navigateTo("/details",{state:ele});
                            }
                        }><button className='viewbtn'>View Details</button></p>

                    </div>
                  );
                })
             }
             </div>

        </div>
    );
}

export default Allproducts
