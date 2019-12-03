<template>
    <div>
        <navigation></navigation>
        <!-- <h5 class="center-align">Home</h5> -->
      <div class="container">
        <div class="column is-3">
          <section>
            <b-field label="Subject" :label-position="labelPosition">
              <b-select placeholder="Select a subject">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </b-select>
            </b-field>
          </section>
        </div>
      </div>
       <div class="container">
        <div class="column">
          <div class="columns is-multiline">
            <div :key="kn" v-for="(i, kn) in is" class="column is-half-tablet is-one-third-desktop">
          <section>

        <b-collapse class="card" aria-id="contentIdForA11y3">
            <div
                slot="trigger"
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="contentIdForA11y3">
                <p class="card-header-title">
                    Component
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    <a>#buefy</a>.
                </div>
            </div>
        </b-collapse>

    </section>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import navigation from '@/components/NavBar.vue'

export default {
  data () {
    return {
      labelPosition: 'on-border',
      is: 4
    }
  },
  components: {
    navigation
  }
}
</script>

<style>
</style>
