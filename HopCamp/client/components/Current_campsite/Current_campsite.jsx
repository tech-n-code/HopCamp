import styles from "./Current_campsite.module.css";
import ShareComponent from './ShareComponent';
import {useEffect, useState} from 'react'
function Current_campsite() {
  //const [reviewCount,setReviewCount] = useState(0);
  return (
    <div className={styles.currentCampSite}>
      <nav className={`${styles.navState} fw-bolder`} aria-label="breadcrumb">
        <ol className="breadcrumb m-0">
          <li className="breadcrumb-item">
            <a href="https://www.hipcamp.com/en-US/d/united-states/camping/all" className="text-body-secondary">United States</a>
          </li>
          <li className="breadcrumb-item">
          <a href="https://www.hipcamp.com/en-US/d/united-states/california/camping/all" className="text-body-secondary">California</a>
          </li>
        </ol>
      </nav>
      <div id="title">
        <h1>Salmon Creek Ranch</h1>
      </div>
      <div id="rating">
        <ol className="d-flex gap-1 align-items-center p-0">
          <li className="d-flex ">
            <svg
              viewBox="0 0 512 512"
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"></path>
            </svg>
          </li>
          <span className="fw-bold">98%</span>
          <span className="fw-bold fs-5">·</span>
          <li className="fw-bold" role="button">
            <a href="https://www.hipcamp.com/en-US/land/california-salmon-creek-ranch-4kk9hl90/reviews">1098 reviews</a>
          </li>
          <span className="fw-bold fs-5">·</span>
          <li>Bodega Bay, California</li>
        </ol>
      </div>
      <div id="buttonGroup">
        <ol className="d-flex gap-3 p-0"> 
        <button className={`ps-4 pe-4 fw-semibold rounded-3 ${styles.btOrange}`}> <a
            href='#campSites' className='text-white text-decoration-none'
          >
            See available sites
          </a></button>

          <div className="btn-group">
            <button
              className={`p-2 ps-4 pe-4 fw-semibold rounded-3 dropdown ${styles.btNormal}`}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                className="me-2"
                width="24px"
                height="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.05429 8.99995C6.66377 8.60942 6.66377 7.97626 7.05429 7.58573L11.2969 3.34309L12.004 2.63599L12.7111 3.34309L16.9538 7.58573C17.3443 7.97626 17.3443 8.60942 16.9538 8.99995C16.5633 9.39047 15.9301 9.39047 15.5396 8.99995L13.0039 6.4643L13.0039 13.9497C13.0039 14.502 12.5562 14.9497 12.0039 14.9497C11.4516 14.9497 11.0039 14.502 11.0039 13.9497L11.0039 6.46453L8.46851 8.99995C8.07798 9.39047 7.44482 9.39047 7.05429 8.99995ZM5 13V18H19V13C19 12.4477 19.4477 12 20 12C20.5523 12 21 12.4477 21 13V19C21 19.0345 20.9983 19.0686 20.9948 19.1023C20.9436 19.6065 20.5178 20 20 20C19.9993 20 19.9987 20 19.998 20H4.00197H4C3.49026 20 3.0696 19.6186 3.00781 19.1256C3.00527 19.1053 3.00334 19.0849 3.00203 19.0642C3.00068 19.043 3 19.0216 3 19V13C3 12.4477 3.44772 12 4 12C4.55228 12 5 12.4477 5 13Z"
                  fill="currentColor"
                ></path>
              </svg>
              Share
            </button>
            <div className="shadow dropdown-menu text-center rounded-3 mt-2 p-4" style={{width:'550px'}} id='dropdown-Share'>
              <ShareComponent />
            </div>
            
          </div>
          <button
            className={`p-2 ps-4 pe-4 fw-bold rounded-3 ${styles.btNormal}`}
            data-bs-toggle='modal'
            data-bs-target='#saveModal'
          >
            <svg
              className="me-2"
              width="24px"
              height="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.95 5C5.70019 5 4 6.69199 4 8.79564C4 10.1046 4.59841 11.376 5.87347 12.8862C7.15894 14.4088 9.01689 16.0437 11.355 18.0978L11.3565 18.0991L12.0025 18.6689L12.6442 18.1072C12.6445 18.1069 12.6449 18.1066 12.6452 18.1063C14.9831 16.0481 16.8408 14.4113 18.1263 12.8876C19.4016 11.376 20 10.1046 20 8.79564C20 6.69199 18.2998 5 16.05 5C15.617 5 15.0758 5.24715 14.4376 5.76761C13.818 6.27296 13.2495 6.91556 12.7511 7.48254L12 8.33705L11.2489 7.48254C10.7505 6.91556 10.182 6.27296 9.56237 5.76761C8.92419 5.24715 8.38298 5 7.95 5ZM2 8.79564C2 5.52817 4.65581 3 7.95 3C9.08302 3 10.0763 3.60598 10.8264 4.21768C11.2522 4.56495 11.6488 4.95574 12 5.32861C12.3512 4.95574 12.7478 4.56495 13.1736 4.21768C13.9237 3.60598 14.917 3 16.05 3C19.3442 3 22 5.52817 22 8.79564C22 10.7826 21.0684 12.5019 19.6549 14.1773C18.2693 15.8197 16.3116 17.5432 14.0509 19.5334L13.9658 19.6083L13.9636 19.6102L11.9975 21.3311L10.0335 19.599L9.97218 19.5451C7.70184 17.5506 5.73575 15.8234 4.34528 14.1764C2.93159 12.502 2 10.7826 2 8.79564Z"
                fill="currentColor"
              ></path>
            </svg>
            Save
          </button>
        </ol>
      </div>
      
      
      {/*modal*/}
      <div className="modal fade" id='saveModal' tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content p-3">
      <div className="modal-header">
        <div className="pb-4">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <h1 className="modal-title fs-3 pt-3" id="exampleModalLabel">Save to list</h1>
        </div>
        
        
      </div>
      <div className="modal-body">
        <div>
          <div className="d-flex align-items-center gap-3">
          <img className="border border-dark p-3" src='https://static.vecteezy.com/system/resources/previews/000/376/259/original/plus-vector-icon.jpg'></img>
              <h5 className="fw-bold">Create new list</h5>
          </div>
          <div className="d-flex align-items-center gap-3 pt-4">
          <img className="border border-dark p-3" src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png'></img>
              <h5 className="fw-bold">Favorites</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>

  );
}
export default Current_campsite;

