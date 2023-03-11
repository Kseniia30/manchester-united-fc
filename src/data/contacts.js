import { BsInstagram, BsTelegram, BsFacebook, BsYoutube } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';

export const contacts = [
    {
        social: 'oficial',
        href: 'https://www.manutd.com/en',
        svg: null,
    },
    {
        social: 'instagram',
        href: 'https://www.instagram.com/manchesterunited/',
        svg: <BsInstagram style={{ width: '30', height: '30' }} />,
    },
    {
        social: 'facebook',
        href: 'https://www.facebook.com/manchesterunited/',
        svg: <BsFacebook style={{ width: '30', height: '30' }} />,
    },
    {
        social: 'twitter',
        href: 'https://twitter.com/manutd',
        svg: (
            <AiFillTwitterCircle
                style={{ display: 'block', width: '30', height: '30' }}
            />
        ),
    },
    {
        social: 'telegram',
        href: 'https://telegram.me/manutd',
        svg: <BsTelegram style={{ width: '30', height: '30' }} />,
    },
    {
        social: 'youtube',
        href: 'https://www.youtube.com/c/manutd',
        svg: <BsYoutube style={{ width: '30', height: '30' }} />,
    },
];
