@font-face
{
    font-family: "neo";
    src:url("fonts/NeoSansIntel.ttf") format("truetype"),
        url("fonts/NeoSansIntel-Italic.ttf") format("truetype"),
        url("fonts/NeoSansIntel-Light.ttf") format("truetype"),
        url("fonts/NeoSansIntel-LightItalic.ttf") format("truetype"),
        url("fonts/NeoSansIntel-Medium.ttf") format("truetype"),
        url("fonts/NeoSansIntel-MediumItalic.ttf") format("truetype"),
        url("fonts/Nexa Light.otf") format("truetype")
}
@font-face
{
    font-family: "neo2";
    src:url("fonts/NeoSansIntel-LightItalic.ttf") format("truetype")
}

* {
    margin: 0;
    padding: 0;
}

html,body{
    font-family: neo;
    height: 100%;
}

header{
    background-color: #0162B3;
    position: relative;
    z-index: 20;
    height: 8%;
    box-shadow: 0px 2px 5px #000;
}

.Titulo{
    color: yellow;
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

#main {
    box-sizing: border-box;
    width: 100%;
    height: 79%;
    background-image: url(images/image_2.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    display: flex;
    align-items:flex-end;
    justify-content:space-around;
    padding-bottom: 1em;
}
#main article{
    text-align: center;
    width: 60%;
    color: yellow;
}

#text{
    text-align: center;
    width: 60%;
    color: yellow;
}

footer{
    width: 100%;
    height: 12%;
    background-color: #0162B3;
    display: flex;
    align-items:center;
    justify-content:center;

}

footer img{
    height: 60px;
}

.image{
    position: fixed;
    width: 100%;
    height: 79%;
    z-index: 40;
    background: rgba(192,192,192,.4);
    top: 8%;
    left: 0;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}

hr {
    display: block; 
    height: 1px;
    border: 0; 
    border-top: 1px solid;
    border-color: #1D2029;
    margin: 0.2em 0; 
    padding: 0;
    background-color: #1D2029;
}

.ex2 img{
    height: 60%;
    width: 16%;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
}
.ex2 img:hover {
    height: 65%;
    width: 18%;
    opacity: 1;
    cursor: pointer;
}

#imgFull{
    display: flex;
    align-items:center;
    justify-content:center;
   
}

#fullImg{
    border: 1px solid white;
}

#move{
    font-family: neo2;
    font-size: 34px;
    color: #0078BB;
    background: rgba(180,200,204,.8);
    width: 6%;
    box-shadow: 0px 2px 5px #000;
    text-decoration:none;   
}

.thumb{
     opacity: 0.4;
}
