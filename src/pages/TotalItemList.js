import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import API from "../BaseUrl";
import axios from "axios";
import styled from 'styled-components';
import * as c from '../component/common/CommonStyle'
import ItemInputBox from "../component/ItemInputBox";
import Backward from '../assets/img/backward.svg'
import AddPhoto from "../assets/img/addPhoto.svg";
import NavigationBar from "../component/NavigationBar";
import Modal from "../component/Modal";

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

const PhotoImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  position:relative;
  border-radius: 12px;
`
const Content = styled.div`
 font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.48px;
  color: black;

  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: space-between;
  gap: 25px;
`

const Name = styled.div`
 font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.48px;
  color: black;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-content: center;
`

const Count = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 12px;
  font-size: 28px;
  background:#D1E9FF;
  width: 90px;
  height: 70px;
  border-radius: 80px
`
const TopBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`
const Progress = styled.div`
  width:80px;
  height:25px;
  font-size: 15px;
  border-radius:30px;
  background: ${(props) =>
    props.status === ("ing" || "모집중")
      ? "#FCEC73"
      : props.status === ("end" || "나눔 완료")
      ? "#F0EBE8"
      : "#73CD3A"};
  margin-top: 5px;
  text-align: center;
`
const TotalItemList = () => {
    const [fetchData, setFetchData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const fetchItems = async () => {
        try {
            const response = await axios.get('https://lg029tjlp1.execute-api.ap-northeast-2.amazonaws.com/dev/netzero-12-get-item-list'           
            )
            setFetchData(response.data);
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchItems();
    },[])
    const navigator = useNavigate();

    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <Header>
                    <Title>나눔 현황</Title>
                </Header>
                <Total>
                    {fetchData.length > 0 ? fetchData.map((item, index) => (
                        <TotalBox key={index}>
                            <ListBox onClick={() => setIsOpen(true)}>
                                <Content>
                                    <div>
                                    <PhotoImage src={item.image_url}></PhotoImage>
                                    <Progress status={item.item_status}>{item.item_status === ("ing" || "모집중") ? "모집중": (item.item_status === ("start" || "진행중") ? "진행중" : "나눔 완료")}</Progress>
                                    </div>
                                    <Name>{item.name}</Name>
                                    <Count><div>{item.user_count} / {item.total_user_count}</div></Count>
                                </Content>
                            </ListBox>
                        </TotalBox>
                    )) : null}
                </Total>
                
            </c.ScreenComponent>
            <NavigationBar/>
        </c.Totalframe>
    );
}

export default TotalItemList;