import autoprefixer from "autoprefixer";
import { plugin } from "postcss";

export default {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: ['> 0.1%', 'last 2 versions', 'not dead'],
        },
    },
};

