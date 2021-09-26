import Head from 'next/head'
import RecipesList from "../../../components/RecipesList/RecipesList"
import { fetchrecipes } from "../../../services/contentfull-service"
import propTypes from "prop-types";
import { getImageUrl } from '../../util';
export default function Menu({ recipes }) {
    return (
        <div >
            <Head>
                <title>Menu</title>
                <meta name="description" content="Menu" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <RecipesList recipes={recipes} />

            </main>
        </div>
    )
}

Menu.defaultProps = {
    recipes: {}
}
Menu.propTypes = {
    recipes: propTypes.object
}

// This gets called on every request
export async function getServerSideProps(context) {
    // Fetch data from external API
    let props = {}
    try {
        let requiredResult = []
        const result = await fetchrecipes();
        const { items = [],includes = {} } = result?.data;
        items.map(recipe => {
            const { photo = {},title = "", calories = "" } = recipe?.fields;
            const { Asset = [] } = includes;
            const id = recipe?.sys.id
            const photoId = photo?.sys.id
            const imageUrl = getImageUrl(Asset,photoId)
            requiredResult.push({ id: id, title: title, image: imageUrl, calories: calories })
        })
        props = { recipes: requiredResult }

    } catch (error) {
        props = {recipes: []}
    }
    // Pass data to the page via props
    return { props }
}