<template>
  <div class="dropdown" :class="direction" ref="dropdown">
    <button class="dropdown-toggle" type="button" @click="toggleDropdown">
      {{ buttonText }}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
        class="bi bi-caret-up-fill transition-all duration-300" width="1em" height="1em" style="margin-left: 5px;" :class="{
          'rotate-180': isOpen,
        }">
        <path d="M10 6.828l-5.5 5.5a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 1 1-1.414 1.414L10 6.828z" />
      </svg>

    </button>
    <transition name="slide">
      <div class="dropdown-menu acrylic shadow-lg rounded-lg" v-show="isOpen" :style="menuStyles">
        <slot name="list"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: "dropdown-down",
      validator: (value) => {
        const variants = ["dropdown-up", "dropdown-down", "dropdown-left", "dropdown-right", "dropdown-up-left", "dropdown-up-right", "dropdown-down-left", "dropdown-down-right"];
        return variants.includes(value);
      },
    },
    buttonText: {
      type: String,
      default: "Dropdown",
    },
    menuGap: {
      type: String,
      default: "0px",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    window.addEventListener("click", this.closeDropdown);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closeDropdown);
  },
  computed: {
    marginDirection() {
      switch (this.direction) {
        case "dropdown-up":
        case "dropdown-up-left":
        case "dropdown-up-right":
          return "margin-bottom";
        case "dropdown-down":
        case "dropdown-down-left":
        case "dropdown-down-right":
          return "margin-top";
        case "dropdown-left":
          return "margin-right";
        case "dropdown-right":
          return "margin-left";
      }
    },

    menuStyles() {
      return {
        [this.marginDirection]: this.menuGap,
      };
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.dropdown-up .dropdown-menu {
  bottom: 100%;
}

.dropdown-down .dropdown-menu {
  top: 100%;
}

.dropdown-left .dropdown-menu {
  right: 0;
  left: auto;
}

.dropdown-right .dropdown-menu {
  left: 0;
  right: auto;
}

.dropdown-up-left .dropdown-menu {
  bottom: 100%;
  right: 0;
  left: auto;
}

.dropdown-up-right .dropdown-menu {
  bottom: 100%;
  left: 0;
  right: auto;
}

.dropdown-down-left .dropdown-menu {
  top: 100%;
  right: 0;
  left: auto;
}

.dropdown-down-right .dropdown-menu {
  top: 100%;
  left: 0;
  right: auto;
}

.dropdown-menu {
  position: absolute;
  z-index: 1;
  min-width: 10rem;
  padding: 1rem;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  text-align: left;
  list-style: none;
  background-clip: padding-box;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%/3, max(20px, 100%/5)), 1fr));
  gap: 0.15rem;
}

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
