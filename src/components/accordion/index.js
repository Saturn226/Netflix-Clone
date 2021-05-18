import React, {useState, useContext, createContext} from 'react'
import {Container, Frame, Inner, Title, Item, Header, Body} from './styles/accordion'
const ToggleContext = createContext();

export default function Accordion({children, ...restProps}){
    return(
        <Container {...restProps}>
          <Inner>{children}</Inner>
        </Container>
        )
}

Accordion.Frame = function({children, ...restProps}){
    return(
        <Frame {...restProps}>{children}</Frame>
    )
}

Accordion.Inner = function({children, ...restProps}){
    return(
        <Inner {...restProps}>{children}</Inner>
    )
}
Accordion.Title = function({children, ...restProps}){
    return(
        <Title {...restProps}>{children}</Title>
    )
}
Accordion.Item = function({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false)
    return(
        <Item {...restProps}>{children}</Item>
    )
}
Accordion.Header = function({children, ...restProps}){
    return(
        <Header {...restProps}>{children}</Header>
    )
}


Accordion.Body = function({children, ...restProps}){
    return(
        <Body {...restProps}>{children}</Body>
    )
}