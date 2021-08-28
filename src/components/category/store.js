const { Category } = require('../../db/connection');

const createCategory = async (userId, name) => {
    const category = await Category.create({category: name, userUserId: userId});
    return category;
}

const getCategoriesByUser = async (userUserId) => {
    const categories = await Category.findAll({
        where: {
          userUserId: userUserId
        },
        order: [
          ['categoryId', 'DESC']
        ],
      });
    return categories;
}

module.exports = {
    addCategory: createCategory,
    listByUser: getCategoriesByUser

}


