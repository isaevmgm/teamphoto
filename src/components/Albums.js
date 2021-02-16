import {useSelector} from "react-redux";
import Album from "./Album";

function Albums(props) {
    const albums = useSelector(state => state.albums.items)
    return (
                <ul className="list-group">
                    {albums.map(alb => {
                        return (
                            <Album alb={alb} key={alb.id}/>
                        )
                    })}
                </ul>
    )
}
export default Albums