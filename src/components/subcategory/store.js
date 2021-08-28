const { Subcategory } = require('../../db/connection');

const getSubcategories = async (categoryCategoryId) => {
    const subcategories = await Subcategory.findAll({
        where:{
            categoryCategoryId:categoryCategoryId
        }
    });
    return subcategories;
}

const createSubcategory = async (name, categoryId) => {
    const subcategoryCreate = await Subcategory.create({subcategory: name, categoryCategoryId: categoryId});
    return subcategoryCreate;
}

module.exports = {
    listByCategory: getSubcategories,
    addSubcategory: createSubcategory
}