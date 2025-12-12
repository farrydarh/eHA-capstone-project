import React, {useState} from "react";
import { useNavigate  } from "react-router-dom";

function NextPage() {

const navigate = useNavigate();

   // 9 input states
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


    const goToNext = () => {
         setIsClicked(true);
      
        
        const values = [id1, id2, id3, id4, id5, id6, id7, id8, id9].map(Number);
            
        const incomplete = [id1, id2, id3, id4, id5, id6, id7, id8, id9].some(
           val => val === "" || val === null || val === undefined
    );
       if (incomplete) {
         navigate("/result-incomplete"); // page that says "please complete all inputs"
         return; // stop execution here
    }

        
        // Divide each by 30 and add them
        const total = values.reduce((sum, val) => sum + val, 0);

        console.log("TOTAL =", total);

        // condition

        if (total > 100) {
            navigate("/result-cancer");
        } else {
            navigate("/result-healthy");
        }
    
    };

        return (
          <div className='box'>
            <img 
                src="/images/IMG-20251201-WA0053(1).jpg" 
                alt="NextPage" 
                className="nextpage-image"
            />
          
            <div className="text">
              
                        
                <h2
                    onClick={() => navigate('/')} 
                    className="diagnosis-title"

                  >
                     <b>Diagnosis Process</b>
                </h2>
  
               
                <div className="ids-container">

                    <div className="id-group">
                        <label htmlFor="id1">Clump Thickness:</label>
                        <input type="number" id="id1" placeholder=" ID1" value={id1} onChange={(e) => setId1(e.target.value)} step="any"/>
                        
                    </div>

                    <div className="id-group">
                        <label htmlFor="id2">Uniform Cell size:</label>
                        <input type="number" id="id2" placeholder=" ID2" value={id2} onChange={(e) => setId2(e.target.value)} step="any"/>
                        
                    </div>

                    <div className="id-group">
                        <label htmlFor="id3">Uniform Cell shape:</label>
                        <input type="number" id="id3" placeholder=" ID3" value={id3} onChange={(e) => setId3(e.target.value)} step="any"/>
                       
                    </div>

                    <div className="id-group">
                        <label htmlFor="id4">Marginal Adhesion:</label>
                        <input type="number" id="id4" placeholder=" ID4" value={id4} onChange={(e) => setId4(e.target.value)} step="any"/>
                       
                    </div>

                    <div className="id-group">
                        <label htmlFor="id5">Single Epithelial Cell Size:</label>
                        <input type="number" id="id5" placeholder=" ID5" value={id5} onChange={(e) => setId5(e.target.value)} step="any"/>
                        
                    </div>

                    <div className="id-group">
                        <label htmlFor="id6">Bare Nuclei:</label>
                        <input type="number" id="id6" placeholder=" ID6" value={id6} onChange={(e) => setId6(e.target.value)} step="any"/>
                        
                    </div>

                    <div className="id-group">
                        <label htmlFor="id7">Bland Chromatin:</label>
                        <input type="number" id="id7" placeholder=" ID7" value={id7} onChange={(e) => setId7(e.target.value)} step="any"/>
                        
                    </div>

                    <div className="id-group">
                        <label htmlFor="id8">Normal Nucleoli:</label>
                        <input type="number" id="id8" placeholder=" ID8" value={id8} onChange={(e) => setId8(e.target.value)} step="any"/>
                 
                    </div>

                    <div className="id-group">
                        <label htmlFor="id9">Mitoses:</label>
                        <input type="number" id="id9" placeholder=" ID9" value={id9} onChange={(e) => setId9(e.target.value)} step="any"/>
                       
                    </div>

                </div>
                
                <button className={`nxt-btn ${isClicked ? "clicked" : ""}`} onClick={ goToNext}
                    >
                    Predict
                </button>

            </div>
        </div>
    );
}


export default NextPage;
