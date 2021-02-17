import {useSelector} from "react-redux";
import Album from "./Album";

function Albums(props) {
    const albums = useSelector(state => state.albums.items)
    return (
                <ul className="list-group">
                    {albums.map(album => {
                        return (
                            <Album album={album} key={album.id}/>
                        )
                    })}
                </ul>
    )
}
export default Albums