import "./Body.css"
import Component from "./Component";
import * as React from 'react';
function Body(){
    return(
    <div className="Body">
        <Component 
        title="Stomachache"
           id="01"
           image="https://virinchihospitals.com/wp-content/uploads/2019/02/stomachpain-1200x900.jpg"
             image1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6Unp-JzmQ_9jhc7_EUcb_-XUO7YrQTgPszzF11M2EA&s"
           image2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYvjMfr5txa2E0jk7J2XqpAbByYolLgy7pz4fH9uzKQ&s"
           image3="https://image.shutterstock.com/image-illustration/stomach-pain-anatomy-concept-600w-176963609.jpg"
           image4="https://image.shutterstock.com/z/stock-vector-sad-sick-man-food-poisoning-stomach-character-vector-flat-cartoon-illustration-icon-infographic-702300673.jpg"
         
           r1="1 Food Poisoning :
           Bacteria, viruses, and parasites in food cause this illness. You may have"
           r2="2 Stomach Virus:

           Also known as the stomach flu, this is a viral infection in your intestines. You may have watery diarrhea, cramps, or nausea, and you might throw up. You can get it from someone who has it or contaminated food.
           the reson for stomache could b."
           r3="3 Lactose Intolerance :
           
           Lactose is the sugar in milk and other dairy products. If you don’t have enough of an enzyme called lactase, your body can have trouble breaking it down. "
           
           i1="1 Feeling bloated, farting a lot"
          i2="2 Feeling full and bloated after eating, heartburn, feeling sick"
          i3="3 Cannot poo"

          s1="1 Drinking water. ..."
          s2="2 Ginger"
          s3="3 Avoiding Lying down"
          s4="4 Mint"
          
          d1="1 Have recurring or persistent pain"
          d2="2 Feel severe pain that worsens with movement"
          d3="3 Vomit or have bloody diarrhoea0"
          d4="4 Experience abdominal swelling"
           />
           <Component
                title="Covid-19"
                image="data:image/jpeg;base64,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"
                 image1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRZeo5CNh06NzYl3NKLIpM6xhsoxHxw02Nw&usqp=CAU"
                 image2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ncq3NtjBrBac2h1JdhB5tG9HFv3KxH8sGQ&usqp=CAU"
                 image3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0DT8VAU74FShwj6wnDdAgQ1ukpY1TGgAzZA&usqp=CAU"
                 image4="data:image/webp;base64,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"
                 r1="Data has shown that the COVID-19 virus spreads mainly from person to person among those in close contact (within about 6 feet, or 2 meters)."
                 r2="The virus spreads by respiratory droplets released when someone with the virus coughs, sneezes, breathes, sings or talks."
                 r3="Coronaviruses are a group of related viruses that cause diseases in mammals and birds."
                 i1="It is the largest category for an RNA virus. In most cases, it is difficult to detect if coronavirus or a different cold-causing virus is causing you fever."
                 i2="Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment."
                 i3="The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe."
                 s1="People with mild symptoms who are otherwise healthy should manage their symptoms at home."
                 s2=" On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days."
                 s3="There are strict protections in place to help ensure the safety of all COVID-19 vaccines. "
                 d1="Call your doctor's office if you develop the signature symptoms associated with COVID-19, including:Fever (above 100.4 Fahrenheit)
New cough
New shortness of breath"
                 d2="Before fever and lower respiratory symptoms emerge, other symptoms often occur, say UCI Health experts. They include:

Sore throat
Headache
Diarrhea
Nausea or vomiting
Loss of smell or taste"
                 d3="If you develop a fever, cough or shortness of breath, call your healthcare provider’s office. Your doctor will determine whether you should be seen by a physician, tested, go immediately to a medical facility or care for yourself at home."
                />
                <Component
                title="Blood Pressure "
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL3xi0HZenPYYxh5YDoBDvy06lZI72UrW8w&usqp=CAU"
                 image1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVvtPVXlUR5xwCpfFShMfMN7vnMZ7r6u1wQ&usqp=CAU"
                 image2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFIRl5D66u3yeUM9K35-s7iyL9woOarDfTA&usqp=CAU"
                 image3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ68hTqbKo6PqO4Ydj4XPcXddnmg1jbCJzzw&usqp=CAU"
                 image4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjYopL2XivJXCuOQIUni_YSRhcL-BV3YRIA&usqp=CAU"
                 r1="Things that can increase your risk of getting high blood pressure
are overweight."
                 r2="Eat too much salt and do not eat enough fruit and vegetables."
                 r3="Drink too much alcohol or coffee (or other caffeine-based drinks)
smoke."
                 i1="High blood pressure, also called hypertension, is blood pressure that is higher than normal."
                 i2="Your blood pressure changes throughout the day based on your activities."
                 i3=" Having blood pressure measures consistently above normal may result in a diagnosis of high blood pressure (or hypertension)."
                 s1="If you are trying to rapidly lower your blood pressure at home, dial 9-1-1 immediately."
                 s2="You cannot safely treat dangerous high blood pressure at home."
                 s3=" Your best move is to lie down flat and calm yourself until emergency help arrives."
                 d1="Seek emergency care if your blood pressure reading is 180/120 or higher "
                 d2="You have any of the following symptoms, which may be signs of organ damage: Chest pain. Shortness of breath. Numbness or weakness."
                 d3="Although high blood pressure does not usually cause symptoms, anyone experiencing a sudden, severe headache or nosebleed should check their blood pressure."
                />
          

                <Component
                title=""
                image=""
                 image1=""
                 image2=""
                 image3=""
                 image4=""
                 r1=""
                 r2=""
                 r3=""
                 i1=""
                 i2=""
                 i3=""
                 s1=""
                 s2=""
                 s3=""
                 d1=""
                 d2=""
                 d3=""
                />
                
    </div>
 );}

export default Body;