<script>
	import '../app.css';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let showModal = false;

	onMount(async () => {
		showModal = window.localStorage.getItem('warningModal') === null;
	});

	function disableModal() {
		window.localStorage.setItem('warningModal', 'finished');
		showModal = false;
	}
</script>

{#if showModal}
	<div transition:fade class="fixed inset-0 z-10 bg-slate-900 bg-opacity-50">
		<div class="overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
			<div
				class="
              flex
              items-end
              justify-center
              min-h-screen
              px-4
              pt-4
              pb-20
              text-center 
              sm:block sm:p-0
            "
			>
				<div class="transition-opacity bg-slate-500 bg-opacity-75" aria-hidden="true" />
				<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
				<div
					class="
                inline-block
                p-5
                overflow-hidden
                text-left
                align-bottom
                transition-all
                transform
                bg-slate-100
                rounded-lg
                shadow-2xl
                lg:p-16
                sm:my-8 sm:align-middle sm:max-w-xl sm:w-full
              "
				>
					<div>
						<div class="mt-3 text-left sm:mt-5">
							<h2
								class="
                      mb-8
                      text-xs
                      font-semibold
                      tracking-widest
                      text-amber-500
                      uppercase
                    "
							>
								Warning! Be aware!
							</h2>
							<h1
								class="
                      mb-8
                      text-2xl
                      font-semibold
                      leading-none
                      tracking-tighter
                      text-neutral-600
                    "
							>
								This is the last serious message!
							</h1>
							<p class="mx-auto text-base leading-relaxed text-slate-500">
								The whole application is a joke. Please do not enter any real data, anyone could
								abuse them. Password managers are real products, and if you are looking for one,
								this project is NOT a good option.
							</p>
						</div>
					</div>
					<div class="mt-6 sm:flex space-x-3">
						<a href="https://giphy.com/gifs/wave-goodbye-see-you-later-VgC5dVK3KzQCm1TdPI/tile">
							<button
								class="
                      items-center
                      block
                      px-10
                      py-4
                      text-base
                      font-medium
                      text-center text-white
                      transition
                      duration-500
                      ease-in-out
                      transform
                      bg-amber-600
                      rounded-xl
                      hover:bg-amber-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-amber-500
                    "
							>
								Leave Website
							</button>
						</a>

						<button
							on:click={disableModal}
							class="
                      items-center
                      block
                      px-10
                      py-3.5
                      text-base
                      bg-white
                      hover:bg-slate-50
                      font-medium
                      text-center text-amber-600
                      transition
                      duration-500
                      ease-in-out
                      transform

                      shadow-md
                      rounded-xl
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-slate-500
                    "
						>
							Continue to Website
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<slot />
