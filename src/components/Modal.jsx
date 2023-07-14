import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

export const Modal = ({ open, onClose, children }) => {
	if (!open) return null;
	return ReactDom.createPortal(
		<>
			<div onClick={onClose} className="overlay">
				<div onClick={(e) => e.stopPropagation()} className="modal-container">
					<button className="close-button" onClick={onClose}>
						X
					</button>
					{children}
				</div>
			</div>
		</>,
		document.getElementById("portal")
	);
};
