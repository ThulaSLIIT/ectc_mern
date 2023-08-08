import React from "react";
import classes from './hero.module.css'
import womanEating from '../../assets/logo.jpg';

const Hero = () => {
    return(
       <section style={{height:'120vh'}} id="home" className={classes.container}>
          <div className={classes.wrapper}>
              <div className={classes.left}>
              
                
              </div>
              <div className={classes.right}>
                 <img src={womanEating} alt="" className={classes.womanEatingImg} />
              </div>
          </div>
       </section>
    )
}

export default Hero