import React from "react";
import { blog } from "../../../dummydata";
import { FaUserAlt } from "react-icons/fa";
import { AiFillCalendar, AiFillWechat } from "react-icons/ai";
import Heading from '../../common/Heading'

const BlogSection = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading subtitle = 'nosso blog' title='Últimos artigos' />
          <div className="grid2">
            {blog.slice(0, 3).map((val) => (
              <div className="items shadow">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <div className="admin flexSB">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
