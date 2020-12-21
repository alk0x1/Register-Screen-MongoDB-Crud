import React, { useState } from 'react'
import '../styles/Landing.css'
import Modal from 'react-modal'
import Register from '../components/Register'


export default function Landing() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <button className="registerButton" onClick={openModal}>
        <h2>Fazer Cadastro</h2>
      </button>

      <Modal className="modal" isOpen={modalIsOpen}>
        <div className="modal-container">
          <Register />
          <button onClick={closeModal}>
            Fechar
          </button>
        </div>
      </Modal>
      
    </div>
  )
}
