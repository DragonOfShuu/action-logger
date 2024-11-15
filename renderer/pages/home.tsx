import React from "react";
import Logger from "../components/logger";

export default function HomePage() {
    return (
      <>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <Logger />
        </div>
      </>
    );
}
