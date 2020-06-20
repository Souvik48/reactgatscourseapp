import React from 'react'
import {Link} from 'gatsby'
import Heading from './Heading'

export default function InfoBlock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut atque reiciendis explicabo aspernatur voluptas aliquam voluptates quis,
                        quae quaerat sed doloremque repudiandae maiores eaque quas corporis ad magni exercitationem vel veniam harum quod non! Repellat id architecto
                        beatae atque quibusdam eum sint perferendis amet dignissimos,sunt consequuntur necessitatibus rem aperiam nulla dolore maiores rerum qui est
                        vel deserunt dolor.
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg text-white">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}


