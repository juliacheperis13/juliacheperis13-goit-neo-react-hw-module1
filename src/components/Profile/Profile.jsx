import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      <div className={css.userInfo}>
        <img className={css.userImage} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.userStats}>
        <li>
          <span className={css.userStatsLabel}>Followers</span>
          <span className={css.userStatsInfo}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.userStatsLabel}>Views</span>
          <span className={css.userStatsInfo}>{stats.views}</span>
        </li>
        <li>
          <span className={css.userStatsLabel}>Likes</span>
          <span className={css.userStatsInfo}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
