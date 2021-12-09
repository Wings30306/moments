import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Comment.module.css";
import { axiosRes } from "../../api/axiosDefaults";

const Comment = ({
  id,
  owner,
  content,
  updated_at,
  profile_id,
  profile_image,
  setPost,
  setComments
}) => {
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    //history.push(`/comments/${id}/edit`)
    console.log("show edit form");
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}`);
      setPost(prevPost => ({
          results: [{
              ...prevPost.results[0],
              comments_count: prevPost.results[0].comments_count - 1
          }]
      }))
      setComments(prevComments => ({
          ...prevComments,
          results: prevComments.results.filter(comment => comment.id !== id)
      }))
    } catch (error) {
      console.log(error);
    }
    console.log("delete comment with id ", id)
  };
  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body>
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
        </Media.Body>
        {is_owner && (
          <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
        )}
      </Media>
    </div>
  );
};

export default Comment;
