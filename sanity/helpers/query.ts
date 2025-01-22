import { defineQuery } from "next-sanity";

export const SALES_QUERY = defineQuery(`*[_type == 'sales'] | order(name asc)`);

export const PRODUCTS_QUERY = defineQuery(
  `*[_type == 'product'] | order(name asc)`
);

export const CATEGORIES_QUERY = defineQuery(
  `*[_type == 'category'] | order(name asc)`
);

export const PRODUCT_BY_SLUG = defineQuery(
  `*[_type == 'product' && slug.current == $slug] | order(name asc)[0]`
);

export const PRODUCT_SEARCH_QUERY = defineQuery(`*[
  _type == 'product' && 
  lower(name) match lower($searchParam + '*')
] | order(name asc)`);

// export const PRODUCT_BY_CATEGORY_QUERY = defineQuery(
//   `*[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug] ._id ) ] | order(name asc))`
// );
// export const PRODUCT_BY_CATEGORY_QUERY = defineQuery(`*[
//   _type == "product" && 
//   $categorySlug in categories[]->slug.current
// ] {
//   _id,
//   name,
//   description,
//   price,
//   "slug": slug.current,
//   "image": image.asset->url,
//   categories[]->
// } | order(name asc)`);


// export const PRODUCT_BY_CATEGORY_QUERY = defineQuery(`*[
//   _type == "product" && 
//   references(*[_type == "category" && slug.current == $categorySlug]._id)
// ] | order(name asc)`);


export const PRODUCT_BY_CATEGORY_QUERY = defineQuery(`*[
  _type == "product" && 
  references(*[_type == "category" && lower(slug.current) == lower($categorySlug)]._id)
] | order(name asc)`);