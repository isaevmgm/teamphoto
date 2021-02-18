import {Link, useParams} from 'react-router-dom'
import PropTypes from "prop-types"


function Album(props) {
    const openAlbumId = parseInt(useParams().id)
    return(
        <li className={`list-group-item ${openAlbumId === props.album.id ? 'list-group-item-info' : ''}`}>
            <Link to={`/${props.album.id}`}>
                {props.album.title}
            </Link>
        </li>
    )
}
     Album.propTypes = {
          album : PropTypes.object.isRequired
}
export default Album