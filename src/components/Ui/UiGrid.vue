<template>
  <div class="mdl-responsive-table-box">
    <div v-if="hasRecords()">
      <table :class="tableCssClasses">
        <thead>
          <tr>
            <th v-if="selectable">
              <ui-checkbox @change.native="selectAll"></ui-checkbox>
            </th>
            <th v-for="item in fields" :class="getThClass(item)">{{ item.label }}</th>
            <th v-if="actions"></th>
          </tr>
        </thead>
        <tbody>
          <tr is="ui-grid-row" ref="row" v-for="(row, index) in records" :data-id="row.id">
            <td>
              <ui-checkbox ref="checkbox-item" @change.native="updateSelecteds"></ui-checkbox>
            </td>
            <td v-for="(value, field) in itemsRow(row)" :class="getTdClass()">{{ getRowValue(field, value) }}</td>
            <td class="td-actions" v-if="actions">
              <ui-button v-for="item in actions" @click.native="item.handleClick(row)" :icon="item.icon" type="button" :primary="item.primary" :raised="item.raised" fab colored></ui-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="selectable">
        <hr>
        <ui-button primary raised colored @click.native="removeSelecteds" :disabled="!hasRowSelected">{{selectedsLabel}}</ui-button>
      </div>
    </div>
    <ui-spinner center v-if="!hasRecords()"></ui-spinner>
    <pagination v-if="paging.pages" :for="name" :per-page="paging.limit" :records="paging.total" :chunk="10" count-text="Mostrando {from} a {to} de {count} registros|{count} registros|Um registro"></pagination>
  </div>
</template>

<script>
import UiButton from './UiButton'
import UiSpinner from './UiSpinner'
import UiGridRow from './UiGridRow'
import UiCheckbox from './UiCheckbox'
import { uiComponent } from '../Mixins'

export default {
  name: 'ui-grid',
  mixins: [uiComponent],
  components: { UiButton, UiSpinner, UiGridRow, UiCheckbox },
  props: {
    name: { type: String, required: true },
    records: { type: Array, required: true },
    fields: { type: Array, required: true },
    actions: { type: Array },
    selectable: { type: Boolean, default: true },
    shadow: { type: Boolean, default: true },
    dataTable: { type: Boolean, default: true },
    fluid: { type: Boolean, default: true },
    breakWord: { type: Boolean, default: true },
    converter: Function,
    selectedsLabel: { type: String, default: 'Remover selecionados' },
    paging: { type: Object, default: {} },
    chunk: { type: Number, default: 10 }
  },
  computed: {
    tableCssClasses () {
      return {
        'mdl-data-table': this.dataTable,
        'mdl-js-data-table': this.dataTable,
        'mdl-shadow--2dp': this.shadow,
        'table-fluid': this.fluid,
        'table-break-word': this.breakWord
      }
    },
    hasRowSelected () {
      return this.selecteds.length > 0
    }
  },
  data () {
    return {
      selecteds: []
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
    },
    removeSelecteds () {
      this.$emit('selectedsAction', this.selecteds)
    },
    selectAll (e) {
      if (e.target.checked) {
        this.selecteds = this.$refs.row.map((item) => {
          item.$el.querySelector('input[type=checkbox]').checked = true
          return parseInt(item.$el.dataset.id)
        })
      } else {
        this.selecteds = []
      }
    },
    updateSelecteds (e) {
      this.selecteds = this.$refs.row.filter((item) => {
        return item.$el.querySelector('input[type=checkbox]').checked
      }).map((item) => {
        return parseInt(item.$el.dataset.id)
      })
    }
  },
  updated () {
    this.$upgradeDom()
  }
}
</script>
