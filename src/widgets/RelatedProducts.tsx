import React, { useMemo } from 'react';
import { Dimensions, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { WidgetConfig } from '@widgets/helpers/types.ts';
import { useRelatedProducts } from '@hooks/useRelatedProducts.ts';
import renderProductCard from '@widgets/helpers/renderProductCard.tsx';
import SectionHeader from '@widgets/SectionHeader.tsx';
import { useCartStore } from '@stores/cartStore.ts';

const { width } = Dimensions.get('window');

const RelatedProducts: React.FC<WidgetConfig> = () => {
  const { data } = useRelatedProducts();
  const { items } = useCartStore();

  const filteredData = useMemo(() => {
    const productsInCart = Object.keys(items).map(key => items[key].product.id);
    return data?.filter(item => productsInCart.indexOf(item.id) < 0) || [];
  }, [data, items]);

  if (!data?.length) return null;

  return (
    <View>
      <SectionHeader label="Related Products" type={'sectionHeader'} />
      <FlashList
        data={filteredData}
        renderItem={renderProductCard}
        estimatedItemSize={width * 0.9}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        snapToInterval={width * 0.9}
        decelerationRate="fast"
      />
    </View>
  );
};

export default React.memo(RelatedProducts);
