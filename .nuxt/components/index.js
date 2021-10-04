export { default as Breadcrumb } from '../../components/Breadcrumb.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as LanguageSwitcher } from '../../components/LanguageSwitcher.vue'
export { default as MobileMenu } from '../../components/MobileMenu.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as Placeholder } from '../../components/Placeholder.vue'
export { default as WarehousesCard } from '../../components/WarehousesCard.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
