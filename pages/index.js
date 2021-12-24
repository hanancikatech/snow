import Snowfall from "react-snowfall";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio("/audio.mp3"));
  }, []);

  useEffect(async () => {
    audio?.play();
  });

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Pushster&display=swap"
          rel="stylesheet"
        />
      </Head>
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
            height={50}
            width={50}
          />
          <Image src={"/assets/cake.png"} height={500} width={1200} />
          <h2
            style={{
              color: "white",
              fontWeight: "20px",
              fontSize: "64px",
              fontFamily: "Pushster , cursive ",
            }}
          >
            Merry Christmas And Happy New Year
          </h2>
          <p
            style={{
              color: "wheat",
            }}
          >
            Mari Kita Menjadi Pembawa Cinta Kasih, Damai Dan Terang bagi Dunia
            Selamat Hari Natal , Semoga Kehidupan Dan Keluarga Selalu Dipenuhi
            Dengan Cinta Dan Damai
          </p>
        </div>
      </div>
    </>
  );
}
