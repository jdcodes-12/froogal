import ReceiptItem from '../items/ReceiptItem';
import TileModalContainer from '../../modals/TileModalContainer';
import ReceiptItemModalBody from '../../modals/modal-bodies/receipt-bodies/ReceiptItemModalBody';

const ReceiptItemTile = ({ width, receipt, hub = false }) => {
  return (
    <>
      <TileModalContainer
        colorScheme='purple' 
        modalTitle='Receipt Info'
        modalBody={<ReceiptItemModalBody receipt={receipt} />} 
        modalPrimaryBtnText='close'
        >
        <ReceiptItem hub={hub} receipt={receipt} width={width} />
      </TileModalContainer>
    </>
  );
}

export default ReceiptItemTile;