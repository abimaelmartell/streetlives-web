import React from 'react';
import Modal from '../../../components/modal';
import Icon from '../../../components/icon';
import Header from '../../../components/header';
import Button from '../../../components/button';

function ConfirmationModal({
  prompt,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) {
  return (
    <Modal>
      <svg width="61" height="57" viewBox="0 0 61 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.2008 1.82593C30.0991 -0.381318 24.9648 1.12552 22.7366 5.2059L1.52249 44.0539C0.863003 45.2615 0.511837 46.6117 0.500301 47.9861C0.461239 52.632 4.22461 56.4141 8.88641 56.4527L51.9708 56.8096C53.4273 56.8217 54.8627 56.4601 56.1377 55.7592C60.2202 53.5149 61.7049 48.4059 59.4393 44.3447L37.569 5.13975C36.787 3.73796 35.618 2.58855 34.2008 1.82593ZM25.8355 6.89184C27.1285 4.52414 30.1244 3.63443 32.5259 4.92674C33.3527 5.37169 34.0321 6.0408 34.4854 6.8535L56.3557 46.0584C57.6645 48.4045 56.8144 51.3654 54.435 52.6734C53.6911 53.0824 52.8522 53.2941 52.0001 53.287L8.91568 52.9301C6.18225 52.9074 4.00702 50.6951 4.02957 48.0157C4.03622 47.2212 4.23919 46.4398 4.62143 45.7398L25.8355 6.89184ZM28.0658 26.9942L29.2348 38.8309H31.781L32.934 26.9942V21.5214H28.0658V26.9942ZM28.258 40.3741V44.8446H32.7578V40.3741H28.258Z" fill="#FFC000"/>
</svg>
      <Header size="large" className="m-4 flex-grow-1">
        {prompt}
      </Header>
      <div className="px-3">
        <Button onClick={onConfirm} primary fluid>
          {confirmText}
        </Button>
        <Button onClick={onCancel} primary basic fluid className="my-2">
          {cancelText}
        </Button>
      </div>
    </Modal>
  );
}

export default ConfirmationModal;
