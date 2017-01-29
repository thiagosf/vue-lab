<template>
  <div class="table">
    <ui-title icon="apps">Table</ui-title>
    <div class="mdl-responsive-table-box">
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
    </div>
    <hr>
    <div class="mdl-spinner mdl-js-spinner is-active"></div>
    <hr>
    <h2>Lorem ipsum</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deleniti, mollitia, accusantium atque suscipit officiis cupiditate doloremque vitae magni ducimus eaque maxime? Aut dicta culpa eligendi voluptatem quaerat iure nesciunt.</p>
    <div class="mdl-grid mdl-grid-negative">
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-cell--order-2-phone">
        <div class="demo-card-wide mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Welcome 1</h2>
          </div>
          <div class="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Get Started
            </a>
          </div>
          <div class="mdl-card__menu">
            <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i class="material-icons">share</i>
            </button>
          </div>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-cell--order-1-phone">
        <div class="demo-card-wide mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Welcome 2</h2>
          </div>
          <div class="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Get Started
            </a>
          </div>
          <div class="mdl-card__menu">
            <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i class="material-icons">share</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'table'
}
</script>
