import React from 'react';
import './Page1.scss';

const Page1 = () => {
   return (
    <React.Fragment>
        <div className="overlay"></div>
        <article className="container-index">
            <h2>Cactus!</h2>
            <div className="wrap">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwRrH2ng6jMJy2naRYVQ_LyMfkN75598uwJg&usqp=CAU" />
                    <figcaption>Hermosito!</figcaption>
                </figure>
                <figure>
                    <img src="https://www.dhresource.com/0x0s/f2-albu-g6-M01-C8-F3-rBVaSFu27peAadxDAAJXfj2-KI4747.jpg/1pcs-artificial-de-plantas-suculentas-cactus.jpg"/>
                    <figcaption>Hermosito Too!</figcaption>
                </figure>
                <figure>
                    <img src="https://www.dhresource.com/0x0/f2/albu/g8/M00/E5/A9/rBVaVF2K18qAGLC2AALU4AT0grQ255.jpg/1-set-artificial-cactus-potted-pu-plant-with.jpg"/>
                    <figcaption>Hi!</figcaption>
                </figure>
                <figure>
                    <img src="https://ae01.alicdn.com/kf/HTB18ka1lyMnBKNjSZFzq6A_qVXaX/Planta-de-Cactus-verde-vivo-flores-artificiales-espinosas-suculentas-de-pera-bons-i-redondo-al-estilo.jpg"/>
                    <figcaption>Nice</figcaption>
                </figure>  
            </div>      
        </article>
    </React.Fragment>
    );
}

export default Page1;