import React, {useState} from "react";
import { useNavigate  } from "react-router-dom";

function NextPage() {

const navigate = useNavigate();

   // 11 input states
   const [patientName, setPatientName] = useState("");
   const [patientUID, setPatientUID] = useState("");
   const [id1, setId1] = useState("");
   const [id2, setId2] = useState("");
   const [id3, setId3] = useState("");
   const [id4, setId4] = useState("");
   const [id5, setId5] = useState("");
   const [id6, setId6] = useState("");
   const [id7, setId7] = useState("");
   const [id8, setId8] = useState("");
   const [id9, setId9] = useState("");   

    const [isClicked, setIsClicked] = useState(false);

    const ids = { id1, id2, id3, id4, id5, id6, id7, id8, id9 };

    const [errors, setErrors] = useState({});


        const goToNext = () => {
                

            const allFields = { patientName, patientUID, id1, id2, id3, id4, id5, id6, id7, id8, id9 };    
        
            let newErrors = {};

            Object.keys(allFields).forEach((key) => {
               if (typeof allFields[key] === "string" && allFields[key].trim() === "") {
               newErrors[key] = "Fill this box";
                }
            });

            setErrors(newErrors);

                 // stop here if there are errors
            if (Object.keys(newErrors).length > 0) return;
        setIsClicked(true);

            const values = Object.values(ids).map(Number);
            const total = values.reduce((sum, val) => sum + val, 0);

            if (total > 100) {
             navigate("/result-cancer");
              } else {
             navigate("/result-healthy");
                 }
            };


        return (
          <div className='box'>
             <div className='nextpage-image'></div>
          
            <div className="text">
              
                        
                <h2 onClick={() => navigate('/')} 
                    className="diagnosis-title">
                     <b>Diagnosis Process</b>
                </h2>
  
               
                <div className="ids-container">

                    <div className="id-group" id="patient-name">
                    <label>Patient Name:</label>
                    <input type="text" placeholder="Enter patient's name" value={patientName} onChange={(e) => {setPatientName(e.target.value); setErrors({ ...errors, patientName: "" });}}/>
                         {errors.patientName && (<span className="error">{errors.patientName}</span>)}
                    </div>

                    <div className="id-group">
                    <label>Patient Unique ID:</label>
                    <input type="text" placeholder="e.g. PAT-00123" value={patientUID} onChange={(e) => {setPatientUID(e.target.value); setErrors({ ...errors, patientUID: "" });}}/>
                         {errors.patientUID && (<span className="error">{errors.patientUID}</span>)}
                    </div>

                    <div className="id-group">
                        <label htmlFor="id1">Clump Thickness:</label>
                        <input type="number" id="id1" placeholder=" ID1" value={id1} onChange={(e) => {setId1(e.target.value); setErrors({ ...errors, id1: "" });}} disabled={!patientName || !patientUID} step="any"/>
                            {errors.id1 && (<span className="error">{errors.id1}</span>)}
                    </div>

                    <div className="id-group">
                        <label htmlFor="id2">Uniform Cell Size:</label>
                        <input type="number" id="id2" placeholder=" ID2" value={id2} onChange={(e) => {setId2(e.target.value); setErrors({ ...errors, id2: "" });}} disabled={!id1} step="any"/>
                            {errors.id2 && (<span className="error">{errors.id2}</span>)}
                        
                    </div>

                    <div className="id-group">
                        <label htmlFor="id3">Uniform Cell Shape:</label>
                        <input type="number" id="id3" placeholder=" ID3" value={id3} onChange={(e) => {setId3(e.target.value); setErrors({ ...errors, id3: "" });}} disabled={!id2} step="any"/>
                            {errors.id3 && (<span className="error">{errors.id3}</span>)}
                    </div>

                    <div className="id-group">
                        <label htmlFor="id4">Marginal Adhesion:</label>
                        <input type="number" id="id4" placeholder=" ID4" value={id4} onChange={(e) => {setId4(e.target.value); setErrors({ ...errors, id4: "" });}} disabled={!id3} step="any"/>
                            {errors.id4 && (<span className="error">{errors.id4}</span>)}
                    </div>

                    <div className="id-group">
                        <label htmlFor="id5">Single Epithelial Cell Size:</label>
                        <input type="number" id="id5" placeholder=" ID5" value={id5} onChange={(e) => {setId5(e.target.value); setErrors({ ...errors, id5: "" });}} disabled={!id4} step="any"/>
                            {errors.id5 && (<span className="error">{errors.id5}</span>)}
                    </div>

                    <div className="id-group">
                        <label htmlFor="id6">Bare Nuclei:</label>
                        <input type="number" id="id6" placeholder=" ID6" value={id6} onChange={(e) => {setId6(e.target.value); setErrors({ ...errors, id6: "" });}} disabled={!id5} step="any"/>
                            {errors.id6 && (<span className="error">{errors.id6}</span>)}
                    </div>

                    <div className="id-group">
                        <label htmlFor="id7">Bland Chromatin:</label>
                        <input type="number" id="id7" placeholder=" ID7" value={id7} onChange={(e) => {setId7(e.target.value); setErrors({ ...errors, id7: "" });}} disabled={!id6} step="any"/>
                            {errors.id7 && (<span className="error">{errors.id7}</span>)}
                    </div>

                    <div className="id-group">
                        <label htmlFor="id8">Normal Nucleoli:</label>
                        <input type="number" id="id8" placeholder=" ID8" value={id8} onChange={(e) => {setId8(e.target.value); setErrors({ ...errors, id8: "" });}} disabled={!id7} step="any"/>
                            {errors.id8 && (<span className="error">{errors.id8}</span>)}
                    </div>

                    <div className="id-group">
                        <label htmlFor="id9">Mitoses:</label>
                        <input type="number" id="id9" placeholder=" ID9" value={id9} onChange={(e) => {setId9(e.target.value); setErrors({ ...errors, id9: "" });}} disabled={!id8} step="any"/>
                            {errors.id9 && (<span className="error">{errors.id9}</span>)}
                    </div>

                </div>
                
                <button type="button"className={`nxt-btn ${isClicked ? "clicked" : ""}`} onClick={goToNext}>
                    Submit the Patient's result
                </button>

            </div>
        </div>
    );
}


export default NextPage;
