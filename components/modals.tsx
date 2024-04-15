"use client";
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#app');

export function UserModal(props: { open: boolean }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    if (props.open) {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Modal isOpen={modalIsOpen}></Modal>
    )
}