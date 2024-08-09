import React from 'react'

const Header = () => {
    return (
        <div className=' container-fluid'>
            <div className='row  bg-dark'>
                <div className='col-6 p-2 '>
                 <a className='text-decoration-none text-light  mx-3' href=""> <i className="bi bi-envelope-at-fill"></i> vipmachineries@gmail.com</a>
                 <a className='text-decoration-none mx-3 text-light' href=""> <i class="bi bi-telephone-forward-fill"></i> 1234567890</a>
                </div>
                <div className='col-6 p-2' >
                  <div  className='d-flex justify-content-end'>
                  <a href=""><i className="bi bi-whatsapp text-light mx-2"></i></a>
                  <a href=""><i className="bi bi-facebook text-light  mx-2"></i></a>
                  <a href=""><i className="bi bi-instagram text-light  mx-2"></i></a>
                  <a href=""><i className="bi bi-google   text-light  mx-2"></i></a>
                  <a href=""><i className="bi bi-youtube   text-light  mx-2"></i></a>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Header
