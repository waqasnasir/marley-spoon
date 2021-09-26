import propTypes from "prop-types";
import Head from 'next/head'
import RecipeDetails from '../../../components/RecipeDetails/RecipeDetails'
import { fetchRecipe } from "../../../services/contentfull-service"
import {getTags,getChefName,getImageUrl} from "../../util"

export default function Details({ recipeDetails }) {
    return (
        <div >
            <Head>
                <title>Menu</title>
                <meta name="description" content="Menu" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <RecipeDetails recipeDetails={recipeDetails} />

            </main>
        </div>
    )
}

Details.defaultProps = {
    recipeDetails: {}
}
Details.propTypes = {
    recipeDetails: propTypes.object
}

// This gets called on every request
export async function getServerSideProps(context) {
    // Fetch data from external API
    let props = {}
    try {
        const result = await fetchRecipe(context.params.id);
        const recipe = result?.data?.items[0];
        const { tags = [], photo = {}, chef= {},title= "", description = "" ,calories = "" } = recipe?.fields;
        const { Entry = [], Asset = [] } = result?.data.includes;
        const photoId = photo?.sys.id;
        const tagNames = getTags(tags,Entry)
        const chefName = getChefName(chef,Entry)
        const imageUrl = getImageUrl(Asset,photoId)

        const recipeDetails = {
            id: photoId,
            tags: tagNames,
            chef: chefName,
            title: title,
            description: description,
            image: imageUrl,
            calories: calories
        }
        props = { recipeDetails: recipeDetails }

    } catch (error) {
        props = {}
    }
    // Pass data to the page via props
    return { props }
}