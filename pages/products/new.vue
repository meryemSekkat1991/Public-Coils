<template lang="pug">
.new.bg-black
  label.font-bold.text-xl
  .card
  .card-body
    .p-4.border.rounded
      form
        .form-group
          label.form-label Ref Extension
          input.input#ref_ex.form-control(type='text' required='required')
          select.select(dir='auto')
            option(role='combobox' aria-expanded='false' aria-owns='vs2__listbox' aria-label='Search for option')
                span
                  | SF
                input.input(aria-autocomplete='list' aria-labelledby='vs2__combobox' aria-controls='vs2__listbox' type='search' autocomplete='off')
                button(type='button' title='Clear Selected' aria-label='Clear Selected' style='display: none;')
                  svg(xmlns='http://www.w3.org/2000/svg' width='10' height='10')
                    path(d='M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z')
                svg(xmlns='http://www.w3.org/2000/svg' width='14' height='10' role='presentation')
                  path(d='M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z')
                .locading(style='display: none;') Loading...
            ul#vs2__listbox(role='listbox' style='display: none; visibility: hidden;')
          .tooltip
        .flex
          .flext-1.mx-2
            label.form-label(for='code') Ref SF:
            input.input#ref.form-control(type='number')
          .flext-1.mx-2
            label.form-label(for='code') Code:
            input.input#code.form-control(type='text')
          .flext-1.mx-2
            label.form-label(for='code') Grade:
            input.input#grade.form-control(type='text')

          .flext-1.mx-2.has-select
            label.form-label warehouse
            input.input#warehouse.form-control(type='text' required='required')
            select.select(dir='auto' required='required')
              option(role='combobox' aria-expanded='false' aria-owns='vs3__listbox' aria-label='Search for option')
                .vs__selected-options
                  span.vs__selected
                    //
                  input.input(aria-autocomplete='list' aria-labelledby='vs3__combobox' aria-controls='vs3__listbox' type='search' autocomplete='off')
                .vs__actions
                  button(type='button' title='Clear Selected' aria-label='Clear Selected' style='display: none;')
                    svg(xmlns='http://www.w3.org/2000/svg' width='10' height='10')
                      path(d='M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z')
                  svg(xmlns='http://www.w3.org/2000/svg' width='14' height='10' role='presentation')
                    path(d='M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z')
                  .vs__spinner(style='display: none;') Loading...
              ul(role='listbox' style='display: none; visibility: hidden;')

        .flex
          .flext-1.mx-2
            label.form-label(for='code') TH.:
            input.input.form-control(type='text')

          .flext-1.mx-2
            label.form-label(for='code') Width:
            input.input#width.form-control(type='text')

          .flext-1.mx-2
            label.form-label(for='code') SC:
            input.input#sc.form-control(type='number')

          .flext-1.mx-2
            label.form-label(for='code') Weight Net:
            input.input#weight_net.form-control(type='text')

          .flext-1.mx-2
            label.form-label(for='code') Weight Brut:
            input.input#weight_brut.form-control(type='text')

          .flext-1
            label.form-label(for='code') Perte:
            input.input#perte.form-control(type='text')

          .flext-1
            label.form-label(for='code') B800:
            input.input#b_800.form-control(type='text')

          .flext-1.mx-2
            label.form-label(for='code') Info:
            input.input#info.form-control(type='text')

        .col-12.col-lg-5.mx-2
          label.form-label(for='code') Cnt:
          input.input#cnt.form-control(type='text')

        .col-12
          button.mt-4.btn.btn-primary(type='submit') Save

</template>

<script lang="ts">
import {Component,  Vue } from "nuxt-property-decorator";

@Component({
})
export default class New extends Vue {
}
</script>
