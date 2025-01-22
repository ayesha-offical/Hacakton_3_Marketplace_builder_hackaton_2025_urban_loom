"use client";
import { Category } from "@/sanity.types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
interface Props {
  categories: Category[]; // Array of category names
}

const CategorySelector = ({ categories }: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? categories.find((category) => category?._id === value)?.title
            : "Filter by category"}
          <ChevronsUpDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Search By Category......."
            className="h-9"
          onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                const selectedCategory = categories.find((c) =>
                  c.title
                    ?.toLowerCase()
                    .includes(e.currentTarget.value.toLowerCase())
                );
                if (selectedCategory?.slug?.current){
                  setValue(selectedCategory?._id);
                  router.push(`/categories/${selectedCategory.slug.current}`);
                  setOpen(false);
              
                }
                  
              }
         }}

          />

          <CommandList>
            <CommandEmpty className="text-red-700 flex justify-center items-center py-3 ">
              No Category Found.
            </CommandEmpty>
            <CommandGroup>
              {categories?.map((category) => (
                <CommandItem
                  key={category?._id}
                  value={category?.title}
                  onSelect={() => {
                    setValue(value === category?._id ? category?._id : "");
                    router.push(`/categories/${category.slug?.current}`);
                    setOpen(false);
                  }}
                  // onClick={() => {
                  //   setValue(category?._id);
                  //   router.push(`/products?category=${category?._id}`);
                  //   setOpen(false);
                  // }}
                >
                  {category?._id === value ? (
                    <strong>{category.title}</strong>
                  ) : (
                    category.title
                  )}

                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CategorySelector;
