import React, { Component } from 'react'
import Heading from '../Reusuable/Heading'
import Img from 'gatsby-image'

const getCaty = items => {
    let holdItems = items.map(items => {
        return items.node.category
    })//It holds the category
    let holdCategories = new Set(holdItems) //holding all the unique categories
    let categories = Array.from(holdCategories) //making an array to loop through it
    categories = ['all',...categories] //concatenate all at the front of array
    //and all this existing value is going to add.
    //ES-7 version of array
    return categories
} 

export default class Coursecart extends Component {
    constructor(props){
        super(props)
        this.state={
            courses: props.courses.edges,
            mycourses: props.courses.edges,
            mycategories: getCaty(props.courses.edges)
        }
    }

    catyClicked = category => {
        let keepitsafe = [...this.state.courses]

        if(category === "all"){
             this.setState(() => {
                 return{
                     mycourses: keepitsafe
                 }
             })
        }
        else{
            let holdme = keepitsafe.filter(({node}) => 
                 node.category === category)
                 this.setState(() => {
                     return {mycourses: holdme}
                 })
             
        }
    }


    render() {
        //console.log(this.state.courses);
        
    return(
      <section className="py-5">
        <div className="container">
        <Heading title="Courses"/>
        <div className="row my-3">
         <div className="col-10 mx-auto text-center">
           {  //this is how you access each and everything in react
               this.state.mycategories.map((category,index) => {
                return(
                <button
                type="button"
                className="btn btn-info m-3 px-3"
                key={index} //good idea to have key as react know 
                //you are not iterating the same item again and again
                onClick={() => {
                    this.catyClicked(category)
                }} 
                >
                {category}
                </button>
                   )
               })
           }
         </div>
        </div>
        <div className="row">
        {this.state.mycourses.map(({node}) => {

        return(
            <div
            key={node.id}
            className="col-11 col-md-6 d-flex my-3 mx-auto"
            >
             <Img fixed={node.image.fixed} />
            
               <div class="flex-grow-1 px-3">
                <div class="d-flex justify-content-between">
                <h4 class="mb-0">{node.title}</h4>
                <h4 class="mb-0 text-success">$$ {node.price}</h4>

                </div>
                <p className="text-muted">
                    <small>{node.description.description}</small>
                </p>
                <button 
                data-item-id={node.id}
                data-item-name={node.title}
                data-item-price={node.price}

                data-item-url="https://souviksco.netlify.app/"
                data-item-image={node.image.fixed.src}
                
                className="btn btn-warning snipcart-add-item">Join Now</button>                   
               </div>
               </div>
            )
         })

                      }
                    </div>
              </div>
            </section>
        )
    }
}
