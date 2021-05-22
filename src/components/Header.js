import React, { useState } from 'react'
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from "react-redux";

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)
    console.log(cars, "CARS=>")

    return (
        <Container>
            <a href="replace">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => 
                    <a href="replace" key={index}>{car}</a>
                )}

            </Menu>

            <RightMenu>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
                <a href="replace">Shop</a>
                <a href="replace">Tesla Account</a>
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper onClick={() => setBurgerStatus(false)}>
                    <CustomColse />
                </CloseWrapper>
                {cars && cars.map((car, index) => 
                    <li key={index}><a href="replace">{car}</a></li>
                )}
                <li><a href="replace">Existing Inventory</a></li>
                <li><a href="replace">Used Inventory</a></li>
                <li><a href="replace">Trade-in</a></li>
                <li><a href="replace">Cybertruck</a></li>
                <li><a href="replace">RoadSter</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-item: center;
    justify-content: space-between;
    padding: 0 2px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        a {
            font-weight: 600;
            text-transform: uppercase;
            margin-right: 10px;
        }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        background: white;
        width: 300px; 
        z-index: 16;
        list-style: none;
        padding: 20px;
        display: flex;
        flex-direction: column;
        text-align: start;
        transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.2s;
        li {
            padding: 12px 0;
            border-bottom: 1px solid rgba(0,0,0, .2);

            a {
                font-weight: 600; 
            }
        }
`

const CustomColse = styled(CloseIcon)`
cursor: pointer;
`

const CloseWrapper = styled.div`
        display: flex;
        justify-content: flex-end;
`