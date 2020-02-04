import { storiesOf } from '@storybook/vue'

import AppHeader from '../../assets/js/components/AppHeader.vue'
import AppFooter from '../../assets/js/components/AppFooter.vue'

storiesOf('App', module)
  .add('simple', () => ({
    components: { AppHeader },
    template: '<AppHeader />'
  }))
  .add('simple2', () => ({
    components: { AppHeader },
    template: '<AppHeader />'
  }))

storiesOf('Appaaa', module)
  .add('a', () => ({
    components: { AppFooter },
    template: '<AppFooter />'
  }))
