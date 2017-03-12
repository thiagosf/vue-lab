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
        <tr v-for="row in records">
          <td v-for="(value, field) in itemsRow(row)" :class="getTdClass()" >{{ getRowValue(field, value) }}</td>
          <td class="td-actions" v-if="actions">
            <span v-for="item in actions" @click="item.handleClick(row)">
              <ui-button :icon="item.icon" type="button" :primary="item.primary" :raised="item.raised" fab colored></ui-button>
            </span>
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
import { uiComponent } from '../Mixins'

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
    breakWord: { type: Boolean, default: true },
    converter: { type: Function }
  },
  computed: {
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
      let output = {}
      for (let i in this.fields) {
        let item = this.fields[i]
        output[item.field] = row[item.field]
      }
      return output
    },
    hasRecords () {
      return this.records.length > 0
    },
    getRowValue (field, value) {
      if (this.converter) {
        return this.converter(field, value)
      }
      return value
    }
  },
  updated () {
    this.$upgradeDom()
  }
}
</script>
