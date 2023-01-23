import React from "react"
import { blog } from "../../../dummydata"
import { FaUserAlt } from "react-icons/fa";
import { AiFillCalendar, AiFillWechat } from "react-icons/ai";
import '../styles.css'

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='text'>
            <div className='admin flexSB'>
            <span>
                  <FaUserAlt />
                  <label htmlFor="">{val.type}</label>
                </span>
                <span>
                  <AiFillCalendar />
                  <label htmlFor="">{val.date}</label>
                </span>
                <span>
                  <AiFillWechat />
                  <label htmlFor="">{val.com}</label>
                </span>
            </div>
            <h2>{val.title}</h2>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCard