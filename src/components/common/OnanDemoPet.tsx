// "use client";

// import { useEffect } from "react";
// import { onandemo } from "onandemo";

// export default function OnandemoPet() {
//   useEffect(() => {
//     const destroy = onandemo({
//       preset: "neko",
//     });

//     return () => {
//       destroy();
//     };
//   }, []);

//   return null;
// }

// upper for cat
// Below for Soldier

import Script from "next/script";

export default function OnandemoPet() {
  return (
    <Script
      src="https://unpkg.com/onandemo/dist/onandemo.js"
      data-preset="soldier"
      strategy="afterInteractive"
    />
  );
}