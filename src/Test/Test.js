
import './Test.css';
import React, {useState} from "react";
import ModalLicense2 from "../Modal/ModalLicense2";


function Test() {
            const [openModal, setOpenModal] = useState(false);

            return (
                <div>
                    <div className="media-Container-ServiceHome-single-x">
                        <ModalLicense2
                            open={openModal}
                            onClose={() => setOpenModal(false)}
                        />
                    </div>

                    {/* 🔥 CE BOUTON OUVRE MAINTENANT LE MODAL */}
                    <button onClick={() => setOpenModal(true)}>
                        License Terms
                    </button>
                </div>
            );
        }

export default Test;