import styled from 'styled-components'
import {BaseClass} from "./global.style";

export const FooterContainer = styled(BaseClass)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    background-color: grey !important;
    padding: 35px;
`;

export const FooterText = styled.span`
  margin: 5px;
  display: block;
  font-size: 13px;
`;