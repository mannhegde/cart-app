import React from 'react';
import { Dimensions, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { WidgetConfig } from '@widgets/helpers/types.ts';
import { useRelatedProducts } from '@hooks/useRelatedProducts.ts';
import renderProductCard from '@widgets/helpers/renderProductCard.tsx';

const { width } = Dimensions.get('window');

const RelatedProducts: React.FC<WidgetConfig> = () => {
  const { data } = useRelatedProducts();
  console.log({ data });
  if (!data?.length) return null;

  return (
    <View>
      <FlashList
        data={data}
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
