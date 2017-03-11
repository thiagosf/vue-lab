<template>
  <div class="mdl-responsive-table-box">
    <table :class="tableCssClasses" v-if="hasRecords()">
      <thead>
        <tr>
          <th v-for="item in fields" :class="getThClass(item)">{{ item.label }}</th>
          <th v-if="actions"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rows in records">
          <td v-for="value in itemsRow(rows)" :class="getTdClass()">{{ value }}</td>
          <td class="td-actions" v-if="actions">
            <ui-button v-for="item in actions" :icon="item.icon" type="button" :primary="item.primary" :raised="item.raised" fab colored @click="item.handleClick"></ui-button>
          </td>
        </tr>
      </tbody>
    </table>
    <ui-spinner center v-if="!hasRecords()"></ui-spinner>
  </div>
</template>

<script>
import UiButton from './UiButton'
import UiSpinner from './UiSpinner'
import uiComponent from '../Mixins/uiComponent'

export default {
  name: 'ui-grid',
  mixins: [uiComponent],
  components: { UiButton, UiSpinner },
  props: {
    records: { type: Array, required: true },
    fields: { type: Array, required: true },
    actions: { type: Array },
    selectable: { type: Boolean, default: true },
    shadow: { type: Boolean, default: true },
    dataTable: { type: Boolean, default: true },
    fluid: { type: Boolean, default: true },
    breakWord: { type: Boolean, default: true }
  },
  computed: {
    content: function () {
      return [
        [
          { value: 1, type: 'number' },
          { value: 'Um titulo' },
          { value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
        ],
        [
          { value: 2, type: 'number' },
          { value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
          { value: '50' }
        ]
      ]
    },
    head: function () {
      return [{
        label: 'ID',
        type: 'number',
        sort: 'desc'
      }, {
        label: 'Title'
      }, {
        label: 'Unit'
      }]
    },
    tableCssClasses () {
      return {
        'mdl-data-table': this.dataTable,
        'mdl-js-data-table': this.dataTable,
        'mdl-data-table--selectable': this.selectable,
        'mdl-shadow--2dp': this.shadow,
        'table-fluid': this.fluid,
        'table-break-word': this.breakWord
      }
    }
  },
  methods: {
    getThClass (item) {
      return this.thClass({
        string: item.type === 'string' || !item.type,
        asc: item.sort === 'asc',
        desc: item.sort === 'desc'
      })
    },
    getTdClass (item = {}) {
      return this.tdClass({
        string: item.type === 'string' || !item.type
      })
    },
    tdClass (item) {
      return {
        'mdl-data-table__cell--non-numeric': item.string
      }
    },
    thClass (item) {
      return {
        'mdl-data-table__cell--non-numeric': item.string,
        'mdl-data-table__header--sorted-ascending': item.asc,
        'mdl-data-table__header--sorted-descending': item.desc
      }
    },
    itemsRow (row) {
      let output = []
      for (let i in this.fields) {
        let field = this.fields[i]
        output.push(row[field.field])
      }
      return output
    },
    hasRecords () {
      return this.records.length > 0
    }
  },
  updated () {
    window.componentHandler.upgradeDom()
  }
}
</script>
