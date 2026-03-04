import ScreenSpliter from "./layout/ScreenSpliter";
const LeftComponent = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      Left
    </div>
  );
};
const RightComponent = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      Right
    </div>
  );
};

function App() {
  return (
    <div className="flex h-screen">
      <ScreenSpliter
        leftWidth={1}
        rightWidth={3}
        leftBackgroundColor="#6767"
        rightBackgroundColor="#123678"
      >
        <LeftComponent color={"red"} />
        <RightComponent color={"yellow"} />
      </ScreenSpliter>
    </div>
  );
}
export default App;
