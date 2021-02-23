import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    themes: {
        light: {
            primary: 'red',
            secondary: colors.grey.darken1,
            accent: '#71DF82',
            error: colors.red.accent3,
        },
        dark: {
            primary: colors.blue.lighten3,
        },
    }
});
