module.exports = (sequilize, type) => {
    return sequilize.define('typesalerts', {
        typeAlertId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        typeAlert: {
            type: type.STRING(15),
            allowNull: false,
            unique: false
        },
        title: {
            type: type.STRING(30),
            allowNull: false,
            unique: false
        },
    },
    {
        timestamps: false
    });
}