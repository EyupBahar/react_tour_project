
import React from 'react';
import {data} from '../../helpers/data';
import "./Card.css"

const Card = () => {
    return(
        <div className="card-container">
            {data.map((card, index) => {
                return (
                    <div className="cards" key={index}>
                        <div className="title">
                            <h2>{card.title}</h2>
                        </div>
                        <img src={card.image} alt={card.title}/>
                        
                        <div className="card-over">
                            <p>{card.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        
    )
}

export default Card;



// {/* <img className="img" src='' alt="New York" /> */}
// <div className="card-content1">
// <h2 className="title">New York</h2>
// <p className="description">Some conversitions Are like Paris lkjljkljljghjgljhgjhgljhbjhbjhbjhbjhblhbl</p>
// <button className="card-btn">Read More</button>
// </div>

// <div className="card-content2">
// {/* <img className="img" alt="New York" /> */}
// <h2 className="title">Philippines</h2>
// <p className="description">Some conversitions Are like Paris lkjljkljljghjgljhgjhgljhbjhbjhbjhbjhblhbl</p>
// <button className="card-btn">Read More</button>
// </div>

// <div className="card-content3">
// <h2 className="title">Bali</h2>
// <p className="description">Some conversitions Are like Paris lkjljkljljghjgljhgjhgljhbjhbjhbjhbjhblhbl</p>
// <button className="card-btn">Read More</button>
// </div>

// <div className="card-content4">
// <h2 className="title">Egypt</h2>
// <p className="description">Some conversitions Are like Paris lkjljkljljghjgljhgjhgljhbjhbjhbjhbjhblhbl</p>
// <button className="card-btn">Read More</button>
// </div>

// <div className="card-content5">
// <h2 className="title">Cappadocia</h2>
// <p className="description">Some conversitions Are like Paris lkjljkljljghjgljhgjhgljhbjhbjhbjhbjhblhbl</p>
// <button className="card-btn">Read More</button>
// </div>

// <div className="card-content6">
// <h2 className="title">Paris</h2>
// <p className="description">Some conversitions Are like Paris lkjljkljljghjgljhgjhgljhbjhbjhbjhbjhblhbl</p>
// <button className="card-btn">Read More</button>
// </div>

// <div className="card-content7">
// <h2 className="title">Venice</h2>
// <p className="description">Some conversitions Are like Paris lkjljkljljghjgljhgjhgljhbjhbjhbjhbjhblhbl</p>
// <button className="card-btn">Read More</button>
// </div>

// <div className="card-content8">
// <h2 className="title">India</h2>
// <p className="description">Some conversitions Are like Paris lkjljkljljghjgljhgjhgljhbjhbjhbjhbjhblhbl</p>
// <button className="card-btn">Read More</button>
// </div>

// <div className="card-content9">
// <h2 className="title">Northern Lights</h2>
// <p className="description">Some conversitions Are like Paris lkjljkljljghjgljhgjhgljhbjhbjhbjhbjhblhbl</p>
// <button className="card-btn">Read More</button>
// </div>

// </div>
