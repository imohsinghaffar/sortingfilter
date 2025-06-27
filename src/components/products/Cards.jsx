import React, { useState } from "react";
import Card from "./Card";
import SelectCategory from "./SelectCategory";
import SortPrice from "../sorting/SortPrice";
import { productList } from "../../../data";
import Input from "../sorting/Input";

const Cards = () => {
  const [dataList, setDataList] = useState(productList);

  const inputHandle = (e) => {
    const inputValue = e.target.value.trim().toLowerCase();
    const filteredProduct = inputValue
      ? productList.filter((product) =>
          product.title.toLowerCase().includes(inputValue)
        )
      : productList;
    setDataList(filteredProduct);
  };

  const selectCategoryHandle = (e) => {
    const selectedCategory = e.target.value;
    const filteredData = selectedCategory
      ? productList.filter((product) => product.category.name === selectedCategory)
      : productList;
    setDataList(filteredData);
  };

  const sortByPrice = (order = "asc") => {
    const sortList = [...productList].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    setDataList(sortList);
  };

  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-10 bg-gray-50 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
          Explore Our Products
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Search, filter and sort through our modern collection
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-10 mb-10">
        <div className="flex flex-wrap items-center gap-4">
          <SelectCategory selectHandle={selectCategoryHandle} />
          <SortPrice
            lowToHighPrice={() => sortByPrice("asc")}
            highToLowPrice={() => sortByPrice("desc")}
          />
        </div>
        <div className="w-full sm:w-1/3">
          <Input inputHandle={inputHandle} />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dataList.map(
          ({ images, price, id, title, description, category: { name } }, index) => (
            <Card
              key={index}
              category={name}
              images={images}
              price={price}
              title={title}
              description={description}
              id={id}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Cards;
