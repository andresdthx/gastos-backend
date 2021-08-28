const { listByCategory, addSubcategory } = require('./store');

const getSubcategories = async (categoryId) => {
    const subcategories = await listByCategory(categoryId);
    if (!subcategories) throw new Error('Error get subcategories');
    return subcategories;
}

const createSubcategory = async (objSubcategory) => {
    const { name, categoryId } = objSubcategory;
    const subcategory = await addSubcategory(name, categoryId);
    if(!subcategory) throw new Error('Error creando subcategoria');

    return subcategory;
}

module.exports = {
    getSubcategories,
    createSubcategory
}