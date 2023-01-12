import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const state = useSelector((state: any) => state.posts)
  return (
    <>
      <div className="container px-sm-5 " id="custom-cards">

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3 ">
          {
            state.map((x: any) => <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/04/45/86/50/360_F_445865032_QCZ41m4dqHCbfFercZpC4qGCLyTgaixq.jpg')" }}>
                <div className="d-flex flex-column h-100 px-3 py-2 pb-3 text-white text-shadow-1">
                  <h4 className="pt-1 mt-5 mb-4 lh-1 fw-bolder">{x.title}</h4>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img src="https://t3.ftcdn.net/jpg/04/45/86/50/360_F_445865032_QCZ41m4dqHCbfFercZpC4qGCLyTgaixq.jpg" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                      <small>{x.typography.substr(0, 40)}</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em"><use href="#calendar3"></use></svg>
                      <small>3d</small>
                    </li>
                  </ul>
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