import React, {useEffect, useState} from 'react'
import classes from './foodDetails.module.css'
import { useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'



const FoodDetails = () => {

  const [foodDetails, setFoodsDetails] = useState('')

  const {id} = useParams();
  const {token} = useSelector((state) => state.auth)


  useEffect(() => {

      const fetchFoodDetails = async() => {
         const res = await fetch(`http://localhost:5000/product/find/${id}`,{
             headers:{
               "Authorization" : `Bearer ${token}`
             }
         })

         const data = await res.json()
         console.log(data)
         setFoodsDetails(data)
      }
      fetchFoodDetails()

  }, )



  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        
         <div className={classes.right}>
           <h2 className={classes.title}>{foodDetails?.title}</h2>
         
           
           <div className={classes.category}>
             <h3>Lecturer Name : </h3>
             <span className={classes.categoryName}>{foodDetails?.category}</span>
           </div>
           <div className={classes.productDesc}>
            <div>Batch Code : </div>
            <p>
              {foodDetails?.desc?.length > 50 ? `${foodDetails?.desc}`.slice(0, 50) : foodDetails?.desc}
            </p>
          </div>
       
         </div>
      </div>
    </div>
  )
}

export default FoodDetails
