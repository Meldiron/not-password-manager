<script lang="ts">
	import { AppwriteService } from '../appwrite';
	import { goto } from '$app/navigation';

	let isLoading = false;

	let email = '';
	let password = '';
	let passwordAgain = '';

	let error = null;

	async function onRegister() {
		try {
			isLoading = true;
			if (password !== passwordAgain) {
				throw new Error('Passwords do not match.');
			}

			await AppwriteService.signUp(email, password);
			await AppwriteService.signIn(email, password);

			goto('/dashboard');
		} catch (err) {
			error = err.message;
		} finally {
			isLoading = false;
		}
	}
</script>

<section>
	<div class="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-md">
			<h2 class="mt-6 text-3xl font-extrabold text-center text-neutral-600">
				Create a new account
			</h2>
		</div>
		<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
			<div class="px-4 py-8 sm:px-10">
				<form on:submit|preventDefault={onRegister} class="space-y-6">
					<div>
						<label for="email" class="block text-sm font-medium text-slate-700">
							Email address
						</label>
						<div class="mt-1">
							<input
								bind:value={email}
								id="email"
								name="email"
								type="email"
								autocomplete="email"
								required={true}
								class="
                      block
                      w-full
                      px-5
                      py-3
                      text-base text-neutral-600
                      placeholder-slate-300
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border border-transparent
                      rounded-lg
                      bg-slate-50
                      focus:outline-none
                      focus:border-transparent
                      focus:ring-2
                      focus:ring-white
                      focus:ring-offset-2
                      focus:ring-offset-slate-300
                    "
							/>
						</div>
					</div>
					<div>
						<label for="password" class="block text-sm font-medium text-slate-700">
							Password
						</label>
						<div class="mt-1">
							<input
								bind:value={password}
								id="password"
								name="password"
								type="password"
								autocomplete="current-password"
								required={true}
								class="
                      block
                      w-full
                      px-5
                      py-3
                      text-base text-neutral-600
                      placeholder-slate-300
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border border-transparent
                      rounded-lg
                      bg-slate-50
                      focus:outline-none
                      focus:border-transparent
                      focus:ring-2
                      focus:ring-white
                      focus:ring-offset-2
                      focus:ring-offset-slate-300
                    "
							/>
						</div>
					</div>

					<div>
						<label for="password-again" class="block text-sm font-medium text-slate-700">
							Password Again
						</label>
						<div class="mt-1">
							<input
								bind:value={passwordAgain}
								id="password-again"
								name="password-again"
								type="password"
								autocomplete="current-password"
								required={true}
								class="
                      block
                      w-full
                      px-5
                      py-3
                      text-base text-neutral-600
                      placeholder-slate-300
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border border-transparent
                      rounded-lg
                      bg-slate-50
                      focus:outline-none
                      focus:border-transparent
                      focus:ring-2
                      focus:ring-white
                      focus:ring-offset-2
                      focus:ring-offset-slate-300
                    "
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							class="
                    flex
                    items-center
                    justify-center
                    w-full
                    px-10
                    py-4
                    text-base
                    font-medium
                    text-center text-white
                    transition
                    duration-500
                    ease-in-out
                    transform
                    bg-blue-600
                    rounded-xl
                    hover:bg-blue-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-blue-500
                  "
						>
							{#if isLoading}
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
								<p>Sign Up</p>
							{/if}
						</button>

						{#if error !== null}
							<p class="mt-3 text-red-500">{error}</p>
						{/if}

						<hr class="mt-6" />

						<a href="/">
							<button
								type="button"
								class="
						mt-6
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
								Sign In
							</button>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
