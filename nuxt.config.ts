// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
	
	css: ["~/assets/main.scss"],
	vite: {
		define: {
			"process.env.DEBUG": false,
		},
		plugins:[svgLoader()],
	},
});
