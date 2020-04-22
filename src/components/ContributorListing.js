import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContributorListing.module.scss';

const ContributorListing = ({contributors, project}) => {
  const renderContributorItems = () => {
    const sortedContributors = contributors.sort((a,b) => (b.contributions > a.contributions) ? 1 : -1)

    const contributorItem = sortedContributors.map((contributor, i) => {
      if (i < 4) {
        return (
          <li className={styles.contributorItem} key={contributor.id}>
            <a href={contributor.htmlUrl} className={styles.contributorItemPrimaryContent}>
              <img
                src={contributor.avatarUrl}
                alt={`avatar of ${contributor.name}`}
                className={styles.contributorAvatar}
              />
              <h4 className={styles.contributorName}>
                <a
                  href={contributor.htmlUrl}
                  className={styles.contributorNameLink}
                  >
                  {contributor.login}
                </a>
              </h4>
              <h6 className={styles.contributorContributions}><a href={`${project.githubUrl}/graphs/contributors`}>{contributor.contributions} commits</a></h6>
            </a>
          </li>
        );
      } else {
        return null
      }
    });

    return contributorItem;
  };

  return (
    <ul className={styles.contributorsContainer}>
      {renderContributorItems()}
    </ul>
  );
};

ContributorListing.propTypes = {
  data: PropTypes.array
};

export default ContributorListing;
