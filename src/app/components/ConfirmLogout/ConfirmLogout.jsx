import React from "react";
import { Modal } from "antd";
function ConfirmLogout({ open, cancel }) {
  return (
    <Modal open={open} onCancel={cancel}>
      <div className="">
        <p className="flex justify-center text-2xl ">Do you want to Log out?</p>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 16 16"
          >
            <g fill="none">
              <path
                fill="url(#SVGTC5IqbhX)"
                d="M9.092 2.638a1.25 1.25 0 0 0-2.182 0L2.157 11.14A1.25 1.25 0 0 0 3.247 13h9.504a1.25 1.25 0 0 0 1.091-1.86z"
              />
              <path
                fill="url(#SVGZ1msTcPN)"
                d="M8.75 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M7.5 8V5.5a.5.5 0 0 1 1 0V8a.5.5 0 0 1-1 0"
              />
              <defs>
                <linearGradient
                  id="SVGTC5IqbhX"
                  x1="3.872"
                  x2="10.725"
                  y1=".279"
                  y2="14.525"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ffcd0f" />
                  <stop offset="1" stop-color="#fe8401" />
                </linearGradient>
                <linearGradient
                  id="SVGZ1msTcPN"
                  x1="6"
                  x2="8.466"
                  y1="5"
                  y2="11.575"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4a4a4a" />
                  <stop offset="1" stop-color="#212121" />
                </linearGradient>
              </defs>
            </g>
          </svg>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmLogout;
