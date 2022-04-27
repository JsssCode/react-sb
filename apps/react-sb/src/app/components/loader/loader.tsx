import React from 'react';
import styles from './loader.module.scss';

export default function Loader() {
  return (
    <div className="grid grid-nogutter align-items-stretch min-h-100">
      <div className="col flex align-items-center justify-content-center">
        <div className={styles['lds-ellipsis']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
