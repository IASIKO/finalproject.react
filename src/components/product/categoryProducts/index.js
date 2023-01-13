import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCategoryProducts } from '../../../redux'
import { CategoryProductList } from './CategoryProductList'

export const CategoryProducts = () => {
    const dispatch = useDispatch()
    const {categoryName} = useParams()
    useEffect(() => {
        dispatch(fetchCategoryProducts(`${categoryName}?page=1&size=20&sort=name,asc`))
    }, [categoryName])
  return  <Box>
    <CategoryProductList/>
  </Box> 
}
