import { configure } from '@storybook/vue'

import Vue from 'vue'

function loadStories () {
  require('../srcbook/sample/index.js')
}

configure(loadStories, module)