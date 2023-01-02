<script setup lang="ts">
	const searchText = ref("");
	const selected = ref<null | string>(null);
	const items = ["مزاد مباشر متعدد"];
	const routes = ["الرئيسيه", "التصنيفات", "مشترياتي", "حسابي"];
	const languages = ["العربيه", "الإنجليزيه"];
	const selectedLanguage = languages[0];
	selected.value = items[0];
</script>
<template>
	<nav class="navigation">
		<div class="logo-search-bar layout-padding">
			<img class="logo-img" src="~/assets/images/logo.png" alt="logo" />

			<div class="search-bar">
				<button class="navigation__button">
					<img src="~/assets/images/search.svg" alt="" />
				</button>

				<input
					v-model="searchText"
					bg-color="accent"
					color="accent"
					class="text-direction text-input"
					placeholder="إبحث هنا" />

				<select v-model="selected" class="select-input">
					<option v-for="item in items" :key="item" :value="item">{{ item }}</option>
				</select>
			</div>
		</div>
		<div class="routes-icons layout-padding">
			<ul class="routes">
				<li v-for="(route, index) in routes" :key="index">{{ route }}</li>
			</ul>
			<div class="options">
				<img src="~/assets/images/wallet.svg" alt="" />
				<img src="~/assets/images/bell.svg" alt="" />
				<img src="~/assets/images/heart.svg" alt="" />
				<select class="language-input" v-model="selectedLanguage">
					<option v-for="language in languages" :key="language" :value="language">
						{{ language }}
					</option>
				</select>
			</div>
		</div>
	</nav>

	<slot />
</template>
<style lang="scss" scoped>
	* {
		direction: rtl;
	}

	.navigation {
		position: sticky;
		top: 0;
		background-color: white;
		z-index: 999;
		width: 100%;
		.logo-search-bar {
			width: inherit;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row-reverse;
			height: 4.6em;
			.logo-img {
				width: 9em;
				height: 9em;
				object-fit: scale-down;
			}
			.search-bar {
				height: 3.4em;
				width: 54.25em;
				display: flex;
				justify-content: center;
				align-items: flex-start;
				flex-direction: row-reverse;

				.navigation__button {
					height: 2.9em;
					width: 4em;
					background-color: var(--primary-color);
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 0.2em;
				}
			}
		}
		.routes-icons {
			background: linear-gradient(45deg, var(--primary-color), #9d0257);
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 4.6em;
			.routes {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 2em;
				color: #fff;
				font-size: 1rem;
				font-weight: 600;
				list-style: none;
			}
			.options {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 2em;
			}
		}
	}

	.text-input {
		border: none;
		background-color: var(--accent);
		padding: 1em;
		width: 45em;
	}
	.select-input {
		border: none;
		background-color: var(--accent);
		padding: 0.95em;
		color: var(--primary-color);
		font-weight: 500;
		border-top-right-radius: 0.2em;
		border-bottom-right-radius: 0.2em;
	}
	.language-input {
		background: radial-gradient(50% 50% at 0% 0%, #fdbc01 0%, #fdba03 31.45%, #ff951d 100%);
		border: none;
		color: #fff;
		padding: 0.6em 1em;
		font-size: 1rem;
		border-radius: 3em;
		option {
			color: black;
		}
	}
</style>
