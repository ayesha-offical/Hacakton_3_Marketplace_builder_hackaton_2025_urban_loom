import { defineType } from "sanity"

export const paymentSchema = defineType({
    name: 'payment',
    title: 'Payment',
    type: 'document',
    fields: [
        {
            name: 'paymentID',
            title: 'Payment ID',
            type: 'number',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'orderID',
            title: 'Order ID',
            type: 'reference',
            to: [{ type: 'order' }],
        },
        {
            name: 'amount',
            title: 'Amount',
            type: 'number',
            validation: (Rule) => Rule.required().positive(),
        },
        {
            name: 'paymentMethod',
            title: 'Payment Method',
            type: 'string',
            options: {
                list: [
                    { title: 'Credit Card', value: 'credit_card' },
                    { title: 'PayPal', value: 'paypal' },
                    { title: 'Bank Transfer', value: 'bank_transfer' },
                ],
            },
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Completed', value: 'completed' },
                    { title: 'Pending', value: 'pending' },
                    { title: 'Failed', value: 'failed' },
                ],
            },
        },
    ],
});