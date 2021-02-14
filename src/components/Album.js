import {useSelector} from "react-redux";
import Albums from "./Albums";

function Album(props) {
    const albums = useSelector(state => state.albums.items)
    console.log(albums)
    return (
                <ul className="list-group">
                    {albums.map(alb => {
                        return (
                            <Albums alb={alb} key={alb.id}/>
                        )
                    })}
                </ul>
    )
}
export default Album