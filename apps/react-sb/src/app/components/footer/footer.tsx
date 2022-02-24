import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { ILinkItem } from '../../types/route';
import styles from './footer.module.scss';

interface IFooterMenuItem {
  title: string;
  list: Array<ILinkItem>;
}

function Footer() {
  const footerMenuItems: Array<IFooterMenuItem> = [
    {
      title: 'DropUp',
      list: [
        {
          title: 'explore',
          path: '',
        },
        {
          title: 'help center',
          path: '',
        },
        {
          title: 'jobs',
          path: '',
        },
        {
          title: 'become a partner',
          path: '',
        },
        {
          title: 'Bug bounty',
          path: '',
        },
      ],
    },
    {
      title: 'Community',
      list: [
        {
          title: 'About',
          path: '',
        },
        {
          title: 'Blog',
          path: '',
        },
        {
          title: 'Suggest feature',
          path: '',
        },
        {
          title: 'NFT protocol',
          path: '',
        },
        {
          title: 'Subscribe',
          path: '',
        },
      ],
    },
    {
      title: 'Resources',
      list: [
        {
          title: 'Technical Support',
          path: '',
        },
        {
          title: 'Purchasign & licensign',
          path: '',
        },
        {
          title: 'Knowledge base',
          path: '',
        },
        {
          title: 'Marketplace',
          path: '',
        },
        {
          title: 'My Account',
          path: '',
        },
      ],
    },
  ];
  return (
    <div className={[styles['container'], 'grid ', 'grid-nogutter'].join(' ')}>
      <div className="col-5 flex flex-column justify-content-between">
        <div className="flex align-items-center">
          <img src="assets/logo/lightLogo.png" alt="" />
          <img className="ml-3" src="assets/logo/LightDropUp.png" alt="" />
        </div>
        <div className="col-8">
          <h4>Get the latest DropUp updates</h4>
          <div className="p-inputgroup">
            <InputText placeholder="Keyword" />
            <Button label="GO" className="p-button-secondary" />
          </div>
        </div>
      </div>
      <div className="grid grid-nogutter col">
        {footerMenuItems.map((item) => (
          <div className="col-4" key={item.title}>
            <div className={styles['title']}>{item.title}</div>
            {item.list.map((listItem) => (
              <div className={styles['link']} key={listItem.title}>
                {listItem.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
