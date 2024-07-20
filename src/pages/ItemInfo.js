import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import API from "../BaseUrl";
import axios from "axios";
import styled from 'styled-components';
import * as c from '../component/common/CommonStyle'
import ItemInputBox from "../component/ItemInputBox";
import Backward from '../assets/img/backward.svg'
import AddPhoto from "../assets/img/addPhoto.svg";
import NavigationBar from "../component/NavigationBar";

const Total = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 50px;
`

const TotalBox = styled.div`
  width: 385%;
  height: 94px;
  gap: 12px;
`;

const Tag = styled.div`
  width: 385px;
  height: 18px;
  margin-bottom: 12px;
`

const ListBox = styled.div`
  width: 385px;
  height: 125px;
  padding: 5px;
  display: flex;
  flex-direction: row;
flex-wrap: wrap;
align-content: center;
 justify-content: flex-start;
  border-radius: 12px;
  border: 1px solid var(--material-theme-ref-neutral-neutral90, #E2E2E2);
  background: var(--wt-bk-white, #FFF);

  color: var(--material-theme-ref-neutral-neutral70, #AAA);
/* Title/T3-medium */
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 133.333% */
letter-spacing: -0.36px;
`

const Title = styled.div`
  weight: 185px;
  height: 32px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.48px;
  
  margin: 10px 10px 15px 5px;
`

const Header = styled.div`
  display: flex;
`
const Icon = styled.img`
  width: 28px;
  height: 28px;
  margin: 10px 10px 15px 0px;
`;

const ItemProgressList = () => {
    const [info, setInfo] = useState(["상품 이름", "상품 가격", "모집 인원", "총 상품 개수", "상품 링크"]);
    const data = [
        { "total_count": 11, "user_id": 1, "iteam_id": 3, "item_link": "asd", "timestamp": 1721425084.0, "user_count": 1.0, "price": 11111.0, "image_url": "https://netzero-12-s3.s3.ap-northeast-2.amazonaws.com/chicken.png", "name": "chicken", "item_status": "ing" },
        { "total_count": 11, "user_id": 1, "iteam_id": 3, "item_link": "asd", "timestamp": 1721425084.0, "user_count": 1.0, "price": 11111.0, "image_url": "https://netzero-12-s3.s3.ap-northeast-2.amazonaws.com/chicken.png", "name": "chicken", "item_status": "start" },
        { "total_count": 11, "user_id": 1, "iteam_id": 3, "item_link": "asd", "timestamp": 1721425084.0, "user_count": 1.0, "price": 11111.0, "image_url": "https://netzero-12-s3.s3.ap-northeast-2.amazonaws.com/chicken.png", "name": "chicken", "item_status": "start" },
        { "total_count": 11, "user_id": 1, "iteam_id": 3, "item_link": "asd", "timestamp": 1721425084.0, "user_count": 1.0, "price": 11111.0, "image_url": "https://netzero-12-s3.s3.ap-northeast-2.amazonaws.com/chicken.png", "name": "chicken", "item_status": "end" },
        { "total_count": 11, "user_id": 1, "iteam_id": 3, "item_link": "asd", "timestamp": 1721425084.0, "user_count": 1.0, "price": 11111.0, "image_url": "https://netzero-12-s3.s3.ap-northeast-2.amazonaws.com/chicken.png", "name": "chicken", "item_status": "ing" }
    ]
    const [fetchData, setFetchData] = useState([]);
    //http://43.201.115.178:5000/user_info?user_id=1
    let { userId } = useParams();

    const fetchItems = async () => {
        try {
            const response = await axios.get(`http://43.201.115.178:5000/get_item?item_id=${userId}`
            )

            setFetchData(response.data.items);
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchItems();
    }, [])
    const navigator = useNavigate();

    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <Header>
                    <Icon src={Backward} onClick={() => navigator(-1)} />
                    <Title>상품 정보</Title>
                </Header>
                {/* <img src="https://netzero-12-s3.s3.ap-northeast-2.amazonaws.com/gg.png"></img> */}
                <img src={fetchData.image_url}></img>
            </c.ScreenComponent>
            <NavigationBar />
        </c.Totalframe>
    );
}

export default ItemProgressList;