import Image from "next/image";
import React from "react";

function Home() {
  return (
    <div style={{ backgroundColor: "#F6F7F8", minHeight: "100vh" }}>
      <div className="container row mx-auto pt-4 ">
        <div className="col-12 col-md-3 bg-white px-4 pb-5 rounded">
          <div className="position-relative px-5 py-3 text-center">
            <Image
              src={"/vercel.svg"}
              layout="intrinsic"
              objectFit="cover"
              className="rounded-circle"
              width="150px"
              height="150px"
              alt=""
            ></Image>
          </div>
          <h4>Louis Tomlinson</h4>
          <h6 className="m-0">Web Developer</h6>
          <small className="text-black-50">
            Freelancer
            <br />
            <div className="mt-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt me-2 "
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              Purwokerto
            </div>
            <div className="mt-2 mb-2">088-080808</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
              Curabitur eu lacus fringilla, vestibulum risus at.
            </p>
          </small>
          <h4>Skill</h4>
          <div className="d-flex flex-wrap" style={{}}>
            {["python", "javascript", "C#", "php"].map((v, i) => (
              <>
                <div key={i}>
                  <button className=" btn btn-sm bg-warning text-white p-1 px-md-3 py-1 me-2 bg-opacity-50 border border-warning">
                    {console.log((i + 1) / 3 == 1 ? true : false)}
                    {v}
                  </button>
                </div>
                {(i + 1) % 3 == 0 ? <div className="w-100 mt-2"></div> : ""}
              </>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-8 mt-4 mt-md-0 ms-md-5 ">
          <h2 className="fw-bold">Hubungi Louis TOmlinson</h2>
          <small className="fw-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </small>

          <div className="mt-5">
            <label className="form-label fw-light">
              Tujuan tentang pesan ini
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mt-3 form-group position-relative">
            <label className="form-label fw-light">Example textarea</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <label
              className="position-absolute end-0 me-3"
              style={{ bottom: "6px" }}
            >
              icon
            </label>
          </div>
          <button className="btn btn-lg btn-warning w-100 mt-5 text-white">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
