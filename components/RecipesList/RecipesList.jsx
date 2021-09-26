import React from "react";
import propTypes from "prop-types"
import { RecipesListContainer, PageHeading, ErrorMessage } from "./styled"
import Recipe from "../Recipe/Recipe";
const RecipesList = ({recipes}) => {
    return <div>
       
        <PageHeading>
            Menu
        </PageHeading>
    <RecipesListContainer>
        {
            recipes.map(recipe => <Recipe recipe={recipe} key={recipe.id} />)
        }
         {
            recipes.length === 0 && <ErrorMessage>Could Not Fetch Recipes</ErrorMessage>
        }
    </RecipesListContainer>
    </div>
}
RecipesList.defaultProps = {
    recipes: []
}
RecipesList.propTypes = {
    recipes: propTypes.array
}
export default RecipesList;