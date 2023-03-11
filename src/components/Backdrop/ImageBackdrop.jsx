import { RxCross2 } from 'react-icons/rx';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CloseBtn, ImageModal, ImageModalBox, ImageModalText, StyledBackdrop } from './Backdrop.styled';

const modalRoot = document.querySelector('#modal-root');

export const ImageBackdrop = ({ onClose, image, text }) => {
    useEffect(() => {
        const handleEsc = evt => {
            if (evt.code === 'Escape') {
                onClose();
            }
        };
        const handleClick = evt => {
            if (evt.target === document.querySelector('#\\#image-backdrop')) {
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
        <StyledBackdrop id="#image-backdrop">
            <CloseBtn
                type="button"
                onClick={() => onClose()}
                style={{ color: '#FFF' }}
            >
                <RxCross2 />
            </CloseBtn>
                <ImageModalBox>
                <ImageModal src={image} alt="MU" />
                <ImageModalText>{text}</ImageModalText>
                </ImageModalBox>
        </StyledBackdrop>,
        modalRoot
    );
};

ImageBackdrop.propTypes = {
    onClose: PropTypes.func,
    image: PropTypes.string,
    text: PropTypes.string,
};
