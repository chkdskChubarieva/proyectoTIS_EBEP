import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './src/**/*.blade.php',
        './src/**/*.js',
        "./src/**/*.jsx",
        './src/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                primary: {
                  100: "#ccd4db",
                  200: "#99aab7",
                  300: "#667f94",
                  400: "#335570",
                  500: "#002a4c",
                  600: "#00223d",
                  700: "#00192e",
                  800: "#00111e",
                  900: "#00080f",
                },
              },
        },
    },
    plugins: [],
};