import { useEffect } from "react";

const IOS_URL = "https://apps.apple.com/np/app/myedvisor/id6504185561";
const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=edvisor_user.consulting_app";

const AppRedirect: React.FC = () => {
  useEffect(() => {
    const userAgent: string =
      navigator.userAgent || navigator.vendor || (window as any).opera;

    const isIOS: boolean = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid: boolean = /Android/.test(userAgent);

    if (isIOS) {
      window.location.replace(IOS_URL);
    } else if (isAndroid) {
      window.location.replace(ANDROID_URL);
    } else {
      // Desktop / unknown devices
      window.location.replace(ANDROID_URL);
    }
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <p>Redirecting to MyEdvisor…</p>
    </div>
  );
};

export default AppRedirect;
