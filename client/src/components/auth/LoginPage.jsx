import Header from "./Header";
import Login from "./Login";

export default function LoginPage({ onBack }) {
  return (
    <div className="flex justify-center">
      <div className="w-full bg-white p-8 rounded-2xl">
        <Header
          heading=""
          paragraph=""
          linkName=""
          linkUrl={`#`}
          onBack={onBack}
        />
        <Login />
      </div>
    </div>
  );
}
