<script setup>
import NavbarDropdown from '@/components/navbar/Dropdown.vue';

const date = ref(null);
const time = ref(null);
const interval = ref(null);


onMounted(() => {
  interval.value = setInterval(() => {
    // Concise way to format time according to system locale.
    // In my case this returns "3:48:00 am"
    time.value = Intl.DateTimeFormat(navigator.language, {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format()
  }, 1000);

  date.value = Intl.DateTimeFormat(navigator.language, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format()
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="navbar bg-base-100 acrylic">
    <div class="flex-1 flex items-center gap-2">
      <a class="btn btn-ghost normal-case text-lg text-white">
        <font-awesome-icon icon="fa-solid fa-bars"></font-awesome-icon>
      </a>
      <NuxtLink class="btn btn-ghost normal-case text-lg text-white" to="/" activeClass="btn-active">
        <span class="flex flex-col items-center">
          br1.dev
          <div class="border-b-2 border-white/70 pb-1 transition-all duration-300 ease-in-out" :class="{
            'w-[70%]': $route.path === '/',
            'w-[10%]': $route.path !== '/',
          }">
          </div>
        </span>
      </NuxtLink>
      <Transition name="slide">
        <NuxtLink class="btn btn-ghost normal-case text-lg text-white btn-active" :to="$route.path"
          v-show="$route.path !== '/'">
          <span class="flex flex-col items-center">
            {{ $route.name }}
            <div class="border-b-2 border-white/70 pb-1 w-[70%] transition-all duration-300 ease-in-out" :class="{
              'w-[70%]': $route.path === $route.path,
              'w-[10%]': $route.path !== $route.path,
            }">
            </div>
          </span>
        </NuxtLink>
      </Transition>
    </div>
    <div class="flex-none">
      <ul class="flex gap-2 px-1 text-white items-center">
        <li class="btn btn-ghost">
          <NavbarDropdown direction="dropdown-up-left" menuGap="36px" buttonText="Contacto">
            <template #list>
              <a to="/blog" class="btn btn-ghost">
                <font-awesome-icon icon="fa-brands fa-linkedin"></font-awesome-icon>
              </a>
              <a to="/blog" class="btn btn-ghost">
                <font-awesome-icon icon="fa-brands fa-github"></font-awesome-icon>
              </a>
              <a to="/blog" class="btn btn-ghost">
                <font-awesome-icon icon="fa-solid fa-envelope"></font-awesome-icon>
              </a>
            </template>
          </NavbarDropdown>
        </li>
        <li class="btn btn-ghost">
          <span class="text-center focus:outline-none flex flex-col gap-1">
            <span>{{ time }}</span>
            <span>{{ date }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
  <slot />
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  animation: slideUp .3s cubic-bezier(.25, .8, .25, 1);

}

.slide-enter,
.slide-leave-to {
  animation: slideDown .3s cubic-bezier(.25, .8, .25, 1);
}

@keyframes slideUp {
  0% {
    opacity: .5;
    transform: translateY(200%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes slideDown {
  0% {

    transform: translateY(0%);
  }

  50% {
    opacity: .5;
  }

  100% {

    transform: translateY(200%);
  }
}
</style>
