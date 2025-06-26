import React, { useEffect } from 'react';
import { WidgetConfig } from '@widgets/helpers/types.ts';
import Card from '@components/card/Card.tsx';
import { useCheckoutStore } from '@stores/useCheckoutStore.ts';
import { useCartStore } from '@stores/cartStore.ts';
import { getInrString } from '@utils/helper.ts';
import BillItem from '@widgets/components/BillItem.tsx';

const BillDetails: React.FC<WidgetConfig> = ({ label }) => {
  const { details, setDetails } = useCheckoutStore();

  const { getTotal } = useCartStore();

  useEffect(() => {
    setDetails({
      total: 0,
      subtotal: getTotal(),
      discount: 5,
      tax: 12,
      delivery: 35,
    });
  }, [getTotal, setDetails]);

  return (
    <Card title={label} variant={'light'}>
      <BillItem
        label={'Items Total'}
        description={getInrString(details.subtotal)}
      />
      <BillItem
        label={'Discount'}
        description={getInrString(details.discount)}
      />
      <BillItem label={'Taxes'} description={getInrString(details.tax)} />
      <BillItem
        label={'Delivery Charges'}
        description={getInrString(details.delivery)}
      />
      <BillItem
        isBold
        label={'Total'}
        description={getInrString(details.total)}
      />
    </Card>
  );
};

export default React.memo(BillDetails);
