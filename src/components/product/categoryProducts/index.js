import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useQueryParam } from "../../../application";
import { fetchCategoryProducts, useCategoryProducts } from "../../../redux";
import { CategoryProductList } from "./CategoryProductList";
import { Paginate } from "./Paginate";

export const CategoryProducts = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const { value: page, changeQueryValue: changePage } = useQueryParam("page");
  const { value: sort } = useQueryParam("sort");
  const categoryProducts = useCategoryProducts();
  useEffect(() => {
    dispatch(
      fetchCategoryProducts(`${categoryName}?page=1&size=2&sort=name,asc`)
    );
  }, [categoryName]);
  return (
    <Box>
      <CategoryProductList />
      <Paginate
        currentPage={page}
        totalPages={categoryProducts.totalPages}
        changePage={changePage}
        queryKey="page"
      />
    </Box>
  );
};
