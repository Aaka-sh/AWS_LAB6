import React, { useState } from "react";
import GuideNavBar from "./DashboardNavBar";
// import { createClient } from "@supabase/supabase-js";
import Axios from "axios";

export default function AddCases() {
  const [title, setTitle] = useState("");
  const [dor, setDor] = useState("");

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [dob, setDob] = useState("");

  const insertData = (event) => {
    event.preventDefault();

    Axios.post("http://localhost:3001/insertdets", {
      name: name,
      course: course,
      gender: gender,
      nationality: nationality,
      dob: dob,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="ml-5">
      <GuideNavBar />
      <main id="main" className="main" style={{ marginTop: "90px" }}>
        <div className="pagetitle">
          <h1>Add Student Details</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>

              <li className="breadcrumb-item active">Add Covid 19 Details</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}

        <section className="section profile">
          <div className="row">
            <div className="col-xl-11">
              <div className="card">
                <div className="card-body pt-3">
                  <form className="pl-5 pr-5 pt-3 pb-3">
                    <div className="row mb-3">
                      <label
                        htmlFor="title"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Name
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="title"
                          type="text"
                          className="form-control"
                          id="title"
                          defaultValue=""
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="dateofrecord"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Course
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="dateofrecord"
                          type="text"
                          className="form-control"
                          id="dateofrecord"
                          defaultValue=""
                          onChange={(e) => {
                            setCourse(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="noofsamples"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Gender
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="noofsamples"
                          type="text"
                          className="form-control"
                          id="noofsamples"
                          defaultValue=""
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="noofdeaths"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Nationality
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="noofdeaths"
                          type="text"
                          className="form-control"
                          id="noofpositive"
                          defaultValue=""
                          onChange={(e) => {
                            setNationality(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="noofpositive"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Date of Birth
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="noofpositive"
                          type="date"
                          className="form-control"
                          id="noofpositive"
                          defaultValue=""
                          onChange={(e) => {
                            setDob(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn col-md-8 mt-4"
                        style={{
                          backgroundColor: "#012971",
                          color: "white",
                        }}
                        onClick={(e) => {
                          insertData(e);
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  {/* End Profile Edit Form */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
