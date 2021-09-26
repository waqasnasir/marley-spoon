export  function getTags(tags,Entry){
let tagsList = []
console.log("tags",tags,Entry)
    tags.map((tag) => {
        const { sys = {} } = tag;
        const tagId = sys.id;
        const entry = Entry.find((entry) => {
            const { sys = {} } = entry;
            return sys.id === tagId;
        })
        const { fields: tagFields = {} } = entry;
        tagsList.push(tagFields.name) 
    })
    return tagsList
}
export function getChefName(chef,Entry){
    let chefName  = null
    const { sys: chefSys = {} } = chef;
        const chefId = chefSys.id;
        if (chefId) {
            const chefEntry = Entry.find((chefEntry) => {
                const { sys = {} } = chefEntry;
                return sys.id === chefId;
            });
            const { fields: chefFields = {} } = chefEntry;
            chefName = chefFields.name;
        }
        return chefName
}
export function getImageUrl(Asset,photoId){
    const asset = Asset.find(asset => {
        const { sys = {} } = asset;
        return sys.id === photoId
    })
    const { fields: assetFields = {} } = asset;
    const { file = {} } = assetFields;
    return file.url
}