import React from 'react'

const Demo = () => {
   function mul(a){
       return function(b){
           return function(c){
               return a*b*c
           }
       } 
   }

   console.log(mul(2)(3)(4))
  return (
    <div>Demo</div>
  )
}

export default Demo