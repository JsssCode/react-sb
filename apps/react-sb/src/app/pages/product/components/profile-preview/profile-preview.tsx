import React, { FC } from 'react';
import { IProfile } from '../../../../types/profile';
import ItemImage, {
  ImageVariant,
} from '../../../../components/shared/item-image/item-image';

import styles from './profile-preview.module.scss';

export interface IProfilePreviewProps {
  profile: IProfile;
  hideAvatar?: boolean;
}

const ProfilePreview: FC<IProfilePreviewProps> = ({ profile, hideAvatar }) => {
  if (hideAvatar) {
    return (
      <div className="mr-2">
        <div className="flex align-items-center justify-content-end">
          <div className="ml-1 flex flex-column  align-items-end">
            <div className={styles['role']}>{profile.role}</div>
            <div className={styles['name']}>{profile.name}</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mr-2">
      <div className="flex align-items-center">
        <ItemImage
          srcImage={profile.imgUrl}
          widthImage="30px"
          variant={ImageVariant.rounded}
        />
        <div className="ml-1">
          <div className={styles['role']}>{profile.role}</div>
          <div className={styles['name']}>{profile.name}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
