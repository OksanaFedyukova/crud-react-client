import React, { useState } from 'react';
import {
	NavbarContainer,
	LeftContainer,
	RightContainer,
	NavbarInnerContainer,
	NavbarExtendedContainer,
	NavbarLinkContainer,
	NavbarLink,
	Logo,
	OpenLinksButton,
	NavbarLinkExtended,
} from './Navbar.styled';
import LogoSVG from '../../../assets/logos/logomob.png';
import {Link} from 'react-router-dom';


function Navbar() {
	const [extendNavbar, setExtendNavbar] = useState(false);
	return (
		<NavbarContainer>
			<NavbarInnerContainer>
		
					<LeftContainer className='align-items-center'>
						{' '}
						<Logo src={LogoSVG}></Logo>
					</LeftContainer>
	

				<RightContainer>
					<NavbarLinkContainer>
					<NavbarLink >
						<Link to={"/"}>my appointments</Link></NavbarLink>
						<NavbarLink >
						<Link to={"/create:app"}>create new
						</Link>
						</NavbarLink>
						<OpenLinksButton
							onClick={() => {
								setExtendNavbar((curr) => !curr);
							}}
						>
							{extendNavbar ? <> &#10005; </> : <>&#x2630; </>}
						</OpenLinksButton>
					</NavbarLinkContainer>
				</RightContainer>
			</NavbarInnerContainer>
			{extendNavbar && (
				<NavbarExtendedContainer>
					<NavbarLinkExtended to={"/"}>my appointments
					</NavbarLinkExtended>
					<NavbarLinkExtended to={"/create:app"}>create new
					</NavbarLinkExtended>
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
}

export default Navbar;