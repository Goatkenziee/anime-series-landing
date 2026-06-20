import type { NextPageContext } from "next";

function Error({ statusCode }: { statusCode: number }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#0a0a1a",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", margin: 0 }}>
        {statusCode ? `Error ${statusCode}` : "An error occurred"}
      </h1>
      <p style={{ marginTop: "1rem", color: "#888" }}>
        Please try refreshing the page.
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
