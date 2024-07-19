import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import API from "../BaseUrl";
import axios from "axios";
import styled from 'styled-components';
import * as c from '../component/common/CommonStyle'
import ItemInputBox from "../component/ItemInputBox";
import Backward from '../assets/img/backward.svg'
import AddPhoto from "../assets/img/addPhoto.svg";

const Total = styled.div`
  display: flex;
  flex-direction: column;
  ustify-content: center;
  gap:12px;

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

const InputBox = styled.input`
  width: 385px;
  height: 64px;
  padding: 20px;

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

const Icon = styled.img`
  width: 28px;
  height: 28px;
  margin: 10px 10px 15px 0px;
`;

const PhotoImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: contain;
`

const Header = styled.div`
  display: flex;
`

const InputFile = styled.input`
  display: none;
`;

const InputFileLabel = styled.label`
display: flex;
justify-content: center;
`

const FetchButton = styled.button`
  width: 350px;
  height: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin-top: 20px;
  border: none;
  border-radius: 12px;
  background: #D1E9FF;
  font-weight: 600;
  font-size: 16px;
`
const BtnBox = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`
const ItemRegister = () => {
    const [info, setInfo] = useState(["상품 이름", "상품 가격", "모집 인원", "총 상품 개수", "상품 링크"]);
    // const [data, setData] = useState([
    //     {tag:"상품 이름", func: () => setName()}, 
    //     {tag:"상품 가격", func: () => setName()}, 
    //     {tag:"모집 인원", func: () => setName()}, 
    //     {tag:"총 상품 개수", func: () => setName()}, 
    //     {tag:"상품 링크", func: () => setName()}
    // ]);
    const [imgFile, setImgFile] = useState(AddPhoto);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [userCount, setUserCount] = useState("");
    const [itemCount, setItemCount] = useState("");
    const [link, setLink] = useState("");

    const imgRef = useRef();
    const navigator = useNavigate();
    const nowImage = AddPhoto;

    const fetchItemRegister = async () => {
        try {
            const response = await axios.post('https://iqaqdmrwu7fblk5ej5fjg4pj5e0qebkq.lambda-url.ap-northeast-2.on.aws/',{
                user_id: 1,
                name: name,
                price: price,
                user_count: userCount,
                total_count: itemCount,
                item_link: link
            })

            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    const test = async () => {
        try {
            const response = await axios.get('https://hnqs5fwpiqv7o5tdtc3ckiiamy0adktx.lambda-url.ap-northeast-2.on.aws/'           
            )
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    const handleFile = (event) => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
        };
    }

    useEffect(() => {
        console.log(name);
    }, [name])

    const changeValue = (value, index) => {
        if (index == 0) {
            setName(value);
        } else if (index == 1) {
            setPrice(value);
        } else if (index == 2) {
            setUserCount(value);
        } else if (index == 3) {
            setItemCount(value);
        } else if (index == 4) {
            setLink(value);
        }
    }

    return (
        <c.Totalframe>
            <c.ScreenComponent>
                <Header>
                    <Icon src={Backward} onClick={() => navigator(-1)} />
                    <Title>상품 등록</Title>
                </Header>
                <InputFileLabel onChange={handleFile}>
                    <PhotoImage src={imgFile} />
                    <InputFile type="file" accept="image/*" ref={imgRef} />
                </InputFileLabel>
                <Total>
                    {info.map((item, index) => (
                        <TotalBox key={index}>
                            <Tag>{item}</Tag>
                            <InputBox placeholder={item + " 입력"} onChange={(e) => changeValue(e.target.value, index)} />
                        </TotalBox>
                    ))}
                </Total>
                <BtnBox>
                <FetchButton onClick={fetchItemRegister}>등록하기</FetchButton>
                </BtnBox>
                
            </c.ScreenComponent>
        </c.Totalframe>
    );
}

export default ItemRegister;