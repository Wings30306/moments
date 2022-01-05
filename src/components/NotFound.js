import React from 'react'
import styles from '../styles/NotFound.module.css'
import Asset from './Asset.js'
import NoResults from '../assets/no-results.png'

const NotFound = () => {
    return (
        <div className={styles.NotFound}>
            <Asset src={NoResults} message="Sorry, the page you're looking for does not exist"/>
        </div>
    )
}

export default NotFound
