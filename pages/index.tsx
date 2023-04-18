import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  return (
    <div className='dark:text-neutral-100 text-neutral-900'>{t('Things')}</div>
  )
}
