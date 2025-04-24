import React from "react";
import "../styles/edu.css"

const Edu = () => {
    return (
        <div id="education" className="edu-container">
            <h2 className="education-title">Education</h2>
            <div className="education-content">
                <div className="education-item">
                    <img className="edu-img" src="https://coekolhapur.bharatividyapeeth.edu/media/images/coe_kolhapur_logo_1_23_nov.png" alt="BVP" />
                    <div>
                        <h3>Bharti Vidyapeeth College of Engineering, Kolhapur</h3>
                        <p>Bachelor in Computer Science & Engineering</p>
                        <h4>2024 - Present</h4>
                    </div>
                </div>
                <div className="education-item">
                    <img className="edu-img" src="https://th.bing.com/th/id/OIP.g6cjjKWbFLOdDTBKsilZ-AHaHa?rs=1&pid=ImgDetMain" alt="SGP" />
                    <div>
                        <h3>Sanjay Ghodawat Polytechnic, Atigre</h3>
                        <p>Diploma in Computer Science & Engineering</p>
                        <h4>2021 - 2024</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edu;