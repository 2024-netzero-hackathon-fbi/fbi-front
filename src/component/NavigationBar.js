import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FillHome from '../assets/img/fillHome.svg';
import FillMyPage from '../assets/img/fillMyPage.svg';
import FillCart from '../assets/img/fillCart.svg'

const TotalNavigationBar = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 12px 0;
  height: 11.84vh;
  border-radius: 12px 12px 0px 0px;
  border-top: 1px solid #EFEFEF;
  background: #FFF;
`;

const Icons = styled.div`
  color: ${(props) => (props.isSelected ? '#333' : '#B7B7B7')};
  width: 20vw;
  height: 9vh;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

const IconText = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
`;

const NavigationBar = (props) => {

    return (
        <TotalNavigationBar>
            <Icons>
                <Icon src={FillHome} />
                <IconText>홈</IconText>
            </Icons>
            <Icons>
                <Icon src={FillCart} />
                <IconText>상품 모집</IconText>
            </Icons>
            <Icons>
                <Icon src={FillMyPage} />
                <IconText>이용 현황</IconText>
            </Icons>
        </TotalNavigationBar>
    );
};

export default NavigationBar;