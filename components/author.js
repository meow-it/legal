import Image from "next/image"
import styles from "./layout.module.css"
import authorStyles from "./author.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"
import {appName, aboutApp, moreAboutApp } from "./config"

export default function Author() {
	return (
		<>
			<Link href="/">
				<a>
					<div className={styles.authorContainer}>
						<div className="authorImageContainer">
							<Image
								priority
								src="/images/profile.png"
								className={styles.borderCircle}
								height={40}
								width={40}
								alt={appName}
							/>
						</div>

						<div className="authorNameContainer">
							<span>{appName}</span>
						</div>
					</div>
				</a>
			</Link>
		</>
	)
}

export function AuthorSection() {
	return (
		<section className={utilStyles.headingMd}>
        <p className={authorStyles.aboutAuthor}>{aboutApp}</p>
        <p className={authorStyles.moreAboutApp}>{moreAboutApp}</p>
      </section>
	)
}