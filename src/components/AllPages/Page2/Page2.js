import React from 'react';
import './Page2.scss';

const Page2 = () => {
   return (
    <React.Fragment>
        <div className="overlay"></div>
        <article className="container-index-2">
            <h2>Orquídeas!</h2>
            <div className="wrap">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHE9RZXUVZVSIkoIA5RPVUxDsSxzDscIVLqg&usqp=CAU" />
                    <figcaption>única!</figcaption>
                </figure>
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2DN1TGdnKeH7XgQeT_0Ix_eEtVxEICe-JQw&usqp=CAU"/>
                    <figcaption>the best!</figcaption>
                </figure>
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVKsWMDOsR53wL5oqNwg_X1b7LkFR3iEa_iw&usqp=CAU"/>
                    <figcaption>increible</figcaption>
                </figure>
                <figure>
                    <img src="https://www.larepublica.net/storage/images/2020/08/18/20200818072927.orquideas.jpg"/>
                    <figcaption>nice</figcaption>
                </figure>  
            </div>      
        </article>
    </React.Fragment>
    );
}

export default Page2;