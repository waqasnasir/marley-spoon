import React from "react";
import propTypes from "prop-types"
import {
    Container,
    CustomCard,
    ImageContainer,
    TextContainer,
    RecipeImage,
    Description,
    TagContainer,
    TagList,
    Title,
    ChefName,
    TagItem,
    StyledHeading2,
    StyledHeading4
} from "./styled"

const RecipesDetails = ({ recipeDetails }) => {
    const { title = "" } = recipeDetails
    const titles = title.split("with")
    return <Container>
        <CustomCard>
            <ImageContainer>
                < RecipeImage src={recipeDetails.image} />
            </ImageContainer>
            <TextContainer>
                <Title>
                    <StyledHeading2 >{titles[0]}</StyledHeading2>
                    <StyledHeading4 >with {titles[1]}</StyledHeading4>
                </Title>
                {
                    recipeDetails.chef &&
                    <ChefName><b>Chef:</b> {recipeDetails.chef}</ChefName>
                }

                {
                    recipeDetails.tags && recipeDetails.tags.length > 0 &&
                    <TagContainer>
                        <TagList>
                            {recipeDetails.tags.map((tag,i) => <TagItem key={i}>{tag}</TagItem>)}
                        </TagList>
                    </TagContainer>

                }

                <Description>{recipeDetails.description}</Description>
            </TextContainer>
        </CustomCard>
    </Container>
}

RecipesDetails.defaultProps = {
    recipeDetails: {}
}
RecipesDetails.propTypes = {
    recipeDetails: propTypes.object
}
export default RecipesDetails;