import LanguageDropdown from './LanguageDropdown'
import ThemeToggle from './ThemeToggle'

export default function Header() {
    return (
        <div className=' flex h-20 first-line:text-l items-center justify-between border-b border-neutral-200 dark:border-neutral-700'>
            <div className='px-3'>
                <span className='text-2xl md:text-5xl font-bold'>Useful Cool</span>
                <span className='text-2xl md:text-5xl'> Things</span>
            </div>

            <div className='flex'>
                {/* Language drop box */}
                <LanguageDropdown />
                <ThemeToggle />
            </div>
        </div>
    )
}