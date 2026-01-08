import { Palette } from 'lucide-react';
import { useTheme, type Theme } from '../context/ThemeContext';

const themeLabels: Record<Theme, string> = {
    default: 'Default',
    ocean: 'Ocean',
    sunset: 'Sunset',
    brutalism: 'Brutal',
    pastel: 'Pastel',
};

const themeColors: Record<Theme, string> = {
    default: '#00b8c4',
    ocean: '#4ecdc4',
    sunset: '#ff7e5f',
    brutalism: '#ffde59',
    pastel: '#b8d4e3',
};

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Current theme: ${themeLabels[theme]}. Click to switch theme.`}
            title={`Theme: ${themeLabels[theme]}`}
        >
            <Palette
                className="w-4 h-4"
                style={{ color: themeColors[theme] }}
            />
            <span className="theme-label">{themeLabels[theme]}</span>
        </button>
    );
}

export default ThemeToggle;
