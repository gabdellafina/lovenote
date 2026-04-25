'use client'
import { themes } from "@/lib/themes";


export const Card = ({ children, theme }: {children: React.ReactNode; theme: string}) => {
    const currentTheme = themes[theme];
    
    return(
        <div className={`p-6 rounded-2xl border backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)]
            ${currentTheme.ui.card} `}
        >
            {children}
        </div>
    )
}

