import LanguageDropdown from './LanguageDropdown'
import ThemeToggle from './ThemeToggle'
import { useTranslation } from 'react-i18next'

export default function Header() {
    const { t } = useTranslation()
    return (
        <div className=' flex h-20 first-line:text-l items-center justify-between border-b border-neutral-200 dark:border-neutral-700'>
            {/* Website name/logo */}
            <div className='px-3'>
                <span className='text-2xl md:text-4xl font-bold'>{t('Useful Cool')}</span>
                <span className='text-2xl md:text-4xl'> {t('Things')}</span>
            </div>

            {/* Right side */}
            <div className='flex'>
                {/* Language drop box */}
                <LanguageDropdown />
                {/* Theme change switch/button */}
                <ThemeToggle />
            </div>
        </div>
    )
}