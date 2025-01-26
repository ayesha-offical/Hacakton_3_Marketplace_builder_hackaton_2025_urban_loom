export const orderSchema = defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        {
            name: 'orderID',
            title: 'Order ID',
            type: 'number', // Unique identifier for each order
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'customer',
            title: 'Customer',
            type: 'object', // Embedded object for customer details
            fields: [
                { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
                { name: 'email', title: 'Email', type: 'string', validation: (Rule) => Rule.required().email() },
                { name: 'phone', title: 'Phone', type: 'string', validation: (Rule) => Rule.required() },
                { name: 'address', title: 'Address', type: 'text', validation: (Rule) => Rule.required() },
            ],
        },
        {
            name: 'products',
            title: 'Products',
            type: 'array', // Array of product references with quantity
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'product', title: 'Product', type: 'reference', to: [{ type: 'product' }] },
                        { name: 'quantity', title: 'Quantity', type: 'number', validation: (Rule) => Rule.required().min(1) },
                    ],
                },
            ],
        },
        {
            name: 'totalAmount',
            title: 'Total Amount',
            type: 'number', // Total price for the order
            validation: (Rule) => Rule.required().positive(),
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string', // Order progress status
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Shipped', value: 'shipped' },
                    { title: 'Delivered', value: 'delivered' },
                    { title: 'Cancelled', value: 'cancelled' },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime', // Order creation date and time
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'updatedAt',
            title: 'Updated At',
            type: 'datetime', // Last update date and time
        },
    ],
});