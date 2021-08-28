const { addCategory, listByUser } = require("./store");

const createCategory = async (data) => {
    const { userId, name } = data;
    const category = await addCategory(userId, name);
    if(!category) throw new Error('Error create category');

    return category;
}

const getCategoriesByUser = async (data) =>{
    // return data;
    const categories = await listByUser(data);
    if(!categories) throw new Error('Error obteniendo las categorias');

    return categories;
}

module.exports = {
    createCategory,
    getCategoriesByUser
}