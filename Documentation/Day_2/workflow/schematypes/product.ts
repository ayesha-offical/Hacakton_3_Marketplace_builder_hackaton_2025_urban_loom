export const productSchema = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'productID',
            title: 'Product ID',
            type: 'number', // Unique identifier for the product
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string', // Name of the product
            validation: (Rule) => Rule.required().max(100),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text', // Detailed description of the product
            validation: (Rule) => Rule.required().max(500),
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number', // Amount per unit
            validation: (Rule) => Rule.required().positive(),
        },
        {
            name: 'stock',
            title: 'Stock',
            type: 'number', // Available quantity
            validation: (Rule) => Rule.required().min(0),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string', // Furniture type (e.g., Sofa, Chair, Table)
            options: {
                list: [
                    { title: 'Sofa', value: 'sofa' },
                    { title: 'Chair', value: 'chair' },
                    { title: 'Table', value: 'table' },
                ],
            },
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array', // Keywords like "Customizable," "Premium Wood"
            of: [{ type: 'string' }],
        },
        {
            name: 'sizes',
            title: 'Sizes',
            type: 'array', // Available sizes for the product
            of: [{
                type: 'string',
                options: {
                    list: [
                        { title: 'Small', value: 'small' },
                        { title: 'Medium', value: 'medium' },
                        { title: 'Large', value: 'large' },
                    ],
                },
            }],
        },
        {
            name: 'colors',
            title: 'Colors',
            type: 'array', // Available colors for the product
            of: [{
                type: 'string',
                options: {
                    list: [
                        { title: 'Red', value: 'red' },
                        { title: 'Blue', value: 'blue' },
                        { title: 'Green', value: 'green' },
                        { title: 'Black', value: 'black' },
                        { title: 'White', value: 'white' },
                    ],
                },
            }],
        },
        {
            name: 'woodType',
            title: 'Wood Type',
            type: 'string', // Type of wood used
            options: {
                list: [
                    { title: 'Oak', value: 'oak' },
                    { title: 'Maple', value: 'maple' },
                    { title: 'Teak', value: 'teak' },
                    { title: 'Pine', value: 'pine' },
                ],
            },
        },
        {
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        },
    ],
});
