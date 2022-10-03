import React from "react";
import Bola from "./Bola";
import Head from "next/head";

export default function Sphere() {
  return (
    <>
      <Head>
        <script src="https://d3js.org/d3.v3.min.js"></script>
        <script src="https://d3js.org/topojson.v1.min.js"></script>
      </Head>
      <Bola />
    </>
  );
}
