import styled from 'styled-components'
import {BaseClassCenter} from "./global.style";

export const NameDomain = styled.h2`
  display: inline-block;
  font-size: 24px !important;
  margin-bottom: 15px !important;
`;

export const OriginDate = styled.h3`
  display: inline-block;
  font-size: 16px !important;
  margin-bottom: 15px !important;
`;

export const CardContainer = styled(BaseClassCenter)`
    padding: 45px 25px 25px 25px;
    margin: 6%;
    background-color: grey ;
    width: 310px;
    border: 1px solid white;
    border-radius: 15px;
`;

export const BlockheadImage =styled.img`
    height: 200px !important;
    width: 200px !important;
    border-radius: 5px;
    margin-bottom: 15px;
`;

export const CardSpacingDivider = styled.div`
    width: 80%;
    border-bottom: 1px solid white;
    margin: 10px 0 15px 0;
`;

export const SkeletonSpacer = styled.div`
    height: 20px;
`;