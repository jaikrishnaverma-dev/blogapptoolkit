import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteBlog, setEditIndex } from '../Features/DataSlice'
import { Mypost, Mystate } from './MainTypeScript'

const Home = () => {
  const state: Mystate = useSelector((state: Mystate) => state)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const Deletor = (index: number) => {
    if (state.posts[index].userid == state.sessionIndex) { 
    if(window.confirm("are you sure to delete this post ?"))
    {
      dispatch(deleteBlog(index)) 
    }
  }
    else
      alert('you are not authorised on this post.')
  }

  const Editor = (index: number) => {
    
    if (state.posts[index].userid == state.sessionIndex) {
      if(window.confirm("are you sure to edit this post ?"))
      {
        dispatch(setEditIndex(index))
      navigate('/edit_post')
    }
    }
    else
      alert('you are not authorised to take action on this post.')
  }


  return (
    <>
      <div className="container px-sm-5 " id="custom-cards">

        <div className="row row-cols-1 row-cols-lg-1 align-items-stretch g-4 py-3 parents">
          {
            state.posts.map((x:Mypost, i: number) =>
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="col-12 d-flex justify-content-between align-items-center">
                  <small className=" m-2 bold" style={{ color: 'grey' }}>Date:&nbsp; {x.date}</small>
                <small className='m-2 bold'>Author: {x.author}</small>
                  <p className='m-0'><i onClick={() => Editor(i)} className="bi bi-pencil-fill mx-2"></i> <i onClick={() => Deletor(i)} className="bi bi-trash-fill mx-2"></i></p>
                </div>

                <div className="accordion-item shadow">
                  <h2 className="accordion-header" id={`panelsStayOpen-heading${i}`}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${i}`} aria-expanded="true" aria-controls={`panelsStayOpen-collapse${i}`}>

                      <div className="d-flex justify-content-between col-11 align-items-center">
                        <h5> # {x.title} </h5>

                      </div>
                    </button>

                  </h2>
                  <div id={`panelsStayOpen-collapse${i}`} className="accordion-collapse collapse show" aria-labelledby={`panelsStayOpen-heading${i}`}>
                    <img src={x.pic} className='p-3' alt="" style={{ maxWidth: '300px', maxHeight: '250px' }} />
                    <div className="accordion-body">
                      {x.typography}
                    </div>
                  </div>
                </div>
              </div>)
          }
        </div>
      </div>
    </>
  )
}

export default Home