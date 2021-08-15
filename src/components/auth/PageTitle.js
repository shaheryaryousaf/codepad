import React from 'react'

// Import Styles
import styles from './styles/PageTitle.module.css'

const PageTitle = ({ title, subTitle }) => {
  return (
    <div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.subTitle}>{subTitle}</p>
    </div>
  )
}

export default PageTitle
