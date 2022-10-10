import React, {PureComponent, useState} from 'react';
import './Style.css';
import ReactDOM from "react-dom/client";

class MyApp extends PureComponent {


    changeHeadText = () => {

        // @ts-ignore
        document.getElementById("htext").innerHTML = "Hello World!";

    }


    backToDefault = () => {


        // @ts-ignore
        document.getElementById("htext").innerHTML = "New Title";
    }


    render() {


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
                    }}>

                        <form>
                           <textarea id="ptext" className="description" required placeholder="new description"></textarea>
                        </form>

                    </div>

                    <div className="imageSection" >

                        <div  className="image">

                            <label className="imageSelecter" htmlFor="imgs">Click to Select an image</label>

                        </div>
                        <input className="input" id="imgs" type="file"/>

                    </div>

                    <button className="button" onClick={this.backToDefault}>Kaydet</button>


                </div>


            </div>

        )
    }


}

export default MyApp;

