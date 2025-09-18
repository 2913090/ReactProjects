function Modal({onClose, children}){

    return(
        <div className="modal-backdrop">
            <div className="modal-content">
                <button onClick={onClose}>×</button>
                <p>{children}</p>
            </div>
        </div>
    )
}

export default Modal