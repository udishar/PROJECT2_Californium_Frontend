import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import{subscribeData} from './atom'
import '../Styles/Activity.css'

const Activity = () => {
    const[ subscribeDetail,setSubscribeDetail]= useRecoilState(subscribeData)
   let arr=[{ day:"Day1" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day2" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day3" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day4" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day5" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day6" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day7" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day8" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day9" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day10" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day11" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day12" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day13" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day14" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day15" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day16" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day17" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day18" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day19" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day20" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day21" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day22" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day23" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day24" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day25" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day26" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day27" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day28" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day29" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
   { day:"Day30" , list:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}]

   let arr2=[]
   for(let i=0 ; i<subscribeDetail.plan;i++){
    
   arr2[i]=arr[i]
   
   }
   const[data,setData]=useState(arr2)
   
return (
    <div className="container-act">

    {data.map((item)=> (
      <ul className='ul-act'>
      <h1 className='h-act'>{item.day}</h1>
      <li>{item.list}</li>
      <li>{item.list}</li>
      <li>{item.list}</li>

      </ul>
    ))}

    </div>
  )
}

export default Activity
