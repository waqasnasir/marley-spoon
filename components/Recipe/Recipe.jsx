import React from "react";
import propTypes from "prop-types";
import {CustomCard, RecipeImage,ImageContainer,TextContainer,CustomLink,CalroriesQuantity,StyledHeading3,StyledHeading5} from "./styled"
const Recipe = ({recipe}) => {
    const {title = ""} = recipe;
    const titles = title.split("with");
    const link  = `/recipes/details/${recipe.id}`;
    return (
        <CustomCard>
            <ImageContainer>
            <CustomLink  href={link}>
            < RecipeImage src={recipe.image}/>
            </CustomLink>
            </ImageContainer>
            <TextContainer>
                <CalroriesQuantity>Calories {recipe.calories}</CalroriesQuantity>
                <CustomLink  href={link}>
            <StyledHeading3>{titles[0]}</StyledHeading3>
            </CustomLink>
            <CustomLink  href={link}>
            <StyledHeading5>with {titles[1]}</StyledHeading5>
            </CustomLink>
            </TextContainer>
        </CustomCard> 
    )

}

Recipe.defaultProps = {
    recipe: {}
}
Recipe.propTypes = {
    recipes: propTypes.object
}
export default Recipe;