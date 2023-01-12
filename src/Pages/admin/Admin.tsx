import React from 'react'

const Admin = () => {
  return (
    <form className='border border-dashed p-3 rounded'>
     <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder='Enter The Title Here... ' aria-label="Text input with dropdown button" />
  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select Category</button>
  <ul className="dropdown-menu dropdown-menu-end">
    <li><a className="dropdown-item" href="#">Technolgy</a></li>
    <li><a className="dropdown-item" href="#">Space & Science</a></li>
    <li><a className="dropdown-item" href="#">News</a></li>
    <li><a className="dropdown-item" href="#">Sports</a></li>
    <li><a className="dropdown-item" href="#">Life Style</a></li>
    <li><a className="dropdown-item" href="#">Travel</a></li>
    <li><a className="dropdown-item" href="#">Food</a></li>
  </ul>
</div>
      <div className="input-group">
        <span className="input-group-text">Blog textarea</span>
        <textarea className="form-control" aria-label="With textarea" placeholder='Enter Your Text Here...'></textarea>
      </div>
      <div className="d-flex col-12 justify-content-end">
      <button type="submit" className="btn btn-primary my-3  ">Submit</button>
      </div>
    </form>
  )
}

export default Admin