import { defineType } from "sanity"


export const customerSchema = defineType({
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
        {
            name: 'customerID',
            title: 'Customer ID',
            type: 'number',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required().max(100),
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'orderHistory',
            title: 'Order History',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'order' }] }],
        },
    ],
});
