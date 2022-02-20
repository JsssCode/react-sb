import React, { FC } from 'react';
import { IProfile } from '../../types/profile';
import ItemImage, { ImageVariant } from './item-image/item-image';

export interface IProfilePreviewProps {
  profile: IProfile;
}

const ProfilePreview: FC<IProfilePreviewProps> = ({ profile }) => {
  return (
    <div className="flex mr-2">
      <div className="flex">
        <ItemImage
          srcImage={profile.imgUrl}
          widthImage="30px"
          variant={ImageVariant.rounded}
        />
        <div className="ml-1 text-sm">
          <div className="font-light capitalize">{profile.role}</div>
          <div className="text-black-alpha-90 font-bold">{profile.name}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
