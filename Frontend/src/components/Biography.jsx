import React from "react";

const Biography = ({ imageUrl }) => {
    return (
        <>
            <div className="container biography">
                <div className="banner">
                    <img src={imageUrl} alt="whoweare" />
                </div>
                <div className="banner">
                    <p>Biography</p>
                    <h3>Who We Are</h3>
                    <p>
                        NCARE Medical Institute is a premier healthcare education and training
                        center committed to shaping the future of medical professionals.
                        Founded with the vision of delivering excellence in medical education,
                        NCARE offers a wide range of programs that combine academic rigor with
                        hands-on clinical experience. The institute is equipped with modern facilities,
                        experienced faculty, and partnerships with reputable hospitals and clinics,
                        ensuring students gain the practical skills needed for success in the healthcare
                        industry. NCARE stands as a symbol of trust, innovation, and dedication to
                        advancing medical knowledge and patient care.
                    </p>
                    <p>We are all in 2025!</p>
                    <p>We are working on a FULL STACK PROJECT.</p>
                    <p>Coding is fun!</p>
                </div>
            </div>
        </>
    );
};

export default Biography;
