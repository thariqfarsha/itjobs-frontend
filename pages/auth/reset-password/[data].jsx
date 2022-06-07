import React, { useState, useEffect } from "react";
// import bgImage from "/public/bg-login.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../store/action/auth";

export default function Login() {
  const router = useRouter();
  const { data } = router.query;
  // console.log(router);
  // console.log(data.split("-"));
  // const pin = data;
  // const asA = pin.split("-")[0];
  // console.log(pin);
  // console.log(asA);
  console.log(data);

  const [asA, setAsA] = useState("");
  // console.log(pin);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [form, setForm] = useState({
    keyChangePassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (!data) {
      return;
    }
    setForm({ ...form, keyChangePassword: data.split("-")[1] });
    setAsA(data.split("-")[0]);
  }, [data]);

  // const pin = data.split("-");

  // const form = () => {};

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log(form);
      await dispatch(resetPassword(form, asA));
    } catch (error) {
      console.log(error.response);
    }
  };

  console.log(form);
  console.log(asA);

  return (
    <>
      <div
        className="bg-light"
        // style={{
        //   backgroundColor: "var(--color-yellow)",

        //   minHeight: "100vh",
        // }}
      >
        <div className="container p-md-5 p-3 ">
          <div className="row ">
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
            <div className="col-md-6 ">
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
                {!auth.msg ? null : auth.isError ? (
                  <div className="alert alert-danger" role="alert">
                    {auth.msg}
                  </div>
                ) : (
                  <div className="alert alert-primary" role="alert">
                    {auth.msg}
                  </div>
                )}
                <form action="" className="mt-md-5" onSubmit={handleSubmit}>
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
                      name="newPassword"
                      value={form.newPassword}
                      onChange={handleChangeForm}
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
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChangeForm}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-warning text-light p-md-3 w-100 mt-md-5 mt-3"
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}