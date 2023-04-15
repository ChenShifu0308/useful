import LanguageDropdown from './LanguageDropdown'
import ThemeToggle from './ThemeToggle'
import { useTranslation } from 'react-i18next'

export default function Header() {
    const { t } = useTranslation()
    return (
        <div className=' flex h-20 first-line:text-l items-center justify-between border-b border-neutral-200 dark:border-neutral-700'>
            <div className='px-3'>
                <span className='text-2xl md:text-5xl font-bold'>{t('website_name')}</span>
                <span className='text-2xl md:text-5xl'> {t('website_name_suffix')}</span>
            </div>

            <div className='flex'>
                {/* Language drop box */}
                <LanguageDropdown />
                <ThemeToggle />
            </div>
        </div>
    )
}