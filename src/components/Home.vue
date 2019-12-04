<template>
    <div>
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
            <!-- QC -->
            <div class="column is-half-tablet is-one-third-desktop">
              <section>
                <b-collapse class="card" aria-id="contentIdForA11y3">
                  <div
                      slot="trigger"
                      slot-scope="props"
                      class="card-header"
                      role="button"
                      aria-controls="contentIdForA11y3">
                      <p class="card-header-title">
                        QC
                      </p>
                      <a class="card-header-icon">
                          <b-icon
                              :icon="props.open ? 'menu-down' : 'menu-up'">
                          </b-icon>
                      </a>
                  </div>
                  <div class="card-content">
                      <div class="content">
                        <router-link :to="{ path: 'lameyer'}">
                          <p class="title is-6">Lameyer</p>
                        </router-link>
                        <router-link :to="{ path: 'lameyer'}">
                          <p class="title is-6">Transformer</p>
                        </router-link>
                        <router-link :to="{ path: 'lameyer'}">
                          <p class="title is-6">Idt</p>
                        </router-link>
                      </div>
                  </div>
                </b-collapse>
              </section>
            </div>
            <!-- Idt -->
            <div class="column is-half-tablet is-one-third-desktop">
              <section>
                <b-collapse class="card" aria-id="contentIdForA11y3">
                  <div
                      slot="trigger"
                      slot-scope="props"
                      class="card-header"
                      role="button"
                      aria-controls="contentIdForA11y3">
                      <p class="card-header-title">
                        QC
                      </p>
                      <a class="card-header-icon">
                          <b-icon
                              :icon="props.open ? 'menu-down' : 'menu-up'">
                          </b-icon>
                      </a>
                  </div>
                  <div class="card-content">
                      <div class="content">
                        <router-link :to="{ path: 'lameyer'}">
                          <p class="title is-6">Lameyer</p>
                        </router-link>
                        <router-link :to="{ path: 'lameyer'}">
                          <p class="title is-6">Transformer</p>
                        </router-link>
                        <router-link :to="{ path: 'lameyer'}">
                          <p class="title is-6">Idt</p>
                        </router-link>
                      </div>
                  </div>
                </b-collapse>
              </section>
            </div>
            <!-- QMR -->
            <div class="column is-half-tablet is-one-third-desktop">
              <section>
                <b-collapse class="card" aria-id="contentIdForA11y3">
                  <div
                      slot="trigger"
                      slot-scope="props"
                      class="card-header"
                      role="button"
                      aria-controls="contentIdForA11y3">
                      <p class="card-header-title">
                        QC
                      </p>
                      <a class="card-header-icon">
                          <b-icon
                              :icon="props.open ? 'menu-down' : 'menu-up'">
                          </b-icon>
                      </a>
                  </div>
                  <div class="card-content">
                      <div class="content">
                        <router-link :to="{ path: 'lameyer'}">
                          <p class="title is-6">Lameyer</p>
                        </router-link>
                        <router-link :to="{ path: 'lameyer'}">
                          <p class="title is-6">Transformer</p>
                        </router-link>
                        <router-link :to="{ path: 'lameyer'}">
                          <p class="title is-6">Idt</p>
                        </router-link>
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
export default {
  data () {
    return {
      labelPosition: 'on-border'
    }
  },
  components: {
  }
}
</script>

<style>
</style>
