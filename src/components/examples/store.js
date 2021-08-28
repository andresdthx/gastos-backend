const { Payment } = require('../../db/connection');
const { Op } = require('sequelize');

const savePayment = async (pay) => {
    const payment = await Payment.create(pay);
    return payment;
}

const getPayments = async () => {
    const payments = await Payment.findAll({
        attributes: ['documentoIdentificacionArrendatario', 'codigoInmueble', 'fechaPago', 'valorPagado']
    });
    return payments;
}

const getPayment = async (documentoIdentificacionArrendatario, codigoInmueble) => {
    const payment = await Payment.findOne({
        attributes: ['documentoIdentificacionArrendatario', 'codigoInmueble', 'fechaPago', 'valorPagado'],
        where: {
            documentoIdentificacionArrendatario: {
                [Op.eq]: documentoIdentificacionArrendatario,
            }, codigoInmueble: {
                [Op.eq]: codigoInmueble
            }
        }
    });
    return payment;
}

const updatePayment = async (paymentToUpdate, totalPaymentValue, documentoIdentificacionArrendatario, codigoInmueble, fechaPago) => {
    paymentToUpdate.update({ valorPagado: totalPaymentValue, fechaPago }, {
        where: {
            documentoIdentificacionArrendatario,
            codigoInmueble
        }
    });

    return paymentToUpdate;
}

module.exports = {
    add: savePayment,
    list: getPayments,
    listOne: getPayment,
    update: updatePayment
}