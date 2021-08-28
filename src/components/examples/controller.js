const { add, list, listOne, update } = require('./store');
const moment = require('moment');
const { RENTAL_COST } = require('../../utils/consts');


const validatePayment = async (payment) => {

    const { documentoIdentificacionArrendatario, codigoInmueble, valorPagado, fechaPago } = payment;
    let message = "";

    const paymentToUpdate = await listOne(documentoIdentificacionArrendatario, codigoInmueble);
    if (paymentToUpdate) {
        message = updatePayment(paymentToUpdate, valorPagado ,documentoIdentificacionArrendatario, codigoInmueble, fechaPago);
    } else {
        message = addPayment(payment)
    }
    
    return message
}

const addPayment = async (payment) => {
    const newPayment = await add(payment);
    if (!newPayment) throw new Error('Error getting payments');

    const message = valueDiffPayment(newPayment.valorPagado);
    return message;
}

const updatePayment = async (paymentToUpdate, valorPagado, documentoIdentificacionArrendatario, codigoInmueble, fechaPago) => {

    const totalPaymentValue = Number(paymentToUpdate.valorPagado) + Number(valorPagado);

    if (paymentToUpdate.valorPagado >= RENTAL_COST) {
        throw new Error('Tu arriendo ya ha sido pagado');
    } else if (totalPaymentValue > RENTAL_COST) {
        throw new Error(`Ya habías pagado: $${paymentToUpdate.valorPagado} el valor total no puede superar ${RENTAL_COST}`);
    } else {
        paymentToUpdate = await update(paymentToUpdate, totalPaymentValue, documentoIdentificacionArrendatario, codigoInmueble, fechaPago);
        const message = valueDiffPayment(paymentToUpdate.valorPagado);
        return message;
    }

}

const valueDiffPayment = (valorPagado) => {

    let paymentValueDiff = Number(RENTAL_COST - valorPagado);
    let message = paymentValueDiff !== 0 ?
        `Gracias por tu abono, sin embargo recuerda que te hace falta pagar ${paymentValueDiff}` :
        'Gracias por pagar todo tu arriendo';

    return message;
}

const getPayments = async () => {

    let payments = await list();
    if (!payments) throw new Error('Error getting payments');
    // Cambiar formato de fecha a dd/mm/yyyy
    payments = changeFormatDate(payments);

    return payments;
}

const changeFormatDate = (payments) => {

    payments.pagos = payments.map(row => {
        const payment = row.get();
        payment.fechaPago = moment(payments.fechaPago).format('DD/MM/YYYY');
    });

    return payments;
}


module.exports = {
    validatePayment,
    getPayments,
    updatePayment
}