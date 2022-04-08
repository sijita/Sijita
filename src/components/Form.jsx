/* eslint-disable no-restricted-globals */
import React from "react";
import { useState } from "react";
import { XyzTransition } from "@animxyz/react";
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import "../styles/footerStyles.css";

function TextInput({ type = "text", label }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container mb-4">
      <input
        autoComplete="off"
        name="name"
        type={type}
        value={value}
        onChange={handleChange}
        className="bg-dark text-light"
        required
      />
      <label
        className={`${value && "filled"} d-flex align-items-center gap-2`}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
}

function EmailInput({ type = "email", label }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container mb-4">
      <input
        id="email_address"
        autoComplete="off"
        name="email"
        type={type}
        value={value}
        onChange={handleChange}
        className="bg-dark text-light"
        required
      />
      <label
        className={`${value && "filled"} d-flex align-items-center gap-2`}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
}

function TextAreaInput({ type = "text", label }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container mb-4">
      <input
        autoComplete="off"
        name="message"
        type={type}
        value={value}
        onChange={handleChange}
        className="bg-dark text-light border-0"
        style={{ height: "100px" }}
        required
      ></input>
      <label
        className={`${value && "filled"} d-flex align-items-center gap-2`}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
}

export default function Form() {
  return (
    <div
      className="container p-5"
      style={{ color: "#f6fafd", overflow: "hidden" }}
    >
      <svg width="0" height="0">
        <linearGradient id="green-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#baff29" offset="0%" />
          <stop stopColor="#3fea2f" offset="100%" />
        </linearGradient>
      </svg>

      <section className="d-flex justify-content-center mb-4 mx-auto rounded">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="text-center"
          style={{ width: "100%", maxWidth: "500px" }}
        >
          <input
            type="hidden"
            name="apikey"
            value="1c25ad89-19c2-4dfb-a2f3-e6bd8a269075"
          />
          <input
            type="hidden"
            name="subject"
            value="Nuevo mensaje de la pagina web"
          />
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          <input type="checkbox" name="botcheck" className="d-none" />
          <XyzTransition appearVisible xyz="fade-100% up-100% duration-30">
            <div>
              <h2 className="mb-5 text-white">¡Envíame un correo!</h2>
            </div>
          </XyzTransition>
          <XyzTransition appearVisible xyz="fade-100% down-50% duration-15">
            <div>
              <TextInput
                label={[
                  <AiOutlineUser
                    style={{
                      fill: "url(#green-gradient)",
                      backgroundColor: "transparent",
                      width: "15px",
                    }}
                  />,
                  " Nombre",
                ]}
              />
            </div>
          </XyzTransition>
          <XyzTransition
            appearVisible
            xyz="fade-100% down-50% duration-15 delay-5"
          >
            <div>
              <EmailInput
                label={[
                  <AiOutlineMail
                    style={{
                      fill: "url(#green-gradient)",
                      backgroundColor: "transparent",
                      width: "15px",
                    }}
                  />,
                  " Correo",
                ]}
              />
            </div>
          </XyzTransition>
          <XyzTransition
            appearVisible
            xyz="fade-100% down-50% duration-15 delay-5"
          >
            <div>
              <TextAreaInput
                label={[
                  <AiOutlineMessage
                    style={{
                      fill: "url(#green-gradient)",
                      backgroundColor: "transparent",
                      width: "15px",
                    }}
                  />,
                  " Mensaje",
                ]}
              />
            </div>
          </XyzTransition>
          <XyzTransition
            appearVisible
            xyz="fade-100% down-50% duration-15 delay-5"
          >
            <div>
              <button
                button
                className="w-100 fw-bold btn btn-block btn-lg mb-0"
                type="submit"
                value="Submit"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #baff29 0%, #3fea2f 100%)",
                }}
              >
                Enviar
              </button>
            </div>
          </XyzTransition>
        </form>
      </section>
    </div>
  );
}
