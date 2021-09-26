import axios from "axios";
const recipesUrl = "https://cdn.contentful.com/spaces/kk2bw5ojx476/environments/master/entries?access_token=7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c&content_type=recipe&include=1"
export const fetchrecipes = () => {
    return axios.get(recipesUrl)
}

export const fetchRecipe = (id) => {
    return axios.get(`https://cdn.contentful.com/spaces/kk2bw5ojx476/environments/master/entries?sys.id=${id}&access_token=7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c&content_type=recipe&include=1`)
}