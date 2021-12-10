import React from 'react'
import styles from "../../styles/Profile.module.css"
import btnStyles from "../../styles/Button.module.css"
import Avatar from '../../components/Avatar'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Link } from 'react-router-dom'

const Profile = ({profile, mobile, imageSize=55}) => {
    const {id, following_id, owner, image} = profile

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return (
        <div className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}>
            <div>
                <Link className="align-self-center" to={`/profiles/${id}`}>
                    <Avatar src={image} text={owner} width={imageSize}/>
                </Link>
            </div>
            
        </div>
    )
}

export default Profile
