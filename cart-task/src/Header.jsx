import React from "react";

export default function Header() {
  return (
    <>
      <header className="bg-dark py-2">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
          <img src="https://freedesignfile.com/upload/2020/08/Illustration-isometric-online-shopping-vector.jpg" alt="logo"
          height="400px" width="500px"/>
             <h1 className="display-4 fw-bolder">Rithvik Electronics</h1>
             <p className="lead fw-normal text-white-50 mb-0">
             Get some of the Newest and 
             Greatest Electronic Appliances at Rithvik Electronics -
              Enjoy Maximum Discounts and Savings! ...
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
