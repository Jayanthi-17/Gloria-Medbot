
        const medicalData = {
            
                "fever": {
                    "symptoms": "High temperature, chills, sweating",
                    "medicines": "Paracetamol, Ibuprofen",
                    "precautions": "Stay hydrated, rest well, avoid cold exposure"
                },
                "cold": {
                    "symptoms": "Runny nose, sneezing, sore throat",
                    "medicines": "Antihistamines, Decongestants",
                    "precautions": "Drink warm fluids, rest, avoid dust"
                },
                "headache": {
                    "symptoms": "Pain in head, dizziness, sensitivity to light",
                    "medicines": "Aspirin, Ibuprofen, Paracetamol",
                    "precautions": "Avoid stress, drink plenty of water, rest"
                },
                "cough": {
                    "symptoms": "Persistent coughing, sore throat, chest discomfort",
                    "medicines": "Cough syrup, Lozenges, Antihistamines",
                    "precautions": "Avoid cold drinks, stay hydrated, rest well"
                },
                "diarrhea": {
                    "symptoms": "Frequent loose stools, dehydration, stomach pain",
                    "medicines": "Oral Rehydration Salts (ORS), Loperamide",
                    "precautions": "Drink plenty of fluids, avoid spicy foods, maintain hygiene"
                },
                "vomiting": {
                    "symptoms": "Nausea, stomach discomfort, dehydration",
                    "medicines": "Domperidone, Ondansetron",
                    "precautions": "Stay hydrated, eat light foods, avoid strong odors"
                },
                "flu": {
                    "symptoms": "Fever, body ache, fatigue, cough",
                    "medicines": "Antiviral drugs, Paracetamol",
                    "precautions": "Rest, drink warm fluids, avoid crowded places"
                },
                "stomach ache": {
                    "symptoms": "Abdominal pain, bloating, nausea",
                    "medicines": "Antacids, Buscopan",
                    "precautions": "Avoid spicy food, eat smaller meals, stay hydrated"
                },
                "hypertension": {
                    "symptoms": "High blood pressure, headache, dizziness",
                    "medicines": "Amlodipine, Losartan",
                    "precautions": "Reduce salt intake, exercise regularly, manage stress"
                },
                "diabetes": {
                    "symptoms": "Frequent urination, excessive thirst, fatigue",
                    "medicines": "Metformin, Insulin (if prescribed)",
                    "precautions": "Monitor blood sugar levels, maintain a balanced diet, exercise regularly"
                },
                "asthma": {
                    "symptoms": "Shortness of breath, wheezing, chest tightness",
                    "medicines": "Inhalers (Salbutamol), Corticosteroids",
                    "precautions": "Avoid allergens, use prescribed inhalers, practice breathing exercises"
                },
                "migraine": {
                    "symptoms": "Severe headache, nausea, sensitivity to light and sound",
                    "medicines": "Sumatriptan, Ibuprofen",
                    "precautions": "Avoid triggers, get enough sleep, stay hydrated"
                },
                "allergy": {
                    "symptoms": "Sneezing, itchy eyes, skin rashes",
                    "medicines": "Antihistamines, Nasal sprays",
                    "precautions": "Avoid allergens, keep surroundings clean, take prescribed meds"
                },
                "anemia": {
                    "symptoms": "Fatigue, pale skin, dizziness",
                    "medicines": "Iron supplements, Folic acid",
                    "precautions": "Increase iron-rich foods, avoid caffeine with meals, stay hydrated"
                },
                "heartburn": {
                    "symptoms": "Burning sensation in chest, acid reflux",
                    "medicines": "Antacids, Ranitidine",
                    "precautions": "Avoid spicy foods, eat smaller meals, don’t lie down immediately after eating"
                },
                "throatpain": {
    "symptoms": "Sore throat, difficulty swallowing, hoarseness",
    "medicines": "Lozenges, Ibuprofen, Throat sprays",
    "precautions": "Drink warm fluids, avoid cold drinks, gargle with salt water"
}
            }

            function handleChat() {
                let userInput = document.getElementById("user-input").value.toLowerCase().trim();
                let chatBox = document.getElementById("chat-box");
            
                if (!userInput) return;
            
                chatBox.innerHTML += `<p class="message user"><strong>You:</strong> ${userInput}</p>`;
            
                if (medicalData[userInput]) {
                    let data = medicalData[userInput];
                    chatBox.innerHTML += `<p class="message bot"><strong>Bot:</strong><br>Symptoms: ${data.symptoms}<br>Medicines: ${data.medicines}<br>Precautions: ${data.precautions}</p>`;
                } else {
                    chatBox.innerHTML += `<p class="message bot"><strong>Bot:</strong> Sorry, I don't have information on that. Please consult a doctor.</p>`;
                }
            
                document.getElementById("user-input").value = "";
                chatBox.scrollTop = chatBox.scrollHeight;
            }
            
