import burger1 from '../assets/burger1.jpg'
import burger2 from '../assets/burger2.jpg'
import burger3 from '../assets/burger3.jpg'
import burger4 from '../assets/burger4.jpg'
import burger5 from '../assets/burger5.jpg'

import gyros1 from '../assets/gyros1.jpg'
import gyros2 from '../assets/gyros2.jpg'
import gyros3 from '../assets/gyros3.jpg'
import gyros4 from '../assets/gyros4.jpg'
import gyros5 from '../assets/gyros5.jpg'

import pizza1 from '../assets/pizza1.jpg'
import pizza2 from '../assets/pizza2.jpg'
import pizza3 from '../assets/pizza3.jpg'
import pizza4 from '../assets/pizza4.jpg'
import pizza5 from '../assets/pizza5.jpg'

import pasta1 from '../assets/pasta1.jpg'
import pasta2 from '../assets/pasta2.jpg'
import pasta3 from '../assets/pasta3.jpg'
import pasta4 from '../assets/pasta4.jpg'
import pasta5 from '../assets/pasta5.jpg'


export const foodTypes = [
    {
        name: 'Assign Batches',
       
        id: crypto.randomUUID()
    },
    {
        name: 'Approved Lectures - Jul 2023',
        
        id: crypto.randomUUID()
    },
    {
        name: 'Approval Pending Lectures',
      
        id: crypto.randomUUID()
    },
   
]


// 24 foods (6 burger, 6 gyros, 6 pizza, 6 pasta)
export const foods = [
    {
        name: 'Elk Burger',
        category: 'burger',
        img: burger1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Cheese Burger',
        category: 'burger',
        img: burger2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Bean Burger',
        category: 'burger',
        img: burger3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Veggie Burger',
        category: 'burger',
        img: burger4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Turkey Burger',
        category: 'burger',
        img: burger5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Chicken Pizza',
        category: 'pizza',
        img: pizza1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Veggie Pizza',
        category: 'pizza',
        img: pizza2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Hawaiian Pizza',
        category: 'pizza',
        img: pizza3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Buffalo Pizza',
        category: 'pizza',
        img: pizza4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Greek Pizza',
        category: 'pizza',
        img: pizza5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Fried Fish Gyros',
        category: 'gyros',
        img: gyros1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Greek Salad Gyros',
        category: 'gyros',
        img: gyros2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Sausage Gyros',
        category: 'gyros',
        img: gyros3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Fried Eggplant Gyros',
        category: 'gyros',
        img: gyros4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Grilled Chicken Gyros',
        category: 'gyros',
        img: gyros5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Angel Hair Pasta',
        category: 'pasta',
        img: pasta1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Spaghetti Pasta',
        category: 'pasta',
        img: pasta2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Vermicelli Pasta',
        category: 'pasta',
        img: pasta3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Linguine Pasta',
        category: 'pasta',
        img: pasta4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Gnocchi Pasta',
        category: 'pasta',
        img: pasta5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
]