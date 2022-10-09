import React, {PureComponent} from 'react';
import './Style.css';
import ReactDOM from "react-dom/client";

class MyApp extends PureComponent {


    changeHeadText = () => {

        // @ts-ignore
        document.getElementById("htext").innerHTML = "Yapay Zekâ";

    }

    changeParagText = () => {


        // @ts-ignore
        document.getElementById("text").innerText = "Yapay zekâ kavramının geçmişi modern bilgisayar bilimi kadar eskidir. Fikir babası, Makineler düşünebilir mi? sorunsalını ortaya atarak makine zekâsını tartışmaya açan Alan Mathison Turing'dir. 1943'te II. Dünya Savaşı sırasında Kripto analizi gereksinimleri ile üretilen elektromekanik cihazlar sayesinde bilgisayar bilimi ve yapay zekâ kavramları doğmuştur.";

    }

    backToDefault = () => {

        // @ts-ignore
        document.getElementById("htext").innerHTML = "New Title";
        // @ts-ignore
       document.getElementById("text").innerHTML = "new description";

    }


    render() {

        // @ts-ignore
        const root = ReactDOM.createRoot(document.getElementById('root')); // Aynı  aşağının kopyasını yapıştır en üste paragraf yerine inputlar ekle o inputların datasını al en altta ki p ve h ye buton araçıyla yapıştır
        //root.render(<h1>Hello, world!</h1>);  bu kodu boş bi projede test et
        return (

            <div className="main_menu">


                <div className="headCustom" onClick={this.changeHeadText}>

                    <h1 className="headText" id='htext'>New Title</h1>

                </div>


                <div className="keeper">

                    <div className="pText" style={{
                        alignItems: 'start',
                        width: 600,
                        height: 250,
                        backgroundColor: 'gray',
                        marginLeft: 40,
                        marginTop: 40,
                        border: "solid",
                        borderRadius: 30,
                    }} onClick={this.changeParagText}>
                        <p id="text" style={{textAlign: "center", fontFamily: "cursive", margin: 10}}><strong>new
                            description</strong></p>


                    </div>

                    <div className="imageSelect"></div>

                    <button className="button" onClick={this.backToDefault}>Kaydet</button>


                </div>


            </div>

        )
    }


}

export default MyApp;

