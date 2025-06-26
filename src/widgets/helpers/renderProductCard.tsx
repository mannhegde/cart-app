import React from 'react';
import { ListRenderItemInfo } from '@shopify/flash-list';
import { Product } from '@/api/types.ts';
import ProductCard from '@components/product-card/ProductCard.tsx';
import {CarouselRenderItemInfo} from "react-native-reanimated-carousel/src/types.ts";

const renderProductCard = ({
  item,
}: ListRenderItemInfo<Product> | CarouselRenderItemInfo<Product>) => {
  return <ProductCard product={item} />;
};
export default renderProductCard;
