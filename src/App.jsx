import Searchbar from "./components/Searchbar";

export default function App() {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <Searchbar options={[
    "i love india",
    "india is my beloved country",
    "i am ankan",
    "i dont know if i can do this or not",
  ]} />
    </div>
  );
}
