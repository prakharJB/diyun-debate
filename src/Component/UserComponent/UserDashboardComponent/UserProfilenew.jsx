import React from 'react'

export default function UserProfilenew() {
  return (
    <div className='container d-flex d-flex-gap'>
      <div class=" col-md-6  col-12 card pt-5 pb-5" >
  {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
  <div class="card-body">
    <h5 class="card-title  text-center">Card title</h5>

    <p class="card-text mb-0 fw-bold">Some </p>
    <h5 class="card-title ">Card title</h5>

    <p class="card-text mb-0 mt-3 fw-bold">Some quick </p>
    <h5 class="card-title">Card title</h5>

    <a href="#" class="w-100 btn btn-lg btn-outline-primary mt-3">Go somewhere</a>
  </div>
</div>
      <div className='col-sm-6'>
        <p class="fw-bold">test-page</p>
         <div className='d-flex d-flex-gap'>
           <div className='col-md-6  col-12 card-body text-center card mb-4'>
            <p>test-page</p>
           <h4>0</h4>
           </div>
           <div className='col-md-6  col-12 card-body text-center card mb-4'>
            <p>test-page</p>
            <h4>0</h4>
           </div>
        </div>
        <div className='d-flex d-flex-gap'>
        <div className='col-md-6  col-12 card-body text-center card mb-4'>
            <p>test-page</p>
            <h4>0</h4>
           </div>
           <div className='col-md-6  col-12 card-body text-center card mb-4'>
            <p>test-page</p>
            <h4>0</h4>
           </div>
        </div>
      </div>
  </div>
  )
}
