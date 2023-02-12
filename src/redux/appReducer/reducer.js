import React from "react";
import { CHANGE_HEADING } from "./actionTypes";

const initialState = {
  admins: [
    {
      email: "irfan@gmail.com",
      password: "irfan123",
    },
  ],
  users: [],
  heading: "",
  desc: "",
  socialMedia: {
    facebook: "",
    linkedin: "",
    twitter: "",
  },
  navbar: [],
  logo: "",
  images: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_HEADING:
      return {
        ...state,
        heading: payload,
      };
    default:
      return state;
  }
};

export { reducer };
