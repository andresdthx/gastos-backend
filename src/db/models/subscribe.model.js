module.exports = (sequilize, type) => {
    return sequilize.define('suscribes', {
        subscribeId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        subscribe: {
            type: type.JSON,
            allowNull: false,
        }
    });
}