import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesService = defineType({
    name:'sales',
    title:'Sales',
    type:'document',
    icon:TagIcon,
    fields:[
        defineField({
            name:'title',
            title:'Sale Title',
            type:'string',

        }),
        defineField({
            name:'description',
            title:'Description',
            type:'text',

        }),
        defineField({
            name:'badge',
            title:'Discount Badge',
            type:'string',
            description:'Discount Badge for the sale'
        }),
        defineField({
            name:'discountPrice',
            title:'Discount Price',
            type:'number',
            description:'Discount Percentage or fixed value'
        }),
        defineField({
            name:'couponCode',
            title:' Coupon Code',
            type:'string',

        }),
        defineField({
            name:'validForm',
            title:'Validation Form',
            type:'datetime'
        }),

        defineField({
            name:'validUntil',
            title:'Validation date',
            type:'datetime'
        }),
        defineField({
            name:'isActive',
            title:'Is Active',
            type:'boolean',
            description:'Check if the sale is active or not active',
            initialValue:true,
        }),
        defineField({
            name:'image',
            title:'Product Image',
            type:'image',
options: {
    hotspot: true,
},
validation: (Rule) => Rule.required().error('Image is required'),
           
        }),
    ],
    preview: {
        select: {
            title: 'title',
            discountPrice: 'discountPrice',
            couponCode:'couponCode',
            isActive:'isActive',

    },
    prepare(selection) {
        const {
            title,
            discountPrice,
            couponCode,
            isActive,
        }=selection
        const status =isActive ? 'Active' : 'Inactive'
        return {
            title,
            subtitle:`${discountPrice} % off -code: ${couponCode} - ${status}`,
        }
    }
}
})