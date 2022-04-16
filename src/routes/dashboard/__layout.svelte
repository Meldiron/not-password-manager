<script>
	import { AppwriteService } from '../../appwrite';
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
	$: currentPage = $page.url.pathname;

	let signOutLoading = false;

	let error = null;

	async function onSignOut() {
		try {
			signOutLoading = true;
			await AppwriteService.signOut();
			goto('/login');
		} catch (err) {
			error = err.message;
		} finally {
			signOutLoading = false;
		}
	}

	function closeError() {
		error = null;
	}
</script>

{#if error !== null}
	<div class="fixed top-0 left-0 w-full w-full bg-red-500 text-white py-2">
		<div class="relative">
			<div class="px-4">
				{error}
			</div>
			<div class="absolute right-2 h-full top-0 flex items-center justify-center">
				<button on:click={closeError} class="bg-red-600 text-white p-1 rounded-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>
{/if}

<div class="w-full flex">
	<div class=" flex-shrink-0 flex flex-col w-64 h-screen px-4 py-4 bg-white border-r">
		<h2 class="text-3xl font-semibold text-slate-800">NPM</h2>
		<h6 class="text-sm mt-1 text-slate-600">Not Password Manager</h6>

		<div class="flex flex-col justify-between flex-1 mt-6">
			<nav>
				<div class="flex flex-col space-y-3">
					<a
						class={(currentPage === '/dashboard' ? 'active' : 'inactive') +
							' flex items-center px-4 py-2 rounded-md'}
						href="/dashboard"
					>
						<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>

						<span class="mx-4 font-medium">Dashboard</span>
					</a>

					<a
						class={(currentPage === '/dashboard/passwords' ? 'active' : 'inactive') +
							' flex items-center px-4 py-2 rounded-md'}
						href="/dashboard/passwords"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
							/>
						</svg>

						<span class="mx-4 font-medium">My Passwords</span>
					</a>

					<a
						class={(currentPage === '/dashboard/notes' ? 'active' : 'inactive') +
							' flex items-center px-4 py-2 rounded-md'}
						href="/dashboard/notes"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>

						<span class="mx-4 font-medium">My Notes</span>
					</a>

					<a
						class={(currentPage === '/dashboard/credit-cards' ? 'active' : 'inactive') +
							' flex items-center px-4 py-2 rounded-md'}
						href="/dashboard/credit-cards"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
							/>
						</svg>

						<span class="mx-4 font-medium">My Credit Cards</span>
					</a>
				</div>

				<hr class="my-6 border-slate-200" />

				<button
					class="flex items-center px-4 py-2 mt-3 text-slate-600 transition-colors duration-200 transform rounded-md  hover:text-slate-700"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
						/>
					</svg>
					<span class="mx-4 font-medium">Sharing</span>
				</button>
			</nav>

			<div class="flex items-center px-4 -mx-2">
				<button
					type="button"
					on:click={onSignOut}
					class="
                    flex
                    items-center
                    justify-center
                    w-full
                    px-10
                    py-4
                    text-base
                    font-medium
                    text-center text-slate-700
                    transition
                    duration-500
                    ease-in-out
                    transform
                    bg-slate-50
                    rounded-xl
                    hover:bg-slate-100
                    focus:outline-none
                    focus:border-transparent
                    focus:ring-2
                    focus:ring-white
                    focus:ring-offset-2
                    focus:ring-offset-slate-300
                  "
				>
					{#if signOutLoading}
						<svg
							class="w-5 h-5 animate-spin"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							/>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							/>
						</svg>
					{:else}
						<p>Sign Out</p>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<div class="w-full p-4"><slot /></div>
</div>
