import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBlog, updatePost } from '../../Features/DataSlice'
import { template } from '../imgData'

const EditPost = () => {
  const dispatch = useDispatch()
  const state: any = useSelector(state => state)
  const navigate = useNavigate()


  const FormSubmit = (e: any) => {
    e.preventDefault()
    if (state.sessionIndex == -1) {
      alert('Login First!')
      navigate('/login')
    }
    let title = e.target.title
    let pic = e.target.pic
    let category = e.target.category
    let typography = e.target.typography
    let cnt = true
    if (category.value == 'Choose...') {
      category.style.borderColor = 'red'
      cnt = false
    } else {
      category.style.borderColor = ''
    }
    if (pic.value == 'Choose Image') {
      pic.style.borderColor = 'red'
      cnt = false
    } else {
      pic.style.borderColor = ''
    }
    if (cnt) {
      dispatch(updatePost({
        index:state.editIndex,
        title: title.value,
        author: state.users[state.sessionIndex].name,
        userid: state.sessionIndex,
        category: category.value,
        typography: typography.value, pic: pic.value
      }))
      alert('successfully submited.')
             navigate('/')
      e.target.reset()
    }
  }

  return (
    <>
      <small className='text-danger bold'>{(state.sessionIndex == -1) ? 'You have not logged in' : ''}</small>
      <form className='border border-dashed p-3 rounded bg-secondary bg-gradient' onSubmit={FormSubmit}>

        <h2 className='my-3 text-white'>+ Update Blog Post</h2>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
          <input defaultValue={state.posts[state.editIndex].title} required type="text" className="form-control" name='title' placeholder='Enter your title' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>

        <div className="input-group">
          <span className="input-group-text">Blog textarea</span>
          <textarea defaultValue={state.posts[state.editIndex].typography} required className="form-control" name='typography' aria-label="With textarea" placeholder='Enter Your Text Here...'></textarea>
        </div>

        <div className="input-group my-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
          <select defaultValue={state.posts[state.editIndex].category} className="form-select" id="inputGroupSelect01" name='category' required>
            <option selected>Choose...</option>
            <option value="Technolgy">Technolgy</option>
            <option value="Space & Science">Space & Science</option>
            <option value="News">News</option>
            <option value="Sports">Sports</option>
            <option value="Life Style">Life Style</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
          </select>
        </div>

        <div className="input-group my-3">

          <select defaultValue={state.posts[state.editIndex].pic} className="form-select" id="inputGroupSelect02" name='pic' required>
            <option selected>Choose Image</option>
            {
              template.map(x => <option value={x}>{x}</option>)
            }
          </select>
          <label className="input-group-text " htmlFor="inputGroupSelect02">
            Choose any image
          </label>
        </div>
        <div className="input-group my-3 col-12 d-flex justify-content-between flex-wrap">
          {
            template.map(x => <div className="col-sm-3  d-flex flex-column  align-items-center">
              <img src={x} className='col-12' style={{ width: '100px', height: '100px' }} alt="" />
              <p className='text-center'>{x}</p>
            </div>)
          }

        </div>

        <button type="submit" className="btn btn-primary my-3 col-12">Submit</button>

      </form>
    </>

  )
}

export default EditPost