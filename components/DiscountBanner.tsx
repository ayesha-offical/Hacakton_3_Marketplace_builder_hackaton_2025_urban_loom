import { SALES_QUERYResult } from "@/sanity.types";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "./ui/button";

const DiscountBanner = ({ sales }: { sales: SALES_QUERYResult }) => {
  return (
    <Carousel className="w-full my-10">
      <CarouselContent>
        {sales.map((sale) => (
          <CarouselItem key={sale?._id}>
            <Card>
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center ">
                  <div className="flex-1 p-6 md:px-12 w-[100%] md:w-1/2  ">
                    <Badge
                      variant={"secondary"}
                      className="mb-2 md:mb-4 text-red-900 capitalize"
                    >
                      {sale?.badge} {sale?.discountPrice} % off
                    </Badge>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 md:md-4">
                      {sale?.title}
                    </h2>
                    <p className="text-muted-foreground mb-2 md:md-4">{sale?.description}</p>
                    <p className="mb-2 ">
                      Use Code:{" "}
                      <span className="font-semibold"> {sale?.couponCode}</span> for{" "}
                       
                        <span className="font-semibold">{sale?.discountPrice}</span> % Off

                    </p>
                    <Button>
                          Shop Now
                    </Button>
                  </div>
                  {sale?.image && (
                    <div className="w-[100%] md:w-1/2">
                      <Image
                        src={urlFor(sale?.image).url()}
                        alt="image"
                        width={700}
                        height={700}
                        style={{ objectFit: "cover" }}
                          loading="lazy"
                        
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2" aria-label="Previous Slide"/>
      <CarouselNext className="absolute right-2"   aria-label="Next Slide"/>
    </Carousel>
  );
};

export default DiscountBanner;
