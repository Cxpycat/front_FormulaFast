/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: [],
    theme: {
        extend: {
            colors: {
                'bg-default': '#0D0D0D',
                'bg-primary': '#1A1A1A',
                'bg-primary-disabled': '#262626',
                'bg-inverse': '#F2F2F2',
                'text-color-default': '#F2F2F2',
                'text-color-secondary': '#A2A2A2',
                'text-color-secondary-disabled': '#A1A1A1',
                'text-inverse': '#1A1A1A',
                'accent-color': '#EA5F5F',
                'button-color': '#666666',
                'hover-button-color': '#999999',
                'border-color': '#602850',
                'btn-bg': '#595ebe',
                'btn-text': '#e1e1e7',
                'btn-active-bg': '#be599e',
                'btn-active-text': '#E1E1E7',
                'active-element-bg-color': '#333333',
                'modal-bg-color': '#153043',
                'notification-color': '#FF9900',
                'success-color': '#0c6',
                'error-color': '#FF3333',
                'hover-link-color': '#FF9933',
                'hover-bg': '#153F5F',
                'btn-bg-hover': '#219E35',
                'btn-text-hover': '#030000',
            },
        },
    },
    plugins: [],
};

