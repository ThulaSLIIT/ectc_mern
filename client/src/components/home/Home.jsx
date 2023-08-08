import React from "react";
import classes from './home.module.css'
import Hero from '../hero/Hero'
import Foods from '../foods/Foods'
import Newsletter from '../newsletter/Newsletter'


const Home = () => {
    return(
       <div className={classes.container}>
        <div className={classes.wrapper}>
           <Hero/>
         
           <Foods/>
           <Newsletter/>
        </div>
       </div>
    )
}

export default Home