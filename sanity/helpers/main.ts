import { sanityFetch } from "../lib/live"
import { CATEGORIES_QUERY, PRODUCTS_QUERY, SALES_QUERY, PRODUCT_BY_SLUG, PRODUCT_SEARCH_QUERY, PRODUCT_BY_CATEGORY_QUERY } from "./query"

export const getSale = async ()=>{
    try {
        const products = await sanityFetch({
            query: SALES_QUERY,
    });

    return products?.data || [];
                  
    } catch (error) {
        console.log("Error getting sales from database: ",error)
    }
}

export const getAllproducts = async ()=>{
     try {
        const products = await sanityFetch({
            query:PRODUCTS_QUERY
        })
        return products?.data || [];
     } catch (error) {
        console.log("Error getting products from database: ",error)
        return [];
     }
};

export const getAllCategories = async ()=>{
    try {
        const categories = await sanityFetch({
            query:CATEGORIES_QUERY
        });
        return categories.data || [];
     } catch (error) {
        console.log("Error getting categories from database: ",error)
        return [];
     }
};

export const getProductsBySlug = async(slug:string) =>{

    try {
        const product =await sanityFetch({
            query:PRODUCT_BY_SLUG,
            params: {
                slug,
            },
        });
        return product?.data || null;
    } catch (error) {
        console.log("Error getting product by slug from database: ", error);
        return null;
    }

};


export const searchProductsByName = async(searchParam: string) =>{

    try {
        const products =await sanityFetch({
            query:PRODUCT_SEARCH_QUERY,
            params: {
                searchParam:searchParam,
            },
        });
        return products?.data || [];
    } catch (error) {
        console.log("Fetching product by name Error: ", error);
        return [];
    }
};

export const getProductByCategory =async (categorySlug:string ) =>{
    try {
        const products = await sanityFetch({
            query: PRODUCT_BY_CATEGORY_QUERY,
            params: {
                categorySlug,
            },
        });
        return products?.data || [];
    } catch (error) {
        console.log("Error getting products by category from database: ", error);
        return [];
    }
 };







