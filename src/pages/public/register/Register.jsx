import React, { useState } from 'react';
import "./register.css";

export default function Register() {
    return (
        <>
            <div className='t-form-container d-flex justify-content-center align-items-center'>
                <div className="form-container-item w-100">
                    <div className="form-container-content d-flex justify-content-center align-items-center">
                        <div className='form-container-left-up'>
                            <div className="form-left-content-up">
                                <h1>Đăng ký</h1>
                                <p>Bạn đã có tài khoản?</p>
                                {/* <Link to={"/login"}> <button className="t-btn btn-signin" >Đăng nhập</button></Link> */}
                                <button className="t-btn btn-signin" >Đăng nhập</button>
                                <div className="d-flex w-100 justify-content-center align-items-center gap-5 fs-3  mt-2 fw-semibold">
                                    {/* <Link to={"/"} className='text-white mt-2 fw-semibold text-color'>Quay lại trang chủ</Link> */}
                                </div>
                            </div>
                        </div>
                        <div className='form-container-right-up'>
                            <form className="form-content d-flex flex-column">
                                <div>
                                    <input name="fullname" type="text" placeholder="Họ và tên *"
                                    />

                                </div>
                                <div>
                                    <input name="email" type="text" placeholder="Email *"
                                    />

                                </div>
                                <div>
                                    <input name="address" type="text" placeholder="Địa chỉ" />
                                </div>
                                <div>
                                    <input name="phoneNumber" type="text" placeholder="Số điện thoại" />
                                </div>
                                <div>
                                    <input name="password" type="password" placeholder="Mật khẩu *"
                                    />

                                </div>
                                <div>
                                    <input name="confirmPassword" type="password" placeholder="Nhập lại mật khẩu *"
                                    />

                                </div>
                                <div className="form-check form-check-inline d-flex align-items-center justify-content-center mt-1 mb-1">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        value="option1"

                                    />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1" style={{ fontSize: 14 }}>
                                        Bạn có đồng ý với <a href="#" className='text-primary'>điều khoản</a> của chúng tôi?
                                    </label>
                                </div>
                                <button type='submit' className="t-btn btn-register">Đăng ký</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
