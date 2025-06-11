declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      e: "event",
      action: string,
      variant_name: Record<string, string>,
    ) => void;
  }
}

interface Payload {
  option: string;
}

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbxNHtVQLYc4cb5fOVyHvy95TUOZ9F7CxYv_Ix_1LDV83zvBWAf7C0Op_DhgW9980D-GLA/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({ date, variant: "ghk_5478_2", ...payload }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};
