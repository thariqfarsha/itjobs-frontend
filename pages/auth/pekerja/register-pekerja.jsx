import React from "react";
// import bgImage from "/public/bg-login.png";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPekerja() {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--color-background)",

          //   minHeight: "100vh",
        }}
      >
        <div className="p-md-5 p-3 vh-100">
          <div className="row g-0 h-100">
            <div
              className="col-6 h-100 d-none d-md-block"
              style={{
                // backgroundImage: `url(/bg-login.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                // background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(/bg-login.png)`,
                backgroundImage: `linear-gradient(rgba(94, 80, 161, 0.8)100%, rgba(94, 80, 161, 0.5)100%),url(/bg-login.png)`,
                // border: "1px solid",
                // height: "100%",
                // backgroundColor: "black",
              }}
            >
              <div className="p-5 h-100">
                <Image
                  src="/logo_login.png"
                  width={150}
                  height={50}
                  alt="logo"
                />

                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                  <div className="">
                    {/* <Image src="/logo_login.png" width={150} height={50} /> */}
                  </div>

                  <h1 className="text-light">
                    Temukan developer berbakat & terbaik di berbagai bidang
                    keahlian
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-md-6 h-100">
              <div className="d-md-none pb-5 mb-4">
                <Image
                  src="/logo_login_mobile.png"
                  width={100}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="p-md-5 mx-md-5">
                <h2>Hello, PewPeople </h2>
                <p className="my-md-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Masukan Nama Panjang"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Masukan Alamat Email"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
                    No HandPhone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Masukan No HandPhone"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
                    Kata Sandi
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Masukan Kata Sandi"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
                    Konfirmasi Kata Sandi
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Masukan Konfirmasi Kata Sandi"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
