import React from 'react';
import './Style.css';
import db from "./firebase";
// @ts-ignore
import AddIcon from "./AddIcon";




//const ref = db.firestore().collection()

class MyApp extends React.Component {

    constructor() {
        // @ts-ignore
        super();
        this.state = {
            text: "",
            realText: "",
            image: "",
            show: false,
            show2: false,
        }
    }

    // photo format
    //  clone image

    // @ts-ignore
    getText = (e) => {
        this.setState({text: e.target.value})
    }

    changeHeadText = () => {

        // @ts-ignore
        document.getElementById("htext").innerHTML = "Hello World!";
    }

    // @ts-ignore
    backToDefault = (e) => {
        e.preventDefault();
        // @ts-ignore
        document.getElementById("htext").innerHTML = "New Title";
        // @ts-ignore
        document.getElementById("htextc").innerHTML = "Hello World!";
        this.setState({text: ""});
        // @ts-ignore
        this.setState({realText: this.state.text});
        this.setState({show: false})
        this.setState({show2: true})


    }
    // @ts-ignore
    imageLoad = (event) => {
        const reader = new FileReader();
        reader.onload = () => {

            if (reader.readyState === 0) {

                console.log("pick a file");

            } else if (reader.readyState === 1) {
                console.log("loading");


            } else if (reader.readyState === 2) {
                this.setState({image: reader.result})
                // @ts-ignore
                this.setState({show: true});
                this.setState({show2:false})

            }


        }
        reader.readAsDataURL(event.target.files[0]);
    }

    render() {
        // @ts-ignore
        const {show} = this.state;
        // @ts-ignore
        const {text} = this.state;
        // @ts-ignore
        const {realText} = this.state;
        // @ts-ignore
        const {image} = this.state;
        // @ts-ignore
        const {show2} = this.state;

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
                            <textarea value={text}
                                      className="description"
                                      placeholder="new description"
                                      onChange={(t) => {
                                          this.getText(t)
                                      }}
                            ></textarea>
                        </form>


                        <AddIcon/>


                    </div>


                    <div className="imageSection">
                        <div className="image">


                            {
                                show ? null : <label className="imageSelecter" htmlFor="imgs">Click to Select an image</label>
                            }


                            {
                                show ? <img className="photo" src={image} id="lastImage" alt="pickedImage"/> : null
                            }

                        </div>




                        <input type="file"
                               className="input"
                               id="imgs"
                            // @ts-ignore
                               acccept="image/*"
                               onChange={this.imageLoad}/>


                    </div>

                    <button className="button" onClick={this.backToDefault}>Kaydet</button>


                </div>


                <div className="line"/>


                <div className="headCustomclone" onClick={this.changeHeadText}>

                    <h1 className="headText" id='htextc'></h1>

                </div>


                <div className="keeper">
                    <div className="pTextclone" style={{
                        alignItems: 'start',
                        width: 600,
                        height: 250,
                        backgroundColor: 'gray',
                        marginLeft: 40,
                        marginTop: 40,
                        border: "solid",
                        borderRadius: 30,
                    }}>

                        <p style={{
                            textAlign: "center",
                            fontFamily: "cursive",
                            fontSize: 20
                        }}>{realText}</p>

                    </div>

                    <div className="imageSection">
                        <div className="image">


                            {
                                show2 ?  <img src={image} className="photo" alt="img"/> : null

                            }


                        </div>

                    </div>

                </div>

            </div>

        )
    }
}

export default MyApp;

