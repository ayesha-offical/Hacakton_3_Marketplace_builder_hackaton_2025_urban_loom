import { defineType } from "sanity"

export const shipmentSchema = defineType({
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
        {
            name: 'shipmentID',
            title: 'Shipment ID',
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
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Shipped', value: 'shipped' },
                    { title: 'Delivered', value: 'delivered' },
                ],
            },
        },
        {
            name: 'deliveryDate',
            title: 'Delivery Date',
            type: 'datetime',
        },
    ],
});
