import { authors } from "./data/authors";
import { books } from "./data/books";
import LargeAuthorListItem from "./DesignPatterns/layout/lists/authors/LargeListItem";
import SmallAuthorListItem from "./DesignPatterns/layout/lists/authors/SmallListItem";
import LargeBookListItem from "./DesignPatterns/layout/lists/books/LargeListItem";
import RegularList from "./DesignPatterns/layout/lists/RegularList";

function App() {
  return (
    <div className="flex h-screen">
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeBookListItem}
      />
    </div>
  );
}
export default App;
