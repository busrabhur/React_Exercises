import React from 'react'


export const Course = (props) => {
    const title=props.title;
    const desc=props.description;
    const img=props.image;
  return (
 <>
     <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
            <img src={img}/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                </div>
            </div>
            <div className="content">{desc}</div>
        </div>
    </div>
 </>
  );

}


