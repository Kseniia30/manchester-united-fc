import { ImageBackdrop } from "components/Backdrop/ImageBackdrop"
import { historyContent } from "data/history"
import { useEffect, useState } from "react"
import {HistoryList, HistoryItem, HistoryTitle,HistoryText, HistoryImgList, HistoryImgItem, HistoryImg, HistoryImgText} from "./styles/History.styled"

export const History = () => {
    const [modal, setModal] = useState(false)
    const [link, setLink] = useState(null)
    const [text, setText] = useState(null)

    useEffect(() => {
        if (modal) {
            document.querySelector('body').style.overflow = 'hidden';
        }
        if (!modal) {
            document.querySelector('body').style.overflow = 'scroll';
        }
    }, [modal]);

    const toggleModal = () => {
        setModal(modal => !modal)
    }
    const openBackdrop = evt => {
        evt.preventDefault();
        setLink(evt.currentTarget.dataset.link);
        setText(evt.currentTarget.dataset.text)
        toggleModal();
    };
    return <>
        <HistoryList>
        {historyContent.map(contentInfo => {
            const { id, title, content, src1, sub1, src2, sub2, src3, sub3 } = contentInfo
            return <HistoryItem key={id} id={id}>
                <HistoryTitle>{title}</HistoryTitle>
                <HistoryText>{content}</HistoryText>
                <HistoryImgList>
                    <HistoryImgItem>
                        <a
                            href={src1}
                            onClick={openBackdrop}
                            data-link={src1}
                            data-text={sub1}>
                            <HistoryImg src={src1} alt={sub1} />
                            {window.screen.width < 768 && <HistoryImgText>{sub1}</HistoryImgText>}
                        </a>
                    </HistoryImgItem>
                    <HistoryImgItem>
                        <a
                            href={src2}
                            onClick={openBackdrop}
                            data-link={src2}
                            data-text={sub2}>
                            <HistoryImg src={src2} alt={sub2} />
                            {window.screen.width < 768 && <HistoryImgText>{sub2}</HistoryImgText>}
                        </a>
                    </HistoryImgItem>
                    <HistoryImgItem>
                        <a
                            href={src3}
                            onClick={openBackdrop}
                            data-link={src3}
                            data-text={sub3}>
                            <HistoryImg src={src3} alt={sub3} />
                            {window.screen.width < 768 && <HistoryImgText>{sub3}</HistoryImgText>}
                        </a>
                    </HistoryImgItem>
                </HistoryImgList>
            </HistoryItem>
        })}
        </HistoryList>
        {modal && window.screen.width > 767 && <ImageBackdrop onClose={toggleModal} image={link} text={text} />}
    </> 
}