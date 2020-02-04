import { storiesOf } from '@storybook/vue'

import AppHeader from '../../assets/js/components/AppHeader.vue'

storiesOf('AppHeader', module)
  .add('simple', () => ({
    components: { AppHeader },
    template: '<AppHeader/>'
  }))
