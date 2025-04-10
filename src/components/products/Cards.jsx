import React, { useState } from "react";
import Card from "./Card";
import SelectCategory from "./SelectCategory";
import SortPrice from "../sorting/SortPrice";
import { productList } from "../../../data";
import Input from "../sorting/Input";

const Cards = () => {
  const [dataList, setDataList] = useState(productList);

const inputHandle = (e) => {
  let inputValue = e.target.value;
  let filteredProduct;
  if (!inputValue) {
    filteredProduct = productList;
  } else {
    filteredProduct = productList.filter(
      (product) => product.title.includes(inputValue)
    );
    setDataList(filteredProduct);
  }
};

let selectCategoryHandle = (e)=>{
const selectedCategory = e.target.value;
let filteredData;
if(selectedCategory == ''){
  filteredData = productList
}
else{
filteredData = productList.filter((product)=>product.category.name === selectedCategory);}
setDataList(filteredData);
}

let lowToHighPriceHandle = ()=>{
  let lowToHighPrice = [...productList].sort((a,b)=>a.price-b.price);
  setDataList(lowToHighPrice);
}

let highToLowPriceHandle = ()=>{
  let highToLowPrice = [...productList].sort((a,b)=>b.price-a.price);
  setDataList(highToLowPrice);
}


  return (
    <>
      <div className="flex flex-col-reverse items-center justify-between sm:flex-row px-4 py-3">
        <div className="flex items-center mt-6 justify-between gap-6" >
        <SelectCategory selectHandle={selectCategoryHandle}/>
        <SortPrice lowToHighPrice = {lowToHighPriceHandle} highToLowPrice = {highToLowPriceHandle} />
        </div>
        <div className="mt-4">
        <Input inputHandle= {inputHandle}/>
        </div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dataList.map(({ images, price, id, title, description }, index) => {
          return (
            <Card
              key={index}
              catName={name}
              images={images}
              price={price}
              title={title}
              description={description}
              id={id}
            />
          );
        })}
      </div>
    </>
  );
}


export default Cards;
