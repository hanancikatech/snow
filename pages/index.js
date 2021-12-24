import Snowfall from "react-snowfall";
export default function Home() {
  return (
    <>
      <Snowfall snowflakeCount={200} />
      <div
        style={{
          background: "linear-gradient(-120DEG , #D62121 , #C72C2C , #3a1111 )",
          display: "flex",
          minHeight: "100vh",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <img
            src={"https://cikatech.com/images/logos/logo.png"}
            height={200}
          />
          <h1
            style={{
              color: "white",
              fontWeight: "20px",
            }}
          >
            Merry Christmas And Happy New Year
          </h1>
        </div>
      </div>
    </>
  );
}
