
import styled from "styled-components" ;
import {colorVariables} from "../../../utils/variables";
/* import {Link} from "react-route-dom"; */


export const NavbarContainer = styled.nav`
width: 100%;
height: 60px;
display: flex;
flex-direction: column;
background: linear-gradient(to bottom right,#D2E603, #2EC1AC);
backdrop-filter: blur(20px);

top:0;

`;
export const RightContainer = styled.div `
flex: 40%;
display: flex;
margin-right: 20px;
justify-content: flex-end;
align-items: center;
/* padding-right: 5%; */
`;
export const CenterContainer = styled.div `
flex: 30%;
display: flex;
justify-content: flex-end;
/* padding-left: 30px; */
/* margin-top:15px; */
`;
export const LeftContainer = styled.div `
flex: 30%;
display: flex;
justify-content: flex-start;
margin-left: 20px;

`;
export const NavbarInnerContainer = styled.div `
width: 100%;
height:80px;
display: flex;
`;

export const NavbarLinkContainer = styled.div `
display: flex;
`;
export const NavbarLink = styled.div `
color: ${colorVariables.darkblue};
font-size: 16px;
text-decoration: none;
margin: 10px;
&:hover,
&:focus{
    color: white;
};
@media (max-width:700px) {display: none} ;
`;

export const NavbarLinkExtended = styled.div` 
color: ${colorVariables.darkblue};
font-size: 16px;
text-decoration: none;
margin: 8px;

&:hover,
&:focus{
    color: white;
   
};
`;

export const Logo = styled.img `
padding:0;
width: 60px;
height: 40px;
`;

export const OpenLinksButton = styled.button`
 border: none;
 color: ${colorVariables.darkblue};
font-size: 30px;
padding:0;
  cursor: pointer;
 @media (min-width:700px) {display: none} ;
  &:hover,
  &:focus{
    color: ${colorVariables.yellow};
    background-color:${colorVariables.darkblue};

}; 
 `;
export const NavbarExtendedContainer = styled.div `
display: flex;
flex-direction: column;
align-items:center;
background: ${colorVariables.blue};
backdrop-filter: blur(10px);

@media (min-width: 700px) {
    display: none;
};
 `;

