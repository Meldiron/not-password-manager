<script context="module" lang="ts">
	import { AppwriteService } from '../appwrite';
	import { browser } from '$app/env';

	/** @type {import('./[slug]').Load} */
	export async function load({ params, fetch, session, stuff }) {
		if (!browser) {
			return {};
		}

		const isSignedIn = await AppwriteService.isSignedIn();

		if (isSignedIn) {
			return { status: 302, redirect: '/dashboard' };
		} else {
			return { status: 302, redirect: '/login' };
		}
	}
</script>

<div class="flex fixed inset-0 justify-center items-center text-2xl font-bold">
    <p>Loading...</p>
</div>
