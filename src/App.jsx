import { authors } from "./data/authors";
import LargeAuthorListItem from "./DesignPatterns/layout/lists/authors/LargeListItem";
import RegularList from "./DesignPatterns/layout/lists/RegularList";
import Modal from "./DesignPatterns/layout/Modal";

function App() {
  return (
    <Modal>
      <RegularList
        sourceName={"author"}
        items={authors}
        ItemComponent={LargeAuthorListItem}
      />
    </Modal>
  );
}
export default App;
