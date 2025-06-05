import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div style={{ backgroundColor: "rgb(161 204 210)", padding: "10px 20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontWeight: 600 }}>Keep Notes</p>
        </div>
        <div>
          <Link
            href="/sigin"
            style={{
              backgroundColor: "green",
              padding: "6px",
              color: "white",
              borderRadius: "6px",
            }}
          >
            Login
          </Link>
          <Link
            href="/signup"
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "6px",
              borderRadius: "6px",
              marginLeft: "10px",
            }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
