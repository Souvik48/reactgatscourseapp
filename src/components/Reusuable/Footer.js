import React from 'react'

export default function Footer() {
  //superman---> Must be same name as in the layout; Hint superman=Thor;
  return (
        //This is not HTML .This is JSX
        <footer>  
           <div className="footer-block">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 pt-2 mx-auto text-center bg-dark text-light">
                    <h6>Awesome copyright footer &copy; Souvik</h6>
                </div>
              </div>
            </div>
           </div>
           
        </footer>
    )
}
