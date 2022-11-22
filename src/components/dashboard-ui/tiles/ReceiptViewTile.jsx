import ItemTileContainer from '../../containers-ui/ItemTileContainer';
import ReceiptViewTileBodyLayout from '../layouts/bodies/ReceiptViewTileBodyLayout';

const ReceiptViewTile = ({
  receipts = [],
  hub = false
}) => {
  return (
   <ItemTileContainer hub={hub} translateX={2} translateY={-4} borderRadius='2xl' shouldHover={false} boxShadow='xl'>
      <ReceiptViewTileBodyLayout receipts={receipts} />
   </ItemTileContainer>
  );
}

export default ReceiptViewTile;