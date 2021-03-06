import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="bg-light vh-100">
        <div className="container p-5 h-100">
          <div className="row h-100">
            <div className="col-md-6 d-none d-md-block">
              <div
                // className="col-md-6 d-none d-md-block"
                style={{
                  // backgroundImage: `url(/bg-login.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  // background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(/bg-login.png)`,
                  backgroundImage: `linear-gradient(rgba(94, 80, 161, 0.8)100%, rgba(94, 80, 161, 0.5)100%),url(/bg-login.png)`,
                  boxSizing: "border-box",
                  // border: "1px solid",
                  minHeight: "100%",
                  // backgroundColor: "black",
                }}
              >
                <div className="p-5">
                  <Image
                    src="/logo_login.png"
                    width={150}
                    height={50}
                    alt="logo"
                  />

                  <div
                    // className="d-flex justify-content-center align-items-center border"
                    style={{ marginTop: "50%" }}
                  >
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
            </div>
            <div className="col-md-6 h-100">
              <div className="d-md-none pb-5">
                <Image
                  src="/logo_login_mobile.png"
                  width={100}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="p-md-5">
                <h2>Hello, PewPeople </h2>
                <p className="my-md-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <form action="" className="mt-md-5">
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Kata Sandi Baru
                    </label>
                    <input
                      type="text"
                      className="form-control p-md-3"
                      id="formGroupExampleInput"
                      placeholder="Masukan Kata Sandi Baru"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput2"
                      className="form-label"
                    >
                      Konfirmasi Kata Sandi Baru
                    </label>
                    <input
                      type="text"
                      className="form-control p-md-3"
                      id="formGroupExampleInput2"
                      placeholder="Masukan Konfirmasi Kata Sandi Baru"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-warning text-light p-md-3 w-100 mt-md-5 mt-3"
                  >
                    Reset Password
                  </button>
                  \
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
