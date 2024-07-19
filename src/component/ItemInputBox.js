import React, { useEffect, useState } from "react";
import styled from 'styled-components';


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



const ItemInputBox = (props) => {

    return (
        <Total>
            {props.info.map((item, index) => (
                <TotalBox key={index}>
                    <Tag>{item.tag}</Tag>
                    <InputBox placeholder={item.tag} onChange={(e) => item.func(e.target.value)}/>
                </TotalBox>
            ))}
        </Total>
    );
};

export default ItemInputBox;