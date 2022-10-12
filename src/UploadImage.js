import React, {useState} from 'react';


const UploadImage = () => {


    const [data, setData] = useState(null);
    console.log(data)




    return(


        <input className="input"
               id="imgs"
               readOnly={true}
               type="file"
               acccept="image/png, image/jpeg, .txt, .doc"
               onChange={(e) => setData(e.target.files)} />
    )
}

export default UploadImage;
