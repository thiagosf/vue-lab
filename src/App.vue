<template>
  <div id="app">
    <main-layout>
      <main-header></main-header>
      <main-nav></main-nav>
      <main-content>
        <register></register>
        <hr>
        <div class="mdl-spinner mdl-js-spinner is-active"></div>
        <hr>
        <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
          <thead>
            <tr>
              <th class="mdl-data-table__cell--non-numeric">Material</th>
              <th>Quantity</th>
              <th>Unit price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
              <td>25</td>
              <td>$2.90</td>
            </tr>
            <tr>
              <td class="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
              <td>50</td>
              <td>$1.25</td>
            </tr>
            <tr>
              <td class="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
              <td class="hello">10</td>
              <td>$2.35</td>
            </tr>
          </tbody>
        </table>
      </main-content>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from './components/MDL/MainLayout'
import MainHeader from './components/MDL/MainHeader'
import MainNav from './components/MDL/MainNav'
import MainContent from './components/MDL/MainContent'
import Register from './components/Register'

export default {
  name: 'app',
  components: {
    MainLayout,
    MainHeader,
    MainNav,
    MainContent,
    Register
  }
}
</script>

<style lang="sass">
  .hello
    color: blue
</style>

<style>
#app,
#app button,
#app input,
#app textarea,
#app select,
#app .mdl-layout__title,
#app .mdl-layout-title,
#app h1, h2 {
  font-family: "Arima Madurai", Helvetica, Arial, sans-serif;
}
#app .main-layout-transparent .mdl-layout__header {
  background: #333;
}
#app .page-content {
  padding: 20px;
  max-width: 720px;
  margin: 0 auto;
}
#app .mdl-layout-title {
  font-weight: bold;
}
</style>
