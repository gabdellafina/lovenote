'use client'
import { themes } from "@/lib/themes";


export const Card = ({ children, theme }: {children: React.ReactNode; theme: string}) => {
    const currentTheme = themes[theme];
    
    return(
        <div className={`p-6 rounded-2xl border ${currentTheme.ui.card}`}>
            {children}
        </div>
    )
}

