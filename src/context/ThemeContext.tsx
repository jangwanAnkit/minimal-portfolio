import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'default' | 'ocean' | 'sunset' | 'brutalism' | 'pastel';

const THEMES: Theme[] = ['default', 'ocean', 'sunset', 'brutalism', 'pastel'];
const STORAGE_KEY = 'portfolio-theme';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
    themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getDefaultTheme(): Theme {
    // Check localStorage first
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && THEMES.includes(stored as Theme)) {
            return stored as Theme;
        }
    }

    // Fall back to env variable or 'default'
    const envTheme = import.meta.env.VITE_DEFAULT_THEME as Theme | undefined;
    if (envTheme && THEMES.includes(envTheme)) {
        return envTheme;
    }

    return 'default';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(getDefaultTheme);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
    };

    const toggleTheme = () => {
        const currentIndex = THEMES.indexOf(theme);
        const nextIndex = (currentIndex + 1) % THEMES.length;
        setTheme(THEMES[nextIndex]);
    };

    // Apply theme to document
    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'default') {
            root.removeAttribute('data-theme');
        } else {
            root.setAttribute('data-theme', theme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, themes: THEMES }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
