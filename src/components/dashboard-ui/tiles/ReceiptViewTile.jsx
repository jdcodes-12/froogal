import ItemTileContainer from '../../containers-ui/item-title-container';
import ReceiptViewTileBodyLayout from '../layouts/bodies/ReceiptViewTileBodyLayout';

const ReceiptViewTile = ({
  receipts = null,
  hub = false
}) => {
  return (
   <ItemTileContainer hub={hub} translateX={2} translateY={-4} borderRadius='2xl' shouldHover={false} boxShadow='xl'>
      <ReceiptViewTileBodyLayout receipts={receipts} />
   </ItemTileContainer>
  );
}

export default ReceiptViewTile;