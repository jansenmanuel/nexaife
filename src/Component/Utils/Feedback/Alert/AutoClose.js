import { useEffect } from "react";
export const useAutoClose = (isVisible, autoClose, onClose) => {
    useEffect(() => {
        let timer = null;
        if (isVisible && typeof autoClose === 'number') {
            timer = setTimeout(() => {
                if (onClose) onClose();
            }, autoClose);
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isVisible, autoClose, onClose]);
};