import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
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
import Create from '../../../views/Create/Create';
import Update from '../../../views/Update/Update';
import LogoSVG from '../../../assets/logos/logoweb.png';
import { Link } from 'react-router-dom';
import Citas from '../../../views/Citas';

function Navbar() {
	const [extendNavbar, setExtendNavbar] = useState(false);
	return (
		<NavbarContainer className="sticky-top">
     < Container>
			<NavbarInnerContainer>
				<Link to="/" className='d-flex align-items-center'>
					<LeftContainer className='align-items-center'>
						{' '}
						<Logo src={LogoSVG}></Logo>
						<p className='ms-2 mb-0 fw-bold fs-5'>Oksana<sub className='d-block mb-2'>Fedyukova</sub></p>
					</LeftContainer>
				</Link>

				<RightContainer>
					<NavbarLinkContainer>
						<NavbarLink>
							<Citas/>
							<Link to="/">{Citas}</Link>
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
					<NavbarLinkExtended>
							<Citas/>
                            <Create/>
							<Update/>
					</NavbarLinkExtended>
				</NavbarExtendedContainer>
			)}
      </Container>
		</NavbarContainer>
	);
}

export default Navbar;