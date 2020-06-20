import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'


export default function DualInfoBlock({heading,img}) {
    return (
        <section className="my-4 py-4 bg-theme">
        <div className="container">
            <Heading title={heading}/>
            <div className="row">
            <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error dignissimos,
            porro soluta quaerat sunt, adipisci obcaecati alias odio tempore recusandae praesentium 
            ex nam tenetur blanditiis voluptatem! Cumque sequi, aliquid omnis optio sed nisi quidem labore 
            asperiores quod architecto,minus nobis maiores,voluptates modi qui! Quisquam, illo! Sapiente,
            corporis fugit? 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum culpa corporis nobis est numquam aspernatur.
            Sint, minus mollitia sit impedit porro, vitae provident neque tempore quod magni optio dolore labore doloribus 
            cupiditate hic, deleniti laudantium fugiat libero blanditiis quae eius ut quis quidem iure? Voluptatibus ullam 
            molestiae aliquam cupiditate, hic illum. Quasi atque quos dignissimos quas consequuntur, quae vitae consequatur
            ratione animi natus odit et, quaerat, itaque nisi placeat dolorem voluptas labore optio aspernatur quidem impedit
            aut nemo? Ad neque reprehenderit adipisci debitis quasi voluptatum cumque vitae rerum corrupti! Doloremque nulla
            accusamus necessitatibus quae aut minima voluptatibus doloribus ducimus! Totam.
            </p>
            </div>
            <div className="col-4">
                <div className="card bg-dark">
                <img src={img} 
                    className="card-img-top" 
                    altName="Image goes here"
                    />
                <div className="card-body">
                    <h5 className="card-title text-warning">Just Click Photos</h5>
                    <p className="card-text text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Placeat corrupti, unde debitis repudiandae sit commodi 
                    laborum ex a doloribus sequi aliquid, fugit quia molestias
                    quos quisquam nisi. Iure, saepe vero?
                    </p>
                    <a href="#" className="btn btn-warning btn-block">
                    {heading}
                    </a>
                </div>
            </div>

            </div> 
            </div>
        </div>
        </section>
    )
}
