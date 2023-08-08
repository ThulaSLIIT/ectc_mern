import React from "react";
import classes from './foods.module.css'
import {Link} from 'react-router-dom'
import { foodTypes } from "../../data/data";

const Food = () => {
    return(
       <section id="foods" className={classes.container}>
         <div className={classes.wrapper}>
        
            <div className={classes.foods}>
                {foodTypes.map((foodType) => (
                    <Link to={`/foods/${foodType.name}`} key={foodType.id} className={classes.food}>
                        <h4>{foodType.name}</h4>
                        <div className={classes.imgContainer}>
                            
                        </div>
                    </Link>
                ))}
            </div>
         </div>
       </section>
    )
}

export default Food