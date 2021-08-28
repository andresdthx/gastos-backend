
module.exports = (sequelize, type) => {
    return sequelize.define('pagos', {
        documentoIdentificacionArrendatario: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            validate: {
                isInt: {
                    msg: 'El documento debe ser un valor numérico'
                }
            }
        },
        codigoInmueble: {
            type: type.STRING,
            primaryKey: true,
            allowNull: false
        },
        valorPagado: {
            type: type.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: {
                    msg: 'El valor a pagar debe ser un valor numérico'
                }
            }
        },
        fechaPago: {
            type: type.DATE,
            allowNull: false
        }
    });
}
