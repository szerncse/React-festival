import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import dataList from './../Data/Data'
import { NavLink } from 'react-router-dom'

const Content = styled.div`
background-color: ${(props)=> props.theme.colors.BgColor};
width: 100%;
/* height: 100%; */
padding: 120px 0 50px 0;
overflow: hidden;
`




const ContentWrap = styled.div`
max-width: 1200px;
margin: 0 auto;
padding:  0 2%;
display: flex;
flex-wrap: wrap;
gap: 20px 1.2%;
`

const ContentItem = styled.div`
background-color: #fff;
flex-basis: 32.5%;
border: 1px solid #ddd;
border-radius: 5px;
padding: 20px;
box-sizing: border-box;
cursor: pointer;
white-space: break-spaces; //줄이 길어지면 자동으로 줄바꿈
img{width: 100%; display:block; margin-bottom:24px; }
h3{margin-bottom:24px;}
li{line-height: 2; margin-bottom: 6px}

@media screen and (max-width: 1200px){ 
  flex-basis: 49%;
}
@media screen and (max-width: 640px){
  flex-basis: 100%;
}

`
// https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${REACT_APP_APIKEY}hDfyEBjpedCIEB1Zh9B7GZM6Zw2XbwZpKZ0SEQCvbcb%2B%2BhAptQbiXqe%2BUm9XvLhH3JXVN8Ad68jUJXoCX4AqcA%3D%3D&pageNo=${Page}1&numOfRows=10&resultType=json



function Main() {

  const [data, setData] = useState(dataList);

  const list =12;
  const [Page, setPage] = useState(1);
  const [totalcnt, setTotalcnt] = useState(0);
  const Pagenation = 5;
  const totalpag = Math.floor(totalcnt / list);

  useEffect(()=>{
    // axios.get(`https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=hDfyEBjpedCIEB1Zh9B7GZM6Zw2XbwZpKZ0SEQCvbcb%2B%2BhAptQbiXqe%2BUm9XvLhH3JXVN8Ad68jUJXoCX4AqcA%3D%3D&pageNo=1&numOfRows=10&resultType=json`)
    // .then(function(res){
    //   console.log(res)
    // })
    console.log(data)
  },[])
  console.log(process.env.REACT_APP_APIKEY)




  return (
    <>


<Content>
  <ContentWrap>
    {
      data.map((e,i)=>{
        return (
          <ContentItem key={i}>
            <NavLink to={'detail/${e.UC_SEQ}'}>
            <h3>{e.TITLE}</h3>
            <img src={e.MAIN_IMG_THUMB} alt={e.MAIN_TITLE}/>
            <ul>
              <li>구군 : {e.GUGUN_NM}</li>
              {e.USAGE_DAY_WEEK_AND_TIME !== ""&&
              <li>운영및시간 : {e.USAGE_DAY_WEEK_AND_TIME}</li>
              }

              {
                e.MIDDLE_SIZE_RM1 !== ""&&  //나오지 않으면 안뜨게
              <li>편의시설 : {e.MIDDLE_SIZE_RM1}</li>
              }
              <li>이용요금 :{e.TRFC_INFO}</li>
              <li>주요장소 :{e.MAIN_PLACE}</li>

            </ul>
            </NavLink>
          </ContentItem>
          )
      })

    }
  </ContentWrap>
</Content>
    </>
  )
}

export default Main