import { ReactNode } from 'react'
import styles from './topnav.module.scss'
import { Alert } from 'components/alert'
import { Header } from './header'
import { Footer } from './footer'
import { Newsletter } from 'components/newsletter'
import { Panel } from 'components/panel'
import { TitleWithAction } from './title-action'

type Props = {
  title?: string
  action?: {
    href: string
    text: string
  }
  hideNewsletter?: boolean
  className?: string
  children: ReactNode
}

export function TopnavLayout(props: Props) {
  let className = `${styles.container} light` // theme switcher (light/dark)
  if (props.className) className += ` ${props.className}`

  return (
    <div className={className}>
      <Alert
        text="Test your Web3 knowledge and claim your ZK certifications @ the new useWeb3 Academy"
        url="https://academy.useweb3.xyz/"
        type="info"
        center
      />

      <Header />

      <main className={styles.content}>
        <div className={styles.inner}>
          {props.title && <TitleWithAction title={props.title} action={props.action} />}

          {props.children}

          {!props.hideNewsletter && (
            <div className={styles.center}>
              <Newsletter className={styles.newsletter} />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
