import React, { useState } from 'react'
import Example3_ from './../component/Example3'
import { styled } from 'styled-components'


const Content = styled.div `
display: flex; justify-content: space-between;
color: pink; background-color: yellow;
`

function Example3() {

    let [data, setData] = useState(Example3_)
    let [animal, setAnimal] = useState("전체");
    let [gender, setGender] = useState("전체");


    const dataFilter = data.filter(e =>{

let isAnimal = animal === "전체" || e.animal === animal;
let isGender = gender === "전체" || e.gender === gender;
return isAnimal && isGender

        // return (animal === "전체" ? e.animal : e.animal ===animal)
        // if(animal === "전체"){
        //     return e.animal
    
        // }else{
        //     return e.animal === animal
        // }
       })
    

// 카테고리

    const FliterAnimal = [...new Set(data.map(e => e.animal))];
    const FliterGender = [...new Set(data.map(e => e.gender))];
  return (
<>
    {/* <ul>
    <li onClick={()=>{setAnimal("전체")}}>전체</li>
            {
                FliterAnimal.map((e,i)=>{
                    return(
                        <li key={i} onClick={()=>setAnimal(e)}>{e}</li>
                    )
                })
            }
    </ul> */}



<div>
    <ul>
        <li onClick={()=>setAnimal("전체")}>전체</li>
        {
            FliterAnimal.map((e,i)=>{
                return(
                    <li key={i} onClick={()=>setAnimal(e)}>{e}</li>
                )
            })
        }
    </ul>
    <ul>
        <li onClick={()=>setAnimal("전체")}>전체</li>
        {
            FliterGender.map((e,i)=>{
                return(
                    <li li key={i} onClick={()=>setGender(e)}>{e}</li>
                )
            })
        }
    </ul>
</div>



    {/* <div>
        <ul>
            {
                dataFilter.map((e,i)=>{
                    return (
                        <li key={i} onClick={()=>setGender(e)}>{e}</li>
                    )
                })
            }
        </ul>
    </div>  */}

    <Content>




    {dataFilter.map((e,i)=>{
        return (
            <>
            <div key={i}>
            <p>{e.animal}</p>
            <p>{e.gender}</p>
            </div>
            </>
        )
    })
    }



    </Content>
    </>
  )
}

export default Example3