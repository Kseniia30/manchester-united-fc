import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { RxCross2 } from 'react-icons/rx';
import { CloseBtn, StyledBackdrop, StyledModal } from './Backdrop.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
    useEffect(() => {
        const handleEsc = evt => {
            if (evt.code === 'Escape') {
                onClose();
            }
        };
        const handleClick = evt => {
            if (evt.target === document.querySelector('#\\#backdrop')) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEsc);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('keydown', handleEsc);
            window.removeEventListener('click', handleClick);
        };
    }, [onClose]);

    return createPortal(
        <StyledBackdrop id="#backdrop">
            <StyledModal
                initial={{
                    x: 200,
                    opacity: 0.3,
                    }}
                animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                    duration: 0.7,
                    type: 'cubic-bezier(.49,.99,.82,.98)',
                    delayChildren: 0.5,
                    },
            }}>
                <CloseBtn
                    type="button"
                    onClick={() => onClose()}
                >
                    <RxCross2 />
                </CloseBtn>
                {children}
            </StyledModal>
        </StyledBackdrop>,
        modalRoot
    );
};

Modal.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.element,
};
