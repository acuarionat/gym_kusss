import React from "react";
import twitterIcon from '../../../../../public/imagenes/IconTwitter.png';
import messengerIcon from '../../../../../public/imagenes/IconMessenger.png';
import whatsappIcon from '../../../../../public/imagenes/IconWhatsapp.png';
import telegramIcon from '../../../../../public/imagenes/IconTelegram.png';
import gmailIcon from '../../../../../public/imagenes/IconGmail.png';
import facebookIcon from '../../../../../public/imagenes/IconFacebook.png';
import './ModalCompartir.css';

const ModalCompartir = ({ url, title, onClose }) => {
    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        messenger: `fb-messenger://share/?link=${encodeURIComponent(url)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
        telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        gmail: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>Compartir</h2>
                <div className="share-options">
                    <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter" /><br />Twitter
                    </a>
                    <a href={shareLinks.messenger} target="_blank" rel="noopener noreferrer">
                        <img src={messengerIcon} alt="Messenger" /><br />Messenger
                    </a>
                    <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                        <img src={whatsappIcon} alt="WhatsApp" /><br />WhatsApp
                    </a>
                    <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer">
                        <img src={telegramIcon} alt="Telegram" /><br />Telegram
                    </a>
                    <a href={shareLinks.gmail} target="_blank" rel="noopener noreferrer">
                        <img src={gmailIcon} alt="Gmail" /><br />Gmail
                    </a>
                    <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" /><br />Facebook
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ModalCompartir;
