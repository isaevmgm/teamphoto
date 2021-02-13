import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadAlbums} from "../redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAlbums())
  }, []);

  return (
    <div>

    </div>
  );
}

export default App;
