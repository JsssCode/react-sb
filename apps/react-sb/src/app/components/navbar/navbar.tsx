import styles from './navbar.module.scss';
import { Avatar } from 'primereact/avatar';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'primereact/button';
import ItemImage, { ImageVariant } from '../shared/item-image/item-image';
import Footer from '../footer/footer';
import { ILinkItem } from '../../types/route';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const [linkArray, setLinkArray] = useState<Array<ILinkItem>>([
    {
      path: '/users',
      title: 'users',
    },
    {
      path: '/product',
      title: 'product',
    },
  ]);
  return (
    <div>
      <nav
        className={[styles['navbar'], 'layout grid grid-nogutter'].join(' ')}
      >
        <div className="col-5">
          <div className="flex align-items-center">
            <img src="assets/logo/logo.png" alt="" />
            <img className="ml-3" src="assets/logo/DropUp.png" alt="" />
            <div className="ml-5 w-full">
              <span className="p-input-icon-left w-full ">
                <i className="pi pi-search" />
                <InputText
                  placeholder="Search"
                  className="w-full border-round"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="col col-offset-1 ">
          <div className="flex align-items-center justify-content-between">
            <div className="flex align-items-center">
              {linkArray.map((link) => (
                <NavLink
                  to={link.path}
                  key={link.path}
                  className={({ isActive }) =>
                    [
                      styles['link'],
                      styles[isActive ? 'link__active' : ''],
                    ].join(' ')
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
            <div className="flex align-items-center">
              <Button
                label="12"
                icon="pi pi-bell"
                iconPos="left"
                className="p-button-outlined p-button-rounded"
              />
              <Button className="p-button p-button-rounded mx-3">Create</Button>
              <ItemImage
                srcImage="assets/user-ava/avatar6.png"
                widthImage="36px"
                variant={ImageVariant.rounded}
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-column justify-content-between content-container">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Navbar;
const items = [
  {
    label: 'File',
    icon: 'pi pi-fw pi-file',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Bookmark',
            icon: 'pi pi-fw pi-bookmark',
          },
          {
            label: 'Video',
            icon: 'pi pi-fw pi-video',
          },
        ],
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
      },
      {
        separator: true,
      },
      {
        label: 'Export',
        icon: 'pi pi-fw pi-external-link',
      },
    ],
  },
  {
    label: 'Edit',
    icon: 'pi pi-fw pi-pencil',
    items: [
      {
        label: 'Left',
        icon: 'pi pi-fw pi-align-left',
      },
      {
        label: 'Right',
        icon: 'pi pi-fw pi-align-right',
      },
      {
        label: 'Center',
        icon: 'pi pi-fw pi-align-center',
      },
      {
        label: 'Justify',
        icon: 'pi pi-fw pi-align-justify',
      },
    ],
  },
  {
    label: 'Users',
    icon: 'pi pi-fw pi-user',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-user-plus',
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-user-minus',
      },
      {
        label: 'Search',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Filter',
            icon: 'pi pi-fw pi-filter',
            items: [
              {
                label: 'Print',
                icon: 'pi pi-fw pi-print',
              },
            ],
          },
          {
            icon: 'pi pi-fw pi-bars',
            label: 'List',
          },
        ],
      },
    ],
  },
  {
    label: 'Events',
    icon: 'pi pi-fw pi-calendar',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Save',
            icon: 'pi pi-fw pi-calendar-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-calendar-minus',
          },
        ],
      },
      {
        label: 'Archieve',
        icon: 'pi pi-fw pi-calendar-times',
        items: [
          {
            label: 'Remove',
            icon: 'pi pi-fw pi-calendar-minus',
          },
        ],
      },
    ],
  },
  {
    label: 'Quit',
    icon: 'pi pi-fw pi-power-off',
  },
];
