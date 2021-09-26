import styled from 'styled-components';
import Link from "next/link";

export const CustomCard = styled.div`
width:450px;
margin-bottom:18px;
background: white;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
border-radius: 6px;
overflow: hidden;
`
export const CustomLink =styled(Link)`
cursor:pointer;
display:block;
`
export const CalroriesQuantity  = styled.p`
color:#28b88d;
marginBottom:4px
`
export const StyledHeading3 = styled.h3`
margin:0px;
cursor:pointer;
`

export const StyledHeading5  = styled.h5`
color:grey;
cursor:pointer;
`
export const ImageContainer = styled.div`
cursor:pointer;
`
export const TextContainer = styled.div`
padding: 10px;
`
export const RecipeImage = styled.img`
width:100%;
height:100%;
object-fit:contain
`
