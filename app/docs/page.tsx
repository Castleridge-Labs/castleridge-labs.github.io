"use client";
import React from "react";
import { RedocStandalone } from "redoc";

export default function ApiDocumentation() {
  return <RedocStandalone specUrl="https://nz3shsw5j0.execute-api.us-west-2.amazonaws.com/v2/docs" />
};
